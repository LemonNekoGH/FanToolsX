<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      formblmn: state => state.formblmn,
    }),
  },
  mounted() {
    //  console.log(this.$store.getters.Paradox)
  },
  methods: {

    // ===============================
  },
}
</script>

<template>
  <div class="w-full h-full bg-white box-shadow box-border p-4">
    <div class="title_box title_box_blmn">
      <div class="title">
        悖论模拟
      </div>
      <div class="title_E">
        <span>///Paradox Simulation</span>
      </div>
    </div>
    <div class="form_box blmn">
      <div class="formdata">
        <el-form
          :inline="true"
          :model="formblmn"
          class="demo-form-inline"
          label-width="160px"
          label-position="left"
        >
          <el-form-item>
            <span slot="label">
              <span>悖论模拟标题：</span>
            </span>
            <el-input v-model="formblmn.blbt" />
          </el-form-item>
          <el-form-item>
            <span slot="label">
              <span>悖论模拟描述：</span>
            </span>
            <el-input
              v-model="formblmn.blms"
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
  .title_box_blmn {
    width: 5.2rem;
  }
.blmn{
  margin-top: .1875rem;
}
  </style>
