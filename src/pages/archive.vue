<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { VTextarea } from 'vuetify/lib/components/index.mjs'
import { useState } from '../store'
import { loadFile, removeBase64DataUrlPrefix } from '../utils/file'
import SelectImage from '../components/select-image.vue'

const { state } = storeToRefs(useState())

async function loadImg(type: 'logo' | 'avatar') {
  const img = await loadFile('image/png,image/jpg,image/jpeg,image/webp,image/svg')
  const removedPrefix = removeBase64DataUrlPrefix(img)
  if (type === 'logo') {
    state.value.formdazl.imgdata = img
    state.value.dazlimgdata = removedPrefix
  }
  else {
    state.value.formdazl.imgdata_t = img
    state.value.dazlimgdata_t = removedPrefix
  }
}
</script>

<template>
  <div class="w-full h-full bg-white box-border p-4">
    <div class="title_box">
      <div class="title">
        档案资料
      </div>
      <div class="title_E">
        <span>///Profile Data</span>
      </div>
    </div>
    <div class="flex gap-x-16px w-max mt-4">
      <SelectImage
        title="图标"
        subtitle="请使用长宽比 1:1 并带有透明的的图标"
        width="360px"
        height="360px"
        hint="选择"
        :img="state.dazlimgdata"
        @image-loaded="(data, base64) => { state.dazlimgdata = data; state.formdazl.imgdata = base64 }"
        @image-cleared="state.dazlimgdata = '';state.formdazl.imgdata = ''"
      />
      <SelectImage
        title="头像"
        subtitle="请使用长宽比 1:1 的头像"
        width="360px"
        height="360px"
        hint="选择"
        :img="state.dazlimgdata_t"
        @image-loaded="(data, base64) => { state.dazlimgdata_t = data; state.formdazl.imgdata_t = base64 }"
        @image-cleared="state.dazlimgdata_t = '';state.formdazl.imgdata_t = ''"
      />
    </div>
    <div class="mt-4">
      <VTextarea v-model="state.formdazl.dazl1" color="primary" variant="outlined" label="档案资料1" density="compact" />
      <VTextarea v-model="state.formdazl.dazl2" color="primary" variant="outlined" label="档案资料2" density="compact" />
      <VTextarea v-model="state.formdazl.dazl3" color="primary" variant="outlined" label="档案资料3" density="compact" />
      <VTextarea v-model="state.formdazl.dazl4" color="primary" variant="outlined" label="档案资料4" density="compact" />
      <VTextarea v-model="state.formdazl.fjzl" color="primary" variant="outlined" label="附加资料" density="compact" />
    </div>
  </div>
</template>
