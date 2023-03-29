<template>
  <div class="frontend-layout flex-column">
    <div class="frontend-header">
      <div class="frontend-content">
        <FrontendHeader />
      </div>
    </div>
    <div class="frontend-container">
      <el-scrollbar>
        <div class="frontend-content">
          <router-view />
        </div>
        <ToolBar />
      </el-scrollbar>
    </div>
    <div :class="['frontend-footer', 'center-x', footerHidden ? 'hidden' : '']">
      <div class="frontend-content">
        <FooterBar />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrontendLayout',
}
</script>
<script setup>
import FrontendHeader from '@/layout/FrontendLayout/FrontendHeader/index.vue'
import ToolBar from '@/components/ToolBar/index.vue'
import FooterBar from '@/components/FooterBar/index.vue'
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores/page'

const pageStore = usePageStore()
const { footerHidden } = storeToRefs(pageStore)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
