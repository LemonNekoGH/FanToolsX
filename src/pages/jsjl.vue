<script setup lang="ts">
import { useState } from '../store'

const state = useState()
</script>

<template>
  <div class="w-full h-full bg-white box-shadow box-border p-4">
    <div class="title_box title_box_dazl">
      <div class="title">
        晋升记录
      </div>
      <div class="title_E">
        <span>///Elevate Record</span>
      </div>
    </div>
    <div class="form_box jsjl_from">
      <div class="formdata">
        <el-form
          :inline="true"
          :model="formjsjl"
          class="demo-form-inline"
          label-width="135px"
          label-position="left"
        >
          <el-form-item>
            <span slot="label">
              <span>晋升记录：</span>
            </span>
            <el-input v-model="formjsjl.jsjl" type="textarea" :rows="5" />
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style>
.title_box_dazl {
  width: 4.5rem;
}
.jsjl_from {
  margin-top: 0.25rem;
  margin-left: 0.1875rem;
}
</style>
