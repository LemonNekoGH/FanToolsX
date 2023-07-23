<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import dayjs from 'dayjs'
import { VApp, VAppBar, VBtn, VCard, VCardActions, VCardItem, VCardText, VCardTitle, VDialog, VLayout, VMain, VSnackbar, VSpacer, VThemeProvider, VToolbar, VToolbarTitle, VTooltip } from 'vuetify/components'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import { useIntervalFn } from '@vueuse/core'
import * as localforage from 'localforage'
import NavMenu from './components/menu.vue'

import { loadFile, saveFile } from './utils/file'
import { useHelper, useState } from './store'
import { isOnAndroid, isOnElectron } from './utils/platform'
import OperatorPreview from './components/operator-preview.vue'
import { logger } from './utils/logger'
import { checkUpdates } from './utils/update-checker'

const state = useState()
const helper = useHelper()
const lastCacheTime = ref(Date.now())
const lastCacheTimeStr = computed(() => dayjs(lastCacheTime.value).format('YYYY-MM-DD HH:mm:ss'))
const display = useDisplay()
const showNav = ref(!display.mobile.value)
const showOperatorPreview = ref(false)

const dialogModel = ref<{
  type: 'reset' | 'load' | ''
  show: boolean
}>({
  type: '',
  show: false,
})

function showResetAlert() {
  dialogModel.value = {
    type: 'reset',
    show: true,
  }
}

function showLoadAlert() {
  dialogModel.value = {
    type: 'load',
    show: true,
  }
}

function closeAlert() {
  dialogModel.value = {
    type: '',
    show: false,
  }
}

type State = typeof state.state

async function writeCache(data: string) {
  if (isOnAndroid()) {
    window.Android.writeCache(data)
    return
  }

  await localforage.setItem('cache', data)
}

async function save(cache = false) {
  const stateRaw = JSON.parse(JSON.stringify(state.state)) as State
  if (cache) {
    const data = JSON.stringify(stateRaw)
    await writeCache(data)
    lastCacheTime.value = Date.now()
    return
  }

  // 移除多余的图片数据
  stateRaw.AbilityImageForWeb = ''
  stateRaw.BasicDataImgForWeb = ''
  stateRaw.ProfLogoForWeb = ''
  stateRaw.ProfAvatarForWeb = ''
  stateRaw.StoryImgForWeb = ''
  stateRaw.StoryImg2ForWeb = ''
  stateRaw.Skill1PicB64ForWeb = ''
  stateRaw.Skill2PicB64ForWeb = ''
  stateRaw.Skill3PicB64ForWeb = ''
  stateRaw.Mod1IconForWeb = ''
  stateRaw.Mod1ImgForWeb = ''
  stateRaw.Mod2IconForWeb = ''
  stateRaw.Mod2ImgForWeb = ''

  const data = JSON.stringify(stateRaw)
  if (isOnAndroid()) {
    window.Android.saveFile(data)
    return
  }

  const blob = new Blob([data], { type: 'application/octet-stream' })
  const fileName = 'operator.akf'
  saveFile(blob, fileName)
}

async function load() {
  const data = await loadFile('*.akf,*.json', 'entire')
  fileLoaded(data)
  // 关闭警告框
  closeAlert()
}

function fileLoadedFromAndroid(data: string) {
  if (window.Android.loadingKey === '')
    return
  if (window.Android.loadingKey === 'entire') {
    fileLoaded(data)
    return
  }
  state.state[window.Android.loadingKey] = `data:image/*;base64,${data}`
  switch (window.Android.loadingKey) {
    case 'AbilityImageForWeb':
      state.state.AbilityData[7] = data
      break
    case 'BasicDataImgForWeb':
      state.state.BasicdataText[0] = data
      break
    case 'ProfAvatarForWeb':
      state.state.ProfDat[1] = data
      break
    case 'ProfLogoForWeb':
      state.state.ProfDat[0] = data
      break
    case 'StoryImgForWeb':
      state.state.Story[0] = data
      break
    case 'StoryImg2ForWeb':
      state.state.Story[1] = data
      break
    case 'Skill1PicB64ForWeb':
      state.state.Skill1PicB64 = data
      break
    case 'Skill2PicB64ForWeb':
      state.state.Skill2PicB64 = data
      break
    case 'Skill3PicB64ForWeb':
      state.state.Skill3PicB64 = data
      break
    case 'Mod1IconForWeb':
      state.state.Mod1[0] = data
      break
    case 'Mod1ImgForWeb':
      state.state.Mod1[1] = data
      break
    case 'Mod2IconForWeb':
      state.state.Mod2[0] = data
      break
    case 'Mod2ImgForWeb':
      state.state.Mod2[1] = data
      break
  }

  window.Android.loadingKey = ''
}

// 暴露此函数到全局变量，以便 Android 调用
if (isOnAndroid())
  window.Android.fileLoadedFromAndroid = fileLoadedFromAndroid

function fileLoaded(data: string) {
  try {
    const parsedData = JSON.parse(data) as State
    state.state = parsedData
    // Unity 中没有 Data URL, 导入时需要为图片加上前缀
    state.state.AbilityImageForWeb = `data:image/*;base64,${parsedData.AbilityData[7]}`
    state.state.BasicDataImgForWeb = `data:image/*;base64,${parsedData.BasicdataText[0]}`
    state.state.ProfLogoForWeb = `data:image/*;base64,${parsedData.ProfDat[0]}`
    state.state.ProfAvatarForWeb = `data:image/*;base64,${parsedData.ProfDat[1]}`
    state.state.StoryImgForWeb = `data:image/*;base64,${parsedData.Story[0]}`
    state.state.StoryImg2ForWeb = `data:image/*;base64,${parsedData.Story[1]}`
    state.state.Skill1PicB64ForWeb = `data:image/*;base64,${parsedData.Skill1PicB64}`
    state.state.Skill2PicB64ForWeb = `data:image/*;base64,${parsedData.Skill2PicB64}`
    state.state.Skill3PicB64ForWeb = `data:image/*;base64,${parsedData.Skill3PicB64}`
    state.state.Mod1IconForWeb = `data:image/*;base64,${parsedData.Mod1[0]}`
    state.state.Mod1ImgForWeb = `data:image/*;base64,${parsedData.Mod1[1]}`
    state.state.Mod2IconForWeb = `data:image/*;base64,${parsedData.Mod2[0]}`
    state.state.Mod2ImgForWeb = `data:image/*;base64,${parsedData.Mod2[1]}`
  }
  catch (e) {
    logger.error(`error in fileLoaded: ${(e as Error).message}, at App.vue`)
  }

  // 关闭警告框
  closeAlert()
}

function reset() {
  state.reset()
  closeAlert()
}

async function readCache(): Promise<string> {
  if (isOnAndroid())
    return window.Android.readCache()

  const cache = await localforage.getItem<string>('cache')
  return cache || ''
}

const versionToUpdate = ref('')
const versionToUpdateUrl = ref('')

async function tryCheckUpdate() {
  if (!isOnAndroid() && !isOnElectron() && !window.VERSION)
    return

  try {
    const result = await checkUpdates()
    if (!result)
      return

    versionToUpdate.value = result[0]
    versionToUpdateUrl.value = result[1]
  }
  catch (e) {
    helper.showSnackbar('检查更新时出错')
    logger.error(`failed to check update: ${(e as Error).message}`)
  }
}

async function goUpdatePage(url: string) {
  if (isOnElectron()) {
    window.ElectronAPI.openInBrowser(url)
    return
  }
  if (isOnAndroid())
    window.Android.openInBrowser(url)
}

// 每 5 秒缓存一次到 localStorage
useIntervalFn(() => save(true), 5000)

onMounted(async () => {
  const cached = await readCache()
  // 缓存
  if (cached)
    state.state = JSON.parse(cached) as State
  // 检查更新
  tryCheckUpdate()
  // 告诉安卓那边自己加载好了
  if (isOnAndroid()) {
    const result = window.Android.onWebContentLoad()
    if (result)
      fileLoaded(result)
  }
})
</script>

<template>
  <VThemeProvider v-if="!showOperatorPreview" theme="default">
    <VApp full-height>
      <VLayout>
        <VAppBar class="w-full" elevation="0">
          <VToolbar color="primary">
            <VBtn v-if="display.mobile.value" icon="mdi-menu" @click="showNav = !showNav" />
            <div class="flex justify-center items-center ml-4">
              <img src="./assets/img/logo.png" width="159" height="49" alt="" class="">
            </div>
            <VToolbarTitle v-if="!display.mobile.value" class="ml-4">
              当前编辑：{{ state.state.BasicdataText[1] || '新干员' }}
            </VToolbarTitle>
            <VSpacer />

            <div v-if="!display.mobile.value" class="mr-4">
              <p>上次缓存</p>
              <code>{{ dayjs(lastCacheTime).format('YYYY-MM-DD HH:mm:ss') }}</code>
            </div>
            <!-- 按钮 -->
            <div v-if="!display.mobile.value">
              <VTooltip text="清空" location="bottom">
                <template #activator="{ props }">
                  <VBtn v-bind="props" icon="mdi-trash-can" @click="showResetAlert()" />
                </template>
              </VTooltip>
              <VTooltip text="导入" location="bottom">
                <template #activator="{ props }">
                  <VBtn v-bind="props" icon="mdi-folder-open" @click="showLoadAlert()" />
                </template>
              </VTooltip>
              <VTooltip text="导出" location="bottom">
                <template #activator="{ props }">
                  <VBtn v-bind="props" icon="mdi-download" @click="save()" />
                </template>
              </VTooltip>
              <VTooltip text="预览" location="bottom">
                <template #activator="{ props }">
                  <VBtn v-bind="props" icon="mdi-camera" @click="showOperatorPreview = true" />
                </template>
              </VTooltip>
            </div>
          </VToolbar>
        </VAppBar>

        <NavMenu
          :show-nav="showNav"
          :last-cache-time="lastCacheTimeStr"
          @state-changed="(newVal) => { showNav = newVal }"
          @load="showLoadAlert()"
          @reset="showResetAlert"
          @save="save"
          @preview="showOperatorPreview = true"
        />

        <VMain class="overflow-y-scroll">
          <router-view />
        </VMain>
        <!-- 加载和清空数据警告框 -->
        <VDialog v-model="dialogModel.show" max-width="600px">
          <VCard>
            <VCardItem>
              <VCardTitle>警告</VCardTitle>
            </VCardItem>
            <VCardText>这会{{ dialogModel.type === 'load' ? '覆盖' : '清空' }}已有的数据，是否继续？</VCardText>
            <VCardActions>
              <VSpacer />
              <VBtn color="primary" @click="closeAlert()">
                取消
              </VBtn>
              <VBtn color="error" @click="dialogModel.type === 'load' ? load() : reset()">
                确认
              </VBtn>
            </VCardActions>
          </VCard>
        </VDialog>
        <!-- 加载和清空数据警告框 -->
        <VDialog :model-value="!!versionToUpdate" max-width="600px">
          <VCard>
            <VCardItem>
              <VCardTitle>更新</VCardTitle>
            </VCardItem>
            <VCardText>检查到新版本 <code>{{ versionToUpdate }}</code>，是否要下载？</VCardText>
            <VCardActions>
              <VSpacer />
              <VBtn color="primary" @click="versionToUpdate = '';versionToUpdateUrl = ''">
                取消
              </VBtn>
              <VBtn color="error" @click="goUpdatePage(versionToUpdateUrl)">
                确认
              </VBtn>
            </VCardActions>
          </VCard>
        </VDialog>
        <!-- 提示消息 -->
        <VSnackbar :model-value="helper.snackbar.show" absolute color="primary" @update:model-value="helper.snackbarModelValueUpdate">
          {{ helper.snackbar.text }}
          <template #actions>
            <VBtn @click="helper.snackbarModelValueUpdate(false)">
              关闭
            </VBtn>
          </template>
        </VSnackbar>
      </VLayout>
    </VApp>
  </VThemeProvider>
  <OperatorPreview :show="showOperatorPreview" @close="showOperatorPreview = false" />
</template>

<style>
.nav_logo {
  padding: 0 0.1875rem;
  width: 3.75rem;
  height: 80%;
  align-items: center;
  border-left: 2px solid blue;
  border-right: 2px solid blue;
}
.nav_box {
  height: 100%;
  justify-content: space-between;
}
.nav_logo > img {
  width: 100%;
  max-height: 100%;
}
.nav_box {
  align-items: center;
}
.nav_name {
  width: 50%;
  margin-left: 0.25rem;
}
.nav_name span {
  font-size: 0.4375rem;
  color: #fff;
  font-weight: 600;
  display: block;
  width: calc(90%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.nav_name p {
  font-size: 0.175rem;
  color: #fff;
  margin-right: 0.125rem;
}
.nav_time {
  font-size: 0.175rem;
  color: #fff;
  line-height: 0.375rem;
}
.nav_time p {
  margin: 0;
}
.nav_an {
  align-items: center;
  padding-left: 0.125rem;
}
.nav_an i {
  margin: 0.125rem;
}
.qxbc {
  width: 0.375rem;
  height: 0.375rem;
  color: #fff;
  font-size: 0.175rem;
  white-space: nowrap;
}
</style>
