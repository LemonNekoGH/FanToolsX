<!-- 综合记录 -->
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useState } from '../store/index'

const { state } = storeToRefs(useState())
</script>

<template>
  <div class="all_box">
    <div class="title_box">
      <div class="title">
        综合记录
      </div>
      <div class="title_E">
        <span>///Comprehensive Record File</span>
      </div>
    </div>
    <div>
      <div class="flex">
        <span class="text-16px w-160px">物理强度：</span>
        <input v-model="state.formzhjl.wlqd" class="flex-1">
      </div>
      <div class="flex">
        <span class="text-16px w-160px">战场机动：</span>
        <input v-model="state.formzhjl.zcjd" class="flex-1">
      </div>
      <div class="flex">
        <span class="text-16px w-160px">生理耐受：</span>
        <input v-model="state.formzhjl.slns" class="flex-1">
      </div>
      <div class="flex">
        <span class="text-16px w-160px">战斗规划：</span>
        <input v-model="state.formzhjl.zdgh" class="flex-1">
      </div>
      <div class="flex">
        <span class="text-16px w-160px">战斗技巧：</span>
        <input v-model="state.formzhjl.zdjq" class="flex-1">
      </div>
      <div class="flex">
        <span class="text-16px w-160px">源石技艺适应性：</span>
        <input v-model="state.formzhjl.ysjy" class="flex-1">
      </div>
      <div>
        <div class="text-16px">
          综合体检测试附加数据：
        </div>
        <textarea
          v-model="state.formzhjl.zhtcfj"
          type="textarea"
          class="w-full"
        />
      </div>
      <div>
        <div class="text-16px">
          客观履历：
        </div>
        <textarea
          v-model="state.formzhjl.kgll"
          type="textarea"
          class="w-full"
        />
      </div>
      <div>
        <div class="text-16px">
          临床诊断分析：
        </div>
        <textarea
          v-model="state.formzhjl.lcfx"
          type="textarea"
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>

  <style>
  .title_box_zhjl {
    width: 6.375rem;
  }
  .right_zhji {
    width: 68%;
    font-size: 21px;
    color: #000;
  }
  .right span{
   display: block;
   margin-bottom: .125rem;
  }
</style>
