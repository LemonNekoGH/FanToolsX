<script lang="ts" setup>
import { VCard, VCardItem, VCardSubtitle, VCardTitle, VSelect, VSwitch, VTextField } from 'vuetify/components'
import { storeToRefs } from 'pinia'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import { computed } from 'vue'
import SelectImage from '../components/select-image.vue'
import { useState } from '../store'

const { state } = storeToRefs(useState())

function levelName(level: number) {
  const levelInt = level + 1
  if (levelInt < 8)
    return `等级 ${levelInt}`

  return `专精 ${levelInt - 7}`
}

const display = useDisplay()
const skillFillType = ['自动回复', '攻击回复', '受击回复', '被动'] as const
const skillFireType = ['手动', '自动'] as const
type SkillFillType = (typeof skillFillType)[number]
type SkillFireType = (typeof skillFireType)[number]

const skill1FillType = computed<SkillFillType>({
  get: () => skillFillType[state.value.Skill1Type.x],
  set: val => state.value.Skill1Type.x = skillFillType.findIndex(it => it === val)!,
})
const skill1FireType = computed<SkillFireType>({
  get: () => skillFireType[state.value.Skill1Type.y],
  set: val => state.value.Skill1Type.y = skillFireType.findIndex(it => it === val)!,
})
const skill2FillType = computed<SkillFillType>({
  get: () => skillFillType[state.value.Skill2Type.x],
  set: val => state.value.Skill2Type.x = skillFillType.findIndex(it => it === val)!,
})
const skill2FireType = computed<SkillFireType>({
  get: () => skillFireType[state.value.Skill2Type.y],
  set: val => state.value.Skill2Type.y = skillFireType.findIndex(it => it === val)!,
})
const skill3FillType = computed<SkillFillType>({
  get: () => skillFillType[state.value.Skill3Type.x],
  set: val => state.value.Skill3Type.x = skillFillType.findIndex(it => it === val)!,
})
const skill3FireType = computed<SkillFireType>({
  get: () => skillFireType[state.value.Skill3Type.y],
  set: val => state.value.Skill3Type.y = skillFireType.findIndex(it => it === val)!,
})
</script>

<template>
  <div class="w-full h-full p-4">
    <div class="title_box">
      <div class="title">
        技能数据
      </div>
      <div class="title_E">
        <span>///Skill Data</span>
      </div>
    </div>
    <div
      class="flex gap-x-16px mt-4" :class="{
        'flex-col': display.mobile.value,
      }"
    >
      <!-- 技能 1 -->
      <div :class="display.mobile.value ? '' : 'flex-1'">
        <VSwitch v-model="state.Skill1Exists" inset color="primary" label="启用技能 1" messages="不启用时不会显示在展示页面" density="compact" />
        <SelectImage
          class="mt-4"
          to-load="Skill1PicB64ForWeb"
          :img="state.Skill1PicB64ForWeb"
          title="技能 1 图标"
          @image-loaded="(data, base64) => { state.Skill1PicB64ForWeb = data; state.Skill1PicB64 = base64 }"
          @image-cleared="state.Skill1PicB64ForWeb = ''; state.Skill1PicB64 = ''"
        />
        <VCard variant="outlined" class="mt-4 border-[#bbb]">
          <VCardItem>
            <VCardTitle>
              技能 1
            </VCardTitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              基础
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.SKill1Name" color="primary" variant="outlined" label="名称" density="compact" />
            <VSelect v-model="skill1FillType" :items="skillFillType" color="primary" variant="outlined" label="技力回复方式" density="compact" />
            <VSelect v-model="skill1FireType" :items="skillFireType" color="primary" variant="outlined" label="触发方式" density="compact" />
          </div>
          <template v-for="(_, i) in Array(10)" :key="i">
            <div class="h-1px w-full bg-[#ddd]" />
            <VCardItem>
              <VCardSubtitle>
                {{ levelName(i) }}
              </VCardSubtitle>
            </VCardItem>
            <div class="h-1px w-full bg-[#ddd]" />
            <div class="px-4 pt-4">
              <VTextField v-model="state.SKill1Des[i]" color="primary" variant="outlined" label="描述" density="compact" />
              <VTextField v-model="state.Skill1Sp[i]" color="primary" variant="outlined" label="总技力" density="compact" />
              <VTextField v-model="state.Skill1Start[i]" color="primary" variant="outlined" label="初始技力" density="compact" />
              <VTextField v-model="state.Skill1Durat[i]" color="primary" variant="outlined" label="持续时间" density="compact" />
            </div>
          </template>
        </VCard>
      </div>
      <!-- 技能 2 -->
      <div :class="display.mobile.value ? 'mt-4' : 'flex-1'">
        <VSwitch v-model="state.Skill2Exists" inset color="primary" label="启用技能 1" messages="不启用时不会显示在展示页面" density="compact" />
        <SelectImage
          to-load="Skill2PicB64ForWeb"
          class="mt-4"
          :img="state.Skill2PicB64ForWeb"
          title="技能 2 图标"
          @image-loaded="(data, base64) => { state.Skill2PicB64ForWeb = data; state.Skill2PicB64 = base64 }"
          @image-cleared="state.Skill2PicB64ForWeb = ''; state.Skill2PicB64 = ''"
        />
        <VCard variant="outlined" class="mt-4 border-[#bbb]">
          <VCardItem>
            <VCardTitle>
              技能 2
            </VCardTitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              基础
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.SKill2Name" color="primary" variant="outlined" label="名称" density="compact" />
            <VSelect v-model="skill2FillType" :items="skillFillType" color="primary" variant="outlined" label="技力回复方式" density="compact" />
            <VSelect v-model="skill2FireType" :items="skillFireType" color="primary" variant="outlined" label="触发方式" density="compact" />
          </div>
          <template v-for="(_, i) in Array(10)" :key="i">
            <div class="h-1px w-full bg-[#ddd]" />
            <VCardItem>
              <VCardSubtitle>
                {{ levelName(i) }}
              </VCardSubtitle>
            </VCardItem>
            <div class="h-1px w-full bg-[#ddd]" />
            <div class="px-4 pt-4">
              <VTextField v-model="state.SKill2Des[i]" color="primary" variant="outlined" label="描述" density="compact" />
              <VTextField v-model="state.Skill2Sp[i]" color="primary" variant="outlined" label="总技力" density="compact" />
              <VTextField v-model="state.Skill2Start[i]" color="primary" variant="outlined" label="初始技力" density="compact" />
              <VTextField v-model="state.Skill2Durat[i]" color="primary" variant="outlined" label="持续时间" density="compact" />
            </div>
          </template>
        </VCard>
      </div>
      <!-- 技能 3 -->
      <div :class="display.mobile.value ? 'mt-4' : 'flex-1'">
        <VSwitch v-model="state.Skill3Exists" inset color="primary" label="启用技能 1" messages="不启用时不会显示在展示页面" density="compact" />
        <SelectImage
          to-load="Skill3PicB64ForWeb"
          class="mt-4"
          :img="state.Skill3PicB64ForWeb"
          title="技能 3 图标"
          @image-loaded="(data, base64) => { state.Skill3PicB64ForWeb = data; state.Skill3PicB64 = base64 }"
          @image-cleared="state.Skill3PicB64ForWeb = ''; state.Skill3PicB64 = ''"
        />
        <VCard variant="outlined" class="mt-4 border-[#bbb]">
          <VCardItem>
            <VCardTitle>
              技能 3
            </VCardTitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              基础
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.SKill3Name" color="primary" variant="outlined" label="名称" density="compact" />
            <VSelect v-model="skill3FillType" :items="skillFillType" color="primary" variant="outlined" label="技力回复方式" density="compact" />
            <VSelect v-model="skill3FireType" :items="skillFireType" color="primary" variant="outlined" label="触发方式" density="compact" />
          </div>
          <template v-for="(_, i) in Array(10)" :key="i">
            <div class="h-1px w-full bg-[#ddd]" />
            <VCardItem>
              <VCardSubtitle>
                {{ levelName(i) }}
              </VCardSubtitle>
            </VCardItem>
            <div class="h-1px w-full bg-[#ddd]" />
            <div class="px-4 pt-4">
              <VTextField v-model="state.SKill3Des[i]" color="primary" variant="outlined" label="描述" density="compact" />
              <VTextField v-model="state.Skill3Sp[i]" color="primary" variant="outlined" label="总技力" density="compact" />
              <VTextField v-model="state.Skill3Start[i]" color="primary" variant="outlined" label="初始技力" density="compact" />
              <VTextField v-model="state.Skill3Durat[i]" color="primary" variant="outlined" label="持续时间" density="compact" />
            </div>
          </template>
        </VCard>
      </div>
    </div>
  </div>
</template>
