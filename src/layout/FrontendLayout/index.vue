<template>
  <div class="frontend-header center-x">
    <div class="content-box center-x">
      <frontend-header />
    </div>
  </div>
  <div class="frontend-container center-x">
    <div class="content-box center-x">
      <router-view />
    </div>
  </div>
  <div class="frontend-footer center-x">
    <div class="content-box center-x">
      <footer-bar />
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
import FooterBar from '@/components/FooterBar/index.vue'
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
