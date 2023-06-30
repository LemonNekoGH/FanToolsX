<script setup lang="ts">
import { useState } from '../store'

const state = useState()
</script>

<template>
  <div class="w-full h-full bg-white box-shadow box-border p-4">
    <div>
      <div class="title">
        晋升记录
      </div>
      <div class="title_E">
        <span>///Elevate Record</span>
      </div>
    </div>
    <div class="form_box jsjl_from">
      <div>晋升记录：</div>
      <textarea v-model="state.state.formjsjl" class="w-full" rows="15" />
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
