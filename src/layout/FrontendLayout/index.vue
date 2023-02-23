<template>
  <div class="frontend-layout flex-column">
    <div class="frontend-header">
      <div class="frontend-content">
        <frontend-header />
      </div>
    </div>
    <div class="frontend-container">
      <router-view />
      <div class="footer-fixed" @click="toggleFooterHidden">
        <el-button v-show="!footerHidden" :icon="ArrowDown" circle />
        <el-button v-show="footerHidden" :icon="ArrowUp" circle />
      </div>
    </div>
    <div :class="['frontend-footer', 'center-x', footerHidden ? 'hidden' : '']">
      <div class="frontend-content">
        <footer-bar />
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
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import FrontendHeader from '@/layout/FrontendLayout/FrontendHeader/index.vue'
import FooterBar from '@/components/FooterBar/index.vue'
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores/page'

const pageStore = usePageStore()
const { footerHidden } = storeToRefs(pageStore)
const { toggleFooterHidden } = pageStore
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
