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
        <VTextField v-model="state.formyyzl_top.zwpy" variant="outlined" color="primary" label="中文配音" density="compact" />
        <VTextField v-model="state.formyyzl_top.ywpy" variant="outlined" color="primary" label="英文配音" density="compact" />
        <VTextField v-model="state.formyyzl_top.rwpy" variant="outlined" color="primary" label="日文配音" density="compact" />
        <VTextField v-model="state.formyyzl_top.tspy" variant="outlined" color="primary" label="特殊配音" density="compact" />
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
        <VTextField v-model="state.formyyzl.rmzl" variant="outlined" color="primary" label="任命助理" density="compact" />
        <VTextField v-model="state.formyyzl.jt1" variant="outlined" color="primary" label="交谈 1" density="compact" />
        <VTextField v-model="state.formyyzl.jt2" variant="outlined" color="primary" label="交谈 2" density="compact" />
        <VTextField v-model="state.formyyzl.jt3" variant="outlined" color="primary" label="交谈 3" density="compact" />
        <VTextField v-model="state.formyyzl.jsjt1" variant="outlined" color="primary" label="晋升交谈 1" density="compact" />
        <VTextField v-model="state.formyyzl.jsjt2" variant="outlined" color="primary" label="晋升交谈 2" density="compact" />
        <VTextField v-model="state.formyyzl.xljt1" variant="outlined" color="primary" label="信赖提升后交谈 1" density="compact" />
        <VTextField v-model="state.formyyzl.xljt2" variant="outlined" color="primary" label="信赖提升后交谈 2" density="compact" />
        <VTextField v-model="state.formyyzl.xljt3" variant="outlined" color="primary" label="信赖提升后交谈 3" density="compact" />
        <VTextField v-model="state.formyyzl.xz" variant="outlined" color="primary" label="闲置" density="compact" />
        <VTextField v-model="state.formyyzl.gybd" variant="outlined" color="primary" label="干员报道" density="compact" />
        <VTextField v-model="state.formyyzl.sj" variant="outlined" color="primary" label="升级" density="compact" />
        <VTextField v-model="state.formyyzl.jy1" variant="outlined" color="primary" label="精英 1" density="compact" />
        <VTextField v-model="state.formyyzl.jy2" variant="outlined" color="primary" label="精英 2" density="compact" />
        <VTextField v-model="state.formyyzl.brdw" variant="outlined" color="primary" label="编入队伍" density="compact" />
        <VTextField v-model="state.formyyzl.rmdz" variant="outlined" color="primary" label="任命队长" density="compact" />
        <VTextField v-model="state.formyyzl.xdcf" variant="outlined" color="primary" label="行动出发" density="compact" />
        <VTextField v-model="state.formyyzl.xdks" variant="outlined" color="primary" label="行动开始" density="compact" />
        <VTextField v-model="state.formyyzl.xz1" variant="outlined" color="primary" label="选中 1" density="compact" />
        <VTextField v-model="state.formyyzl.xz2" variant="outlined" color="primary" label="选中 2" density="compact" />
        <VTextField v-model="state.formyyzl.bs1" variant="outlined" color="primary" label="部署 1" density="compact" />
        <VTextField v-model="state.formyyzl.bs2" variant="outlined" color="primary" label="部署 2" density="compact" />
        <VTextField v-model="state.formyyzl.zz1" variant="outlined" color="primary" label="作战 1" density="compact" />
        <VTextField v-model="state.formyyzl.zz2" variant="outlined" color="primary" label="作战 2" density="compact" />
        <VTextField v-model="state.formyyzl.zz3" variant="outlined" color="primary" label="作战 3" density="compact" />
        <VTextField v-model="state.formyyzl.zz4" variant="outlined" color="primary" label="作战 4" density="compact" />
        <VTextField v-model="state.formyyzl.ndgk" variant="outlined" color="primary" label="完成高难度关卡" density="compact" />
        <VTextField v-model="state.formyyzl.sxjs" variant="outlined" color="primary" label="三星结束" density="compact" />
        <VTextField v-model="state.formyyzl.fsxjs" variant="outlined" color="primary" label="非三星结束" density="compact" />
        <VTextField v-model="state.formyyzl.xdsb" variant="outlined" color="primary" label="行动失败" density="compact" />
        <VTextField v-model="state.formyyzl.jzss" variant="outlined" color="primary" label="进驻设施" density="compact" />
        <VTextField v-model="state.formyyzl.cyx" variant="outlined" color="primary" label="戳一下" density="compact" />
        <VTextField v-model="state.formyyzl.xlcm" variant="outlined" color="primary" label="信赖触摸" density="compact" />
        <VTextField v-model="state.formyyzl.wh" variant="outlined" color="primary" label="问候" density="compact" />
        <VTextField v-model="state.formyyzl.bt" variant="outlined" color="primary" label="标题" density="compact" />
      </div>
    </VCard>
  </div>
</template>
