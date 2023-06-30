<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useState } from '../store'
import defaultImg from '../assets/img/方舟干员_一图流模板-bkg.png'
import { loadFile } from '../utils/file'

const { state } = storeToRefs(useState())

async function upload() {
  const base64Str = await loadFile('image/png,image/jpg,image/jpeg,image/webp,image/svg')
  const base64Data = base64Str.replace(/^data:image\/\w+;base64,/, '')
  state.value.zcdaimgdata = base64Str
  state.value.formzcda.imgdata = base64Data
}
</script>

<template>
  <div class="w-full h-full bg-white box-shadow box-border p-4">
    <div class="title_box">
      <div class="text-16px">
        基础档案
      </div>
      <div class="title_E">
        <span>&nbsp;&nbsp;///Basic Data</span>
      </div>
    </div>
    <div class="form_box">
      <div class="form gap-1rem">
        <form class="flex flex-1 flex-col justify-between h-360px">
          <div class="flex">
            <span class="w-120px text-16px">代号：</span>
            <input v-model="state.formzcda.dh" class="flex-1">
          </div>
          <div class="flex">
            <span class="w-120px text-16px">英文代号：</span>
            <input v-model="state.formzcda.ywdh" class="flex-1">
          </div>
          <div class="flex">
            <span class="w-120px text-16px">性别：</span>
            <input v-model="state.formzcda.sex" class="flex-1">
          </div>
          <div class="flex">
            <span class="w-120px text-16px">战斗经验：</span>
            <input v-model="state.formzcda.zdjy" class="flex-1">
          </div>
          <div class="flex">
            <span class="w-120px text-16px">出生地：</span>
            <input v-model="state.formzcda.csd" class="flex-1">
          </div>
          <div class="flex">
            <span class="w-120px text-16px">生日：</span>
            <input v-model="state.formzcda.sr" class="flex-1">
          </div>
          <div class="flex">
            <span class="w-120px text-16px">种族：</span>
            <input v-model="state.formzcda.zz" class="flex-1">
          </div>
          <div class="flex">
            <span class="w-120px text-16px">身高：</span>
            <input v-model="state.formzcda.sg" class="flex-1">
          </div>
          <div class="flex">
            <span class="w-120px text-16px">画师：</span>
            <input v-model="state.formzcda.hs" class="flex-1">
          </div>
        </form>
        <div
          v-if="state.zcdaimgdata"
          :style="{
            backgroundImage: `url(${state.zcdaimgdata})`,
          }"
          alt="" title="点击重新选择立绘"
          class="h-360px w-240px flex-shrink-0 cursor-pointer border-1px border-[#ddd] border-solid hover-to-reselect !bg-contain !bg-no-repeat !bg-center"
          @click="upload"
        >
          <div class="w-full h-full reselect bg-black/50 text-white transition-opacity flex justify-center items-center duration-250ms">
            重新载入立绘
          </div>
        </div>
        <div
          v-else
          class="h-360px flex-shrink-0 w-640px !bg-no-repeat cursor-pointer !bg-cover !bg-center flex justify-center items-center"
          :style="{
            backgroundImage: `url(${defaultImg})`,
          }" @click="upload"
        >
          载入立绘
        </div>
      </div>
      <div class="foot">
        <div>
          <div class="text-16px">
            矿石感染情况：
          </div>
          <textarea v-model="state.formzcda.ksgr" class="w-full" />
        </div>
        <div>
          <div class="text-16px">
            附加数据：
          </div>
          <textarea v-model="state.formzcda.fjsj" type="textarea" :rows="5" class="w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.upload {
  width: 1.8125rem;
  height: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.225rem;
  color: #000;
  font-weight: 400;
  margin-right: 0.375rem;
}

.img_box img {
  width: 100%;
  height: 100%;
}

.right_jcda {
  display: flex;
  justify-content: space-between;
}

.hover-to-reselect {
  .reselect {
    opacity: 0;
  }

  &:hover {
    .reselect {
      opacity: 1;
    }
  }
}
</style>
