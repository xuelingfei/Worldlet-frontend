<template>
  <template v-if="windowWidth < 1366 || windowHeight < 768">
    <el-scrollbar>
      <el-config-provider :size="size" :locale="locale">
        <router-view />
      </el-config-provider>
    </el-scrollbar>
  </template>
  <template v-else>
    <el-config-provider :size="size" :locale="locale">
      {{ windowWidth }}|{{ windowHeight }}
      <router-view />
    </el-config-provider>
  </template>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores/page'

const store = usePageStore()
const { locale, size, windowWidth, windowHeight } = storeToRefs(store)
</script>

<style scoped></style>
