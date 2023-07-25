<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useState } from '../store'
import { professionIcons } from '../utils/static-data'

const { state } = storeToRefs(useState())

// enum NowShowing {
//   ARCHIVE,
//   VOICE,
// }

const professions = ['近卫', '狙击', '特种', '先锋', '医疗', '术师', '辅助', '重装'] as const
const professionsEn = ['GUARD', 'SNIPPER', 'SPECIALIST', '先锋', 'MEDIC', 'CASTER', 'SUPPORTER', 'DEFENDER'] as const
// const nowShowing = ref(NowShowing.ARCHIVE)
</script>

<template>
  <div class="w-full h-full absolute left-0 top-0">
    <!-- 职业图标 -->
    <div class="h-110px w-110px bg-black absolute left-220px bottom-305px filter-blur-4px" />
    <div class="h-110px w-110px !bg-no-repeat absolute !bg-center !bg-contain left-220px bottom-305px" :style="{ backgroundImage: `url(${professionIcons[Number.parseInt(state.BasedataA[7])]})` }" />
    <!-- 干员职业英文 -->
    <div class="text-25px leading-25px absolute bottom-395px right-1725px font-900">
      {{ professionsEn[Number.parseInt(state.BasedataA[7])] }}
    </div>
    <!-- 干员职业英文泛光 -->
    <div class="text-25px leading-25px absolute bottom-395px right-1725px font-900 filter-blur-5px">
      {{ professionsEn[Number.parseInt(state.BasedataA[7])] }}
    </div>
    <!-- 干员职业名称 -->
    <div class="text-85px leading-85px absolute bottom-310px left-28px font-serif">
      {{ professions[Number.parseInt(state.BasedataA[7])] }}
    </div>
    <!-- 干员职业泛光 -->
    <div class="text-85px leading-85px absolute bottom-310px left-28px font-serif filter-blur-5px">
      {{ professions[Number.parseInt(state.BasedataA[7])] }}
    </div>
    <!-- 干员英文名 -->
    <div class="text-48px h-64px absolute bottom-260px w-1000px left-24px font-black font-serif">
      <svg stroke="rgba(0,0,0,0.5)" stroke-width="2px" width="1000px">
        <text fill="white" y="60">{{ state.BasicdataText[2] }}</text>
      </svg>
    </div>
    <!-- 干员名称 -->
    <div class="text-140px h-160px absolute bottom-110px w-1000px left-24px font-black font-serif">
      <svg stroke="rgba(0,0,0,0.5)" stroke-width="2px" width="1000px">
        <text fill="white" y="120">{{ state.BasicdataText[1] }}</text>
      </svg>
    </div>
    <!-- 画师 -->
    <div class="w-400px h-62px left-28px bottom-25px absolute flex">
      <div class="bg-[#121212] w-62px h-62px p-8px">
        <div class="bg-illustrator w-full h-full !bg-contain !bg-center !bg-no-repeat filter-brightness-60" />
      </div>
      <div class="flex-1 text-white text-32px leading-32px flex justify-center items-center bg-black/40">
        {{ state.BasicdataText[9] }}
      </div>
    </div>
    <!-- 声优 -->
    <div class="w-400px h-62px left-444px bottom-25px absolute flex">
      <div class="bg-[#121212] w-62px h-62px p-8px">
        <div class="bg-voice w-full h-full !bg-contain !bg-center !bg-no-repeat filter-brightness-60" />
      </div>
      <div class="flex-1 text-white text-32px leading-32px flex justify-center items-center bg-black/40">
        {{ state.CV[0] }}
      </div>
    </div>
    <!-- 基础档案 -->
    <div class="w-930px h-180px top-135px right-0 absolute border-black border-1px border-solid">
      <div class="w-full h-full right-0 top-0 bg-[#313131] absolute opacity-90" />
      <!-- 标题 -->
      <div class="absolute top-0 right-0 w-full h-full btn-shadow">
        <!-- 图标泛光 -->
        <div class="w-full h-full flex right-0 top-0 absolute justify-center items-center">
          <div class="h-full flex justify-center items-center ml-20px pt-15px">
            <img src="../assets/img/operator-preview/icon_illustrator.png" height="60" class="block filter-blur-5px opacity-80">
          </div>
          <div class="flex-1" />
        </div>
        <div class="w-full h-full flex right-0 top-0 absolute justify-center items-center">
          <!-- 图标本体 -->
          <div class="h-full flex justify-center items-center ml-20px">
            <img src="../assets/img/operator-preview/icon_illustrator.png" height="60" class="block">
          </div>
          <div class="flex-1 text-45px leading-42px pr-100px text-right text-white/90">
            人员档案
          </div>
        </div>
      </div>
      <!-- 档案内容 -->
      <div class="w-820px h-745px absolute right-105px top-198px overflow-y-scroll no-scroll-bar py-40px">
        <div class="w-full h-45px bg-[#313131] opacity-60 text-32px leading-40px text-white pl-25px">
          基础档案
        </div>
        <div class="w-full px-25px text-32px leading-54px text-black/90 mt-5px">
          【代号】{{ state.BasicdataText[1] }}<br>
          【性别】{{ state.BasicdataText[3] }}<br>
          【战斗经验】{{ state.BasicdataText[4] }}<br>
          【出身地】{{ state.BasicdataText[5] }}<br>
          【生日】{{ state.BasicdataText[6] }}<br>
          【种族】{{ state.BasicdataText[7] }}<br>
          【身高】{{ state.BasicdataText[8] }}<br>
          【矿石病感染情况】<br>{{ state.BasicdataText[10] }}
        </div>
        <div class="w-full h-45px bg-[#313131] opacity-60 text-32px leading-40px text-white pl-25px mt-5px">
          综合体检测试
        </div>
        <div class="w-full px-25px text-32px leading-54px text-black/90 mt-5px">
          【物理强度】{{ state.CompRec[0] }}<br>
          【战场机动】{{ state.CompRec[1] }}<br>
          【生理耐受】{{ state.CompRec[2] }}<br>
          【战斗规划】{{ state.CompRec[3] }}<br>
          【战斗技巧】{{ state.CompRec[4] }}<br>
          【源石技艺适应性】{{ state.CompRec[5] }}<br>
        </div>
        <div class="w-full h-45px bg-[#313131] opacity-60 text-32px leading-40px text-white pl-25px mt-5px">
          客观履历
        </div>
        <div class="w-full px-25px text-32px leading-54px text-black/90 mt-5px">
          {{ state.CompRec[6] }}
        </div>
        <div v-if="state.CompRec[7]" class="w-full h-45px bg-[#313131] opacity-60 text-32px leading-40px text-white pl-25px mt-5px">
          临床诊断分析
        </div>
        <div v-if="state.CompRec[7]" class="w-full px-25px text-32px leading-54px text-black/90 mt-5px">
          {{ state.CompRec[7] }}
        </div>
        <div v-if="state.ProfDat[2]" class="w-full h-45px bg-[#313131] opacity-60 text-32px leading-40px text-white pl-25px mt-5px">
          档案资料一
        </div>
        <div v-if="state.ProfDat[2]" class="w-full px-25px text-32px leading-54px text-black/90 mt-5px">
          {{ state.ProfDat[2] }}
        </div>
        <div v-if="state.ProfDat[3]" class="w-full h-45px bg-[#313131] opacity-60 text-32px leading-40px text-white pl-25px mt-5px">
          档案资料二
        </div>
        <div v-if="state.ProfDat[3]" class="w-full px-25px text-32px leading-54px text-black/90 mt-5px">
          {{ state.ProfDat[3] }}
        </div>
        <div v-if="state.ProfDat[4]" class="w-full h-45px bg-[#313131] opacity-60 text-32px leading-40px text-white pl-25px mt-5px">
          档案资料三
        </div>
        <div v-if="state.ProfDat[4]" class="w-full px-25px text-32px leading-54px text-black/90 mt-5px">
          {{ state.ProfDat[4] }}
        </div>
        <div v-if="state.ProfDat[5]" class="w-full h-45px bg-[#313131] opacity-60 text-32px leading-40px text-white pl-25px mt-5px">
          档案资料四
        </div>
        <div v-if="state.ProfDat[5]" class="w-full px-25px text-32px leading-54px text-black/90 mt-5px">
          {{ state.ProfDat[5] }}
        </div>
        <div v-if="state.EliteRec" class="w-full h-45px bg-[#313131] opacity-60 text-32px leading-40px text-white pl-25px mt-5px">
          晋升记录
        </div>
        <div v-if="state.EliteRec" class="w-full px-25px text-32px leading-54px text-black/90 mt-5px">
          {{ state.EliteRec }}
        </div>
        <div v-if="state.ProfDat[6]" class="w-full h-45px bg-[#313131] opacity-60 text-32px leading-40px text-white pl-25px mt-5px">
          附加资料
        </div>
        <div v-if="state.ProfDat[6]" class="w-full px-25px text-32px leading-54px text-black/90 mt-5px">
          {{ state.ProfDat[6] }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.bg-illustrator {
  background-image: url(../assets/img/operator-preview/icon_Illustrator.png);
}
.bg-voice {
  background-image: url(../assets/img/operator-preview/icon_voice.png);
}
</style>
