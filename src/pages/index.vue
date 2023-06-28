<script>
import { saveAs } from 'file-saver'
import mainmenu from '../components/menu.vue'

export default {
  components: {
    Navmenu: mainmenu,
  },
  data() {
    return {
      navlist: [
        {
          id: 1,
          modname: '基础档案',
          subroutername: 'jcda',
          funicon: 'el-icon-star-off',
        },
        {
          id: 2,
          modname: '综合记录',
          subroutername: 'zhjl',
          funicon: 'el-icon-star-off',
        },
        {
          id: 3,
          modname: '档案资料',
          subroutername: 'dazl',
          funicon: 'el-icon-star-off',
        },
        {
          id: 4,
          modname: '晋升记录',
          subroutername: 'jsjl',
          funicon: 'el-icon-star-off',
        },
        {
          id: 5,
          modname: '语音资料',
          subroutername: 'yyzl',
          funicon: 'el-icon-star-off',
        },
        {
          id: 6,
          modname: '干员密录',
          subroutername: 'gyml',
          funicon: 'el-icon-star-off',
        },
        {
          id: 7,
          modname: '悖论模拟',
          subroutername: 'blmn',
          funicon: 'el-icon-star-off',
        },
        {
          id: 8,
          modname: '基础数值',
          subroutername: 'jcsz',
          funicon: 'el-icon-star-off',
        },
        {
          id: 9,
          modname: '技能数据',
          subroutername: 'jnsj',
          funicon: 'el-icon-star-off',
        },
        {
          id: 10,
          modname: '天赋模组',
          subroutername: 'tfmz',
          funicon: 'el-icon-star-off',
        },
      ],
    }
  },
  mounted() {},
  methods: {
    daochuform() {
      const data = JSON.stringify(this.$store.state)
      const blob = new Blob([data], { type: 'application/json' })
      const fileName = 'myData.json'
      saveAs(blob, fileName)
    },
    daochu() {
      //   console.log(this.$store.getters);
      const data = JSON.stringify(this.$store.getters)
      const blob = new Blob([data], { type: 'application/json' })
      const fileName = 'myData.AKF'
      saveAs(blob, fileName)
    },
  },
}
</script>

<template>
  <el-container>
    <el-header style="height: 90px; background: #0072ff">
      <div class="flex nav_box">
        <div class="nav_logo">
          <img src="../assets/img/logo.png" alt="">
        </div>

        <div class="flex nav_name">
          <p>当前</p>
          <span> 你是一个菲林啊 </span>
        </div>

        <div class="nav_time">
          <p>上次保存</p>
          <div>YYYY/MM/DD HH:MM:SS</div>
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
            @click="daochu()"
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
    </el-header>

    <el-container>
      <el-aside class="navcontent" width="auto">
        <Navmenu :menulist="navlist" />
      </el-aside>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
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
