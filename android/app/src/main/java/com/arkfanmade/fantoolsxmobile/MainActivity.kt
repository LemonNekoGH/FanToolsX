package com.arkfanmade.fantoolsxmobile

import android.annotation.SuppressLint
import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.webkit.JavascriptInterface
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.widget.Toast
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
    class JSInterface(private val ctx: Context) {
        @JavascriptInterface
        fun loadFile(accept: String) {
            Log.d("JSInterface.saveFile", "request to load file, accept: $accept")
            ctx.startActivity(Intent(Intent.ACTION_OPEN_DOCUMENT))
        }

        @JavascriptInterface
        fun saveFile(data: String) {
            Toast.makeText(ctx, "saveFileCalled", Toast.LENGTH_SHORT).show()
            Log.d("JSInterface.saveFile", "data: $data")
        }
    }

    private lateinit var binding: ActivityMainBinding

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
        // load
        binding.webView.settings.javaScriptEnabled = true
        binding.webView.addJavascriptInterface(JSInterface(this), "Android")
        binding.webView.loadUrl("https://appassets.androidplatform.net/assets/index.html")
    }
}