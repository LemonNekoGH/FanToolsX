<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      formzcda: state => state.formzcda,
      zcdaimg: state => state.zcdaimgdata,
    }),
    // ...mapGetters({
    //     a:'BasicdataText',
    // })
  },
  // computed: {
  //   ...mapState(['formzcda'])
  // },
  // computed: {
  //   formzcdadata() {
  //     return this.$store.state.formzcda;
  //   }
  // },
  mounted() {
    //  console.log(this.$store.getters.BasicdataText)
    // console.log(this.zcdaimg)
  },
  methods: {
    upload() {
      this.$refs.fileInput.click()
    },
    async handleFileChange(e) {
      const file = e.target.files[0]
      const base64Str = await this.changeFileIntoBase64(file)
      const base64Data = base64Str.replace(/^data:image\/\w+;base64,/, '')
      this.$store.state.zcdaimgdata = base64Str
      this.formzcda.imgdata = base64Data
    },

    changeFileIntoBase64(file) {
      return new Promise((resolve, reject) => {
        const fr = new FileReader()
        fr.readAsDataURL(file)
        fr.onload = (result) => {
          const base64Str = result.currentTarget.result
          resolve(base64Str)
        }
      })
    },
    // ===============================
  },
}
</script>

<template>
  <div class="all_box">
    <div class="title_box">
      <div class="title">
        基础档案
      </div>
      <div class="title_E">
        <span>///Basic Data</span>
      </div>
    </div>
    <div class="form_box">
      <div class="form">
        <div class="left">
          <el-form :inline="true" :model="formzcda" class="demo-form-inline" label-width="120px" label-position="left">
            <el-form-item>
              <span slot="label">
                <span>代号：</span>
              </span>
              <el-input v-model="formzcda.dh" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>英文代号：</span>
              </span>
              <el-input v-model="formzcda.ywdh" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>性别：</span>
              </span>
              <el-input v-model="formzcda.sex" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>战斗经验：</span>
              </span>
              <el-input v-model="formzcda.zdjy" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>出生地：</span>
              </span>
              <el-input v-model="formzcda.csd" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>生日：</span>
              </span>
              <el-input v-model="formzcda.sr" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>种族：</span>
              </span>
              <el-input v-model="formzcda.zz" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>身高：</span>
              </span>
              <el-input v-model="formzcda.sg" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>画师：</span>
              </span>
              <el-input v-model="formzcda.hs" />
            </el-form-item>
          </el-form>
        </div>
        <div class="right right_jcda">
          <div class="upload" @click="upload()">
            <i class="el-icon-folder-add" /> 载入立绘
          </div>
          <input ref="fileInput" type="file" style="display: none" @change="handleFileChange">

          <div class="img_box">
            <img v-if="zcdaimg" :src="zcdaimg" alt="">
            <img v-else src="../assets/img/方舟干员_一图流模板-bkg.png" alt="">
          </div>
        </div>
      </div>
      <div class="foot">
        <el-form :inline="true" :model="formzcda" class="demo-form-inline" label-width="180px" label-position="left">
          <el-form-item>
            <span slot="label">
              <span>矿石感染情况：</span>
            </span>
            <el-input v-model="formzcda.ksgr" />
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span>附加数据：</span>
            </span>
            <el-input v-model="formzcda.fjsj" type="textarea" :rows="5" />
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style>
.upload {
  width: 1.8125rem;
  height: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.225rem;
  color: #000;
  font-weight: 400;
  margin-right: 0.375rem;
}

.img_box {
  width: 9.3rem;
  height: 6.25rem;
}

.img_box img {
  width: 100%;
  height: 100%;
}

.right_jcda {
  display: flex;
  justify-content: space-between;
}
</style>
