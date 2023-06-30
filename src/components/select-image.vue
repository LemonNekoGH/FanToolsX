<script setup lang="ts">
import { VBtn, VCard, VCardItem, VCardSubtitle, VCardTitle } from 'vuetify/lib/components/index.mjs'
import { loadFile, removeBase64DataUrlPrefix } from '../utils/file'
import defaultImg from '../assets/img/方舟干员_一图流模板-bkg.png'

defineProps<{
  img: string
  hint: string
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
        class="flex gap-y-16px justify-center reselect items-center flex-col w-full h-full" :class="{
          'bg-black/50': img && img !== defaultImg,
          'text-white': img && img !== defaultImg,
          'opacity-0': img && img !== defaultImg,
        }"
      >
        <VBtn variant="text" color="primary" class="bg-white outline-none border-1px pointer-events-none border-black/10 border-solid" @click="clearImg">
          {{ hint }}
        </VBtn>
        <VBtn v-if="img && img !== defaultImg" variant="text" color="primary" class="bg-white outline-none border-1px cursor-pointer border-black/10 border-solid" @click="clearImg">
          移除
        </VBtn>
      </div>
    </div>
  </VCard>
</template>

<style lang="less">
.hover-to-reselect {
  .reselect {
    transition-property: opacity;
    transition-duration: 250ms;
  }

  &:hover {
    .reselect {
      opacity: 1;
    }
  }
}
</style>
