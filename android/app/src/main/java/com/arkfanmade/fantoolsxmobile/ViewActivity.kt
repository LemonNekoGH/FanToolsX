package com.arkfanmade.fantoolsxmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.datastore.preferences.core.edit
import androidx.datastore.preferences.core.stringPreferencesKey
import com.arkfanmade.fantoolsxmobile.utils.FileNotSupportException
import com.arkfanmade.fantoolsxmobile.utils.validate
import io.sentry.Sentry
import io.sentry.SentryLevel
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking

internal val readFromFileKey = stringPreferencesKey("readFromFile")

class ViewActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        if (intent.action != Intent.ACTION_VIEW) {
            Sentry.captureMessage("Started by another app, but action is not true", SentryLevel.WARNING)
            Log.d("ViewActivity.onCreate", "Started by another app, but action is not true")
            Toast.makeText(this, "非法操作", Toast.LENGTH_SHORT).show()
            finishAffinity()
            return
        }

        val uri = intent.data
        if (uri == null) {
            Sentry.captureMessage(
                "Application started by another app, but uri is null",
                SentryLevel.DEBUG
            )
            Log.d("onCreate", "Application started by another app, but uri is null")
            Toast.makeText(this, "文件路径获取失败", Toast.LENGTH_SHORT).show()
            finishAffinity()
            return
        }

        Sentry.captureMessage("Application started by another app, uri $uri", SentryLevel.DEBUG)
        Log.d("onCreate", "Application started by another app, uri $uri")
        // read uri
        val input = contentResolver.openInputStream(uri)
        if (input == null) {
            Sentry.captureMessage(
                "Activity started by another app, but file load failed: input stream is null",
                SentryLevel.ERROR
            )
            Log.e("onCreate", "Activity started by another app, but file load failed: input stream is null")
            Toast.makeText(this, "文件读取失败", Toast.LENGTH_SHORT).show()
            finishAffinity()
            return
        }
        val bytes = input.readBytes()
        input.close()


        val resultStr = bytes.toString(Charsets.UTF_8)
        try {
            validate(resultStr)
        } catch (e: FileNotSupportException) {
            Sentry.captureMessage("Application started by another app, but content is not support", SentryLevel.DEBUG)
            Log.d("onCreate", "Application started by another app, but content is not support")
            Toast.makeText(this, "不支持的文件类型", Toast.LENGTH_SHORT).show()
            finishAffinity()
        }

        runBlocking {
            launch {
                dataStore.edit {
                    it[readFromFileKey] = resultStr
                }
            }.join()
        }

        startActivity(Intent(this, MainActivity::class.java))
        finishAffinity()
    }
}