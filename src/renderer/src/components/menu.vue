<script lang="ts" setup>
import { VDivider, VList, VListItem, VNavigationDrawer } from 'vuetify/components'
import { useDisplay } from 'vuetify/framework'
import { storeToRefs } from 'pinia'
import { useState } from '../store'
import { getVersionName } from '../utils/platform'

defineProps<{
  showNav: boolean
  lastCacheTime: string
}>()

const emit = defineEmits<{
  (e: 'stateChanged', val: boolean): void
  (e: 'load'): void
  (e: 'save'): void
  (e: 'reset'): void
  (e: 'preview'): void
}>()

const { state } = storeToRefs(useState())

const nav = [
  {
    id: 1,
    name: '基础档案',
    path: '/',
  },
  {
    id: 2,
    name: '综合记录',
    path: '/comprehensive_record_file',
  },
  {
    id: 3,
    name: '档案资料',
    path: '/archive',
  },
  {
    id: 4,
    name: '晋升记录',
    path: '/elevate_record',
  },
  {
    id: 5,
    name: '语音资料',
    path: '/voices',
  },
  {
    id: 6,
    name: '干员密录',
    path: '/story',
  },
  {
    id: 7,
    name: '悖论模拟',
    path: '/paradox_simulation',
  },
  {
    id: 8,
    name: '基础数值',
    path: '/attributes',
  },
  {
    id: 9,
    name: '技能数据',
    path: '/skills',
  },
  {
    id: 10,
    name: '天赋与模组',
    path: '/talents',
  },
]

const display = useDisplay()
function updateModelValue(val: boolean) {
  emit('stateChanged', val)
}
</script>

<template>
  <VNavigationDrawer :temporary="display.mobile.value" :model-value="showNav" @update:model-value="updateModelValue">
    <div v-if="display.mobile.value" class="p-4">
      <div>当前编辑：{{ state.BasicdataText[1] || '新干员' }}</div>
      <div class="mr-4">
        <p>上次缓存</p>
        <code>{{ lastCacheTime }}</code>
      </div>
    </div>
    <template v-if="display.mobile.value">
      <VDivider />
      <VList nav color="primary">
        <VListItem prepend-icon="mdi-trash-can" title="清空" density="compact" @click="emit('reset')" />
        <VListItem prepend-icon="mdi-folder-open" title="导入" density="compact" @click="emit('load')" />
        <VListItem prepend-icon="mdi-download" title="导出" density="compact" @click="emit('save')" />
        <VListItem prepend-icon="mdi-camera" title="预览" density="compact" @click="emit('preview')" />
      </VList>
    </template>
    <div v-if="display.mobile.value">
      <VDivider />
      <div class="text-gray text-12px p-8px">
        <code>版本：{{ getVersionName() }}</code>
      </div>
    </div>
    <VDivider />
    <VList nav color="primary">
      <VListItem v-for="item in nav" :key="item.id" nav :title="item.name" :to="item.path" density="compact" prepend-icon="mdi-star-outline" />
    </VList>
    <div v-if="!display.mobile.value">
      <VDivider />
      <div class="text-gray text-12px p-8px">
        <code>版本：{{ getVersionName() }}</code>
      </div>
    </div>
  </VNavigationDrawer>
</template>

<style>
.el-menu {
  overflow-x: hidden;
  border-right: none;
}
.el-submenu__title i {
  color: #888;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}
.el-menu-item span {
  font-size: 15px;
  text-align: center;
  margin-left: 13px;
  line-height: 65px;
  color: #888;
  font-weight: 700;
}
.el-menu-item {
  height: 65px;
}
.el-menu--collapse {
  width: 80px;
}
</style>
