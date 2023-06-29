<script lang="ts" setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const nav = [
  {
    id: 1,
    modname: '基础档案',
    subroutername: '/basic_data',
    funicon: 'el-icon-star-off',
  },
  {
    id: 2,
    modname: '综合记录',
    subroutername: '/zhjl',
    funicon: 'el-icon-star-off',
  },
  {
    id: 3,
    modname: '档案资料',
    subroutername: '/dazl',
    funicon: 'el-icon-star-off',
  },
  {
    id: 4,
    modname: '晋升记录',
    subroutername: '/jsjl',
    funicon: 'el-icon-star-off',
  },
  {
    id: 5,
    modname: '语音资料',
    subroutername: '/yyzl',
    funicon: 'el-icon-star-off',
  },
  {
    id: 6,
    modname: '干员密录',
    subroutername: '/gyml',
    funicon: 'el-icon-star-off',
  },
  {
    id: 7,
    modname: '悖论模拟',
    subroutername: '/blmn',
    funicon: 'el-icon-star-off',
  },
  {
    id: 8,
    modname: '基础数值',
    subroutername: '/jcsz',
    funicon: 'el-icon-star-off',
  },
  {
    id: 9,
    modname: '技能数据',
    subroutername: '/jnsj',
    funicon: 'el-icon-star-off',
  },
  {
    id: 10,
    modname: '天赋模组',
    subroutername: '/tfmz',
    funicon: 'el-icon-star-off',
  },
]
</script>

<template>
  <div
    v-for="item in nav"
    :key="item.id"
    class="h-65px flex justify-center items-center cursor-pointer hover:bg-[#ecf5ff] transition-colors duration-250ms"
    :class="{
      'bg-[#ecf5ff]': route.path === item.subroutername,
    }"
  >
    <RouterLink
      :to="item.subroutername"
      :index="item.subroutername"
    >
      <i :class="item.funicon" />
      <span class="text-[#303133]">{{ item.modname }}</span>
    </RouterLink>
  </div>
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
