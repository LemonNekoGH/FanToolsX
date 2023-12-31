package com.arkfanmade.fantoolsxmobile

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.util.Base64
import android.util.JsonReader
import android.util.Log
import android.webkit.JavascriptInterface
import android.webkit.MimeTypeMap
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.widget.Toast
import androidx.activity.result.ActivityResult
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.WindowCompat
import androidx.datastore.core.DataStore
import androidx.datastore.preferences.core.Preferences
import androidx.datastore.preferences.core.edit
import androidx.datastore.preferences.core.stringPreferencesKey
import androidx.datastore.preferences.preferencesDataStore
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewClientCompat
import com.arkfanmade.fantoolsxmobile.databinding.ActivityMainBinding
import com.arkfanmade.fantoolsxmobile.utils.FileNotSupportException
import com.arkfanmade.fantoolsxmobile.utils.validate
import io.sentry.Sentry
import io.sentry.SentryEvent
import io.sentry.SentryLevel
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.map
import org.json.JSONException
import org.json.JSONObject

// 解决一个文件中包含多个 dataStore 的问题
internal val Context.dataStore by preferencesDataStore("cache")

class MainActivity : AppCompatActivity() {
    // create custom client
    private class LocalContentWebViewClient(val loader: WebViewAssetLoader) :
        WebViewClientCompat() {
        override fun shouldInterceptRequest(
            view: WebView?,
            request: WebResourceRequest?
        ): WebResourceResponse? {
            if (view == null || request == null) {
                Sentry.captureMessage(
                    "LocalContentWebViewClient.shouldInterceptRequest: view or request is null",
                    SentryLevel.ERROR
                )
                return null
            }
            return loader.shouldInterceptRequest(request.url)
        }
    }

    // js interface
    class JSInterface(
        private val loadFile: ActivityResultLauncher<Intent>,
        private val saveFile: ActivityResultLauncher<Intent>,
        private val setDataType: (String) -> Unit,
        private val setDataToSave: (String) -> Unit,
        private val setImageToSave: (ByteArray) -> Unit,
        private val onFileContentNotSupport: () -> Unit,
        private val dataStore: DataStore<Preferences>,
        private val ctx: Context,
        private val intent: Intent,
    ) {
        private val cacheKey = stringPreferencesKey("content")
        private val logLevel =
            arrayOf(SentryLevel.DEBUG, SentryLevel.INFO, SentryLevel.WARNING, SentryLevel.ERROR)

        @JavascriptInterface
        fun loadFile(accept: String) {
            Sentry.captureMessage("request to load file, accept: $accept", SentryLevel.INFO)
            loadFile.launch(Intent(
                Intent.ACTION_OPEN_DOCUMENT
            ).apply {
                // set accept value
                val t = if (accept == "image/*") {
                    accept
                } else {
                    "*/*"
                }
                type = t
                setDataType(t)

                addCategory(Intent.CATEGORY_OPENABLE)
            })
        }

        @JavascriptInterface
        fun saveFile(data: String) {
            setDataToSave(data)
            Sentry.captureMessage("request to save file", SentryLevel.INFO)
            saveFile.launch(Intent(Intent.ACTION_CREATE_DOCUMENT).apply {
                addCategory(Intent.CATEGORY_OPENABLE)
                type = "*/*"
                putExtra(Intent.EXTRA_TITLE, "operator.akf")
            })
        }

        @JavascriptInterface
        fun saveImage(data: String) {
            setImageToSave(Base64.decode(data, Base64.NO_WRAP))
            Sentry.captureMessage("request to save file", SentryLevel.INFO)
            saveFile.launch(Intent(Intent.ACTION_CREATE_DOCUMENT).apply {
                addCategory(Intent.CATEGORY_OPENABLE)
                type = "image/png"
                putExtra(Intent.EXTRA_TITLE, "screenshot.png")
            })
        }

        @JavascriptInterface
        fun log(text: String, level: Int) {
            Sentry.captureMessage("log from web content: $text", logLevel[level])
        }

        @JavascriptInterface
        fun writeCache(data: String) = runBlocking {
            Sentry.captureMessage(
                "writing cache, data size: ${data.length / 1024 / 1024}MB",
                SentryLevel.DEBUG
            )
            launch {
                dataStore.edit {
                    it[cacheKey] = data
                }
            }.join()
        }

        @JavascriptInterface
        fun readCache(): String {
            var data = ""
            runBlocking {
                val dataFlow = dataStore.data.map {
                    it[cacheKey] ?: ""
                }
                data = dataFlow.first()
            }

            Sentry.captureMessage(
                "reading cache, data size: ${data.length / 1024 / 1024}MB",
                SentryLevel.DEBUG
            )
            return data
        }

        @JavascriptInterface
        fun openInBrowser(url: String) {
            Sentry.captureMessage("request to open url: $url", SentryLevel.DEBUG)
            ctx.startActivity(Intent(Intent.ACTION_VIEW, Uri.parse(url)))
        }

        @JavascriptInterface
        fun onWebContentLoad(): String {
            if (intent.action == Intent.ACTION_MAIN) {
                Log.i("onWebContentLoad", "Application started from launcher, nothing can be read")
                return ""
            }
            // load file from file browser
            var data = ""
            runBlocking {
                launch {
                    val dataFlow = dataStore.data.map {
                        it[readFromFileKey] ?: ""
                    }
                    data = dataFlow.first()
                    dataStore.edit {
                        // clear store after data read
                        it[readFromFileKey] = ""
                    }
                }
            }

            if (data == "") {
                Log.w(
                    "onWebContentLoad",
                    "Application started, but data is empty, launcher: ${intent.`package`}"
                )
                Sentry.captureMessage(
                    "Application started, but data is empty, launcher: ${intent.`package`}",
                    SentryLevel.WARNING
                )
                Toast.makeText(ctx, "意外的被其它应用启动了", Toast.LENGTH_SHORT).show()
                onFileContentNotSupport()
                return ""
            }

            Log.i("onWebContentLoad", "File load succeeded, launcher: ${intent.`package`}")
            Toast.makeText(ctx, "文件加载成功", Toast.LENGTH_SHORT).show()
            return data
        }
    }

    private lateinit var binding: ActivityMainBinding
    private var dataType = "*/*"
    private var dataToSave = ""
    private var imageToSave: ByteArray? = null

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        WindowCompat.setDecorFitsSystemWindows(window, false)

        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        // create loader
        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()
        binding.webView.webViewClient = LocalContentWebViewClient(assetLoader)
        // define load and save requester
        val loadFile = registerForActivityResult(
            ActivityResultContracts.StartActivityForResult(),
            this::onLoadFileResult
        )
        val saveFile = registerForActivityResult(
            ActivityResultContracts.StartActivityForResult(),
            this::onSaveFileResult
        )
        // load
        binding.webView.settings.javaScriptEnabled = true
        binding.webView.addJavascriptInterface(
            JSInterface(
                loadFile,
                saveFile,
                { dataType = it },
                { dataToSave = it },
                { imageToSave = it },
                { finishAffinity() },
                dataStore,
                this,
                intent
            ), "Android"
        )
        binding.webView.loadUrl("https://appassets.androidplatform.net/assets/index.html")
    }

    /**
     * there will be a function added in window.Android by App.vue
     */
    private fun callFileLoadedInJS(data: String) {
        val trimmedData = data.trim() // trim for encoded base64
        binding.webView.evaluateJavascript("Android.fileLoadedFromAndroid(`$trimmedData`)") {}
    }

    private fun onLoadFileResult(result: ActivityResult) {
        if (result.resultCode != Activity.RESULT_OK) {
            Toast.makeText(this, "文件加载失败", Toast.LENGTH_SHORT).show()
            Sentry.captureMessage(
                "file load failed: activity result code is not ok",
                SentryLevel.INFO
            )
            return
        }
        val (ok, dataUri) = requireDataUriNotNull(result.data)
        if (!ok) {
            Toast.makeText(this, "文件加载失败", Toast.LENGTH_SHORT).show()
            Sentry.captureMessage(
                "file load failed: activity result data is null",
                SentryLevel.INFO
            )
            return
        }
        // read uri
        val input = contentResolver.openInputStream(dataUri!!)
        if (input == null) {
            Sentry.captureMessage("file load failed: input stream is null", SentryLevel.ERROR)
            Toast.makeText(this, "文件加载失败", Toast.LENGTH_SHORT).show()
            return
        }
        val bytes = input.readBytes()
        input.close()

        var readResult = bytes
        // check data type
        if (dataType == "image/*") {
            readResult = Base64.encode(bytes, Base64.NO_WRAP)
        }
        val resultStr = readResult.toString(Charsets.UTF_8)
        // send file content
        Sentry.captureMessage(if (dataType == "image/*") "image loaded" else "file loaded") {
            it.setExtra("Loaded file content", resultStr)
        }
        Toast.makeText(this, "文件加载成功", Toast.LENGTH_SHORT).show()
        callFileLoadedInJS(resultStr)
    }

    private fun requireDataUriNotNull(data: Intent?): Pair<Boolean, Uri?> {
        if (data == null) {
            Log.e("requireDataUriNotNull", "data is null")
            return Pair(false, null)
        }
        val dataUri = data.data
        if (dataUri == null) {
            Log.e("requireDataUriNotNull", "data uri is null")
            return Pair(false, null)
        }

        return Pair(true, dataUri)
    }

    private fun onSaveFileResult(result: ActivityResult) {
        if (result.resultCode != Activity.RESULT_OK) {
            Sentry.captureMessage("file save failed: activity result is not ok", SentryLevel.INFO)
            Toast.makeText(this, "文件保存失败", Toast.LENGTH_SHORT).show()
            return
        }

        val (ok, dataUri) = requireDataUriNotNull(result.data)
        if (!ok) {
            Sentry.captureMessage(
                "file save failed: activity result data is null",
                SentryLevel.INFO
            )
            Toast.makeText(this, "文件保存失败", Toast.LENGTH_SHORT).show()
            return
        }

        // read uri
        val output = contentResolver.openOutputStream(dataUri!!)
        if (output == null) {
            Sentry.captureMessage("file save failed: input stream is null", SentryLevel.ERROR)
            Toast.makeText(this, "文件保存失败", Toast.LENGTH_SHORT).show()
            return
        }

        if (imageToSave != null) {
            output.write(imageToSave) // write image
        } else {
            output.write(dataToSave.toByteArray(Charsets.UTF_8)) // write data
        }
        output.close()

        Toast.makeText(this, "文件保存成功", Toast.LENGTH_SHORT).show()
    }
}