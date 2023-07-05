package com.arkfanmade.fantoolsxmobile

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.util.Base64
import android.util.Log
import android.webkit.JavascriptInterface
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import androidx.activity.result.ActivityResult
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.WindowCompat
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewClientCompat
import com.arkfanmade.fantoolsxmobile.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    // create custom client
    private class LocalContentWebViewClient(val loader: WebViewAssetLoader) : WebViewClientCompat() {
        override fun shouldInterceptRequest(
            view: WebView?,
            request: WebResourceRequest?
        ): WebResourceResponse? {
            if (view == null || request == null) {
                Log.e("LocalContentWebViewClient.shouldInterceptRequest", "view or request is null")
                return null
            }
            Log.d("LocalContentWebViewClient.shouldInterceptRequest", "invoking asset loader")
            return loader.shouldInterceptRequest(request.url)
        }
    }

    // js interface
    class JSInterface(
        private val loadFile: ActivityResultLauncher<Intent>,
        private val setDataType: (String) -> Unit
    ) {
        @JavascriptInterface
        fun loadFile(accept: String) {
            Log.d("JSInterface.loadFile", "request to load file, accept: $accept")
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
            Log.d("JSInterface.saveFile", "data: $data")
        }

        @JavascriptInterface
        fun log(text: String) {
            Log.d("JSInterface.log", text)
        }
    }

    private lateinit var binding: ActivityMainBinding
    private var dataType = "*/*"

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
        // define load requester
        val loadFile = registerForActivityResult(ActivityResultContracts.StartActivityForResult(), this::onLoadFileResult)
        // load
        binding.webView.settings.javaScriptEnabled = true
        binding.webView.addJavascriptInterface(JSInterface(loadFile) { dataType = it }, "Android")
        binding.webView.loadUrl("https://appassets.androidplatform.net/assets/index.html")
    }

    /**
     * there will be a function added in window.Android by App.vue
     */
    private fun callFileLoadedInJS(data: String) {
        val trimmedData = data.trim() // trim for encoded base64
        binding.webView.evaluateJavascript("Android.fileLoadedFromAndroid(`$trimmedData`)"){}
    }

    private fun onLoadFileResult(result: ActivityResult) {
        if (result.resultCode != Activity.RESULT_OK) {
            callFileLoadedInJS("failed")
            return
        }
        val data = result.data
        if (data == null) {
            Log.e("onLoadFileResult", "data is null")
            callFileLoadedInJS("failed")
            return
        }
        val dataUri = data.data
        if (dataUri == null) {
            Log.e("onLoadFileResult", "data uri is null")
            callFileLoadedInJS("failed")
            return
        }
        // read uri
        val input = contentResolver.openInputStream(dataUri)
        if (input == null) {
            Log.e("onLoadFileResult", "input stream is null")
            callFileLoadedInJS("failed")
            return
        }
        val bytes = input.readBytes()
        input.close()

        var readResult = bytes
        // check data type
        if (dataType == "image/*") {
            readResult = Base64.encode(bytes, Base64.DEFAULT)
        }
        val resultStr = readResult.toString(Charsets.UTF_8)
        callFileLoadedInJS(resultStr)
    }
}