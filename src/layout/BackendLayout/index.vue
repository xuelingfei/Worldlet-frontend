<template>
  <div class="backend-layout flex">
    <div :class="['backend-side', sideCollapsed ? 'collapsed' : '']"><backend-side /></div>
    <div class="backend-main flex-column">
      <div class="backend-header flex-between"><backend-header /></div>
      <div class="backend-container">
        <el-scrollbar>
          <router-view />
          <ToolBar source="backend" />
        </el-scrollbar>
      </div>
      <div :class="['backend-footer', 'center-x', footerHidden ? 'hidden' : '']">
        <footer-bar />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackendLayout',
}
</script>
<script setup>
import BackendSide from '@/layout/BackendLayout/BackendSide/index.vue'
import BackendHeader from '@/layout/BackendLayout/BackendHeader/index.vue'
import ToolBar from '@/components/ToolBar/index.vue'
import FooterBar from '@/components/FooterBar/index.vue'
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores/page'

const pageStore = usePageStore()
const { sideCollapsed, footerHidden } = storeToRefs(pageStore)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
