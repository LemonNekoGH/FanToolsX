<script lang="ts" setup>
import NavMenu from './components/menu.vue'

import { saveFile } from './utils/file'
import { useState } from './store'

const state = useState()

function save() {
  const data = JSON.stringify(state)
  const blob = new Blob([data], { type: 'application/json' })
  const fileName = 'operator.akf'
  saveFile(blob, fileName)
}

function daochuform() {
  const data = JSON.stringify(state)
  const blob = new Blob([data], { type: 'application/json' })
  const fileName = 'myData.json'
  saveFile(blob, fileName)
}
</script>

<template>
  <header class="h-90px bg-[#0072ff] fixed w-full">
    <div class="flex nav_box">
      <div class="nav_logo">
        <img src="./assets/img/logo.png" alt="">
      </div>

      <div class="flex text-white">
        <span>正在编辑的干员：<span>{{ state.state.formzcda.dh }}</span></span>
      </div>
      <!-- 按钮 -->
      <div class="flex nav_an">
        <i class="el-icon-success" style="font-size: 0.5rem; color: #fff" />
        <i
          class="el-icon-success" style="font-size: 0.5rem; color: #fff; cursor: pointer"
          @click="daochuform()"
        />
        <i
          class="el-icon-folder-add"
          style="font-size: 0.5rem; color: #fff; cursor: pointer"
          @click="save()"
        />
        <!-- <div class="qxbc">请先<br />保存</div> -->
        <router-link to="/main">
          <i
            class="el-icon-camera"
            style="font-size: 0.5rem; color: #fff; cursor: pointer"
          />
        </router-link>
        <i
          class="el-icon-question"
          style="font-size: 0.5rem; color: #fff"
        />
      </div>
    </div>
  </header>

  <div class="mt-90px flex h-full">
    <div class="w-180px">
      <NavMenu />
    </div>

    <div class="bg-[#e7ebf0] flex-1">
      <router-view />
    </div>
  </div>
</template>

<style>
.flex {
  display: flex;
}
.nav_logo {
  padding: 0 0.1875rem;
  width: 3.75rem;
  height: 80%;
  align-items: center;
  border-left: 2px solid blue;
  border-right: 2px solid blue;
}
.nav_box {
  height: 100%;
  justify-content: space-between;
}
.nav_logo > img {
  width: 100%;
  max-height: 100%;
}
.nav_box {
  align-items: center;
}
.nav_name {
  width: 50%;
  margin-left: 0.25rem;
}
.nav_name span {
  font-size: 0.4375rem;
  color: #fff;
  font-weight: 600;
  display: block;
  width: calc(90%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.nav_name p {
  font-size: 0.175rem;
  color: #fff;
  margin-right: 0.125rem;
}
.nav_time {
  font-size: 0.175rem;
  color: #fff;
  line-height: 0.375rem;
}
.nav_time p {
  margin: 0;
}
.nav_an {
  align-items: center;
  padding-left: 0.125rem;
}
.nav_an i {
  margin: 0.125rem;
}
.qxbc {
  width: 0.375rem;
  height: 0.375rem;
  color: #fff;
  font-size: 0.175rem;
  white-space: nowrap;
}
</style>
