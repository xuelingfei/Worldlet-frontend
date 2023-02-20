<template>
  <div class="backend-layout flex">
    <div class="backend-side"><backend-side /></div>
    <div class="backend-main">
      <div class="backend-header flex-between"><backend-header /></div>
      <div class="backend-container"><router-view /></div>
      <div class="backend-footer"><footer-bar /></div>
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
import FooterBar from '@/components/FooterBar/index.vue'
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
