<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import dayjs from 'dayjs'
import { VApp, VAppBar, VLayout, VMain, VThemeProvider, VToolbar, VToolbarItems, VToolbarTitle } from 'vuetify/components'
import NavMenu from './components/menu.vue'

import { loadFile, saveFile } from './utils/file'
import { useState } from './store'

const state = useState()
const router = useRouter()
const lastCacheTime = ref(Date.now())

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
  const data = await loadFile('save')
  state.state = JSON.parse(data) as State
}

// 每 5 秒缓存一次到 localStorage
useIntervalFn(() => save(true), 5000)

onMounted(() => {
  router.push('/basic_data')
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
            <div class="flex justify-center items-center ml-1">
              <img src="./assets/img/logo.png" width="159" height="49" alt="" class="">
            </div>
            <VToolbarTitle class="ml-4">
              当前编辑：{{ state.state.formzcda.dh || '新干员' }}
            </VToolbarTitle>
            <VSpacer />

            <div>
              <p>上次缓存</p>
              <div>{{ dayjs(lastCacheTime).format('YYYY-MM-DD HH:mm:ss') }}</div>
            </div>
            <!-- 按钮 -->

            <VToolbarItems>
              <VBtn icon="mdi-folder-open" @click="load()" />
              <VBtn icon="mdi-download" @click="save()" />
              <VBtn icon="mdi-preview" />
            </VToolbarItems>
          </VToolbar>
        </VAppBar>

        <NavMenu />

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
