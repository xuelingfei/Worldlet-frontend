<template>
  <el-config-provider :size="size" :locale="locale">
    <el-button mb-2 @click="toggle">{{ windowWidth }}</el-button>
    <router-view />
  </el-config-provider>
</template>
<script setup>
import { computed, ref } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const size = ref('default') // 'large' | 'default' | 'small'
const windowWidth = ref(window.innerWidth)
window.onresize = () => {
  windowWidth.value = window.innerWidth
  if (window.innerWidth < 1366) {
    size.value = 'small'
  } else if (window.innerWidth > 2560) {
    size.value = 'large'
  } else {
    size.value = 'default'
  }
}

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}
</script>

<style scoped></style>
