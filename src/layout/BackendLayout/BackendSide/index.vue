<template>
  <div class="side-header flex-left">
    <router-link to="/" class="plain-link">
      <div class="side-logo"></div>
    </router-link>
    <transition name="el-fade-in">
      <router-link to="/backend" class="plain-link">
        <span v-show="!sideCollapsed" class="larger">Worldlet</span>
      </router-link>
    </transition>
  </div>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="sideCollapsed"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'BackendSide',
}
</script>
<script setup>
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores/page'

const pageStore = usePageStore()
const { sideCollapsed } = storeToRefs(pageStore)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
