<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import Converter from '@lemonneko/unity-rich-text-converter'
import { useHelper, useState } from '../store'

import stars1 from '../assets/img/operator-preview/stars_1.png'
import stars2 from '../assets/img/operator-preview/stars_2.png'
import stars3 from '../assets/img/operator-preview/stars_3.png'
import stars4 from '../assets/img/operator-preview/stars_4.png'
import stars5 from '../assets/img/operator-preview/stars_5.png'
import stars6 from '../assets/img/operator-preview/stars_6.png'
import { professionIcons } from '../utils/static-data'
import Skill from './skill.vue'

const { state } = storeToRefs(useState())
const helper = useHelper()

// 星级图标
const stars = [stars1, stars2, stars3, stars4, stars5, stars6]
// 技能相关
const skillFillType = ['自动回复', '攻击回复', '受击回复', '被动'] as const
const skillFireType = ['手动', '自动'] as const
const skillFillTypeColor = ['#8ec21f', '#eb804d', '#f2b53f', '#737373']
const showingSkills = ref(false)
const showingSkillLevel = ref(9)
const skillsNames = [state.value.SKill1Name, state.value.SKill2Name, state.value.SKill3Name]
const skillsDes = [state.value.SKill1Des, state.value.SKill2Des, state.value.SKill3Des]
const skillDur = [state.value.Skill1Durat, state.value.Skill2Durat, state.value.Skill3Durat]
const skillTypes = [state.value.Skill1Type, state.value.Skill2Type, state.value.Skill3Type]
const showingSkill = ref(0)
const converter = new Converter()

function onSkillSelected(name: string) {
  showingSkill.value = skillsNames.findIndex(it => it === name) || 0
}

const levelName = computed(() => {
  const levelInt = showingSkillLevel.value + 1
  if (levelInt < 8)
    return `等级 ${levelInt}`

  return `专精 ${levelInt - 7}`
})
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
          <div v-for="(isTrue, index) in state.AttackRangeBol" :key="index" class="w-10px h-10px" :class="[isTrue ? 'bg-white' : 'border-1px border-white/20 border-solid']" />
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
    <div class="absolute font-black text-white transition-all transition duration-500ms right-60px" :class="[showingSkills ? '-top-360px' : 'top-135px']">
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
      <div class="w-160px h-160px rounded-full border-8px border-solid border-[#ffd900] absolute top-0 right-383px flex flex-col justify-center items-center pb-40px">
        <div class="text-24px leading-24px font-novecentowide font-bold">
          LV
        </div>
        <div class="text-90px leading-70px font-novecentowide font-bold">
          90
        </div>
      </div>
      <div class="absolute right-340px text-32px leading-32px top-125px font-novecentowide font-bold">
        /90
      </div>
    </div>
    <!-- 精英化，潜能 -->
    <div class="absolute right-60px flex gap-x-15px transition-all transition duration-500ms font-black" :class="[showingSkills ? '-top-120px' : 'top-375px']">
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
    <!-- 技能展开之后的背景 -->
    <div class="w-548px h-700px transition btn-shadow transition-all duration-500ms absolute right-60px transform-origin-top" :class="showingSkills ? 'top-85px' : 'top-660px scale-y-0'">
      <div class="w-full h-full opacity-80 bg-[#313131]" />
      <div v-if="showingSkills" class="w-full absolute top-230px flex px-32px">
        <div v-for="i in skillsNames" :key="i" class="flex-1 text-white text-center text-32px leading-32px">
          {{ i }}
        </div>
      </div>
      <div v-if="showingSkills" class="w-full h-40px top-285px flex text-white text-24px leading-24px absolute left-30px">
        <div class="flex justify-center items-center h-40px rounded-5px px-10px" :style="{ 'background-color': skillFillTypeColor[skillTypes[showingSkill].x] }">
          {{ skillFillType[skillTypes[showingSkill].x] }}
        </div>
        <!-- 如果是被动就不显示 -->
        <div v-if="skillTypes[showingSkill].x !== 3" class="flex justify-center items-center h-40px bg-#737373 rounded-5px px-10px">
          {{ skillFireType[skillTypes[showingSkill].y] }}触发
        </div>
        <!-- 技能时间 -->
        <div v-if="skillDur[showingSkill][showingSkillLevel]" class="flex justify-center items-center h-40px bg-#535353 rounded-5px px-10px">
          <div class="bg-timer" />
          <div class="ml-10px">
            {{ skillDur[showingSkill][showingSkillLevel] }}秒
          </div>
        </div>
      </div>
      <div
        v-if="showingSkills" class="text-white text-24px absolute px-30px w-full top-335px"
        v-html="converter.unity2html(skillsDes[showingSkill][showingSkillLevel])"
      />
      <div v-if="showingSkills" class="flex w-full px-30px h-80px gap-24px top-585px absolute text-white text-32px">
        <div v-if="showingSkillLevel > 0" class="flex-1 h-full btn btn-shadow bg-#313131 justify-center items-center flex" @click="showingSkillLevel -= 1">
          上一等级
        </div>
        <div v-if="showingSkillLevel < 9" class="flex-1 h-full btn btn-shadow bg-#313131 justify-center items-center flex" @click="showingSkillLevel += 1">
          下一等级
        </div>
      </div>
    </div>
    <!-- 技能 -->
    <div class="w-548px absolute bg-[#313131] transition-all transition duration-500ms right-60px btn-shadow flex flex-col items-end pt-20px pr-20px font-900" :class="showingSkills ? 'top-32px h-55px' : 'top-525px h-140px'" @click="showingSkills = !showingSkills">
      <div v-if="showingSkills" class="top-15px right-505px absolute">
        <svg height="8px" width="18px">
          <polygon points="0 8, 9 0, 18 8" fill="white" />
        </svg>
      </div>
      <div v-if="showingSkills" class="text-[#a0a0a0] text-28px leading-28px absolute right-430px top-12px">
        技能
      </div>
      <div v-if="showingSkills" class="text-[#a0a0a0] text-28px leading-28px absolute right-30px top-12px">
        {{ levelName }}
      </div>
      <div v-if="!showingSkills" class="text-[#a0a0a0] text-24px leading-24px">
        RANK <span class="text-white">7</span>
      </div>
      <div v-if="!showingSkills" class="bg-[#575757] text-[#313131] h-30px w-70px px-10px text-24px leading-24px flex justify-center items-center rounded-2px mr-2px mt-20px">
        MAX
      </div>
      <!-- 分割线 -->
      <div v-if="!showingSkills" class="h-90px w-8px absolute right-132px top-20px flex">
        <div class="flex-1 bg-[#454545]" />
        <div class="flex-1 bg-[#1b1b1b]" />
      </div>
      <!-- 技能 -->
      <Skill :name="state.SKill1Name" :selected="skillsNames[showingSkill]" :expanded="showingSkills" class="absolute" :class="[showingSkills ? 'top-105px right-375px' : '-top-15px right-428px']" :img="state.Skill1PicB64ForWeb" :initial-sp="state.Skill1Start[showingSkillLevel]" :total-sp="state.Skill1Sp[showingSkillLevel]" @selected="onSkillSelected" />
      <Skill :name="state.SKill2Name" :selected="skillsNames[showingSkill]" :expanded="showingSkills" class="absolute" :class="[showingSkills ? 'top-105px right-205px' : '-top-15px right-296px']" :img="state.Skill2PicB64ForWeb" :initial-sp="state.Skill2Start[showingSkillLevel]" :total-sp="state.Skill2Sp[showingSkillLevel]" @selected="onSkillSelected" />
      <Skill :name="state.SKill3Name" :selected="skillsNames[showingSkill]" :expanded="showingSkills" class="absolute" :class="[showingSkills ? 'top-105px right-35px' : '-top-15px right-164px']" :img="state.Skill3PicB64ForWeb" :initial-sp="state.Skill3Start[showingSkillLevel]" :total-sp="state.Skill3Sp[showingSkillLevel]" @selected="onSkillSelected" />
    </div>
    <!-- 天赋与模组 -->
    <div class="w-548px h-228px bg-[#313131] btn-shadow absolute transition transition-all right-60px duration-500ms" :class="[showingSkills ? 'bottom-10px' : 'bottom-54px']" @click="helper.showSnackbar('🚧 施工中')">
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
          <div class="text-20px leading-20px text-white font-ark">
            ORIGINAL
          </div>
        </div>
        <div v-else class=" w-full h-full flex flex-col justify-center items-center pb-10px">
          <div class="!bg-center !bg-contain !bg-no-repeat flex-1 w-full" :style="{ backgroundImage: `url(${state.Mod1IconForWeb})` }" />
          <div class="text-20px leading-20px text-white flex justify-center items-center font-ark">
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

<style lang="less" scoped>
.bg-timer {
  background-image: url(../assets/img/operator-preview/icon_skill_duration.png);
  background-size: 30px 30px;
  background-position: center;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
}
</style>
