<template>
  <div class="footer-bar flex-between">
    <el-space :size="5" style="align-items: initial">
      <el-icon class="medium"><Monitor /></el-icon>
      <div>{{ windowWidth }} × {{ windowHeight }}</div>
    </el-space>
    <el-space :size="5">
      <el-icon class="medium"><Clock /></el-icon>
      <div>{{ now }}</div>
    </el-space>
  </div>
</template>

<script>
export default {
  name: 'FooterBar',
}
</script>
<script setup>
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores/page'

const pageStore = usePageStore()
const { windowWidth, windowHeight, now } = storeToRefs(pageStore)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
