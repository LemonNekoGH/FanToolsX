package com.arkfanmade.fantoolsxmobile.utils

import org.json.JSONException
import org.json.JSONObject

class FileNotSupportException(cause: Throwable) : Exception("Content not support", cause)

fun validate(maybeJson: String) {
    try {
        val jsonObj = JSONObject(maybeJson)
        jsonObj.getJSONArray("BasicdataText")
    } catch (e: JSONException) {
        throw FileNotSupportException(e)
    }
}