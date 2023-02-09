<template>
  <div class="frontend-header center-x">
    <frontend-header />
  </div>
  <div class="frontend-container center-x">
    <router-view />
  </div>
  <!-- <div class="frontend-footer center">FrontendFooter</div> -->
</template>

<script>
export default {
  name: 'FrontendLayout',
}
</script>
<script setup>
import FrontendHeader from '@/layout/FrontendLayout/FrontendHeader/index.vue'
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
