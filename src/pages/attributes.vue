<script setup lang="ts">
import { VCard, VCardItem, VCardSubtitle, VCardTitle, VCheckbox, VSelect, VSlider, VTextField, VTextarea } from 'vuetify/components'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useState } from '../store'

const { state } = storeToRefs(useState())

const professions = ['近卫', '狙击', '特种', '先锋', '医疗', '术师', '辅助', '重装'] as const
const profession = computed<(typeof professions)[number]>({
  set: val => state.value.BasedataA[7] = professions.find(it => it === val)!,
  get: () => professions[Number.parseInt(state.value.BasedataA[7])],
})
const star = computed<number>({
  set: val => state.value.BasedataA[6] = val.toString(),
  get: () => Number.parseInt(state.value.BasedataA[6]),
})
</script>

<template>
  <div class="w-full h-full p-4">
    <div class="title_box">
      <div class="title">
        基础数值
      </div>
      <div class="title_E">
        <span>///Attribute</span>
      </div>
    </div>
    <VCard variant="outlined" class="mt-4 border-[#bbb]">
      <VCardItem>
        <VCardTitle class="text-black">
          数值
        </VCardTitle>
      </VCardItem>
      <div class="h-1px w-full bg-[#ddd]" />
      <VCardItem>
        <VCardSubtitle class="text-black">
          基础
        </VCardSubtitle>
      </VCardItem>
      <div class="h-1px w-full bg-[#ddd]" />
      <div class="px-4 pt-4">
        <VTextField v-model="state.BasedataA[3]" variant="outlined" color="primary" label="再部署" density="compact" />
        <VTextField v-model="state.BasedataA[4]" variant="outlined" color="primary" label="阻挡数" density="compact" />
        <VTextField v-model="state.BasedataA[5]" variant="outlined" color="primary" label="攻击间隔" density="compact" />
        <VTextField v-model="state.BasedataB[0]" variant="outlined" color="primary" label="生命值" density="compact" />
        <VTextField v-model="state.BasedataB[1]" variant="outlined" color="primary" label="攻击力" density="compact" />
        <VTextField v-model="state.BasedataB[2]" variant="outlined" color="primary" label="防御力" density="compact" />
        <VTextField v-model="state.BasedataB[3]" variant="outlined" color="primary" label="法术抗性" density="compact" />
      </div>
      <div class="h-1px w-full bg-[#ddd]" />
      <VCardItem>
        <VCardSubtitle class="text-black">
          满信赖加成
        </VCardSubtitle>
      </VCardItem>
      <div class="h-1px w-full bg-[#ddd]" />
      <div class="px-4 pt-4">
        <VTextField v-model="state.BasedataB[4]" variant="outlined" color="primary" label="生命值" density="compact" />
        <VTextField v-model="state.BasedataB[5]" variant="outlined" color="primary" label="攻击力" density="compact" />
        <VTextField v-model="state.BasedataB[6]" variant="outlined" color="primary" label="防御力" density="compact" />
      </div>
      <div class="h-1px w-full bg-[#ddd]" />
      <VCardItem>
        <VCardSubtitle class="text-black">
          费用
        </VCardSubtitle>
      </VCardItem>
      <div class="h-1px w-full bg-[#ddd]" />
      <div class="px-4 pt-4">
        <VTextField v-model="state.BasedataB[7]" variant="outlined" color="primary" label="基础" density="compact" />
        <VTextField v-model="state.BasedataB[8]" variant="outlined" color="primary" label="精英 1" density="compact" />
        <VTextField v-model="state.BasedataB[9]" variant="outlined" color="primary" label="精英 2" density="compact" />
      </div>
    </VCard>
    <VCard variant="outlined" class="mt-4 border-[#bbb]">
      <VCardItem>
        <VCardTitle class="text-black">
          属性
        </VCardTitle>
      </VCardItem>
      <div class="h-1px w-full bg-[#ddd]" />
      <div class="px-4 pt-4">
        <VSelect
          v-model="profession"
          variant="outlined"
          color="primary"
          label="职业"
          density="compact"
          :items="professions"
        />
        <VTextField v-model="state.BasedataA[0]" variant="outlined" color="primary" label="分支" density="compact" />
        <VTextField v-model="state.BasedataA[2]" variant="outlined" color="primary" label="标签" density="compact" />
        <VTextField v-model="state.BasedataA[1]" variant="outlined" color="primary" label="站位" density="compact" />
        <VSlider v-model="star" min="1" max="6" step="1" :label="`星级：${star}`" color="primary" density="compact" />
      </div>
      <div class="h-1px w-full bg-[#ddd]" />
      <VCardItem>
        <VCardSubtitle class="text-black">
          攻击范围
        </VCardSubtitle>
      </VCardItem>
      <div class="h-1px w-full bg-[#ddd]" />
      <div class="grid scopes grid-cols-10 grid-items-start w-300px p-4">
        <VCheckbox v-for="(_, index) in Array(70)" :key="index" v-model="state.AttackRangeBol[index]" density="compact" color="primary" />
      </div>
    </VCard>
    <VCard variant="outlined" class="mt-4 border-[#bbb]">
      <VCardItem>
        <VCardTitle class="text-black">
          潜能
        </VCardTitle>
      </VCardItem>
      <div class="h-1px w-full bg-[#ddd]" />
      <div class="px-4 pt-4">
        <VTextField v-model="state.Poten[5]" variant="outlined" color="primary" label="获取方式" density="compact" />
      </div>
      <div class="h-1px w-full bg-[#ddd]" />
      <VCardItem>
        <VCardSubtitle class="text-black">
          加成效果
        </VCardSubtitle>
      </VCardItem>
      <div class="h-1px w-full bg-[#ddd]" />
      <div class="px-4 pt-4">
        <VTextField v-model="state.Poten[0]" variant="outlined" color="primary" label="潜能 2" density="compact" />
        <VTextField v-model="state.Poten[1]" variant="outlined" color="primary" label="潜能 3" density="compact" />
        <VTextField v-model="state.Poten[2]" variant="outlined" color="primary" label="潜能 4" density="compact" />
        <VTextField v-model="state.Poten[3]" variant="outlined" color="primary" label="潜能 5" density="compact" />
        <VTextField v-model="state.Poten[4]" variant="outlined" color="primary" label="潜能 6" density="compact" />
      </div>
      <div class="h-1px w-full bg-[#ddd]" />
      <VCardItem>
        <VCardSubtitle class="text-black">
          信物与合同
        </VCardSubtitle>
      </VCardItem>
      <div class="h-1px w-full bg-[#ddd]" />
      <div class="px-4 pt-4">
        <VTextarea v-model="state.Poten[6]" variant="outlined" color="primary" label="信物描述" density="compact" />
        <VTextarea v-model="state.Poten[7]" variant="outlined" color="primary" label="合同描述" density="compact" />
      </div>
    </VCard>
  </div>
</template>

<style lang="less">
.scopes {
  .v-input--density-compact {
    height: 28px;
    margin: 0;
    padding: 0;
  }
}
</style>
