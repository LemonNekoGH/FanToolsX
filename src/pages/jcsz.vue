<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      options: [{
        value: '0',
        label: '近卫',
      }, {
        value: '1',
        label: '狙击',
      }, {
        value: '2',
        label: '特种',
      }, {
        value: '3',
        label: '先锋',
      }, {
        value: '4',
        label: '医疗',
      }, {
        value: '5',
        label: '术师',
      }, {
        value: '6',
        label: '辅助',
      }, {
        value: '7',
        label: '重装',
      }],
    }
  },
  computed: {
    ...mapState({
      formjcs1: state => state.formjcs1,
      formjcs2: state => state.formjcs2,
      formjcs3: state => state.formjcs3,
      fw: state => state.fw,

    }),
  },
  mounted() {
    //  console.log(this.$store.getters.Poten)
    for (let i = 0; i < this.$store.state.fw.length; i++) {
      const a = `x${i}`
      const elements = document.querySelectorAll(`.${a}`)
      if (this.$store.state.fw[i] == true)
        elements[0].style.backgroundColor = '#ddd'
      else
        elements[0].style.backgroundColor = '#fff'
    }
  },
  methods: {
    check(e) {
      const a = `x${e}`
      const elements = document.querySelectorAll(`.${a}`)
      if (this.$store.state.fw[e] == false) {
        elements[0].style.backgroundColor = '#ddd'
        this.$store.state.fw[e] = true
      }
      else {
        elements[0].style.backgroundColor = '#fff'
        this.$store.state.fw[e] = false
      }

      //  console.log(this.$store.state.fw);
    },
    // ===============================
  },
}
</script>

<template>
  <div class="w-full h-full bg-white box-shadow box-border p-4">
    <div class="title_box title_box_jcsz">
      <div class="title">
        基础数值
      </div>
      <div class="title_E">
        <span>///Attribute</span>
      </div>
    </div>
    <div class="form_box jcsz">
      <div>
        <div class="yyzl_title">
          属性
        </div>
        <div class="sx_top">
          <el-form :inline="true" :model="formjcs1" class="demo-form-inline" label-position="left">
            <el-form-item>
              <span slot="label">
                <span>星级：</span>
              </span>
              <el-slider v-model="formjcs1.xj" :min="1" :max="6" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>分支：</span>
              </span>
              <el-input v-model="formjcs1.fz" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>攻击范围：</span>
              </span>
              <div class="check_box">
                <div v-for="(item, index) in fw" :key="index" class="check_box_box" @click="check(index)">
                  <div class="check_box_in_box" :class="`x${index}`" />
                </div>
              </div>
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>再部署：</span>
              </span>
              <el-input v-model="formjcs1.zbs" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>职业：</span>
              </span>
              <el-select v-model="formjcs1.zy" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value.toString()" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>站位：</span>
              </span>
              <el-input v-model="formjcs1.zw" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>阻挡数：</span>
              </span>
              <el-input v-model="formjcs1.zds" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>标签：</span>
              </span>
              <el-input v-model="formjcs1.bq" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>攻击间隔：</span>
              </span>
              <el-input v-model="formjcs1.jg" />
            </el-form-item>
          </el-form>
        </div>
        <br>
        <div class="sx_xia">
          <el-form :inline="true" :model="formjcs2" class="demo-form-inline" label-position="left">
            <p>基础属性值：</p>
            <el-form-item>
              <span slot="label">
                <span>生命值：</span>
              </span>
              <el-input v-model="formjcs2.smz" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>攻击力：</span>
              </span>
              <el-input v-model="formjcs2.gjl" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>防御力：</span>
              </span>
              <el-input v-model="formjcs2.fyl" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>法术抗性：</span>
              </span>
              <el-input v-model="formjcs2.kx" />
            </el-form-item>
            <p>满信赖加成：</p>
            <el-form-item>
              <span slot="label">
                <span>生命值：</span>
              </span>
              <el-input v-model="formjcs2.xlsmz" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>攻击力：</span>
              </span>
              <el-input v-model="formjcs2.xlgjl" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>防御力：</span>
              </span>
              <el-input v-model="formjcs2.xlfyl" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>费用：</span>
              </span>
              <el-input v-model="formjcs2.fy1" />
              <el-input v-model="formjcs2.fy2" />
              <el-input v-model="formjcs2.fy3" />
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div>
        <div class="yyzl_title">
          潜能
        </div>
        <div class="form form_jcsz">
          <div class="left">
            <el-form :inline="true" :model="formjcs3" class="demo-form-inline" label-width="170px" label-position="left">
              <el-form-item>
                <span slot="label">
                  <span>潜能2加成效果：</span>
                </span>
                <el-input v-model="formjcs3.qn2" />
              </el-form-item>
              <el-form-item>
                <span slot="label">
                  <span>潜能3加成效果：</span>
                </span>
                <el-input v-model="formjcs3.qn3" />
              </el-form-item>
              <el-form-item>
                <span slot="label">
                  <span>潜能4加成效果：</span>
                </span>
                <el-input v-model="formjcs3.qn4" />
              </el-form-item>
              <el-form-item>
                <span slot="label">
                  <span>潜能5加成效果：</span>
                </span>
                <el-input v-model="formjcs3.qn5" />
              </el-form-item>
              <el-form-item>
                <span slot="label">
                  <span>潜能6加成效果：</span>
                </span>
                <el-input v-model="formjcs3.qn6" />
              </el-form-item>
              <el-form-item>
                <span slot="label">
                  <span>获取方式：</span>
                </span>
                <el-input v-model="formjcs3.hq" />
              </el-form-item>
            </el-form>
          </div>
          <div class="right right_yyzl">
            <el-form :inline="true" :model="formjcs3" class="demo-form-inline" label-position="left">
              <el-form-item>
                <span slot="label">
                  <span>信物描述：</span>
                </span>
                <el-input v-model="formjcs3.xwms" type="textarea" :rows="7" />
              </el-form-item>
              <el-form-item>
                <span slot="label">
                  <span>合同描述：</span>
                </span>
                <el-input v-model="formjcs3.htms" type="textarea" :rows="7" />
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.title_box_blmn {
  width: 5.2rem;
}

.jcsz {
  margin-top: 0.25rem;
  margin-left: 0;
}

.yyzl_title {
  font-size: .3125rem;
  background: linear-gradient(to right, #0052cc, #f7f7f7);
  color: #f7f7f7;
  width: 2.25rem;
  margin: 0.25rem 0px;
  padding-left: 0.125rem;
  font-weight: bold;
  letter-spacing: 2px;
}

.sx_top {
  width: 90%;
  margin: auto;
  box-shadow: 1px 1px 3px 3px rgb(0 0 0 / 23%), 0 0 6px rgb(0 0 0 / 4%);
  padding: 1%;
}

.sx_top .el-form-item {
  width: 5rem;
}

/* .sx_top .el-form-item:last-child{
  width: 100%;
} */
.sx_xia {
  width: 90%;
  margin: auto;
  box-shadow: 1px 1px 3px 3px rgb(0 0 0 / 23%), 0 0 6px rgb(0 0 0 / 4%);
  padding: 1%;
}

.sx_xia .el-form-item {
  width: 5rem;
}

.sx_xia {
  font-size: .2625rem;
  color: #000;
}

.sx_xia .el-form-item:last-child {
  width: 80%;
}

.sx_xia .el-form-item:last-child .el-form-item__content {
  display: flex;
}

.sx_xia .el-form-item:last-child .el-form-item__label {
  float: left !important;
}

.sx_xia .el-form-item:last-child .el-form-item__content .el-input {
  margin-left: .325rem;
}

.form_jcsz {
  width: 90%;
  margin: auto;
  box-shadow: 1px 1px 3px 3px rgb(0 0 0 / 23%), 0 0 6px rgb(0 0 0 / 4%);
  padding: 1%;

}

.right_yyzl {
  width: 68%;
  font-size: 21px;
  color: #000;
}

.check_box {
  width: 3.75rem;
  /* height: 3.125rem; */
  border: 1px solid #ddd;
  box-shadow: 1px 2px 2px 3px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1%;
}

.check_box_box {
  width: calc(100% / 10);
}

.check_box_in_box {
  margin: 0.0375rem auto;
  width: 0.25rem;
  height: 0.25rem;
}
</style>
