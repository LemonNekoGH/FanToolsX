<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useState } from '../store'
import { loadFile, removeBase64DataUrlPrefix } from '../utils/file'

const { state } = storeToRefs(useState())

async function loadImg(type: 'logo' | 'avatar') {
  const img = await loadFile('image/png,image/jpg,image/jpeg,image/webp,image/svg')
  const removedPrefix = removeBase64DataUrlPrefix(img)
  if (type === 'logo') {
    state.value.formdazl.imgdata = img
    state.value.dazlimgdata = removedPrefix
  }
  else {
    state.value.formdazl.imgdata_t = img
    state.value.dazlimgdata_t = removedPrefix
  }
}
</script>

<template>
  <div class="all_box">
    <div class="title_box title_box_dazl">
      <div class="title">
        档案资料
      </div>
      <div class="title_E">
        <span>///Profile Data</span>
      </div>
    </div>
    <div class="form_box">
      <div class="upload_da">
        <div class="top_upload_da">
          <div class="upload_img_box">
            <div class="upload_img" @click="loadImg('logo')">
              <img v-if="state.formdazl.imgdata" :src="state.formdazl.imgdata" alt="">
            </div>
            <span>//请使用长宽比1:1并带有ALPHA的png图标//</span>
          </div>
        </div>
        <div class="top_upload_da">
          <div class="upload_img_box">
            <div class="upload_img" @click="loadImg('avatar')">
              <img v-if="state.formdazl.imgdata_t" :src="state.formdazl.imgdata_t" alt="">
            </div>
            <span class="upload_img_tx">//请使用长宽比1:1的头像//</span>
          </div>
        </div>
      </div>
      <div class="formdata">
        <div>
          <span>档案资料1：</span>
          <input
            v-model="state.formdazl.dazl1"
            type="textarea"
            :rows="4"
          >
        </div>
        <div>
          <span>档案资料2：</span>
          <input
            v-model="state.formdazl.dazl2"
            type="textarea"
            :rows="4"
          >
        </div>
        <div>
          <span>档案资料3：</span>
          <input
            v-model="state.formdazl.dazl3"
            type="textarea"
            :rows="4"
          >
        </div>
        <div>
          <span>档案资料4：</span>
          <input
            v-model="state.formdazl.dazl4"
            type="textarea"
            :rows="4"
          >
        </div>
        <div>
          <span>附加资料：</span>
          <input
            v-model="state.formdazl.fjzl"
            type="textarea"
            :rows="4"
          >
        </div>
      </div>
    </div>
  </div>
</template>

  <style>
.title_box_dazl {
  width: 4.5rem;
}
.upload_da{
    display: flex;
}
.top_upload_da{
    display: flex;
    align-items: stretch;
}
.upload_dazl{
    width: 1.6125rem;
    height: .4375rem;
    box-shadow: 0 2px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
    cursor: pointer;
    text-align: center;
    line-height: .4375rem;
    font-size: .225rem;
    color: #000;
}
.upload_img{
    width: 2.35rem;
    height: 2.0375rem;
    box-shadow:2px 2px 2px 2px rgb(0 0 0 / 23%), 0 0 6px rgb(0 0 0 / 4%);
}
.upload_img img{
    width: 100%;
    height: 100%;
}
.upload_img_box{
    margin-left: .3125rem;
}
.upload_img_box span{
    font-size: .1625rem;
    color: #888686;
    text-align: center;
    margin-left: -0.5375rem;
    margin-top: .12rem;
    display: block;
}
.upload_img_tx{
    margin-left: .025rem !important;
}
.form_box{
    margin-top: .25rem;
    margin-left: .1875rem;
}
.formdata{
    margin-top: .1875rem;
}
</style>
