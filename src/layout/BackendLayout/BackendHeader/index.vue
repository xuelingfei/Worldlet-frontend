<template>
  <div class="header-left">
    <el-icon :size="sizeNum" class="header-icon" @click="toggleCollapse">
      <SvgFold v-show="isCollapse" />
      <SvgExpand v-show="!isCollapse" />
    </el-icon>
  </div>
  <header-bar source="backend" />
</template>

<script>
export default {
  name: 'BackendHeader',
}
</script>
<script setup>
import SvgFold from '@/assets/svg/fold.svg'
import SvgExpand from '@/assets/svg/expand.svg'
import HeaderBar from '@/components/HeaderBar/index.vue'
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores/page'

const pageStore = usePageStore()
const { isCollapse, sizeNum } = storeToRefs(pageStore)
const { toggleCollapse } = pageStore
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
