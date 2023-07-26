<script lang="ts" setup>
const props = defineProps<{
  img: string
  initialSp: number
  totalSp: number
  name: string
  expanded: boolean
  selected: string
}>()

const emit = defineEmits<{
  (e: 'selected', name: string): void
}>()

function onSelected(e: MouseEvent) {
  if (props.expanded) {
    e.preventDefault()
    e.stopPropagation()
  }
  emit('selected', props.name)
}
</script>

<template>
  <div :class="[expanded ? 'w-135px h-135px' : 'w-100px h-100px', expanded && selected === name ? 'outline-#01a0e9 outline-10px outline-solid' : '']" class="transition transition-all duration-500ms" @click="onSelected">
    <div class="w-full h-full box-border border-5px border-white/10 border-solid absolute top-0 left-0">
      <div class="bg-white/40 absolute bottom-20px left-20px w-4px h-70px transform rotate-45deg origin-bottom-left" />
    </div>
    <div v-if="img" class="w-full h-full absolute top-0 left-0 bg-white !bg-center !bg-contain !bg-no-repeat" :style="{ backgroundImage: `url(${img})` }" />
    <div class="w-30px h-24px rank_3 absolute -top-14px -left-16px" />
    <div class="h-32px flex absolute -bottom-18px items-center text-white transition-all transition duration-500ms" :class="[expanded ? 'left-32px text-32px leading-32px gap-4px' : 'left-5px text-24px leading-24px gap-2px']">
      <div :class="!initialSp ? 'invisible' : ''" class="btn-shadow bg-[#313131] bg-initial-sp flex items-center pl-5px">
        <img class="h-16px" src="../assets/img/operator-preview/skill_initial_sp.png">
        <div class="ml-2px">
          {{ initialSp || 20 }}
        </div>
      </div>
      <div class="btn-shadow bg-[#313131] bg-total-sp flex items-center pl-5px">
        <img class="h-24px" src="../assets/img/operator-preview/skill_total_sp.png">
        <div class="ml-2px">
          {{ totalSp }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.rank_3 {
  background-color: black;
  background-image: url('../assets/img/operator-preview/skill_rank_3.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
