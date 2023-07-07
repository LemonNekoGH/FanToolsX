<!-- 综合记录 -->
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { VTextField, VTextarea } from 'vuetify/components'
import { useState } from '../store/index'

const { state } = storeToRefs(useState())
</script>

<template>
  <div class="w-full h-full p-4">
    <div class="title_box">
      <div class="title">
        综合记录
      </div>
      <div class="title_E">
        <span>///Comprehensive Record File</span>
      </div>
    </div>
    <div class="mt-4">
      <VTextField v-model="state.CompRec[0]" color="primary" variant="outlined" label="物理强度" density="compact" />
      <VTextField v-model="state.CompRec[1]" color="primary" variant="outlined" label="战斗机动" density="compact" />
      <VTextField v-model="state.CompRec[2]" color="primary" variant="outlined" label="生理耐受" density="compact" />
      <VTextField v-model="state.CompRec[3]" color="primary" variant="outlined" label="战斗规划" density="compact" />
      <VTextField v-model="state.CompRec[4]" color="primary" variant="outlined" label="战斗技巧" density="compact" />
      <VTextField v-model="state.CompRec[5]" color="primary" variant="outlined" label="源石技艺适应性" density="compact" />
      <VTextarea v-model="state.CompRec[6]" color="primary" variant="outlined" label="客观履历" density="compact" />
      <VTextarea v-model="state.CompRec[7]" color="primary" variant="outlined" label="临床诊断分析" density="compact" />
      <VTextarea v-model="state.CompRec[8]" color="primary" variant="outlined" label="综合体检测试附加数据" density="compact" />
    </div>
  </div>
</template>
