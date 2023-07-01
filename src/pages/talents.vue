<script setup lang="ts">
import { VCard, VCardItem, VCardSubtitle, VCardTitle, VSelect, VTextField, VTextarea } from 'vuetify/components'
import { storeToRefs } from 'pinia'
import { useDisplay } from 'vuetify/framework'
import SelectImage from '../components/select-image.vue'
import { useState } from '../store'

const { state } = storeToRefs(useState())
const display = useDisplay()
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
          :img="state.tfmzimg"
          title="分支图标"
          @image-loaded="(data, base64) => { state.tfmzimg = data; state.formtfmz.imgdata = base64 }"
          @image-cleared="state.tfmzimg = ''; state.formtfmz.imgdata = ''"
        />
        <VCard variant="outlined" class="mt-4 border-[#bbb]">
          <VCardItem>
            <VCardTitle>
              天赋
            </VCardTitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.formtfmz.tx" color="primary" variant="outlined" label="特性" density="compact" />
            <VTextarea v-model="state.formtfmz.txms" color="primary" variant="outlined" label="特性描述" density="compact" />
          </div>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              天赋 1
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.formtfmz.tf1" color="primary" variant="outlined" label="名称" density="compact" />
            <VTextField v-model="state.formtfmz.tfx1" color="primary" variant="outlined" label="描述" density="compact" />
            <VTextarea v-model="state.formtfmz.tf1ms" color="primary" variant="outlined" label="详细描述" density="compact" />
          </div>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              天赋 2
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.formtfmz.tf2" color="primary" variant="outlined" label="名称" density="compact" />
            <VTextField v-model="state.formtfmz.tfx2" color="primary" variant="outlined" label="描述" density="compact" />
            <VTextarea v-model="state.formtfmz.tf2ms" color="primary" variant="outlined" label="详细描述" density="compact" />
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
          :img="state.mzsjimg"
          title="模组 1 图片"
          @image-loaded="(data, base64) => { state.mzsjimg = data; state.formmzsj.imgdata = base64 }"
          @image-cleared="state.mzsjimg = ''; state.formmzsj.imgdata = ''"
        />
        <SelectImage
          class="mt-4"
          :img="state.mzsjimg1"
          title="模组 1 图标"
          @image-loaded="(data, base64) => { state.mzsjimg1 = data; state.formmzsj.imgdata1 = base64 }"
          @image-cleared="state.mzsjimg1 = ''; state.formmzsj.imgdata1 = ''"
        />
        <VCard variant="outlined" class="mt-4 border-[#bbb]">
          <VCardItem>
            <VCardTitle>
              模组 1
            </VCardTitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.formmzsj.mzmc" color="primary" variant="outlined" label="名称" density="compact" />
            <div class="flex gap-x-4">
              <VTextField v-model="state.formmzsj.mzbh1" color="primary" variant="outlined" label="编号前缀" density="compact" />
              <div>
                _
              </div>
              <VTextField v-model="state.formmzsj.mzbh2" color="primary" variant="outlined" label="编号后缀" density="compact" />
            </div>
            <VSelect v-model="state.mzsjxz.x" :items="['攻速', '攻击', '防御', '生命值']" color="primary" variant="outlined" label="被加成数值名称 1" density="compact" />
            <VSelect v-model="state.mzsjxz.y" :items="['攻速', '攻击', '防御', '生命值']" color="primary" variant="outlined" label="被加成数值名称 2" density="compact" />
            <VSelect v-model="state.mzsjxz.z" :items="['攻速', '攻击', '防御', '生命值']" color="primary" variant="outlined" label="被加成数值名称 3" density="compact" />
          </div>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              STAGE.I
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.formstadta.sta1" color="primary" variant="outlined" label="加成值 1" density="compact" />
            <VTextField v-model="state.formstadta.sta2" color="primary" variant="outlined" label="加成值 2" density="compact" />
            <VTextField v-model="state.formstadta.sta3" color="primary" variant="outlined" label="加成值 3" density="compact" />
            <VTextField v-model="state.formstadta.sta4" color="primary" variant="outlined" label="天赋效果改动" density="compact" />
          </div>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              STAGE.II
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.formstadta.sta5" color="primary" variant="outlined" label="加成值 1" density="compact" />
            <VTextField v-model="state.formstadta.sta6" color="primary" variant="outlined" label="加成值 2" density="compact" />
            <VTextField v-model="state.formstadta.sta7" color="primary" variant="outlined" label="加成值 3" density="compact" />
            <VTextField v-model="state.formstadta.sta8" color="primary" variant="outlined" label="天赋效果改动" density="compact" />
          </div>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              STAGE.III
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.formstadta.sta9" color="primary" variant="outlined" label="加成值 1" density="compact" />
            <VTextField v-model="state.formstadta.sta10" color="primary" variant="outlined" label="加成值 2" density="compact" />
            <VTextField v-model="state.formstadta.sta11" color="primary" variant="outlined" label="加成值 3" density="compact" />
            <VTextField v-model="state.formstadta.sta12" color="primary" variant="outlined" label="天赋效果改动" density="compact" />
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
          :img="state.mzsjimg2"
          title="模组 2 图片"
          @image-loaded="(data, base64) => { state.mzsjimg = data; state.formmzsj.imgdata = base64 }"
          @image-cleared="state.mzsjimg3 = ''; state.formmzsj.imgdata = ''"
        />
        <SelectImage
          class="mt-4"
          :img="state.mzsjimg3"
          title="模组 2 图标"
          @image-loaded="(data, base64) => { state.mzsjimg1 = data; state.formmzsj1.imgdata1 = base64 }"
          @image-cleared="state.mzsjimg3 = ''; state.formmzsj1.imgdata1 = ''"
        />
        <VCard variant="outlined" class="mt-4 border-[#bbb]">
          <VCardItem>
            <VCardTitle>
              模组 2
            </VCardTitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.formmzsj1.mzmc" color="primary" variant="outlined" label="名称" density="compact" />
            <div class="flex gap-x-4">
              <VTextField v-model="state.formmzsj1.mzbh1" color="primary" variant="outlined" label="编号前缀" density="compact" />
              <div>
                _
              </div>
              <VTextField v-model="state.formmzsj1.mzbh2" color="primary" variant="outlined" label="编号后缀" density="compact" />
            </div>
            <VSelect v-model="state.mzsjxz1.x" :items="['攻速', '攻击', '防御', '生命值']" color="primary" variant="outlined" label="被加成数值名称 1" density="compact" />
            <VSelect v-model="state.mzsjxz1.y" :items="['攻速', '攻击', '防御', '生命值']" color="primary" variant="outlined" label="被加成数值名称 2" density="compact" />
            <VSelect v-model="state.mzsjxz1.z" :items="['攻速', '攻击', '防御', '生命值']" color="primary" variant="outlined" label="被加成数值名称 3" density="compact" />
          </div>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              STAGE.I
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.formstadta1.sta1" color="primary" variant="outlined" label="加成值 1" density="compact" />
            <VTextField v-model="state.formstadta1.sta2" color="primary" variant="outlined" label="加成值 2" density="compact" />
            <VTextField v-model="state.formstadta1.sta3" color="primary" variant="outlined" label="加成值 3" density="compact" />
            <VTextField v-model="state.formstadta1.sta4" color="primary" variant="outlined" label="天赋效果改动" density="compact" />
          </div>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              STAGE.II
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.formstadta1.sta5" color="primary" variant="outlined" label="加成值 1" density="compact" />
            <VTextField v-model="state.formstadta1.sta6" color="primary" variant="outlined" label="加成值 2" density="compact" />
            <VTextField v-model="state.formstadta1.sta7" color="primary" variant="outlined" label="加成值 3" density="compact" />
            <VTextField v-model="state.formstadta1.sta8" color="primary" variant="outlined" label="天赋效果改动" density="compact" />
          </div>
          <div class="h-1px w-full bg-[#ddd]" />
          <VCardItem>
            <VCardSubtitle>
              STAGE.III
            </VCardSubtitle>
          </VCardItem>
          <div class="h-1px w-full bg-[#ddd]" />
          <div class="px-4 pt-4">
            <VTextField v-model="state.formstadta1.sta9" color="primary" variant="outlined" label="加成值 1" density="compact" />
            <VTextField v-model="state.formstadta1.sta10" color="primary" variant="outlined" label="加成值 2" density="compact" />
            <VTextField v-model="state.formstadta1.sta11" color="primary" variant="outlined" label="加成值 3" density="compact" />
            <VTextField v-model="state.formstadta1.sta12" color="primary" variant="outlined" label="天赋效果改动" density="compact" />
          </div>
        </VCard>
      </div>
    </div>
  </div>
</template>
