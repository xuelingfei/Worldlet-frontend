<template>
  <div :class="['tool-bar', 'flex-column', source === 'backend' ? 'bottom-right' : '']">
    <div ref="scrollRef" class="tool-button" @click="clickBackTop">
      <el-icon><Top /></el-icon>
    </div>
    <div class="tool-button">
      <el-icon><Help /></el-icon>
    </div>
    <div class="tool-button" @click="toggleFooterHidden">
      <el-icon>
        <Download v-show="!footerHidden" />
        <Upload v-show="footerHidden" />
      </el-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrontendLayout',
}
</script>
<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores/page'

defineProps({
  source: {
    type: String,
    required: true,
  },
})

const scrollRef = ref(null)
const clickBackTop = () => {
  // document.getElementById('scrollBtn').parentNode.parentNode.scrollTo({ top: 0, behavior: 'smooth' })
  // scrollRef.value.parentNode.parentNode.scrollTo({ top: 0, behavior: 'smooth' })
  let el = scrollRef.value
  while (el.tagName != 'BODY' && el.scrollTop === 0) {
    el = el.parentNode
  }
  console.log('ScrollElement', el, el.tagName, el.scrollTop)
  if (el.scrollTop > 0) {
    el.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const pageStore = usePageStore()
const { footerHidden } = storeToRefs(pageStore)
const { toggleFooterHidden } = pageStore
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
