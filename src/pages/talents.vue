<script setup lang="ts">
import { VCard, VCardItem, VCardSubtitle, VCardTitle, VSelect, VTextField, VTextarea } from 'vuetify/components'
import { storeToRefs } from 'pinia'
import { useDisplay } from 'vuetify/framework'
import { computed } from 'vue'
import SelectImage from '../components/select-image.vue'
import { useState } from '../store'

const { state } = storeToRefs(useState())
const display = useDisplay()
const buffItems = ['攻速', '攻击', '防御', '生命值'] as const
const mod1BuffValue1 = computed<(typeof buffItems)[number]>({
  get: () => buffItems[state.value.Mod1AddiType.x],
  set: val => buffItems.find(it => it === val)!,
})
const mod1BuffValue2 = computed<(typeof buffItems)[number]>({
  get: () => buffItems[state.value.Mod1AddiType.x],
  set: val => buffItems.find(it => it === val)!,
})
const mod1BuffValue3 = computed<(typeof buffItems)[number]>({
  get: () => buffItems[state.value.Mod1AddiType.x],
  set: val => buffItems.find(it => it === val)!,
})
const mod2BuffValue1 = computed<(typeof buffItems)[number]>({
  get: () => buffItems[state.value.Mod1AddiType.x],
  set: val => buffItems.find(it => it === val)!,
})
const mod2BuffValue2 = computed<(typeof buffItems)[number]>({
  get: () => buffItems[state.value.Mod1AddiType.x],
  set: val => buffItems.find(it => it === val)!,
})
const mod2BuffValue3 = computed<(typeof buffItems)[number]>({
  get: () => buffItems[state.value.Mod1AddiType.x],
  set: val => buffItems.find(it => it === val)!,
})
</script>

<template>
  <div class="w-full h-full p-4">
    <div class="title_box">
      <div class="title">
        天赋与模组
      </div>
      <div class="title_E">
        <span>///Talents</span>
      </div>
    </div>
    <div
      class="mt-4 w-full" :class="{
        'flex gap-x-16px': !display.mobile.value,
      }"
    >
      <div :class="[display.mobile.value ? '' : 'w-360px']">
        <SelectImage
          :img="state.AbilityImage"
          title="分支图标"
          @image-loaded="(data, base64) => { state.AbilityImage = data; state.AbilityData[7] = base64 }"
          @image-cleared="state.AbilityImage = ''; state.AbilityData[7] = ''"
        />
        <VCard variant="outlined" class="mt-4 border-[#bbb]">
          <VCardItem>
            <VCardTitle>
              天赋
            </VCardTitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.AbilityData[0]" color="primary" variant="outlined" label="特性" density="compact" />
            <VTextarea v-model="state.AbilityData[1]" color="primary" variant="outlined" label="特性描述" density="compact" />
          </div>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              天赋 1
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.AbilityData[2]" color="primary" variant="outlined" label="名称" density="compact" />
            <VTextField v-model="state.AbilityData[3]" color="primary" variant="outlined" label="描述" density="compact" />
          </div>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              天赋 2
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.AbilityData[4]" color="primary" variant="outlined" label="名称" density="compact" />
            <VTextField v-model="state.AbilityData[5]" color="primary" variant="outlined" label="描述" density="compact" />
          </div>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextarea v-model="state.AbilityData[6]" color="primary" variant="outlined" label="天赋描述" density="compact" />
          </div>
        </VCard>
      </div>
      <div
        :class="{
          'mt-4': display.mobile.value,
          'w-360px': !display.mobile.value,
        }"
      >
        <SelectImage
          :img="state.Mod1ImgForWeb"
          title="模组 1 图片"
          @image-loaded="(data, base64) => { state.Mod1ImgForWeb = data; state.Mod1[1] = base64 }"
          @image-cleared="state.Mod1ImgForWeb = ''; state.Mod1[1] = ''"
        />
        <SelectImage
          class="mt-4"
          :img="state.Mod1IconForWeb"
          title="模组 1 图标"
          @image-loaded="(data, base64) => { state.Mod1IconForWeb = data; state.Mod1[0] = base64 }"
          @image-cleared="state.Mod1IconForWeb = ''; state.Mod1[0] = ''"
        />
        <VCard variant="outlined" class="mt-4 border-[#bbb]">
          <VCardItem>
            <VCardTitle>
              模组 1
            </VCardTitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.Mod1[2]" color="primary" variant="outlined" label="名称" density="compact" />
            <div class="flex gap-x-4">
              <VTextField v-model="state.Mod1[3]" color="primary" variant="outlined" label="编号前缀" density="compact" />
              <div>
                _
              </div>
              <VTextField v-model="state.Mod1[4]" color="primary" variant="outlined" label="编号后缀" density="compact" />
            </div>
            <VSelect v-model="mod1BuffValue1" :items="buffItems" color="primary" variant="outlined" label="被加成数值名称 1" density="compact" />
            <VSelect v-model="mod1BuffValue2" :items="buffItems" color="primary" variant="outlined" label="被加成数值名称 2" density="compact" />
            <VSelect v-model="mod1BuffValue3" :items="buffItems" color="primary" variant="outlined" label="被加成数值名称 3" density="compact" />
          </div>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              STAGE.I
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.Mod1AddiStr[0]" color="primary" variant="outlined" label="加成值 1" density="compact" />
            <VTextField v-model="state.Mod1AddiStr[1]" color="primary" variant="outlined" label="加成值 2" density="compact" />
            <VTextField v-model="state.Mod1AddiStr[2]" color="primary" variant="outlined" label="加成值 3" density="compact" />
            <VTextField v-model="state.Mod1AddiStr[3]" color="primary" variant="outlined" label="天赋效果改动" density="compact" />
          </div>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              STAGE.II
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.Mod1AddiStr[4]" color="primary" variant="outlined" label="加成值 1" density="compact" />
            <VTextField v-model="state.Mod1AddiStr[5]" color="primary" variant="outlined" label="加成值 2" density="compact" />
            <VTextField v-model="state.Mod1AddiStr[6]" color="primary" variant="outlined" label="加成值 3" density="compact" />
            <VTextField v-model="state.Mod1AddiStr[7]" color="primary" variant="outlined" label="天赋效果改动" density="compact" />
          </div>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              STAGE.III
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.Mod1AddiStr[8]" color="primary" variant="outlined" label="加成值 1" density="compact" />
            <VTextField v-model="state.Mod1AddiStr[9]" color="primary" variant="outlined" label="加成值 2" density="compact" />
            <VTextField v-model="state.Mod1AddiStr[10]" color="primary" variant="outlined" label="加成值 3" density="compact" />
            <VTextField v-model="state.Mod1AddiStr[11]" color="primary" variant="outlined" label="天赋效果改动" density="compact" />
          </div>
        </VCard>
      </div>
      <div
        :class="{
          'mt-4': display.mobile.value,
          'w-360px': !display.mobile.value,
        }"
      >
        <SelectImage
          :img="state.Mod2ImgForWeb"
          title="模组 2 图片"
          @image-loaded="(data, base64) => { state.Mod2ImgForWeb = data; state.Mod2[1] = base64 }"
          @image-cleared="state.Mod2ImgForWeb = ''; state.Mod2[1] = ''"
        />
        <SelectImage
          class="mt-4"
          :img="state.Mod2IconForWeb"
          title="模组 2 图标"
          @image-loaded="(data, base64) => { state.Mod2IconForWeb = data; state.Mod2[0] = base64 }"
          @image-cleared="state.Mod2IconForWeb = ''; state.Mod2[0] = ''"
        />
        <VCard variant="outlined" class="mt-4 border-[#bbb]">
          <VCardItem>
            <VCardTitle>
              模组 2
            </VCardTitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.Mod2[2]" color="primary" variant="outlined" label="名称" density="compact" />
            <div class="flex gap-x-4">
              <VTextField v-model="state.Mod2[3]" color="primary" variant="outlined" label="编号前缀" density="compact" />
              <div>
                _
              </div>
              <VTextField v-model="state.Mod2[4]" color="primary" variant="outlined" label="编号后缀" density="compact" />
            </div>
            <VSelect v-model="mod2BuffValue1" :items="buffItems" color="primary" variant="outlined" label="被加成数值名称 1" density="compact" />
            <VSelect v-model="mod2BuffValue2" :items="buffItems" color="primary" variant="outlined" label="被加成数值名称 2" density="compact" />
            <VSelect v-model="mod2BuffValue3" :items="buffItems" color="primary" variant="outlined" label="被加成数值名称 3" density="compact" />
          </div>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              STAGE.I
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.Mod2AddiStr[0]" color="primary" variant="outlined" label="加成值 1" density="compact" />
            <VTextField v-model="state.Mod2AddiStr[1]" color="primary" variant="outlined" label="加成值 2" density="compact" />
            <VTextField v-model="state.Mod2AddiStr[2]" color="primary" variant="outlined" label="加成值 3" density="compact" />
            <VTextField v-model="state.Mod2AddiStr[3]" color="primary" variant="outlined" label="天赋效果改动" density="compact" />
          </div>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              STAGE.II
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.Mod2AddiStr[4]" color="primary" variant="outlined" label="加成值 1" density="compact" />
            <VTextField v-model="state.Mod2AddiStr[5]" color="primary" variant="outlined" label="加成值 2" density="compact" />
            <VTextField v-model="state.Mod2AddiStr[6]" color="primary" variant="outlined" label="加成值 3" density="compact" />
            <VTextField v-model="state.Mod2AddiStr[7]" color="primary" variant="outlined" label="天赋效果改动" density="compact" />
          </div>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              STAGE.III
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.Mod2AddiStr[8]" color="primary" variant="outlined" label="加成值 1" density="compact" />
            <VTextField v-model="state.Mod2AddiStr[9]" color="primary" variant="outlined" label="加成值 2" density="compact" />
            <VTextField v-model="state.Mod2AddiStr[10]" color="primary" variant="outlined" label="加成值 3" density="compact" />
            <VTextField v-model="state.Mod2AddiStr[11]" color="primary" variant="outlined" label="天赋效果改动" density="compact" />
          </div>
        </VCard>
      </div>
    </div>
  </div>
</template>
