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
      class="w-1920px h-1080px flex-shrink-0 bg-white pt-20px pl-24px pb-54px pr-60px bg-ark"
      :style="{
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
        <div class="flex btn-shadow bg-black ml-20px">
          <div class="bg-[#313131] h-76px w-200px btn btn-info" />
          <div class="bg-[#313131] h-76px w-200px btn btn-screenshot ml-5px flex justify-around items-center p-20px">
            <div class="btn-screenshot-icon w-50px h-50px" />
            <div class="text-white text-30px pt-8px">
              截屏
            </div>
          </div>
        </div>
      </div>
      <!-- 属性 -->
      <div class="absolute left-24px top-350px flex">
        <div class="text-30px pl-10px leading-30px bg-white h-full flex font-500 py-5px rounded-5px">
          属性
        </div>
        <div class="flex items-end pb-10px bg-white pl-10px gap-x-2px">
          <svg height="20px" width="10px">
            <polygon points="0 0, 10 10,0 20" fill="#929292" />
          </svg>
          <svg height="20px" width="10px">
            <polygon points="0 0, 10 10,0 20" fill="#929292" />
          </svg>
        </div>
        <!-- 空白占位 -->
        <div class="bg-white w-30px" />
        <!-- 渐变 -->
        <div class="white-transparent w-50px" />
      </div>
      <div class="absolute left-24px bottom-550px">
        <!-- 法抗 -->
        <div class="absolute w-196px h-36px">
          <img src="../assets/img/operator-preview/icon_res.png" width="36" height="36">
          <div class="w-160px h-36px absolute top-0 left-36px bg-white/80 rounded-5px overflow-hidden ml-3px">
            <div class="bg-[#868686ee] w-30px h-full" />
            <div class="absolute top-0 w-full h-full pl-5px text-30px leading-30px py-3px">
              {{ state.BasedataB[3] }}
            </div>
          </div>
        </div>
        <!-- 攻击间隔 -->
        <div class="absolute left-199px w-196px h-36px">
          <img src="../assets/img/operator-preview/icon_attack_speed.png" width="36" height="36">
          <div class="w-160px h-36px absolute top-0 left-36px bg-white/80 rounded-5px overflow-hidden ml-3px">
            <div class="absolute top-0 w-full h-full pl-5px text-30px leading-30px py-3px">
              {{ state.BasedataA[5] }}
            </div>
          </div>
        </div>
        <!-- 防御力 -->
        <div class="absolute w-196px h-36px bottom-5px">
          <img src="../assets/img/operator-preview/icon_def.png" width="36" height="36">
          <div class="w-160px h-36px absolute top-0 left-36px bg-white/80 rounded-5px overflow-hidden ml-3px">
            <div class="bg-[#868686ee] w-30px h-full" />
            <div class="absolute top-0 w-full h-full pl-5px text-30px leading-30px py-3px">
              {{ state.BasedataB[2] }}
            </div>
          </div>
        </div>
        <!-- 阻挡数 -->
        <div class="absolute left-199px w-196px h-36px bottom-5px">
          <img src="../assets/img/operator-preview/icon_block.png" width="36" height="36">
          <div class="w-160px h-36px absolute top-0 left-36px bg-white/80 rounded-5px overflow-hidden ml-3px">
            <div class="absolute top-0 w-full h-full pl-5px text-30px leading-30px py-3px">
              {{ state.BasedataA[4] }}
            </div>
          </div>
        </div>
        <!-- 部署费用 -->
        <div class="absolute w-196px left-199px h-36px bottom-46px">
          <img src="../assets/img/operator-preview/icon_cost.png" width="36" height="36">
          <div class="w-160px h-36px absolute top-0 left-36px bg-white/80 rounded-5px overflow-hidden ml-3px">
            <div class="absolute top-0 w-full h-full pl-5px text-30px leading-30px py-3px">
              {{ state.BasedataB[7] }}
            </div>
          </div>
        </div>
        <!-- 再部署 -->
        <div class="absolute w-196px left-199px h-36px bottom-87px">
          <img src="../assets/img/operator-preview/icon_time.png" width="36" height="36">
          <div class="w-160px h-36px absolute top-0 left-36px bg-white/80 rounded-5px overflow-hidden ml-3px">
            <div class="absolute top-0 w-full h-full pl-5px text-30px leading-30px py-3px">
              {{ state.BasedataA[3] }}
            </div>
          </div>
        </div>
        <!-- 攻击力 -->
        <div class="absolute w-196px h-36px bottom-46px">
          <img src="../assets/img/operator-preview/icon_atk.png" width="36" height="36">
          <div class="w-160px h-36px absolute top-0 left-36px bg-white/80 rounded-5px overflow-hidden ml-3px">
            <div class="bg-[#868686ee] w-30px h-full" />
            <div class="absolute top-0 w-full h-full pl-5px text-30px leading-30px py-3px">
              {{ state.BasedataB[1] }}
            </div>
          </div>
        </div>
        <!-- 生命值 -->
        <div class="absolute w-196px h-36px bottom-87px">
          <img src="../assets/img/operator-preview/icon_hp.png" width="36" height="36">
          <div class="w-160px h-36px absolute top-0 left-36px bg-white/80 rounded-5px overflow-hidden ml-3px">
            <div class="bg-[#868686ee] w-30px h-full" />
            <div class="absolute top-0 w-full h-full pl-5px text-30px leading-30px py-3px">
              {{ state.BasedataB[0] }}
            </div>
          </div>
        </div>
      </div>
      <!-- 星级 -->
      <div class="w-240px h-60px !bg-left !bg-no-repeat !bg-contain absolute left-24px bottom-390px" :style="{ backgroundImage: `url(${stars[Number.parseInt(state.BasedataA[6])]})` }" />
      <!-- 信赖值 -->
      <div class="w-580px h-60px absolute left-24px bg-white/60 rounded-6px bottom-440px flex flex-col overflow-hidden">
        <div class="flex-1 flex">
          <div class="flex bg-white">
            <div class="text-30px pl-10px leading-30px bg-white h-full flex items-end pb-5px font-500">
              信赖值
            </div>
            <div class="flex items-end pb-5px bg-white pl-10px gap-x-2px">
              <svg height="20px" width="10px">
                <polygon points="0 0, 10 10,0 20" fill="#929292" />
              </svg>
              <svg height="20px" width="10px">
                <polygon points="0 0, 10 10,0 20" fill="#929292" />
              </svg>
            </div>
            <!-- 空白占位 -->
            <div class="bg-white w-30px" />
          </div>
          <!-- 渐变 -->
          <div class="white-transparent w-50px" />
          <div class="text-right flex-1 text-30px pr-10px h-full pt-5px leading-30px font-700">
            200%
          </div>
        </div>
        <div class="bg-white w-full p-5px">
          <div class="bg-[#ffa263] w-full h-10px rounded-3px" />
        </div>
      </div>
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

.white-transparent {
  background: linear-gradient(to right, white, transparent);
}
</style>
