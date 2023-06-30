<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { VList, VListItem, VNavigationDrawer } from 'vuetify/components'

const route = useRoute()

const nav = [
  {
    id: 1,
    name: '基础档案',
    path: '/basic_data',
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
    path: '/yyzl',
  },
  {
    id: 6,
    name: '干员密录',
    path: '/gyml',
  },
  {
    id: 7,
    name: '悖论模拟',
    path: '/blmn',
  },
  {
    id: 8,
    name: '基础数值',
    path: '/jcsz',
  },
  {
    id: 9,
    name: '技能数据',
    path: '/jnsj',
  },
  {
    id: 10,
    name: '天赋模组',
    path: '/tfmz',
  },
]
</script>

<template>
  <VNavigationDrawer>
    <VList nav>
      <VListItem v-for="item in nav" :key="item.id" nav :title="item.name" :to="item.path" density="compact" />
    </VList>
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
