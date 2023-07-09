<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useState } from '../store'

import professionWarrior from '../assets/img/operator-preview/icon_profession_warrior_large.png'
import professionSniper from '../assets/img/operator-preview/icon_profession_sniper_large.png'
import professionSpecial from '../assets/img/operator-preview/icon_profession_special_large.png'
import professionPioneer from '../assets/img/operator-preview/icon_profession_pioneer_large.png'
import professionMedic from '../assets/img/operator-preview/icon_profession_medic_large.png'
import professionCaster from '../assets/img/operator-preview/icon_profession_caster_large.png'
import professionSupport from '../assets/img/operator-preview/icon_profession_support_large.png'
import professionTank from '../assets/img/operator-preview/icon_profession_tank_large.png'

import stars1 from '../assets/img/operator-preview/stars_1.png'
import stars2 from '../assets/img/operator-preview/stars_2.png'
import stars3 from '../assets/img/operator-preview/stars_3.png'
import stars4 from '../assets/img/operator-preview/stars_4.png'
import stars5 from '../assets/img/operator-preview/stars_5.png'
import stars6 from '../assets/img/operator-preview/stars_6.png'

defineProps<{
  show: boolean
}>()
const emit = defineEmits<{
  (e: 'close'): void
}>()

// 职业图标
const professionIcons = [professionWarrior, professionSniper, professionSpecial, professionPioneer, professionMedic, professionCaster, professionSupport, professionTank]
// 星级图标
const stars = [stars1, stars2, stars3, stars4, stars5, stars6]

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
</script>

<template>
  <div v-if="show" class="absolute top-0 left-0 flex w-full h-full bg-black/50 justify-center items-center z-99999">
    <div
      class="w-1920px h-1080px flex-shrink-0 bg-white pt-20px pl-24px pb-54px pr-60px bg-ark" :style="{
        transform: `scale(${scale}) ${rotated ? 'rotate(90deg)' : ''}`,
      }"
    >
      <!-- 立绘 -->
      <div class="absolute top-0 left-0 w-full h-full !bg-center !bg-contain !bg-no-repeat" :style="{ backgroundImage: `url(${state.BasicDataImgForWeb})` }" />
      <div class="absolute top-0 left-0 w-full h-full bg-around" />
      <div class="absolute top-0 left-0 w-full h-full bg-shadow" />
      <!-- 工具条 -->
      <div class="flex absolute top-20px left-24px">
        <div class="flex btn-shadow bg-black">
          <div class="bg-[#313131] h-76px w-218px btn btn-back" @click="emit('close')" />
          <div class="bg-[#313131] h-76px w-313px btn btn-overview ml-5px" />
        </div>
        <div class="flex btn-shadow bg-black">
          <div class="bg-[#313131] h-76px w-200px btn btn-info ml-20px" />
          <div class="bg-[#313131] h-76px w-200px btn btn-screenshot ml-5px flex justify-around items-center p-20px">
            <div class="btn-screenshot-icon w-50px h-50px" />
            <div class="text-white text-30px pt-8px">
              截屏
            </div>
          </div>
        </div>
      </div>
      <!-- 星级 -->
      <div class="w-240px h-60px !bg-left !bg-no-repeat !bg-contain absolute left-24px bottom-390px" :style="{ backgroundImage: `url(${stars[Number.parseInt(state.BasedataA[6])]})` }" />
      <!-- 干员英文名 -->
      <div class="text-48px h-64px absolute bottom-350px w-1000px left-24px font-black font-serif">
        <svg stroke="rgba(0,0,0,0.5)" stroke-width="2px" width="1000px">
          <text fill="white" y="60">{{ state.BasicdataText[2] }}</text>
        </svg>
      </div>
      <!-- 干员名称 -->
      <div class="text-140px h-160px absolute bottom-200px w-1000px left-24px font-black font-serif">
        <svg stroke="rgba(0,0,0,0.5)" stroke-width="2px" width="1000px">
          <text fill="white" y="120">{{ state.BasicdataText[1] }}</text>
        </svg>
      </div>
      <!-- 职业，攻击范围，图标 -->
      <div class="absolute bottom-54px left-24px flex items-center text-white text-24px">
        <div class="h-135px w-135px !bg-no-repeat !bg-center !bg-contain opacity-50 border-2px border-white border-solid" :style="{ backgroundImage: `url(${professionIcons[Number.parseInt(state.BasedataA[7])]})` }" />
        <div class="h-131px w-214px bg-black/50 ml-12px flex flex-col justify-between pt-10px items-center rounded-6px">
          <div class="grid grid-cols-10 gap-2px">
            <div v-for="(isTrue, index) in state.AttackRangeBol" :key="index" class="w-10px h-10px" :class="[isTrue ? 'bg-white' : 'border-1px border-white/60 border-solid']" />
          </div>
          <div>
            攻击范围
          </div>
        </div>
        <div class="h-131px w-214px ml-12px flex flex-col justify-between">
          <div class="bg-black/50 w-full h-40px rounded-6px flex justify-center items-center text-30px">
            {{ state.BasedataA[1] }}
          </div>
          <div class="bg-black/50 w-full h-83px rounded-6px flex p-10px justify-center items-center flex-wrap">
            <div v-for="(tag, index) in state.BasedataA[2].split(' ')" :key="index" class="flex-shrink-0 mr-10px">
              {{ tag }}
            </div>
          </div>
        </div>
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

.btn-shadow {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.8);
}
</style>
