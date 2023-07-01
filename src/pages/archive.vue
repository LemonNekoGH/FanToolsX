<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { VTextarea } from 'vuetify/components'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import { useState } from '../store'
import SelectImage from '../components/select-image.vue'

const { state } = storeToRefs(useState())
const display = useDisplay()
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
    <div
      class="mt-4" :class="{
        'flex gap-x-16px w-max': !display.mobile.value,
        '!w-full': display.mobile.value,
      }"
    >
      <SelectImage
        title="图标"
        subtitle="请使用长宽比 1:1 并带有透明的的图标"
        hint="选择"
        :img="state.dazlimgdata"
        @image-loaded="(data, base64) => { state.dazlimgdata = data; state.formdazl.imgdata = base64 }"
        @image-cleared="state.dazlimgdata = '';state.formdazl.imgdata = ''"
      />
      <SelectImage
        title="头像"
        subtitle="请使用长宽比 1:1 的头像"
        hint="选择"
        :class="{
          'mt-4': display.mobile.value,
        }"
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
