<template>
  <div class="header-box center-x flex-between">
    <div class="header-left">
      <img class="fronted-favicon" src="/favicon.ico" alt="" />
    </div>
    <header-bar source="fronted" />
  </div>
</template>

<script>
export default {
  name: 'FrontendHeader',
}
</script>
<script setup>
import HeaderBar from '@/components/HeaderBar/index.vue'
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
