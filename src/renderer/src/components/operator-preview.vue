<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import * as htmlToImage from 'html-to-image'
import dayjs from 'dayjs'
import { VFadeTransition } from 'vuetify/lib/components/index.mjs'
import { useState } from '../store'
import { getVersionName, isOnAndroid } from '../utils/platform'
import { logger } from '../utils/logger'
import { saveFile } from '../utils/file'
import Main from './operator-preview-main.vue'
import Info from './operator-preview-info.vue'

defineProps<{
  show: boolean
}>()
const emit = defineEmits<{
  (e: 'close'): void
}>()

const { state } = storeToRefs(useState())
const { width, height } = useWindowSize()
const rotated = computed(() => width.value / height.value < 1)
const scale = computed(() => {
  if (width.value > height.value) {
    return width.value / 1920 * 1080 < height.value
      ? width.value / 1920
      : height.value / 1080
  }
  else {
    return height.value / 1920 * 1080 > width.value
      ? width.value / 1080
      : height.value / 1920
  }
})
enum NowShowing {
  MAIN,
  INFO,
  SKILLS,
  ABILITY_AND_MODS,
}
const nowShowing = ref(NowShowing.MAIN)
const root = ref<HTMLDivElement>()

async function doScreenShot() {
  await new Promise(resolve => setTimeout(resolve, 250))
  try {
    const rawCanvas = await htmlToImage.toCanvas(root.value!)
    const width = rotated.value ? 1080 * scale.value * window.devicePixelRatio : 1920 * scale.value * window.devicePixelRatio
    const height = rotated.value ? 1920 * scale.value * window.devicePixelRatio : 1080 * scale.value * window.devicePixelRatio
    const top = (rawCanvas.height - height) / 2
    const left = (rawCanvas.width - width) / 2
    const croppedCanvas = document.createElement('canvas')
    croppedCanvas.width = width
    croppedCanvas.height = height
    croppedCanvas.getContext('2d')!.drawImage(rawCanvas, left, top, width, height, 0, 0, width, height)
    if (!isOnAndroid()) {
      const resultBlobNew = await new Promise<Blob | null>((resolve) => {
        croppedCanvas.toBlob((b) => {
          resolve(b)
        }, 'image/png')
      })
      await saveFile(resultBlobNew!, `${state.value.BasicdataText[1]}_screenshot_${dayjs(Date.now()).format('YYYYMMDD_HHmmss')}.png`)
      return
    }
    const resultDataUrl = croppedCanvas.toDataURL().split(',')[1]
    window.Android.saveImage(resultDataUrl)
  }
  catch (e) {
    logger.error(`screenshot failed: ${(e as Error).message}`)
  }
}

function back() {
  if (nowShowing.value !== NowShowing.MAIN) {
    nowShowing.value = NowShowing.MAIN
    return
  }
  emit('close')
}
</script>

<template>
  <div v-if="show" class="absolute top-0 left-0 flex w-full h-full bg-black justify-center items-center z-998">
    <div
      ref="root"
      class="w-1920px h-1080px flex-shrink-0 bg-white pt-20px pl-24px pb-54px pr-60px select-none"
      :style="{
        transform: `scale(${scale}) ${rotated ? 'rotate(90deg)' : ''}`,
      }"
    >
      <div v-if="nowShowing === NowShowing.MAIN" class="absolute top-0 left-0 w-full h-full bg-ark" />
      <div v-if="nowShowing === NowShowing.INFO" class="absolute top-0 left-0 w-full h-full bg-info" />
      <!-- 立绘 -->
      <div :class="[nowShowing === NowShowing.INFO ? '-translate-x-300px -translate-y-80px' : '']" class="transform transition transition-transform delay-250ms duration-500ms absolute top-0 left-0 w-full h-full !bg-center !bg-contain !bg-no-repeat" :style="{ backgroundImage: `url(${state.BasicDataImgForWeb})` }" />
      <div v-if="nowShowing === NowShowing.MAIN" class="absolute top-0 left-0 w-full h-full bg-shadow" />
      <div v-if="nowShowing === NowShowing.INFO" class="absolute top-0 left-0 w-full h-full bg-info-mask" />
      <!-- 阵营图标 -->
      <div v-if="nowShowing === NowShowing.MAIN" class="absolute top-20px left-24px w-420px h-420px !bg-center !bg-contain !bg-no-repeat" :style="{ backgroundImage: `url(${state.ProfLogoForWeb})` }" />
      <div class="absolute top-0 left-0 w-full h-full bg-around" />
      <VFadeTransition>
        <Main v-if="nowShowing === NowShowing.MAIN" />
      </VFadeTransition>
      <VFadeTransition>
        <Info v-if="nowShowing === NowShowing.INFO" />
      </VFadeTransition>
      <!-- 工具条 -->
      <div class="flex absolute top-20px left-24px">
        <div class="flex btn-shadow bg-black">
          <div class="bg-[#313131] h-76px w-218px btn btn-back" @click="back" />
          <div class="bg-[#313131] h-76px w-313px btn btn-overview ml-5px" />
        </div>
        <VFadeTransition>
          <div v-if="nowShowing === NowShowing.MAIN" class="flex btn-shadow bg-black ml-20px">
            <div class="bg-[#313131] h-76px w-200px btn btn-info" @click="nowShowing = NowShowing.INFO" />
            <div class="bg-[#313131] h-76px w-200px btn btn-screenshot ml-5px flex justify-around items-center p-20px" @click="doScreenShot">
              <div class="btn-screenshot-icon w-50px h-50px" />
              <div class="text-white text-30px pt-8px">
                截屏
              </div>
            </div>
          </div>
        </VFadeTransition>
      </div>
      <!-- 版本水印 -->
      <div class="text-[#575757] absolute bottom-34px right-60px text-16px leading-16px font-black">
        ARKFANMADETOOL VER {{ getVersionName() }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.bg-ark {
  background-image: url('../assets/img/operator-preview/background_main.png');
  background-position: center;
  background-size: cover;
}

.btn {
  transition: all 250ms ease;

  &:hover {
    filter: brightness(0.6);
  }

  &:active {
    filter: brightness(0.3);
  }
}

.btn-back {
  background-image: url('../assets/img/operator-preview/back_btn_bg.png');
  background-position: center;
  background-size: cover;
}

.btn-overview {
  background-image: url('../assets/img/operator-preview/overview_btn_bg.png');
  background-position: center;
  background-size: cover;
}

.btn-info {
  background-image: url('../assets/img/operator-preview/info_btn_bg.png');
  background-position: center;
  background-size: cover;
}

.btn-screenshot {
  &-icon {
    background-image: url('../assets/img/preview.svg');
    background-position: center;
    background-size: cover;
  }
}

.bg-around {
  background-image: url('../assets/img/operator-preview/background_around.png');
  background-position: center;
  background-size: cover;
}

.bg-info {
  background-image: url('../assets/img/operator-preview/background_info.png');
  background-position: center;
  background-size: cover;
}

.bg-info-mask {
  background-image: url('../assets/img/operator-preview/background_info_mask.png');
  background-position: center;
  background-size: cover;
}

.bg-shadow {
  background-image: url('../assets/img/operator-preview/background_shadow.png');
  background-position: center;
  background-size: cover;
}

.white-transparent {
  background: linear-gradient(to right, white, transparent);
}
</style>
