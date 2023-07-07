<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { VCard, VCardItem, VCardTitle, VSwitch, VTextField } from 'vuetify/components'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import { useState } from '../store'
import SelectImage from '../components/select-image.vue'

const { state } = storeToRefs(useState())
const display = useDisplay()
</script>

<template>
  <div class="w-full h-full p-4">
    <div class="title_box">
      <div class="title">
        干员密录
      </div>
      <div class="title_E">
        <span>///Operator's Story</span>
      </div>
    </div>
    <div id="story-switch">
      <VSwitch v-model="state.Story[2]" inset label="启用干员密录 2" color="primary" />
    </div>
    <VCard variant="outlined" class="border-[#bbb]">
      <VCardItem>
        <VCardTitle class="text-black">
          干员密录 1
        </VCardTitle>
      </VCardItem>
      <div class="h-1px w-full bg-[#ddd]" />
      <div class="px-4 pt-4">
        <VTextField v-model="state.Story[3]" variant="outlined" color="primary" label="标题" density="compact" />
        <VTextField v-model="state.Story[4]" variant="outlined" color="primary" label="副标题" density="compact" />
      </div>
    </VCard>
    <VCard v-if="state.Story[2] !== 'false'" variant="outlined" class="mt-4 border-[#bbb]">
      <VCardItem>
        <VCardTitle class="text-black">
          干员密录 2
        </VCardTitle>
      </VCardItem>
      <div class="h-1px w-full bg-[#ddd]" />
      <div class="px-4 pt-4">
        <VTextField v-model="state.Story[5]" variant="outlined" color="primary" label="标题" density="compact" />
        <VTextField v-model="state.Story[6]" variant="outlined" color="primary" label="副标题" density="compact" />
      </div>
    </VCard>
    <div
      class="mt-4" :class="{
        'flex gap-x-16px w-max': !display.mobile.value,
        '!w-full': display.mobile.value,
      }"
    >
      <SelectImage
        to-load="StoryImgForWeb"
        title="干员密录 1 蚀刻章"
        subtitle="请使用长宽比 1:1 并带有透明的的图片"
        :img="state.StoryImgForWeb"
        @image-loaded="(data, base64) => { state.StoryImgForWeb = data; state.Story[0] = base64 }"
        @image-cleared="state.StoryImgForWeb = '';state.Story[0] = ''"
      />
      <SelectImage
        v-if="state.Story[2] !== 'false'"
        :class="{
          'mt-4': display.mobile.value,
        }"
        to-load="StoryImg2ForWeb"
        title="干员密录 2 蚀刻章"
        subtitle="请使用长宽比 1:1 并带有透明的的图片"
        :img="state.StoryImg2ForWeb"
        @image-loaded="(data, base64) => { state.StoryImg2ForWeb = data; state.Story[1] = base64 }"
        @image-cleared="state.StoryImg2ForWeb = '';state.Story[1] = ''"
      />
    </div>
  </div>
</template>

<style lang="less">
#story-switch {
  .v-input__details {
    display: none !important;;
  }
}
</style>
