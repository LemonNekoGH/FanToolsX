<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import dayjs from 'dayjs'
import { VApp, VAppBar, VBtn, VLayout, VMain, VSpacer, VThemeProvider, VToolbar, VToolbarTitle } from 'vuetify/components'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import { useIntervalFn } from '@vueuse/core'
import NavMenu from './components/menu.vue'

import { loadFile, saveFile } from './utils/file'
import { useState } from './store'

const state = useState()
const lastCacheTime = ref(Date.now())
const lastCacheTimeStr = computed(() => dayjs(lastCacheTime.value).format('YYYY-MM-DD HH:mm:ss'))
const display = useDisplay()
const showNav = ref(!display.mobile.value)

type State = typeof state.state

function save(cache = false) {
  const data = JSON.stringify(state.state)
  if (cache) {
    localStorage.setItem('cache', data)
    lastCacheTime.value = Date.now()
    return
  }

  const blob = new Blob([data], { type: 'application/json' })
  const fileName = 'operator.akf'
  saveFile(blob, fileName)
}

async function load() {
  const data = await loadFile('*.akf,*.json')
  const parsedData = JSON.parse(data) as State
  state.state = JSON.parse(data) as State
  // Unity 中没有 Data URL, 导入时需要为图片加上前缀
  state.state.AbilityImage = `data:image/*;base64,${parsedData.AbilityData[7]}`
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

// 每 5 秒缓存一次到 localStorage
useIntervalFn(() => save(true), 5000)

onMounted(() => {
  const cached = localStorage.getItem('cache')
  // 缓存
  if (cached)
    state.state = JSON.parse(cached) as State
})
</script>

<template>
  <VThemeProvider theme="default">
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
              <div>{{ dayjs(lastCacheTime).format('YYYY-MM-DD HH:mm:ss') }}</div>
            </div>
            <!-- 按钮 -->
            <div v-if="!display.mobile.value">
              <VBtn icon="mdi-folder-open" @click="load()" />
              <VBtn icon="mdi-download" @click="save()" />
              <VBtn icon="mdi-camera" />
            </div>
          </VToolbar>
        </VAppBar>

        <NavMenu
          :show-nav="showNav"
          :last-cache-time="lastCacheTimeStr"
          @state-changed="(newVal) => { showNav = newVal }"
          @load="load"
          @save="save"
        />

        <VMain class="overflow-y-scroll">
          <router-view />
        </VMain>
      </VLayout>
    </VApp>
  </VThemeProvider>
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
