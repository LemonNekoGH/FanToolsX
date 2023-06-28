<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      options: [
        {
          value: '0',
          label: '攻击速度',
        },
        {
          value: '1',
          label: '生命',
        },
        {
          value: '2',
          label: '攻击',
        },
        {
          value: '3',
          label: '防御',
        },
      ],
      value: '',
    }
  },
  computed: {
    ...mapState({
      formtfmz: state => state.formtfmz,
      tfmzimg: state => state.tfmzimg,

      formmzsj: state => state.formmzsj,
      mzsjimg: state => state.mzsjimg,
      mzsjimg1: state => state.mzsjimg1,
      mzsjxz: state => state.mzsjxz,
      formstadta: state => state.formstadta,

      formmzsj1: state => state.formmzsj1,
      mzsjimg2: state => state.mzsjimg2,
      mzsjimg3: state => state.mzsjimg3,
      mzsjxz1: state => state.mzsjxz1,
      formstadta1: state => state.formstadta1,
    }),
  },
  mounted() {
    // console.log(this.$store.getters.Mod1AddiStr);
  },
  methods: {
    upload(e) {
      if (e == 1)
        this.$refs.fileInput.click()

      if (e == 2)
        this.$refs.fileInput1.click()

      if (e == 3)
        this.$refs.fileInput2.click()

      if (e == 4)
        this.$refs.fileInput3.click()

      if (e == 5)
        this.$refs.fileInput4.click()
    },
    async handleFileChange(e) {
      // console.log(e);
      const file = e.target.files[0]
      const base64Str = await this.changeFileIntoBase64(file)
      const base64Data = base64Str.replace(/^data:image\/\w+;base64,/, '')
      this.$store.state.tfmzimg = base64Str
      this.formtfmz.imgdata = base64Data
    },

    async handleFileChange1(e) {
      // console.log(e);
      const file = e.target.files[0]
      const base64Str = await this.changeFileIntoBase64(file)
      const base64Data = base64Str.replace(/^data:image\/\w+;base64,/, '')
      this.$store.state.mzsjimg = base64Str
      this.formmzsj.imgdata = base64Data
    },
    async handleFileChange2(e) {
      // console.log(e);
      const file = e.target.files[0]
      const base64Str = await this.changeFileIntoBase64(file)
      const base64Data = base64Str.replace(/^data:image\/\w+;base64,/, '')
      this.$store.state.mzsjimg1 = base64Str
      this.formmzsj.imgdata1 = base64Data
    },

    async handleFileChange3(e) {
      // console.log(e);
      const file = e.target.files[0]
      const base64Str = await this.changeFileIntoBase64(file)
      const base64Data = base64Str.replace(/^data:image\/\w+;base64,/, '')
      this.$store.state.mzsjimg2 = base64Str
      this.formmzsj1.imgdata = base64Data
    },
    async handleFileChange4(e) {
      // console.log(e);
      const file = e.target.files[0]
      const base64Str = await this.changeFileIntoBase64(file)
      const base64Data = base64Str.replace(/^data:image\/\w+;base64,/, '')
      this.$store.state.mzsjimg3 = base64Str
      this.formmzsj1.imgdata1 = base64Data
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
    <div class="title_box title_box_tfmb">
      <div class="title">
        天赋模组
      </div>
      <div class="title_E">
        <span>///Talents</span>
      </div>
    </div>
    <div class="jnsj_title">
      天赋效果
    </div>
    <div class="tfxg_box">
      <el-form
        :inline="true"
        :model="formtfmz"
        class="demo-form-inline"
        label-position="left"
        label-width="120px"
      >
        <el-row>
          <el-col :span="10">
            <el-form-item>
              <span slot="label">
                <span>特性：</span>
              </span>
              <el-input v-model="formtfmz.tx" />
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item>
              <span slot="label">
                <span>分支图标：</span>
              </span>
              <div class="upload_tfmz_box">
                <div class="upload_tfmz_logo" @click="upload(1)">
                  <i class="el-icon-folder-add" /> 载入图标
                </div>
                <div class="upload_tfmz_img">
                  <img v-if="tfmzimg" :src="tfmzimg" alt="">
                </div>
              </div>
              <input
                ref="fileInput"
                type="file"
                style="display: none"
                @change="handleFileChange"
              >
            </el-form-item>
          </el-col>

          <el-form-item>
            <span slot="label">
              <span>特性描述：</span>
            </span>
            <el-input
              v-model="formtfmz.txms"
              type="textarea"
              :rows="5"
            />
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span>天赋1：</span>
            </span>
            <el-input v-model="formtfmz.tf1" style="width: 25%" /><br>
            <el-input v-model="formtfmz.tfx1" />
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span>天赋2：</span>
            </span>
            <el-input v-model="formtfmz.tf2" style="width: 25%" /><br>
            <el-input v-model="formtfmz.tfx2" />
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span>天赋描述：</span>
            </span>
            <el-input
              v-model="formtfmz.tfms"
              type="textarea"
              :rows="5"
            />
          </el-form-item>
        </el-row>
      </el-form>
    </div>
    <div class="jnsj_title">
      1模组数据
    </div>
    <div class="tfxg_box_mz">
      <el-form
        :inline="true"
        :model="formmzsj"
        class="demo-form-inline"
        label-position="left"
      >
        <span class="title_tfmz">模组基础内容：</span>
        <el-row>
          <el-col :span="10">
            <el-form-item>
              <span slot="label">
                <span>模组名称：</span>
              </span>
              <el-input v-model="formmzsj.mzmc" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>模组编号：</span>
              </span>
              <el-input v-model="formmzsj.mzbh1" />—<el-input
                v-model="formmzsj.mzbh2"
              />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>模组图标：</span>
              </span>
              <div class="upload_tfmz_box">
                <div class="upload_tfmz_logo" @click="upload(2)">
                  <i class="el-icon-folder-add" /> 载入图标
                </div>
                <div class="upload_tfmz_img">
                  <img v-if="mzsjimg" :src="mzsjimg" alt="">
                </div>
              </div>
              <input
                ref="fileInput1"
                type="file"
                style="display: none"
                @change="handleFileChange1"
              >
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item>
              <span slot="label">
                <span>模组图片：</span>
              </span>
              <div class="upload_tfmz_box">
                <div class="upload_tfmz_logo" @click="upload(3)">
                  <i class="el-icon-folder-add" /> 载入图标
                </div>
                <div class="upload_tfmz_img">
                  <img v-if="mzsjimg1" :src="mzsjimg1" alt="">
                </div>
              </div>
              <input
                ref="fileInput2"
                type="file"
                style="display: none"
                @change="handleFileChange2"
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="mzsztf_box">
      <div class="stage">
        <span>STAGE.1：</span>
        <span>STAGE.2：</span>
        <span>STAGE.3：</span>
      </div>
      <div class="xz_box">
        <div class="xz">
          <el-select v-model="mzsjxz.x" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="xz_input">
          <el-input v-model="formstadta.sta1" />
          <el-input v-model="formstadta.sta5" />
          <el-input v-model="formstadta.sta9" />
        </div>
      </div>
      <div class="xz_box">
        <div class="xz">
          <el-select v-model="mzsjxz.y" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="xz_input">
          <el-input v-model="formstadta.sta2" />
          <el-input v-model="formstadta.sta6" />
          <el-input v-model="formstadta.sta10" />
        </div>
      </div>
      <div class="xz_box">
        <div class="xz">
          <el-select v-model="mzsjxz.z" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="xz_input">
          <el-input v-model="formstadta.sta3" />
          <el-input v-model="formstadta.sta7" />
          <el-input v-model="formstadta.sta11" />
        </div>
      </div>
      <div class="tfgd">
        <span> 天赋效果改动 </span>
        <el-input v-model="formstadta.sta4" />
        <el-input v-model="formstadta.sta8" />
        <el-input v-model="formstadta.sta12" />
      </div>
    </div>
    <div class="szxia">
      <el-form
        :inline="true"
        :model="formmzsj"
        class="demo-form-inline"
        label-width="120px"
        label-position="left"
      >
        <el-form-item>
          <span slot="label">
            <span>模组任务：</span>
          </span>
          <el-input
            v-model="formmzsj.mzrw1"
            type="textarea"
            :rows="5"
          />

          <el-input
            v-model="formmzsj.mzrw2"
            type="textarea"
            :rows="5"
            style="margin-top: 30px"
          />
        </el-form-item>
        <el-form-item>
          <span slot="label">
            <span>模组描述：</span>
          </span>
          <el-input
            v-model="formmzsj.mzms"
            type="textarea"
            :rows="5"
          />
        </el-form-item>
      </el-form>
    </div>
    <div class="jnsj_title">
      2模组数据
    </div>
    <div class="tfxg_box_mz">
      <el-form
        :inline="true"
        :model="formmzsj1"
        class="demo-form-inline"
        label-position="left"
      >
        <span class="title_tfmz">模组基础内容：</span>
        <el-row>
          <el-col :span="10">
            <el-form-item>
              <span slot="label">
                <span>模组名称：</span>
              </span>
              <el-input v-model="formmzsj1.mzmc" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>模组编号：</span>
              </span>
              <el-input v-model="formmzsj1.mzbh1" />—<el-input
                v-model="formmzsj1.mzbh2"
              />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>模组图标：</span>
              </span>
              <div class="upload_tfmz_box">
                <div class="upload_tfmz_logo" @click="upload(4)">
                  <i class="el-icon-folder-add" /> 载入图标
                </div>
                <div class="upload_tfmz_img">
                  <img v-if="mzsjimg2" :src="mzsjimg2" alt="">
                </div>
              </div>
              <input
                ref="fileInput3"
                type="file"
                style="display: none"
                @change="handleFileChange3"
              >
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item>
              <span slot="label">
                <span>模组图片：</span>
              </span>
              <div class="upload_tfmz_box">
                <div class="upload_tfmz_logo" @click="upload(5)">
                  <i class="el-icon-folder-add" /> 载入图标
                </div>
                <div class="upload_tfmz_img">
                  <img v-if="mzsjimg3" :src="mzsjimg3" alt="">
                </div>
              </div>
              <input
                ref="fileInput4"
                type="file"
                style="display: none"
                @change="handleFileChange4"
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="mzsztf_box">
      <div class="stage">
        <span>STAGE.1：</span>
        <span>STAGE.2：</span>
        <span>STAGE.3：</span>
      </div>
      <div class="xz_box">
        <div class="xz">
          <el-select v-model="mzsjxz1.x" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="xz_input">
          <el-input v-model="formstadta1.sta1" />
          <el-input v-model="formstadta1.sta5" />
          <el-input v-model="formstadta1.sta9" />
        </div>
      </div>
      <div class="xz_box">
        <div class="xz">
          <el-select v-model="mzsjxz1.y" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="xz_input">
          <el-input v-model="formstadta1.sta2" />
          <el-input v-model="formstadta1.sta6" />
          <el-input v-model="formstadta1.sta10" />
        </div>
      </div>
      <div class="xz_box">
        <div class="xz">
          <el-select v-model="mzsjxz1.z" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="xz_input">
          <el-input v-model="formstadta1.sta3" />
          <el-input v-model="formstadta1.sta7" />
          <el-input v-model="formstadta1.sta11" />
        </div>
      </div>
      <div class="tfgd">
        <span> 天赋效果改动 </span>
        <el-input v-model="formstadta1.sta4" />
        <el-input v-model="formstadta1.sta8" />
        <el-input v-model="formstadta1.sta12" />
      </div>
    </div>
    <div class="szxia">
      <el-form
        :inline="true"
        :model="formmzsj1"
        class="demo-form-inline"
        label-width="120px"
        label-position="left"
      >
        <el-form-item>
          <span slot="label">
            <span>模组任务：</span>
          </span>
          <el-input
            v-model="formmzsj1.mzrw1"
            type="textarea"
            :rows="5"
          />

          <el-input
            v-model="formmzsj1.mzrw2"
            type="textarea"
            :rows="5"
            style="margin-top: 30px"
          />
        </el-form-item>
        <el-form-item>
          <span slot="label">
            <span>模组描述：</span>
          </span>
          <el-input
            v-model="formmzsj1.mzms"
            type="textarea"
            :rows="5"
          />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

    <style>
.title_box_tfmb {
  width: 3.7rem;
}
.jnsj_title {
  font-size: 0.3125rem;
  background: linear-gradient(to right, #0052cc, #f7f7f7);
  color: #f7f7f7;
  width: 2.5rem;
  margin: 0.25rem 0px;
  padding-left: 0.125rem;
  font-weight: bold;
  letter-spacing: 2px;
}
.upload_tfmz_img {
  width: 1.55rem;
  height: 1.5375rem;
  box-shadow: 3px 3px 9px 9px rgb(0 0 0 / 23%), 0 0 6px rgb(0 0 0 / 4%);
  margin-left: 0.3125rem;
}
.upload_tfmz_img img {
  width: 100%;
  height: 100%;
}
.upload_tfmz_logo {
  width: 1.2rem;
  height: 0.35rem;
  box-shadow: 1px 2px 2px 3px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
  cursor: pointer;
  text-align: center;
  line-height: 0.38rem;
  font-size: 0.165rem;
  color: #000;
}
.upload_tfmz_box {
  display: flex;
  align-items: center;
}
.tfxg_box_mz .el-row .el-form-item .el-form-item__content {
  display: flex;
}
.tfxg_box_mz .el-row .el-form-item .el-form-item__content .el-input {
  margin-left: 0.1875rem;
}
.tfxg_box_mz .sztf .el-form-item .el-form-item__content .el-input {
  width: 15%;
}
.tfxg_box_mz .sztf .el-form-item .el-form-item__content .el-input:last-child {
  margin-left: 1.25rem;
}
.tfxg_box_mz .el-row .el-form-item .el-form-item__content .el-input:last-child {
  width: 100%;
}
.tfxg_box_mz .el-form--inline .el-form-item__label {
  float: left;
}
.title_tfmz {
  margin-bottom: 0.37rem;
  display: block;
}
.mzsztf_box {
  display: flex;
  align-items: flex-end;
  line-height: 0.825rem;
  font-size: 0.2rem;
}
.xz_input {
  width: 170px;
}
.xz_input .el-input {
  width: 62%;
}
.stage {
  width: 1.5rem;
}
.xz .el-select .el-input {
  width: 50%;
}
.szxia {
  margin-top: 0.3125rem;
}
</style>
