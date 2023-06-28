<script setup lang="ts">
import { useState } from '../store/index'

const { state } = useState()
</script>

<template>
  <div class="all_box">
    <div class="title_box title_box_zhjl">
      <div class="title">
        综合记录
      </div>
      <div class="title_E">
        <span>///Comprehensive Record File</span>
      </div>
    </div>
    <div class="form_box">
      <div class="form">
        <div class="left">
          <el-form
            :inline="true"
            :model="formInline"
            class="demo-form-inline"
            label-width="120px"
            label-position="left"
          >
            <el-form-item>
              <span slot="label">
                <span>物理强度：</span>
              </span>
              <el-input v-model="formInline.wlqd" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>战场机动：</span>
              </span>
              <el-input v-model="formInline.zcjd" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>生理耐受：</span>
              </span>
              <el-input v-model="formInline.slns" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>战斗规划：</span>
              </span>
              <el-input v-model="formInline.zdgh" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>战斗技巧：</span>
              </span>
              <el-input v-model="formInline.zdjq" />
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span>源石技艺适应性：</span>
              </span>
              <el-input v-model="formInline.ysjy" />
            </el-form-item>
          </el-form>
        </div>
        <div class="right right_zhji">
          <span>综合体检测试附加数据：</span>
          <el-input
            v-model="formInline.zhtcfj"
            type="textarea"
            :rows="15"
          />
        </div>
      </div>
      <div class="foot">
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
          label-width="180px"
          label-position="left"
        >
          <el-form-item>
            <span slot="label">
              <span>客观履历：</span>
            </span>
            <el-input
              v-model="formInline.kgll"
              type="textarea"
              :rows="5"
            />
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span>临床诊断分析：</span>
            </span>
            <el-input
              v-model="formInline.lcfx"
              type="textarea"
              :rows="5"
            />
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

  <style>
  .title_box_zhjl {
    width: 6.375rem;
  }
  .right_zhji {
    width: 68%;
    font-size: 21px;
    color: #000;
  }
  .right span{
   display: block;
   margin-bottom: .125rem;
  }
</style>
