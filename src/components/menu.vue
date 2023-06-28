<script>
export default {
  props: {
    menulist: {
      type: Array,
      default: [],
    },
    currentmenu: {
      type: String,
      default: 'jcda',
    },
  },
  data() {
    return {
      // activeId: "jcda", //当前的选中
    }
  },
  watch: {
    $route: {
      handler(val, oldval) {
        // this.activeId = val;
        // console.log(this.activeId);
      },

      // 深度观察监听

      deep: true,
    },
  },
  mounted() {
    // console.log(this.$route)
  },
}
</script>

<template>
  <div>
    <el-menu
      :router="true"
      :default-active="currentmenu"
      mode="vertical"
      class="el-menu-vertical-demo"
    >
      <el-menu-item
        v-for="item in menulist"
        :key="item.id"
        :index="item.subroutername"
      >
        <i :class="item.funicon" />
        <span slot="title">{{ item.modname }}</span>
      </el-menu-item>
    </el-menu>
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
