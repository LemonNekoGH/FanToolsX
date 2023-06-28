<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      formgyml: state => state.formgyml,
      gymlimgdata: state => state.gymlimgdata,
      gymlimgdata_t: state => state.gymlimgdata_t,

    }),
  },
  mounted() {
    //  console.log(this.$store.getters.Story)

  },
  methods: {
    upload(e) {
      if (e == 1)
        this.$refs.fileInput.click()
      else
        this.$refs.fileInput_t.click()
    },
    async handleFileChange(e) {
      // console.log(e);
      const file = e.target.files[0]
      const base64Str = await this.changeFileIntoBase64(file)
      const base64Data = base64Str.replace(/^data:image\/\w+;base64,/, '')
      // this.imgdata = base64Str
      this.$store.state.gymlimgdata = base64Str
      this.formgyml.imgdata = base64Data
    },
    async handleFileChange_t(e) {
      // console.log(e);
      const file = e.target.files[0]
      const base64Str = await this.changeFileIntoBase64(file)

      const base64Data = base64Str.replace(/^data:image\/\w+;base64,/, '')
      // this.imgdata = base64Str
      this.$store.state.gymlimgdata_t = base64Str
      this.formgyml.imgdata_t = base64Data
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
    <div class="title_box title_box_gyml">
      <div class="title">
        干员密录
      </div>
      <div class="title_E">
        <span>///Operator's Story</span>
      </div>
    </div>
    <div class="form_box">
      <div class="formdata formdata_gyml">
        <el-form
          :inline="true"
          :model="formgyml"
          class="demo-form-inline"
          label-width="200px"
          label-position="left"
        >
          <el-form-item>
            <span slot="label">
              <span>干员密录1标题：</span>
            </span>
            <el-input v-model="formgyml.gyml1" />
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span>干员密录1副标题：</span>
            </span>
            <el-input v-model="formgyml.gyml2" />
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span>是否启用密录2：</span>
            </span>
            <el-switch
              v-model="formgyml.checkdata"
              active-color="#13ce66"
              inactive-color="#ff4949"
            />
            <span style="color: #9e9b9b;font-size: .1875rem;margin-left: .125rem;">  ||若关闭，干员密录2将不会在预览页面显示</span>
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span>干员密录2标题：</span>
            </span>
            <el-input v-model="formgyml.gyml3" />
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span>干员密录2副标题：</span>
            </span>
            <el-input v-model="formgyml.gyml4" />
          </el-form-item>
        </el-form>
      </div>
      <div class="upload_gyml_box">
        <div class="upload_gyml">
          <div class="upload_gyml_title">
            干员密录1蚀刻章
          </div>
          <div class="upload_gyml_img">
            <img v-if="gymlimgdata" :src="gymlimgdata" alt="">
          </div>
          <div class="upload_gyml_logo" @click="upload(1)">
            <i class="el-icon-folder-add" /> 载入蚀刻章
          </div>
          <input ref="fileInput" type="file" style="display: none;" @change="handleFileChange">
        </div>
        <div class="jy">
          建议长宽比1:1并使用透明背景
        </div>
        <div class="upload_gyml">
          <div class="upload_gyml_title">
            干员密录2蚀刻章
          </div>
          <div class="upload_gyml_img">
            <img v-if="gymlimgdata_t" :src="gymlimgdata_t" alt="">
          </div>
          <div class="upload_gyml_logo" @click="upload(2)">
            <i class="el-icon-folder-add" /> 载入蚀刻章
          </div>
          <input ref="fileInput_t" type="file" style="display: none;" @change="handleFileChange_t">
        </div>
      </div>
    </div>
  </div>
</template>

    <style>
.title_box_gyml {
  width: 5rem;
}
.upload_gyml_box{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 12.5rem;
    margin:2.5% auto;
}
.upload_gyml_img{
    width: 3.35rem;
    height: 3.0375rem;
    box-shadow:3px 3px 9px 9px rgb(0 0 0 / 23%), 0 0 6px rgb(0 0 0 / 4%);
}
.upload_gyml_img img{
    width: 100%;
    height: 100%;
}
.upload_gyml_logo{
    width: 1.6125rem;
    height: .4375rem;
    box-shadow:1px 2px 2px 3px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
    cursor: pointer;
    text-align: center;
    line-height: .4375rem;
    font-size: .225rem;
    color: #000;
    margin:8% auto 5%;

}
.upload_gyml_title{
   text-align: center;
   font-size: .199rem;
   margin: 0 0 4% 0;
   font-weight: 700;
}
.jy{
    font-size: .1925rem;
    color: #888686;
    text-align: center;
}
</style>
