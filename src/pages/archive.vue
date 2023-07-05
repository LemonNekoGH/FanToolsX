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
        'flex gap-x-16px': !display.mobile.value,
        '!w-full': display.mobile.value,
      }"
    >
      <SelectImage
        title="阵营图标"
        subtitle="请使用长宽比 1:1 并带有透明度的的图标"
        :img="state.ProfLogoForWeb"
        to-load="ProfLogoForWeb"
        @image-loaded="(data, base64) => { state.ProfLogoForWeb = data; state.ProfDat[0] = base64 }"
        @image-cleared="state.ProfLogoForWeb = '';state.ProfDat[0] = ''"
      />
      <SelectImage
        title="头像"
        subtitle="请使用长宽比 1:1 的头像"
        :class="{
          'mt-4': display.mobile.value,
        }"
        to-load="ProfAvatarForWeb"
        :img="state.ProfAvatarForWeb"
        @image-loaded="(data, base64) => { state.ProfAvatarForWeb = data; state.ProfDat[1] = base64 }"
        @image-cleared="state.ProfAvatarForWeb = '';state.ProfDat[1] = ''"
      />
    </div>
    <div class="mt-4">
      <VTextarea v-model="state.ProfDat[2]" color="primary" variant="outlined" label="档案资料1" density="compact" />
      <VTextarea v-model="state.ProfDat[3]" color="primary" variant="outlined" label="档案资料2" density="compact" />
      <VTextarea v-model="state.ProfDat[4]" color="primary" variant="outlined" label="档案资料3" density="compact" />
      <VTextarea v-model="state.ProfDat[5]" color="primary" variant="outlined" label="档案资料4" density="compact" />
      <VTextarea v-model="state.ProfDat[6]" color="primary" variant="outlined" label="附加资料" density="compact" />
    </div>
  </div>
</template>
