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
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores/page'

const pageStore = usePageStore()
const { windowWidth, windowHeight } = storeToRefs(pageStore)

const now = ref('')
const weekArray = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
const updateNowTimer = () => {
  let date = new Date()
  // now.value =
  //   String(date.getFullYear()) +
  //   '-' +
  //   String(date.getMonth() + 1).padStart(2, '0') +
  //   '-' +
  //   String(date.getDate()).padStart(2, '0') +
  //   '\t' +
  //   String(date.getHours()).padStart(2, '0') +
  //   ':' +
  //   String(date.getMinutes()).padStart(2, '0') +
  //   ':' +
  //   String(date.getSeconds()).padStart(2, '0') +
  //   '\t' +
  //   weekArray[date.getDay()]
  now.value = date.toLocaleString('chinese', { hour12: false }) + '\t' + weekArray[date.getDay()]
}
onMounted(() => {
  setInterval(updateNowTimer, 1000 - new Date().getMilliseconds())
})
onBeforeUnmount(() => {
  clearInterval(updateNowTimer)
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
