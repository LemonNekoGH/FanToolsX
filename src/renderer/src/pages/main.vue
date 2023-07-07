<script lang="ts">
// import '../../assets/css/main.css'

export default {

  data() {
    return {

    }
  },
  mounted() {},
  methods: {
    goback() {
      this.$router.go(-1)
    },
  },
}
</script>

<template>
  <div id="ba_box">
    <!-- 顶部 -->
    <div class="flex top_box">
      <!-- 顶部返回按钮 -->
      <button class="top_fh" @click="goback">
        返回
      </button>

      <div class="top_right_bg" />
    </div>

    <!-- 内容区域 -->
    <div class="content_index flex">
      <!-- left -->
      <div class="index_conetn_left">
        <!-- 头像 -->
        <div class="index_left_imgs">
          <img src="../assets/img/xiao.png" alt="">
        </div>
        <div class="box_botts">
          <!-- 五角星图片 -->
          <div class="wujx">
            <img src="../assets/img/stars1.png" alt="" srcset="">
          </div>

          <div class="index__content_title">
            界限突破空弦2
          </div>

          <div class="index__content_fbt">
            Archetto
          </div>
          <!-- 属性 -->
          <div class="flex index_sx">
            <!-- 属性左侧 -->
            <div class="sx_left flex">
              <div>
                70
              </div>
              <div>
                70
              </div>
              <div>
                70
              </div>

              <div>
                70
              </div>
              <div>
                70
              </div>
              <div>
                70
              </div>
              <div>
                70
              </div>
              <div>
                70
              </div>
            </div>
            <!-- 属性右侧 -->
            <div class="sx_right">
              <!-- 标题 -->
              <div class="sx_right_top" />
            </div>
          </div>
        </div>
      </div>
      <!-- right -->
      <div class="index_conetn_right ">
        <div class="flex_al">
          <div class="sx_right_top_left flex ">
            <img src="../assets/img/xiao.png" alt="">
            <img src="../assets/img/xiao.png" alt="">

            狙击·逸散射手
          </div>

          <div class="sx_right_top_right">
            同时攻击三个目标，优先攻击空中
          </div>
        </div>

        <!-- 三个特性 -->
        <div class="texing flex">
          <div class="tx1">
            <!-- 标题 -->
            <div class="flex texing_title">
              <img src="../assets/img/xiao.png" alt="">
              <p>明天的种子</p>
            </div>
            <!-- 三个特性 -->
            <div class="tx_content">
              <p>特性更新:同时攻击三个目标，优先攻击空中单位，对地面单位造成的伤害无视10%防御力</p>

              <p>天赋[铁弦]更新:在场时所有[狙击]千员每2秒回复1点技力</p>
              <p>
                天赋[铁弦]更新:在场时所有[狙击]千员每2秒回复1点技力，攻击回复技能额外回复一点技力
              </p>
            </div>
          </div>
          <div class="tx1">
            <!-- 标题 -->
            <div class="flex texing_title">
              <img src="../assets/img/xiao.png" alt="">
              <p>明天的种子</p>
            </div>
            <!-- 三个特性 -->
            <div class="tx_content">
              <p>特性更新:同时攻击三个目标，优先攻击空中单位，对地面单位造成的伤害无视10%防御力</p>

              <p>天赋[铁弦]更新:在场时所有[狙击]千员每2秒回复1点技力</p>
              <p>
                天赋[铁弦]更新:在场时所有[狙击]千员每2秒回复1点技力，攻击回复技能额外回复一点技力
              </p>
            </div>
          </div>
          <div class="tx1 tx2">
            <div class="texing_title tx2_last">
              <div>
                <p>箭指远方</p>
                <div>
                  攻击范围+1，范围内的其他[狙击]千员攻击力+20%(+3%
                </div>
              </div>
              <div>
                <p>铁弦</p>
                <div>
                  在场时所有-[狙击]千员每25秒回复1点技力
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 三个技能 -->
        <div class="jn flex">
          <div class="jn_1">
            <div class="flex">
              <div>
                <img src="../assets/img/xiao.png" alt="">
              </div>
              <div class="jn_top">
                <p>箭矢·散逸</p>
                <div class="flex jn_bq">
                  <span>攻击回复</span>
                  <span>手动触发</span>
                  <span>0秒</span>
                </div>
              </div>
            </div>

            <div class="jn_text flex">
              <img src="../assets/img/jb_1.png" alt="">

              下次攻击攻击力提高至170%，攻击命中后向1.0半径进行溅射，至多溅射6次
            </div>
            <div class="jn_text flex">
              <img src="../assets/img/jb_last.png" alt="">

              下次攻击攻击力提高至300%，攻击命中后向1.0半径进行溅射，至多溅射6次
            </div>
          </div>
          <div class="jn_1">
            <div class="flex">
              <div>
                <img src="../assets/img/xiao.png" alt="">
              </div>
              <div class="jn_top">
                <p>箭矢·散逸</p>
                <div class="flex jn_bq">
                  <span>攻击回复</span>
                  <span>手动触发</span>
                  <span>0秒</span>
                </div>
              </div>
            </div>

            <div class="jn_text flex">
              <img src="../assets/img/jb_1.png" alt="">

              下次攻击攻击力提高至170%，攻击命中后向1.0半径进行溅射，至多溅射6次
            </div>
            <div class="jn_text flex">
              <img src="../assets/img/jb_last.png" alt="">

              下次攻击攻击力提高至300%，攻击命中后向1.0半径进行溅射，至多溅射6次
            </div>
          </div>

          <div class="jn_1">
            <div class="flex">
              <div>
                <img src="../assets/img/xiao.png" alt="">
              </div>
              <div class="jn_top">
                <p>箭矢·散逸</p>
                <div class="flex jn_bq">
                  <span>攻击回复</span>
                  <span>手动触发</span>
                  <span>0秒</span>
                </div>
              </div>
            </div>

            <div class="jn_text flex">
              <img src="../assets/img/jb_1.png" alt="">

              下次攻击攻击力提高至170%，攻击命中后向1.0半径进行溅射，至多溅射6次
            </div>
            <div class="jn_text flex">
              <img src="../assets/img/jb_last.png" alt="">

              下次攻击攻击力提高至300%，攻击命中后向1.0半径进行溅射，至多溅射6次
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
