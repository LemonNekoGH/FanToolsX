<script setup lang="ts">
import { VBtn, VCard, VCardActions, VCardItem, VCardSubtitle, VCardTitle, VIcon, VImg } from 'vuetify/lib/components/index.mjs'
import { loadFile, removeBase64DataUrlPrefix } from '../utils/file'
import defaultImg from '../assets/img/no_image.png'

const props = defineProps<{
  img: string
  title: string
  subtitle?: string
  toLoad: LoadingKey // 在 Android 上调用时并不会马上返回值，而是调用回调，所以无法直接通过 emit 来提醒父组件图片更新了，只能用全局变量来告诉回调，应该更新哪个值
}>()

const emit = defineEmits<{
  (e: 'imageLoaded', imgData: string, img: string): void
  (e: 'imageCleared'): void
}>()

async function loadImg() {
  const imgDataUrl = await loadFile('image/*', props.toLoad)
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
    <VImg :src="img" :lazy-src="defaultImg" :aspect-ratio="1">
      <template #placeholder>
        <div class="w-full h-full flex justify-center items-center">
          <VIcon icon="mdi-alert-box" color="white" size="48" />
        </div>
      </template>
    </VImg>
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
