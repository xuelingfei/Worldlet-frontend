<template>
  <div class="header-left">
    <el-icon :size="sizeNum" class="header-icon" @click="toggleCollapsed">
      <SvgFold v-show="!isCollapsed" />
      <SvgExpand v-show="isCollapsed" />
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
const { isCollapsed, sizeNum } = storeToRefs(pageStore)
const { toggleCollapsed } = pageStore
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
