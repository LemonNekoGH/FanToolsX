<script setup lang="ts">
import { VCard, VCardItem, VCardSubtitle, VCardTitle, VSelect, VTextField } from 'vuetify/components'
import { storeToRefs } from 'pinia'
import { useState } from '../store'

const { state } = storeToRefs(useState())
</script>

<template>
  <div class="w-full h-full p-4">
    <div class="title_box">
      <div class="title">
        基础数值
      </div>
      <div class="title_E">
        <span>///Attribute</span>
      </div>
    </div>
    <VCard variant="outlined" class="mt-4 border-[#bbb]">
      <VCardItem>
        <VCardTitle class="text-black">
          数值
        </VCardTitle>
      </VCardItem>
      <div class="h-1px w-full bg-[#ddd]" />
      <VCardItem>
        <VCardSubtitle class="text-black">
          基础
        </VCardSubtitle>
      </VCardItem>
      <div class="h-1px w-full bg-[#ddd]" />
      <div class="px-4 pt-4">
        <VTextField v-model="state.formjcs1.zbs" variant="outlined" color="primary" label="再部署" density="compact" />
        <VTextField v-model="state.formjcs1.zds" variant="outlined" color="primary" label="阻挡数" density="compact" />
        <VTextField v-model="state.formjcs1.jg" variant="outlined" color="primary" label="攻击间隔" density="compact" />
        <VTextField v-model="state.formjcs2.smz" variant="outlined" color="primary" label="生命值" density="compact" />
        <VTextField v-model="state.formjcs2.gjl" variant="outlined" color="primary" label="攻击力" density="compact" />
        <VTextField v-model="state.formjcs2.fy1" variant="outlined" color="primary" label="防御力" density="compact" />
        <VTextField v-model="state.formjcs2.kx" variant="outlined" color="primary" label="法术抗性" density="compact" />
      </div>
      <div class="h-1px w-full bg-[#ddd]" />
      <VCardItem>
        <VCardSubtitle class="text-black">
          满信赖加成
        </VCardSubtitle>
      </VCardItem>
      <div class="h-1px w-full bg-[#ddd]" />
      <div class="px-4 pt-4">
        <VTextField v-model="state.formjcs2.xlsmz" variant="outlined" color="primary" label="生命值" density="compact" />
        <VTextField v-model="state.formjcs2.xlgjl" variant="outlined" color="primary" label="攻击力" density="compact" />
        <VTextField v-model="state.formjcs2.xlfy1" variant="outlined" color="primary" label="防御力" density="compact" />
        <VTextField v-model="state.formjcs2.xlkx" variant="outlined" color="primary" label="法术抗性" density="compact" />
      </div>
      <div class="h-1px w-full bg-[#ddd]" />
      <VCardItem>
        <VCardSubtitle class="text-black">
          费用
        </VCardSubtitle>
      </VCardItem>
      <div class="h-1px w-full bg-[#ddd]" />
      <div class="px-4 pt-4">
        <VTextField v-model="state.formjcs2.fy1" variant="outlined" color="primary" label="精英 1" density="compact" />
        <VTextField v-model="state.formjcs2.fy2" variant="outlined" color="primary" label="精英 2" density="compact" />
        <VTextField v-model="state.formjcs2.fy3" variant="outlined" color="primary" label="精英 3" density="compact" />
      </div>
    </VCard>
    <VCard variant="outlined" class="mt-4 border-[#bbb]">
      <VCardItem>
        <VCardTitle class="text-black">
          特殊属性
        </VCardTitle>
      </VCardItem>
      <div class="h-1px w-full bg-[#ddd]" />
      <div class="px-4 pt-4">
        <VSelect
          v-model="state.formjcs1.zy"
          variant="outlined"
          color="primary"
          label="职业"
          density="compact"
          :items="['近卫', '狙击', '特种', '先锋', '医疗', '术师', '辅助', '重装']"
        />
        <VTextField v-model="state.formjcs1.fz" variant="outlined" color="primary" label="分支" density="compact" />
        <VTextField v-model="state.formjcs1.bq" variant="outlined" color="primary" label="标签" density="compact" />
        <VTextField v-model="state.formjcs1.bq" variant="outlined" color="primary" label="站位" density="compact" />
      </div>
    </VCard>
  </div>
</template>
