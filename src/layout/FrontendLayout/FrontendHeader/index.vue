<template>
  <div>
    {{ windowWidth }} × {{ windowHeight }}
    <el-button text round @click="toggle">{{ language }}</el-button>
    <el-button text round :icon="isDark ? Moon : Sunny" @click="toggleDark()" />
  </div>
</template>

<script>
export default {
  name: 'FrontendHeader',
}
</script>
<script setup>
import { Sunny, Moon } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'
import { usePageStore } from '@/stores/page'

const store = usePageStore()
const { language, windowWidth, windowHeight } = storeToRefs(store)
const { toggle } = store

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
