<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { VCard, VCardItem, VCardTitle, VTextField } from 'vuetify/components'
import { useState } from '../store'

const { state } = storeToRefs(useState())
</script>

<template>
  <div class="p-4">
    <div class="title_box">
      <div class="title">
        语音资料
      </div>
      <div class="title_E">
        <span>///Operator's Voice</span>
      </div>
    </div>
    <VCard variant="outlined" class="mt-4 border-[#bbb]">
      <VCardItem>
        <VCardTitle class="text-black">
          CV 档案
        </VCardTitle>
      </VCardItem>
      <div class="h-1px w-full bg-[#ddd]" />
      <div class="px-4 pt-4">
        <VTextField v-model="state.CV[0]" variant="outlined" color="primary" label="中文配音" density="compact" />
        <VTextField v-model="state.CV[1]" variant="outlined" color="primary" label="英文配音" density="compact" />
        <VTextField v-model="state.CV[2]" variant="outlined" color="primary" label="日文配音" density="compact" />
        <VTextField v-model="state.CV[3]" variant="outlined" color="primary" label="特殊配音" density="compact" />
      </div>
    </VCard>
    <VCard variant="outlined" class="mt-4 border-[#bbb]">
      <VCardItem>
        <VCardTitle class="text-black">
          语音内容
        </VCardTitle>
      </VCardItem>
      <div class="h-1px w-full bg-[#ddd]" />
      <div class="px-4 pt-4">
        <VTextField v-model="state.Voice[0]" variant="outlined" color="primary" label="任命助理" density="compact" />
        <VTextField v-model="state.Voice[1]" variant="outlined" color="primary" label="交谈 1" density="compact" />
        <VTextField v-model="state.Voice[2]" variant="outlined" color="primary" label="交谈 2" density="compact" />
        <VTextField v-model="state.Voice[3]" variant="outlined" color="primary" label="交谈 3" density="compact" />
        <VTextField v-model="state.Voice[4]" variant="outlined" color="primary" label="晋升交谈 1" density="compact" />
        <VTextField v-model="state.Voice[5]" variant="outlined" color="primary" label="晋升交谈 2" density="compact" />
        <VTextField v-model="state.Voice[6]" variant="outlined" color="primary" label="信赖提升后交谈 1" density="compact" />
        <VTextField v-model="state.Voice[7]" variant="outlined" color="primary" label="信赖提升后交谈 2" density="compact" />
        <VTextField v-model="state.Voice[8]" variant="outlined" color="primary" label="信赖提升后交谈 3" density="compact" />
        <VTextField v-model="state.Voice[9]" variant="outlined" color="primary" label="闲置" density="compact" />
        <VTextField v-model="state.Voice[10]" variant="outlined" color="primary" label="干员报道" density="compact" />
        <VTextField v-model="state.Voice[11]" variant="outlined" color="primary" label="升级" density="compact" />
        <VTextField v-model="state.Voice[12]" variant="outlined" color="primary" label="精英 1" density="compact" />
        <VTextField v-model="state.Voice[13]" variant="outlined" color="primary" label="精英 2" density="compact" />
        <VTextField v-model="state.Voice[14]" variant="outlined" color="primary" label="编入队伍" density="compact" />
        <VTextField v-model="state.Voice[15]" variant="outlined" color="primary" label="任命队长" density="compact" />
        <VTextField v-model="state.Voice[16]" variant="outlined" color="primary" label="行动出发" density="compact" />
        <VTextField v-model="state.Voice[17]" variant="outlined" color="primary" label="行动开始" density="compact" />
        <VTextField v-model="state.Voice[18]" variant="outlined" color="primary" label="选中 1" density="compact" />
        <VTextField v-model="state.Voice[19]" variant="outlined" color="primary" label="选中 2" density="compact" />
        <VTextField v-model="state.Voice[20]" variant="outlined" color="primary" label="部署 1" density="compact" />
        <VTextField v-model="state.Voice[21]" variant="outlined" color="primary" label="部署 2" density="compact" />
        <VTextField v-model="state.Voice[22]" variant="outlined" color="primary" label="作战 1" density="compact" />
        <VTextField v-model="state.Voice[23]" variant="outlined" color="primary" label="作战 2" density="compact" />
        <VTextField v-model="state.Voice[24]" variant="outlined" color="primary" label="作战 3" density="compact" />
        <VTextField v-model="state.Voice[25]" variant="outlined" color="primary" label="作战 4" density="compact" />
        <VTextField v-model="state.Voice[26]" variant="outlined" color="primary" label="完成高难度关卡" density="compact" />
        <VTextField v-model="state.Voice[27]" variant="outlined" color="primary" label="三星结束" density="compact" />
        <VTextField v-model="state.Voice[28]" variant="outlined" color="primary" label="非三星结束" density="compact" />
        <VTextField v-model="state.Voice[29]" variant="outlined" color="primary" label="行动失败" density="compact" />
        <VTextField v-model="state.Voice[30]" variant="outlined" color="primary" label="进驻设施" density="compact" />
        <VTextField v-model="state.Voice[31]" variant="outlined" color="primary" label="戳一下" density="compact" />
        <VTextField v-model="state.Voice[32]" variant="outlined" color="primary" label="信赖触摸" density="compact" />
        <VTextField v-model="state.Voice[33]" variant="outlined" color="primary" label="问候" density="compact" />
        <VTextField v-model="state.Voice[34]" variant="outlined" color="primary" label="标题" density="compact" />
      </div>
    </VCard>
  </div>
</template>
