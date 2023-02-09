<template>
  <div>
    <el-button :icon="isDark ? Moon : Sunny" circle @click="toggleDark()" />
    <el-icon :size="20" @click="toggleDark()">
      <sunny v-show="!isDark" />
      <moon v-show="isDark" />
    </el-icon>
  </div>
</template>

<script>
export default {
  name: 'FrontendHeader',
}
</script>
<script setup>
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
