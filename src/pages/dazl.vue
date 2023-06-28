<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      formdazl: state => state.formdazl,
      imgdata: state => state.dazlimgdata,
      imgdata_t: state => state.dazlimgdata_t,

    }),
  },
  mounted() {
    //  console.log(this.$store.getters.ProfDat)

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
      this.$store.state.dazlimgdata = base64Str

      this.formdazl.imgdata = base64Data
    },
    async handleFileChange_t(e) {
      // console.log(e);
      const file = e.target.files[0]
      const base64Str = await this.changeFileIntoBase64(file)
      const base64Data = base64Str.replace(/^data:image\/\w+;base64,/, '')
      // this.imgdata_t = base64Str
      this.$store.state.dazlimgdata_t = base64Str

      this.formdazl.imgdata_t = base64Data
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
    <div class="title_box title_box_dazl">
      <div class="title">
        档案资料
      </div>
      <div class="title_E">
        <span>///Profile Data</span>
      </div>
    </div>
    <div class="form_box">
      <div class="upload_da">
        <div class="top_upload_da">
          <div class="upload_dazl" @click="upload(1)">
            <i class="el-icon-folder-add" /> 载入图标
          </div>
          <input ref="fileInput" type="file" style="display: none;" @change="handleFileChange">
          <div class="upload_img_box">
            <div class="upload_img">
              <img v-if="imgdata" :src="imgdata" alt="">
            </div>
            <span>//请使用长宽比1:1并带有ALPHA的png图标//</span>
          </div>
        </div>
        <div class="top_upload_da">
          <div class="upload_dazl" @click="upload(2)">
            <i class="el-icon-folder-add" /> 载入头像
          </div>
          <input ref="fileInput_t" type="file" style="display: none;" @change="handleFileChange_t">
          <div class="upload_img_box">
            <div class="upload_img">
              <img v-if="imgdata_t" :src="imgdata_t" alt="">
            </div>
            <span class="upload_img_tx">//请使用长宽比1:1的头像//</span>
          </div>
        </div>
      </div>
      <div class="formdata">
        <el-form
          :inline="true"
          :model="formdazl"
          class="demo-form-inline"
          label-width="135px"
          label-position="left"
        >
          <el-form-item>
            <span slot="label">
              <span>档案资料1：</span>
            </span>
            <el-input
              v-model="formdazl.dazl1"
              type="textarea"
              :rows="4"
            />
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span>档案资料2：</span>
            </span>
            <el-input
              v-model="formdazl.dazl2"
              type="textarea"
              :rows="4"
            />
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span>档案资料3：</span>
            </span>
            <el-input
              v-model="formdazl.dazl3"
              type="textarea"
              :rows="4"
            />
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span>档案资料4：</span>
            </span>
            <el-input
              v-model="formdazl.dazl4"
              type="textarea"
              :rows="4"
            />
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span>附加资料：</span>
            </span>
            <el-input
              v-model="formdazl.fjzl"
              type="textarea"
              :rows="4"
            />
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

  <style>
.title_box_dazl {
  width: 4.5rem;
}
.upload_da{
    display: flex;
}
.top_upload_da{
    display: flex;
    align-items: stretch;
}
.upload_dazl{
    width: 1.6125rem;
    height: .4375rem;
    box-shadow: 0 2px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
    cursor: pointer;
    text-align: center;
    line-height: .4375rem;
    font-size: .225rem;
    color: #000;
}
.upload_img{
    width: 2.35rem;
    height: 2.0375rem;
    box-shadow:2px 2px 2px 2px rgb(0 0 0 / 23%), 0 0 6px rgb(0 0 0 / 4%);
}
.upload_img img{
    width: 100%;
    height: 100%;
}
.upload_img_box{
    margin-left: .3125rem;
}
.upload_img_box span{
    font-size: .1625rem;
    color: #888686;
    text-align: center;
    margin-left: -0.5375rem;
    margin-top: .12rem;
    display: block;
}
.upload_img_tx{
    margin-left: .025rem !important;
}
.form_box{
    margin-top: .25rem;
    margin-left: .1875rem;
}
.formdata{
    margin-top: .1875rem;
}
</style>
