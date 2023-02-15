<template>
  <div class="footer-bar flex-between">
    <div>{{ windowWidth }} × {{ windowHeight }}</div>
    <div>2023-02-15 17:59:50</div>
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
const { windowWidth, windowHeight } = storeToRefs(pageStore)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
