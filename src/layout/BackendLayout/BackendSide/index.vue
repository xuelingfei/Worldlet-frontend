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
  <el-menu :default-active="activeMenu" :collapse="sideCollapsed" :router="true">
    <template v-for="menu in menuList" :key="menu.id">
      <template v-if="menu.children && menu.children.length">
        <el-sub-menu :key="menu.id" :index="String(menu.id)">
          <template #title>
            <el-icon><document /></el-icon>
            <span>{{ menu.label }}</span>
          </template>
          <el-menu-item v-for="item in menu.children" :key="item.id" :index="String(item.id)" :route="item.route">
            <template #title>
              <el-icon><setting /></el-icon>
              <span>{{ item.label }}</span>
            </template>
          </el-menu-item>
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item :key="menu.id" :index="String(menu.id)" :route="menu.route">
          <el-icon><document /></el-icon>
          <template #title>
            <span>{{ menu.label }}</span>
          </template>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: 'BackendSide',
}
</script>
<script setup>
import { Document, Setting } from '@element-plus/icons-vue'

import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores/page'

const pageStore = usePageStore()
const { sideCollapsed } = storeToRefs(pageStore)

const activeMenu = ref('99')

const menuList = ref([
  { id: 91, label: 'Worldlet', route: { path: '/' } },
  { id: 92, label: 'AccountBook', route: { path: '/account-book' } },
  { id: 94, label: 'Example', children: [{ id: 99, label: 'Backend', route: { path: '/backend' } }] },
  { id: 93, label: 'PersonalCenter', route: { path: '/personal-center' } },
])
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
