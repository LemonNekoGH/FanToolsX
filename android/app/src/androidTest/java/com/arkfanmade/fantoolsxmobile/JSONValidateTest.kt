package com.arkfanmade.fantoolsxmobile

import org.junit.Test
import org.junit.runner.RunWith
import org.junit.runners.JUnit4
import com.arkfanmade.fantoolsxmobile.utils.validate
import com.arkfanmade.fantoolsxmobile.utils.FileNotSupportException
import org.junit.Assert

@RunWith(JUnit4::class)
class JSONValidateTest {
    @Test
    fun fileIsNotJson() {
        Assert.assertThrows(FileNotSupportException::class.java) {
            validate("not a json")
        }
    }

    @Test
    fun jsonDoesNotHasRequiredKey() {
        Assert.assertThrows(FileNotSupportException::class.java) {
            validate("{}")
        }
    }

    @Test
    fun ok() {
        // 只判断有没有这个字段，其它的边缘情况不管了
        validate("""{"BasicdataText":[]}""")
    }
}