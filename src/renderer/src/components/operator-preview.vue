<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useHelper, useState } from '../store'
import { getVersionName } from '../utils/platform'
import Main from './operator-preview-main.vue'

defineProps<{
  show: boolean
}>()
const emit = defineEmits<{
  (e: 'close'): void
}>()

const helper = useHelper()
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
  DETAILS,
  SKILLS,
  ABILITY_AND_MODS,
}
const nowShowing = ref(NowShowing.MAIN)
</script>

<template>
  <div v-if="show" class="absolute top-0 left-0 flex w-full h-full bg-black/50 justify-center items-center z-998">
    <div
      class="w-1920px h-1080px flex-shrink-0 bg-white pt-20px pl-24px pb-54px pr-60px bg-ark select-none"
      :style="{
        transform: `scale(${scale}) ${rotated ? 'rotate(90deg)' : ''}`,
      }"
    >
      <!-- 立绘 -->
      <div class="absolute top-0 left-0 w-full h-full !bg-center !bg-contain !bg-no-repeat" :style="{ backgroundImage: `url(${state.BasicDataImgForWeb})` }" />
      <!-- 阵营图标 -->
      <div class="absolute top-20px left-24px w-420px h-420px !bg-center !bg-contain !bg-no-repeat" :style="{ backgroundImage: `url(${state.ProfLogoForWeb})` }" />
      <div class="absolute top-0 left-0 w-full h-full bg-around" />
      <div class="absolute top-0 left-0 w-full h-full bg-shadow" />
      <Main v-if="nowShowing === NowShowing.MAIN" />
      <!-- 工具条 -->
      <div class="flex absolute top-20px left-24px">
        <div class="flex btn-shadow bg-black">
          <div class="bg-[#313131] h-76px w-218px btn btn-back" @click="nowShowing = NowShowing.MAIN;emit('close')" />
          <div class="bg-[#313131] h-76px w-313px btn btn-overview ml-5px" />
        </div>
        <div class="flex btn-shadow bg-black ml-20px">
          <div class="bg-[#313131] h-76px w-200px btn btn-info" @click="helper.showSnackbar('🚧 施工中')" />
          <div class="bg-[#313131] h-76px w-200px btn btn-screenshot ml-5px flex justify-around items-center p-20px" @click="helper.showSnackbar('🚧 施工中')">
            <div class="btn-screenshot-icon w-50px h-50px" />
            <div class="text-white text-30px pt-8px">
              截屏
            </div>
          </div>
        </div>
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
  background-image: url('../assets/img/operator-preview/background.png');
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

.bg-shadow {
  background-image: url('../assets/img/operator-preview/background_shadow.png');
  background-position: center;
  background-size: cover;
}

.white-transparent {
  background: linear-gradient(to right, white, transparent);
}
</style>
