<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { VTextField, VTextarea } from 'vuetify/components'
import { useState } from '../store'
import SelectImage from '../components/select-image.vue'

const { state } = storeToRefs(useState())
</script>

<template>
  <div class="p-4">
    <div class="title_box">
      <div class="text-16px">
        基础档案
      </div>
      <div class="title_E">
        <span>&nbsp;&nbsp;///Basic Data</span>
      </div>
    </div>
    <SelectImage
      class="mt-4"
      title="立绘"
      hint="选择"
      to-load="BasicDataImgForWeb"
      :img="state.BasicDataImgForWeb"
      @image-cleared="state.BasicDataImgForWeb = '';state.BasicdataText[0] = ''"
      @image-loaded="(data, base64) => { state.BasicDataImgForWeb = data; state.BasicdataText[0] = base64 }"
    />
    <div class="mt-4">
      <VTextField v-model="state.BasicdataText[1]" color="primary" variant="outlined" label="代号" density="compact" />
      <VTextField v-model="state.BasicdataText[2]" color="primary" variant="outlined" label="英文代号" density="compact" />
      <VTextField v-model="state.BasicdataText[3]" color="primary" variant="outlined" label="性别" density="compact" />
      <VTextField v-model="state.BasicdataText[4]" color="primary" variant="outlined" label="战斗经验" density="compact" />
      <VTextField v-model="state.BasicdataText[5]" color="primary" variant="outlined" label="出身地" density="compact" />
      <VTextField v-model="state.BasicdataText[6]" color="primary" variant="outlined" label="生日" density="compact" />
      <VTextField v-model="state.BasicdataText[7]" color="primary" variant="outlined" label="种族" density="compact" />
      <VTextField v-model="state.BasicdataText[8]" color="primary" variant="outlined" label="身高" density="compact" />
      <VTextField v-model="state.BasicdataText[9]" color="primary" variant="outlined" label="画师" density="compact" />
      <VTextarea v-model="state.BasicdataText[10]" color="primary" variant="outlined" label="矿石感染情况" density="compact" />
      <VTextarea v-model="state.BasicdataText[11]" color="primary" variant="outlined" label="附加数据" density="compact" />
    </div>
  </div>
</template>

<style lang="less">
.upload {
  width: 1.8125rem;
  height: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.225rem;
  color: #000;
  font-weight: 400;
  margin-right: 0.375rem;
}

.img_box img {
  width: 100%;
  height: 100%;
}

.right_jcda {
  display: flex;
  justify-content: space-between;
}
</style>
