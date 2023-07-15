<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHelper, useState } from '../store'

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
import Skill from './skill.vue'

const { state } = storeToRefs(useState())
const helper = useHelper()

// 职业图标
const professionIcons = [professionWarrior, professionSniper, professionSpecial, professionPioneer, professionMedic, professionCaster, professionSupport, professionTank]
// 星级图标
const stars = [stars1, stars2, stars3, stars4, stars5, stars6]
</script>

<template>
  <div class="absolute w-full h-full top-0 left-0">
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
    <!-- 经验值 -->
    <div class="absolute font-black top-135px text-white right-60px">
      <div class="w-392px h-78px flex items-center bg-[#313131] pr-10px pl-20px absolute top-40px right-0 btn-shadow">
        <div class="flex-1">
          <div class="text-16px leading-16px">
            EXP
          </div>
          <div class="text-24px leading-24px">
            <span class="text-[#ffd900]">-</span>/-
          </div>
        </div>
        <div class="bg-[#575757] text-[#313131] h-24px px-10px rounded-2px">
          MAX
        </div>
      </div>
      <div class="w-160px h-160px rounded-full border-8px border-solid border-[#ffd900] absolute top-0 right-383px flex flex-col justify-center items-center pb-20px">
        <div class="text-24px leading-24px">
          LV
        </div>
        <div class="text-80px leading-70px">
          90
        </div>
      </div>
      <div class="absolute right-340px text-32px leading-32px top-125px">
        /90
      </div>
    </div>
    <!-- 精英化，潜能 -->
    <div class="absolute right-60px flex gap-x-15px top-375px font-black">
      <img src="../assets/img/operator-preview/elite_2.png" width="145" class="absolute -top-35px left-5px">
      <img src="../assets/img/operator-preview/potential_full.png" width="130" class="absolute -top-27px left-280px">
      <div class="w-268px h-100px bg-[#313131] btn-shadow flex flex-col items-end pt-12px pr-12px">
        <div class="text-[#a0a0a0] text-32px leading-32px">
          精英化
        </div>
        <div class="bg-[#575757] text-[#313131] h-30px w-70px px-10px text-24px leading-24px flex justify-center items-center rounded-2px mr-2px mt-10px">
          MAX
        </div>
      </div>
      <div class="w-268px h-100px bg-[#313131] btn-shadow flex flex-col items-end pt-12px pr-12px">
        <div class="text-[#a0a0a0] text-32px leading-32px">
          潜能
        </div>
        <div class="bg-[#575757] text-[#313131] h-30px w-70px px-10px text-24px leading-24px flex justify-center items-center rounded-2px mr-2px mt-10px">
          MAX
        </div>
      </div>
    </div>
    <!-- 技能 -->
    <div class="w-548px h-140px absolute top-525px bg-[#313131] right-60px btn-shadow flex flex-col items-end pt-20px pr-20px font-900">
      <div class="text-[#a0a0a0] text-24px leading-24px">
        RANK <span class="text-white">7</span>
      </div>
      <div class="bg-[#575757] text-[#313131] h-30px w-70px px-10px text-24px leading-24px flex justify-center items-center rounded-2px mr-2px mt-20px">
        MAX
      </div>
      <!-- 分割线 -->
      <div class="h-90px w-8px absolute right-132px top-20px flex">
        <div class="flex-1 bg-[#454545]" />
        <div class="flex-1 bg-[#1b1b1b]" />
      </div>
      <!-- 技能 -->
      <Skill class="absolute -top-15px right-428px" :img="state.Skill1PicB64ForWeb" :initial-sp="state.Skill1Start[9]" :total-sp="state.Skill1Sp[9]" />
      <Skill class="absolute -top-15px right-296px" :img="state.Skill2PicB64ForWeb" :initial-sp="state.Skill2Start[9]" :total-sp="state.Skill2Sp[9]" />
      <Skill class="absolute -top-15px right-164px" :img="state.Skill3PicB64ForWeb" :initial-sp="state.Skill3Start[9]" :total-sp="state.Skill3Sp[9]" />
    </div>
    <!-- 天赋与模组 -->
    <div class="w-548px h-228px bg-[#313131] btn-shadow absolute bottom-54px right-60px" @click="helper.showSnackbar('🚧 施工中')">
      <!-- 分支图标 -->
      <div class="absolute top-18px left-18px w-88px h-88px bg-[#3b3b3b] !bg-center !bg-contain !bg-no-repeat" :style="{ backgroundImage: `url(${state.AbilityImageForWeb})` }" />
      <div class="text-white text-30px leading-30px absolute top-45px left-120px">
        {{ state.BasedataA[0] }}
      </div>
      <!-- 模组图标 -->
      <div class="w-135px h-135px absolute -top-30px right-130px btn-shadow box-border border-5px border-white/20 border-solid bg-black/20">
        <!-- 没有模组图标的情况下使用的默认图标 -->
        <div v-if="!state.Mod1IconForWeb" class=" w-full h-full flex flex-col justify-center items-center gap-16px">
          <div class="border-box border-8px border-white border-solid w-64px h-64px" />
          <div class="text-20px leading-20px text-white">
            ORIGINAL
          </div>
        </div>
        <div v-else class=" w-full h-full flex flex-col justify-center items-center pb-10px">
          <div class="!bg-center !bg-contain !bg-no-repeat flex-1 w-full" :style="{ backgroundImage: `url(${state.Mod1IconForWeb})` }" />
          <div class="text-20px leading-20px text-white flex justify-center items-center">
            <span class="mt-2px mr-5px">{{ state.Mod1[3] }}</span>
            <span class="text-30px leading-30px">{{ state.Mod1[4] }}</span>
          </div>
        </div>
      </div>
      <!-- 分割线 -->
      <div class="h-90px w-8px absolute right-300px top-20px flex">
        <div class="flex-1 bg-[#454545]" />
        <div class="flex-1 bg-[#1b1b1b]" />
      </div>
      <div class="text-[#a0a0a0] text-24px leading-24px font-900 absolute right-10px top-20px">
        STAGE <span class="text-white">3</span>
      </div>
      <div class="text-white text-24px leading-24px absolute right-20px top-55px flex gap-10px h-40px items-end">
        <div>管理</div>
        <div class="text-white text-60px h-30px">
          +
        </div>
      </div>
      <!-- 天赋名称 -->
      <div class="absolute flex gap-x-15px top-145px left-18px">
        <div class="text-[#313131] bg-[#e5e5e5] text-24px leading-24px p-5px rounded-5px">
          {{ state.AbilityData[2] }}
        </div>
        <div class="text-[#313131] bg-[#e5e5e5] text-24px leading-24px p-5px rounded-5px">
          {{ state.AbilityData[4] }}
        </div>
      </div>
    </div>
  </div>
</template>
