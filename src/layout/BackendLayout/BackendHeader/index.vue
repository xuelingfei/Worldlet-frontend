<template>
  <div class="header-left">
    <el-icon :size="sizeNum" class="header-icon" @click="toggleSideCollapsed">
      <SvgFold v-show="!sideCollapsed" />
      <SvgExpand v-show="sideCollapsed" />
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
import HeaderBar from '@/components/HeaderBar/index.vue'
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores/page'

const pageStore = usePageStore()
const { sideCollapsed, sizeNum } = storeToRefs(pageStore)
const { toggleSideCollapsed } = pageStore
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
