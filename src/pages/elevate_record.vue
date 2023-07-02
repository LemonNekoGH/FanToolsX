<script setup lang="ts">
import { VTextarea } from 'vuetify/components'
import { useState } from '../store'

const state = useState()
</script>

<template>
  <div class="w-full h-full bg-white box-shadow box-border p-4">
    <div class="flex">
      <div class="title">
        晋升记录
      </div>
      <div class="title_E">
        <span>///Elevate Record</span>
      </div>
    </div>
    <VTextarea v-model="state.state.EliteRec" class="mt-4" color="primary" variant="outlined" label="晋升记录" />
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
