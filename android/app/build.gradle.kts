import java.util.Calendar
import java.util.Locale
import java.util.Properties
import java.text.SimpleDateFormat

plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

// 根据日期获取版本号，日期位置是上海，这样生成版本号的方法可以一直用 24 年
// 版本号结构 <小时数><分钟数><秒数>
fun getVersionCode(): String {
    val from = 1688644554164 // 开始时间，请勿修改
    val calendar = Calendar.getInstance(Locale.CHINA) // 获取到中国标准时间
    val currentTime = calendar.time
    val currentMillis = currentTime.time
    val hours = (currentMillis - from) / 3600000 // 获取到小时数
    val data = SimpleDateFormat("mmss")
    return hours.toString() + data.format(currentTime)
}

fun getVersionName(): String {
    val props = Properties().apply {
        load(rootProject.file("version.properties").reader())
    }
    return props.getProperty("appVersion")
}

android {
    namespace = "com.arkfanmade.fantoolsxmobile"
    compileSdk = 33

    defaultConfig {
        applicationId = "com.arkfanmade.fantoolsxmobile"
        minSdk = 24
        targetSdk = 33
        versionCode = getVersionCode().toInt()
        versionName = getVersionName()

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    signingConfigs {
        create("release") {
            val props = Properties().apply {
                load(rootProject.file("keystore.properties").reader())
            }

            storeFile = file(props.getProperty("storeFile"))
            storePassword = props.getProperty("storePassword")
            keyPassword = props.getProperty("keyPassword")
            keyAlias = props.getProperty("keyAlias")

            enableV1Signing = true
            enableV2Signing = true
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = true
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
            signingConfig = signingConfigs.getByName("release")
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }
    kotlinOptions {
        jvmTarget = "1.8"
    }
    buildFeatures {
        viewBinding = true
    }
}

dependencies {
    implementation("androidx.core:core-ktx:1.10.1")
    implementation("androidx.appcompat:appcompat:1.6.1")
    implementation("com.google.android.material:material:1.9.0")
    implementation("androidx.webkit:webkit:1.7.0")
    implementation("androidx.datastore:datastore-preferences:1.0.0")
    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test.ext:junit:1.1.5")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.5.1")
}