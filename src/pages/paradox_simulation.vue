<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { VTextField, VTextarea } from 'vuetify/lib/components/index.mjs'
import { useState } from '../store'

const { state } = storeToRefs(useState())
</script>

<template>
  <div class="w-full h-full bg-white box-shadow box-border p-4">
    <div class="title_box">
      <div class="title">
        悖论模拟
      </div>
      <div class="title_E">
        <span>///Paradox Simulation</span>
      </div>
    </div>
    <VTextField v-model="state.Paradox[0]" class="mt-4" variant="outlined" color="primary" label="标题" density="compact" />
    <VTextarea v-model="state.Paradox[1]" variant="outlined" color="primary" label="描述" density="compact" />
  </div>
</template>

    <style>
  .title_box_blmn {
    width: 5.2rem;
  }
.blmn{
  margin-top: .1875rem;
}
  </style>
