<script setup lang="ts">
import { loadFile, removeBase64DataUrlPrefix } from '../utils/file'
import defaultImg from '../assets/img/方舟干员_一图流模板-bkg.png'

defineProps<{
  img: string
  hint: string
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
  <div
    class="hover-to-reselect border-1px border-black/10 border-solid text-center cursor-pointer !bg-center !bg-contain !bg-no-repeat"
    :style="{ backgroundImage: `url(${img})` }"
    @click="loadImg"
  >
    <div
      class="flex gap-y-16px justify-center reselect items-center flex-col w-full h-full" :class="{
        'bg-black/50': img && img !== defaultImg,
        'text-white': img && img !== defaultImg,
        'opacity-0': img && img !== defaultImg,
      }"
    >
      <div v-if="!img || img === defaultImg">
        {{ hint }}
      </div>
      <button v-if="img && img !== defaultImg" class="bg-white outline-none border-1px pointer-events-none border-black/10 border-solid" @click="clearImg">
        {{ hint }}
      </button>
      <button v-if="img && img !== defaultImg" class="bg-white outline-none border-1px cursor-pointer border-black/10 border-solid" @click="clearImg">
        移除
      </button>
    </div>
  </div>
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
