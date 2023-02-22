<template>
  <div class="footer-bar flex-between">
    <div>{{ windowWidth }} × {{ windowHeight }}</div>
    <div>{{ now }}</div>
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
