<script lang="ts" setup>
import { VCard, VCardItem, VCardSubtitle, VCardTitle, VSelect, VSwitch, VTextField } from 'vuetify/components'
import { storeToRefs } from 'pinia'
import SelectImage from '../components/select-image.vue'
import { useState } from '../store'

const { state } = storeToRefs(useState())

function levelName(level: string) {
  const levelInt = Number.parseInt(level) + 1
  if (levelInt < 8)
    return `等级 ${levelInt}`

  return `专精 ${levelInt - 7}`
}
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
    <div class="flex gap-x-16px mt-4">
      <!-- 技能 1 -->
      <div>
        <VSwitch v-model="state.formjnsj.exists" inset color="primary" label="启用技能 1" messages="不启用时不会显示在展示页面" density="compact" />
        <SelectImage
          class="mt-4"
          :img="state.jnsjimg"
          title="技能 1 图标"
          @image-loaded="(data, base64) => { state.jnsjimg = data; state.formjnsj.imgdata = base64 }"
          @image-cleared="state.jnsjimg = ''; state.formjnsj.imgdata = ''"
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
            <VTextField v-model="state.formjnsj.sw1" color="primary" variant="outlined" label="名称" density="compact" />
            <VSelect v-model="state.formjnsj.jn" :items="['自动回复', '攻击回复', '受击回复', '被动技能']" color="primary" variant="outlined" label="技力回复方式" density="compact" />
            <VSelect v-model="state.formjnsj.fs" :items="['自动', '手动']" color="primary" variant="outlined" label="触发方式" density="compact" />
          </div>
          <template v-for="level of state.levels" :key="level.value">
            <div class="h-1px w-full bg-[#ddd]" />
            <VCardItem>
              <VCardSubtitle>
                {{ levelName(level.value) }}
              </VCardSubtitle>
            </VCardItem>
            <div class="h-1px w-full bg-[#ddd]" />
            <div class="px-4 pt-4">
              <VTextField v-model="level.inputs[0]" color="primary" variant="outlined" label="描述" density="compact" />
              <VTextField v-model="level.inputs[2]" color="primary" variant="outlined" label="技力值" density="compact" />
              <VTextField v-model="level.inputs[1]" color="primary" variant="outlined" label="初始技力" density="compact" />
              <VTextField v-model="level.inputs[3]" color="primary" variant="outlined" label="持续时间" density="compact" />
            </div>
          </template>
        </VCard>
      </div>
      <!-- 技能 2 -->
      <div>
        <VSwitch v-model="state.formjnsj1.exists" inset color="primary" label="启用技能 2" messages="不启用时不会显示在展示页面" density="compact" />
        <SelectImage
          class="mt-4"
          :img="state.jnsjimg1" title="技能 2 图标"
          @image-loaded="(data, base64) => { state.jnsjimg1 = data; state.formjnsj1.imgdata = base64 }"
          @image-cleared="state.jnsjimg1 = ''; state.formjnsj1.imgdata = ''"
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
            <VTextField v-model="state.formjnsj1.sw1" color="primary" variant="outlined" label="名称" density="compact" />
            <VSelect v-model="state.formjnsj1.jn" :items="['自动回复', '攻击回复', '受击回复', '被动技能']" color="primary" variant="outlined" label="技力回复方式" density="compact" />
            <VSelect v-model="state.formjnsj1.fs" :items="['自动', '手动']" color="primary" variant="outlined" label="触发方式" density="compact" />
          </div>
          <template v-for="level of state.levels1" :key="level.value">
            <div class="h-1px w-full bg-[#ddd]" />
            <VCardItem>
              <VCardSubtitle>
                {{ levelName(level.value) }}
              </VCardSubtitle>
            </VCardItem>
            <div class="h-1px w-full bg-[#ddd]" />
            <div class="px-4 pt-4">
              <VTextField v-model="level.inputs[0]" color="primary" variant="outlined" label="描述" density="compact" />
              <VTextField v-model="level.inputs[2]" color="primary" variant="outlined" label="技力值" density="compact" />
              <VTextField v-model="level.inputs[1]" color="primary" variant="outlined" label="初始技力" density="compact" />
              <VTextField v-model="level.inputs[3]" color="primary" variant="outlined" label="持续时间" density="compact" />
            </div>
          </template>
        </VCard>
      </div>
      <!-- 技能 3 -->
      <div>
        <VSwitch v-model="state.formjnsj2.exists" inset color="primary" label="启用技能 3" messages="不启用时不会显示在展示页面" density="compact" />
        <SelectImage
          class="mt-4"
          :img="state.jnsjimg2" title="技能 3 图标"
          @image-loaded="(data, base64) => { state.jnsjimg2 = data; state.formjnsj2.imgdata = base64 }"
          @image-cleared="state.jnsjimg2 = ''; state.formjnsj2.imgdata = ''"
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
            <VTextField v-model="state.formjnsj2.sw1" color="primary" variant="outlined" label="名称" density="compact" />
            <VSelect v-model="state.formjnsj2.jn" :items="['自动回复', '攻击回复', '受击回复', '被动技能']" color="primary" variant="outlined" label="技力回复方式" density="compact" />
            <VSelect v-model="state.formjnsj2.fs" :items="['自动', '手动']" color="primary" variant="outlined" label="触发方式" density="compact" />
          </div>
          <template v-for="level of state.levels2" :key="level.value">
            <div class="h-1px w-full bg-[#ddd]" />
            <VCardItem>
              <VCardSubtitle>
                {{ levelName(level.value) }}
              </VCardSubtitle>
            </VCardItem>
            <div class="h-1px w-full bg-[#ddd]" />
            <div class="px-4 pt-4">
              <VTextField v-model="level.inputs[0]" color="primary" variant="outlined" label="描述" density="compact" />
              <VTextField v-model="level.inputs[2]" color="primary" variant="outlined" label="技力值" density="compact" />
              <VTextField v-model="level.inputs[1]" color="primary" variant="outlined" label="初始技力" density="compact" />
              <VTextField v-model="level.inputs[3]" color="primary" variant="outlined" label="持续时间" density="compact" />
            </div>
          </template>
        </VCard>
      </div>
    </div>
  </div>
</template>
