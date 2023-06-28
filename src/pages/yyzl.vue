<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      formyyzl: state => state.formyyzl,
      formyyzl_top: state => state.formyyzl_top,
    }),
  },
  mounted() {
    //  console.log(this.$store.getters.Voice)
    //  console.log(this.$store.getters.CV)

  },
  methods: {

    // ===============================
  },
}
</script>

<template>
  <div class="all_box">
    <div class="title_box title_box_yyzl">
      <div class="title">
        语音资料
      </div>
      <div class="title_E">
        <span>///Operator's Voice</span>
      </div>
    </div>
    <div class="form_box">
      <div class="top_yyzl">
        <div class="yyzl_title">
          CV档案
        </div>
        <div class="top_form">
          <el-form
            :inline="true"
            :model="formyyzl"
            class="demo-form-inline"
            label-width="120px"
            label-position="left"
          >
            <el-form-item>
              <span slot="label">
                <span>中文配音：</span>
              </span>
              <el-input v-model="formyyzl_top.zwpy" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>英文配音：</span>
              </span>
              <el-input v-model="formyyzl_top.ywpy" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>日文配音：</span>
              </span>
              <el-input v-model="formyyzl_top.rwpy" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>特殊配音：</span>
              </span>
              <el-input v-model="formyyzl_top.tspy" />
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="bottom_yyzl">
        <div class="yyzl_title">
          配音
        </div>
        <div class="bottom_form">
          <el-form
            :inline="true"
            :model="formyyzl"
            class="demo-form-inline"
            label-position="left"
          >
            <el-form-item>
              <span slot="label">
                <span>任命助理：</span>
              </span>
              <el-input v-model="formyyzl.rmzl" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>交谈1：</span>
              </span>
              <el-input v-model="formyyzl.jt1" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>交谈2：</span>
              </span>
              <el-input v-model="formyyzl.jt2" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>交谈3：</span>
              </span>
              <el-input v-model="formyyzl.jt3" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>晋升后交谈1：</span>
              </span>
              <el-input v-model="formyyzl.jsjt1" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>晋升后交谈2：</span>
              </span>
              <el-input v-model="formyyzl.jsjt2" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>信赖提升后交谈1：</span>
              </span>
              <el-input v-model="formyyzl.xljt1" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>信赖提升后交谈2：</span>
              </span>
              <el-input v-model="formyyzl.xljt2" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>信赖提升后交谈3：</span>
              </span>
              <el-input v-model="formyyzl.xljt3" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>闲置：</span>
              </span>
              <el-input v-model="formyyzl.xz" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>干员报道：</span>
              </span>
              <el-input v-model="formyyzl.gybd" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>升级：</span>
              </span>
              <el-input v-model="formyyzl.sj" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>精英1：</span>
              </span>
              <el-input v-model="formyyzl.jy1" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>精英2：</span>
              </span>
              <el-input v-model="formyyzl.jy2" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>编入队伍：</span>
              </span>
              <el-input v-model="formyyzl.brdw" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>任命队长：</span>
              </span>
              <el-input v-model="formyyzl.rmdz" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>行动出发：</span>
              </span>
              <el-input v-model="formyyzl.xdcf" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>行动开始：</span>
              </span>
              <el-input v-model="formyyzl.xdks" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>选中1：</span>
              </span>
              <el-input v-model="formyyzl.xz1" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>选中2：</span>
              </span>
              <el-input v-model="formyyzl.xz2" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>部署1：</span>
              </span>
              <el-input v-model="formyyzl.bs1" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>部署2：</span>
              </span>
              <el-input v-model="formyyzl.bs2" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>作战1：</span>
              </span>
              <el-input v-model="formyyzl.zz1" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>作战2：</span>
              </span>
              <el-input v-model="formyyzl.zz2" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>作战3：</span>
              </span>
              <el-input v-model="formyyzl.zz3" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>作战4：</span>
              </span>
              <el-input v-model="formyyzl.zz4" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>完成高难度关卡：</span>
              </span>
              <el-input v-model="formyyzl.ndgk" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>3星结束：</span>
              </span>
              <el-input v-model="formyyzl.sxjs" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>非3星结束：</span>
              </span>
              <el-input v-model="formyyzl.fsxjs" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>行动失败：</span>
              </span>
              <el-input v-model="formyyzl.xdsb" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>进驻设施：</span>
              </span>
              <el-input v-model="formyyzl.jzss" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>戳一下：</span>
              </span>
              <el-input v-model="formyyzl.cyx" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>信赖触摸：</span>
              </span>
              <el-input v-model="formyyzl.xlcm" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>问候：</span>
              </span>
              <el-input v-model="formyyzl.wh" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>标题：</span>
              </span>
              <el-input v-model="formyyzl.bt" />
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

    <style>
  .title_box_yyzl {
    width: 5.1rem;
  }
 .top_form .el-form-item{
    width: 39% !important;
  }
  .yyzl_title{
    font-size: 25px;
    background: linear-gradient(to right, #0052cc, #f7f7f7);
    color: #f7f7f7;
    width: 2.25rem;
    margin: .25rem 0px;
    padding-left: .125rem;
    font-weight: bold;
    letter-spacing: 2px;
  }
</style>
