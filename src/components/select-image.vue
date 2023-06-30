<script setup lang="ts">
import { VBtn, VCard, VCardActions, VCardItem, VCardSubtitle, VCardTitle } from 'vuetify/lib/components/index.mjs'
import { loadFile, removeBase64DataUrlPrefix } from '../utils/file'
import defaultImg from '../assets/img/方舟干员_一图流模板-bkg.png'

defineProps<{
  img: string
  title: string
  subtitle?: string
  width: string
  height: string
}>()

const emit = defineEmits<{
  (e: 'imageLoaded', imgData: string, img: string): void
  (e: 'imageCleared'): void
}>()

async function loadImg() {
  const imgDataUrl = await loadFile('image/png,image/jpg,image/jpeg,image/webp,image/svg')
  const imgPureBase64 = removeBase64DataUrlPrefix(imgDataUrl)
  emit('imageLoaded', imgDataUrl, imgPureBase64)
}

function clearImg(e: MouseEvent) {
  e.stopPropagation()
  emit('imageCleared')
}
</script>

<template>
  <VCard variant="outlined" color="#bbb" class="w-full">
    <VCardItem>
      <VCardTitle class="text-black">
        {{ title }}
      </VCardTitle>
      <VCardSubtitle v-if="subtitle" class="text-black">
        {{ subtitle }}
      </VCardSubtitle>
    </VCardItem>
    <div class="h-1px w-full bg-[#ddd]" />
    <div
      class="hover-to-reselect text-center cursor-pointer !bg-center !bg-contain !bg-no-repeat w-full h-full"
      :style="{ backgroundImage: `url(${img})`, width, height }"
      @click="loadImg"
    >
      <div
        class="flex gap-y-16px justify-center reselect items-center flex-col w-full h-full text-black"
      >
        {{ img && img !== defaultImg ? '' : '未选择' }}
      </div>
    </div>
    <div class="h-1px w-full bg-[#bbb]" />
    <VCardActions>
      <VBtn variant="text" color="primary" class="bg-white outline-none border-1px border-black/10 border-solid" @click="loadImg">
        选择
      </VBtn>
      <VBtn v-if="img && img !== defaultImg" variant="text" color="primary" class="bg-white outline-none border-1px cursor-pointer border-black/10 border-solid" @click="clearImg">
        移除
      </VBtn>
    </VCardActions>
  </VCard>
</template>
