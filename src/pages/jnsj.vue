<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      dj: '0',
      dj1: '0',
      dj2: '0',

      list: [
        { value: '0', name: '自动回复' },
        { value: '1', name: '攻击回复' },
        { value: '2', name: '被动' },
        { value: '3', name: '受击回复' },
      ],
      list1: [
        { value: '0', name: '手动触发' },
        { value: '1', name: '自动触发' },
      ],

      check: '攻击回复',
      check1: '手动触发',

      check2: '攻击回复',
      check3: '手动触发',

      check4: '攻击回复',
      check5: '手动触发',
    }
  },
  computed: {
    ...mapState({
      formjnsj: state => state.formjnsj,
      formjnsj1: state => state.formjnsj1,
      formjnsj2: state => state.formjnsj2,
      jnsjimg: state => state.jnsjimg,
      jnsjimg1: state => state.jnsjimg1,
      jnsjimg2: state => state.jnsjimg2,
      levels: state => state.levels,
      levels1: state => state.levels1,
      levels2: state => state.levels2,
    }),
  },
  mounted() {
    // console.log(this.$store.getters.Skill1Type);
    this.init()
  },
  methods: {

    init() {
      this.list.forEach((item) => {
        if (item.value == this.$store.state.formjnsj.jn)
          this.check = item.name
      })
      this.list1.forEach((item) => {
        if (item.value == this.$store.state.formjnsj.fs)
          this.check1 = item.name
      })
      // ==
      this.list.forEach((item) => {
        if (item.value == this.$store.state.formjnsj1.jn)
          this.check2 = item.name
      })
      this.list1.forEach((item) => {
        if (item.value == this.$store.state.formjnsj1.fs)
          this.check3 = item.name
      })
      // ==
      this.list.forEach((item) => {
        if (item.value == this.$store.state.formjnsj2.jn)
          this.check4 = item.name
      })
      this.list1.forEach((item) => {
        if (item.value == this.$store.state.formjnsj2.fs)
          this.check5 = item.name
      })
      // ==
    },
    //
    handleCommand(command) {
      this.list.forEach((item) => {
        if (item.value == command) {
          this.check = item.name
          this.$store.state.formjnsj.jn = command
        }
      })
    },
    handleCommand1(command) {
      this.list1.forEach((item) => {
        if (item.value == command) {
          this.check1 = item.name
          this.$store.state.formjnsj.fs = command
        }
      })
    },
    // ====
    handleCommand2(command) {
      this.list.forEach((item) => {
        if (item.value == command) {
          this.check2 = item.name
          this.$store.state.formjnsj1.jn = command
        }
      })
    },
    handleCommand3(command) {
      this.list1.forEach((item) => {
        if (item.value == command) {
          this.check3 = item.name
          this.$store.state.formjnsj1.fs = command
        }
      })
    },
    // ======
    handleCommand4(command) {
      this.list.forEach((item) => {
        if (item.value == command) {
          this.check4 = item.name
          this.$store.state.formjnsj2.jn = command
        }
      })
    },
    handleCommand5(command) {
      this.list1.forEach((item) => {
        if (item.value == command) {
          this.check5 = item.name
          this.$store.state.formjnsj2.fs = command
        }
      })
    },

    upload(e) {
      if (e == 0)
        this.$refs.fileInput.click()

      if (e == 1)
        this.$refs.fileInput1.click()

      if (e == 2)
        this.$refs.fileInput2.click()
    },
    async handleFileChange(e) {
      const file = e.target.files[0]
      const base64Str = await this.changeFileIntoBase64(file)
      const base64Data = base64Str.replace(/^data:image\/\w+;base64,/, '')
      // this.imgdata = base64Str
      this.$store.state.jnsjimg = base64Str
      this.formjnsj.imgdata = base64Data
    },
    async handleFileChange1(e) {
      const file = e.target.files[0]
      const base64Str = await this.changeFileIntoBase64(file)
      const base64Data = base64Str.replace(/^data:image\/\w+;base64,/, '')
      // this.imgdata = base64Str
      this.$store.state.jnsjimg1 = base64Str
      this.formjnsj1.imgdata = base64Data
    },
    async handleFileChange2(e) {
      const file = e.target.files[0]
      const base64Str = await this.changeFileIntoBase64(file)
      const base64Data = base64Str.replace(/^data:image\/\w+;base64,/, '')
      // this.imgdata = base64Str
      this.$store.state.jnsjimg2 = base64Str
      this.formjnsj2.imgdata = base64Data
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
  <div class="w-full h-full bg-white box-shadow box-border p-4">
    <div class="title_box title_box_jnsj">
      <div class="title">
        技能数据
      </div>
      <div class="title_E">
        <span>///Skill Data</span>
      </div>
    </div>
    <div class="form_box_jnsj">
      <div>
        <div class="jnsj_title">
          技能数据
        </div>
        <div class="jnsj_top">
          <div class="top_upload_da_jnsj">
            <input
              ref="fileInput"
              type="file"
              style="display: none"
              @change="handleFileChange"
            >
            <div class="upload_jnsj_img_box">
              <div class="upload_jnsj_img">
                <img v-if="jnsjimg" :src="jnsjimg" alt="">
              </div>
            </div>
            <div class="jnsj_upload_right">
              <div class="jnsj_upload_right_span">
                <el-input v-model="formjnsj.sw1" />
              </div>
              <div class="upload_jnsj" @click="upload(0)">
                <i class="el-icon-folder-add" /> 载入图标
              </div>
            </div>
          </div>
          <div class="jnsj_top_right">
            <el-dropdown trigger="click" @command="handleCommand">
              <el-button type="success">
                {{ check }}
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item, index) in list"
                  :key="index"
                  :command="item.value"
                >
                  {{ item.name }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown trigger="click" @command="handleCommand1">
              <el-button type="warning">
                {{ check1 }}
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item, index) in list1"
                  :key="index"
                  :command="item.value"
                >
                  {{ item.name }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="jnsj_bottom">
          <el-form
            :inline="true"
            :model="formjnsj"
            class="demo-form-inline"
            label-position="top"
          >
            <el-row>
              <el-col :span="4">
                <el-form-item>
                  <span slot="label">
                    <span>等级：</span>
                  </span>
                  <el-select
                    v-model="dj"
                    placeholder="等级"
                  >
                    <el-option label="1" value="0" />
                    <el-option label="2" value="1" />
                    <el-option label="3" value="2" />
                    <el-option label="4" value="3" />
                    <el-option label="5" value="4" />
                    <el-option label="6" value="5" />
                    <el-option label="7" value="6" />
                    <el-option label="RANK I" value="7" />
                    <el-option label="RANK II" value="8" />
                    <el-option label="RANK III" value="9" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <span slot="label">
                    <span>描述：</span>
                  </span>
                  <el-input v-model="levels[dj].inputs[0]" />
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <el-form-item>
                  <span slot="label">
                    <span>初始：</span>
                  </span>
                  <el-input v-model="levels[dj].inputs[1]" />
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <el-form-item>
                  <span slot="label">
                    <span>消耗：</span>
                  </span>
                  <el-input v-model="levels[dj].inputs[2]" />
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <el-form-item>
                  <span slot="label">
                    <span>持续：</span>
                  </span>
                  <el-input v-model="levels[dj].inputs[3]" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <br>
        <div class="jnsj_top">
          <div class="top_upload_da_jnsj">
            <input
              ref="fileInput1"
              type="file"
              style="display: none"
              @change="handleFileChange1"
            >
            <div class="upload_jnsj_img_box">
              <div class="upload_jnsj_img">
                <img v-if="jnsjimg1" :src="jnsjimg1" alt="">
              </div>
            </div>
            <div class="jnsj_upload_right">
              <div class="jnsj_upload_right_span">
                <el-input v-model="formjnsj1.sw1" />
              </div>
              <div class="upload_jnsj" @click="upload(1)">
                <i class="el-icon-folder-add" /> 载入图标
              </div>
            </div>
          </div>
          <div class="jnsj_top_right">
            <el-dropdown trigger="click" @command="handleCommand2">
              <el-button type="success">
                {{ check2 }}
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item, index) in list"
                  :key="index"
                  :command="item.value"
                >
                  {{ item.name }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown trigger="click" @command="handleCommand3">
              <el-button type="warning">
                {{ check3 }}
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item, index) in list1"
                  :key="index"
                  :command="item.value"
                >
                  {{ item.name }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="jnsj_bottom">
          <el-form
            :inline="true"
            :model="formjnsj"
            class="demo-form-inline"
            label-position="top"
          >
            <el-row>
              <el-col :span="4">
                <el-form-item>
                  <span slot="label">
                    <span>等级：</span>
                  </span>
                  <el-select
                    v-model="dj1"
                    placeholder="等级"
                  >
                    <el-option label="1" value="0" />
                    <el-option label="2" value="1" />
                    <el-option label="3" value="2" />
                    <el-option label="4" value="3" />
                    <el-option label="5" value="4" />
                    <el-option label="6" value="5" />
                    <el-option label="7" value="6" />
                    <el-option label="RANK I" value="7" />
                    <el-option label="RANK II" value="8" />
                    <el-option label="RANK III" value="9" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <span slot="label">
                    <span>描述：</span>
                  </span>
                  <el-input v-model="levels1[dj1].inputs[0]" />
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <el-form-item>
                  <span slot="label">
                    <span>初始：</span>
                  </span>
                  <el-input v-model="levels1[dj1].inputs[1]" />
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <el-form-item>
                  <span slot="label">
                    <span>消耗：</span>
                  </span>
                  <el-input v-model="levels1[dj1].inputs[2]" />
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <el-form-item>
                  <span slot="label">
                    <span>持续：</span>
                  </span>
                  <el-input v-model="levels1[dj1].inputs[3]" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <br>
        <div class="jnsj_top">
          <div class="top_upload_da_jnsj">
            <input
              ref="fileInput2"
              type="file"
              style="display: none"
              @change="handleFileChange2"
            >
            <div class="upload_jnsj_img_box">
              <div class="upload_jnsj_img">
                <img v-if="jnsjimg2" :src="jnsjimg2" alt="">
              </div>
            </div>
            <div class="jnsj_upload_right">
              <div class="jnsj_upload_right_span">
                <el-input v-model="formjnsj2.sw1" />
              </div>
              <div class="upload_jnsj" @click="upload(2)">
                <i class="el-icon-folder-add" /> 载入图标
              </div>
            </div>
          </div>
          <div class="jnsj_top_right">
            <el-dropdown trigger="click" @command="handleCommand4">
              <el-button type="success">
                {{ check4 }}
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item, index) in list"
                  :key="index"
                  :command="item.value"
                >
                  {{ item.name }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown trigger="click" @command="handleCommand5">
              <el-button type="warning">
                {{ check5 }}
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item, index) in list1"
                  :key="index"
                  :command="item.value"
                >
                  {{ item.name }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="jnsj_bottom">
          <el-form
            :inline="true"
            :model="formjnsj"
            class="demo-form-inline"
            label-position="top"
          >
            <el-row>
              <el-col :span="4">
                <el-form-item>
                  <span slot="label">
                    <span>等级：</span>
                  </span>
                  <el-select
                    v-model="dj2"
                    placeholder="等级"
                  >
                    <el-option label="1" value="0" />
                    <el-option label="2" value="1" />
                    <el-option label="3" value="2" />
                    <el-option label="4" value="3" />
                    <el-option label="5" value="4" />
                    <el-option label="6" value="5" />
                    <el-option label="7" value="6" />
                    <el-option label="RANK I" value="7" />
                    <el-option label="RANK II" value="8" />
                    <el-option label="RANK III" value="9" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <span slot="label">
                    <span>描述：</span>
                  </span>
                  <el-input v-model="levels2[dj2].inputs[0]" />
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <el-form-item>
                  <span slot="label">
                    <span>初始：</span>
                  </span>
                  <el-input v-model="levels2[dj2].inputs[1]" />
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <el-form-item>
                  <span slot="label">
                    <span>消耗：</span>
                  </span>
                  <el-input v-model="levels2[dj2].inputs[2]" />
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <el-form-item>
                  <span slot="label">
                    <span>持续：</span>
                  </span>
                  <el-input v-model="levels2[dj2].inputs[3]" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>

    <style>
.title_box_jnsj {
  width: 4.2rem;
}
.jnsj_title {
  font-size: 0.3125rem;
  background: linear-gradient(to right, #0052cc, #f7f7f7);
  color: #f7f7f7;
  width: 2.25rem;
  margin: 0.25rem 0px;
  padding-left: 0.125rem;
  font-weight: bold;
  letter-spacing: 2px;
}
.jnsj_top {
  width: 90%;
  margin: 1% auto 0;
  box-shadow: 1px 1px 3px 3px rgb(0 0 0 / 23%), 0 0 6px rgb(0 0 0 / 4%);
  padding: 1%;
  border-radius: 0.075rem;
  display: flex;
  justify-content: space-between;
}
.jnsj_top_right {
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 1.25rem;
}
.top_upload_da_jnsj {
  display: flex;
  align-items: stretch;
}
.upload_jnsj {
  width: 1.6125rem;
  height: 0.4375rem;
  box-shadow: 0 2px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
  cursor: pointer;
  text-align: center;
  line-height: 0.4375rem;
  font-size: 0.225rem;
  color: #000;
  margin-top: 0.125rem;
}
.jnsj_upload_right {
  margin-left: 0.375rem;
  margin-top: auto;
  margin-bottom: auto;
}
.jnsj_upload_right_span {
  width: 3.75rem;
  font-size: 0.45rem;
  font-weight: bolder;
  color: #888686;
  border-bottom: #ddd solid 0.0375rem;
}
.upload_jnsj_img {
  width: 2.35rem;
  height: 2.0375rem;
  box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 23%), 0 0 6px rgb(0 0 0 / 4%);
}
.upload_jnsj_img img {
  width: 100%;
  height: 100%;
}
.upload_jnsj_img_box {
  margin-left: 0.3125rem;
}
.upload_jnsj_img_box span {
  font-size: 0.1625rem;
  color: #888686;
  text-align: center;
  margin-left: -0.5375rem;
  margin-top: 0.12rem;
  display: block;
}
.upload_jnsj_img_tx {
  margin-left: 0.025rem !important;
}
.jnsj_bottom {
  width: 88%;
  margin: auto;
  /* box-shadow: 1px 1px 3px 3px rgb(0 0 0 / 23%), 0 0 6px rgb(0 0 0 / 4%); */
  box-shadow: -5px 5px 10px -4px rgb(0 0 0 / 23%),
    5px 5px 10px -4px rgb(0 0 0 / 23%);
  padding: 1%;
  border-radius: 0.025rem;
  /* display: flex;
  justify-content: space-between; */
}
.jnsj_top .el-dropdown {
  margin-left: 0.125rem;
}
</style>
