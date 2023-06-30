<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { VTextField, VTextarea } from 'vuetify/components'
import { useState } from '../store'
import defaultImg from '../assets/img/方舟干员_一图流模板-bkg.png'
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
      class="h-360px flex-shrink-0 w-240px mt-4"
      hint="选择立绘"
      :img="state.zcdaimgdata || defaultImg"
      @image-cleared="state.zcdaimgdata = '';state.formzcda.imgdata = ''"
      @image-loaded="(data, base64) => { state.zcdaimgdata = data; state.formzcda.imgdata = base64 }"
    />
    <div class="mt-4">
      <VTextField v-model="state.formzcda.dh" variant="outlined" label="代号" density="compact" />
      <VTextField v-model="state.formzcda.dh" variant="outlined" label="英文代号" density="compact" />
      <VTextField v-model="state.formzcda.dh" variant="outlined" label="性别" density="compact" />
      <VTextField v-model="state.formzcda.dh" variant="outlined" label="战斗经验" density="compact" />
      <VTextField v-model="state.formzcda.dh" variant="outlined" label="出生地" density="compact" />
      <VTextField v-model="state.formzcda.dh" variant="outlined" label="生日" density="compact" />
      <VTextField v-model="state.formzcda.dh" variant="outlined" label="种族" density="compact" />
      <VTextField v-model="state.formzcda.dh" variant="outlined" label="身高" density="compact" />
      <VTextField v-model="state.formzcda.dh" variant="outlined" label="画师" density="compact" />
      <VTextarea v-model="state.formzcda.ksgr" variant="outlined" label="矿石感染情况" density="compact" />
      <VTextarea v-model="state.formzcda.fjsj" variant="outlined" label="附加数据" density="compact" />
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
