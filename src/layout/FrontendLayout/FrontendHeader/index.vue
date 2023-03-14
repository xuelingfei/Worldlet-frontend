<template>
  <div class="header-box flex-between">
    <div class="header-left flex-center-y">
      <router-link to="/backend">
        <img class="header-logo" src="/favicon.ico" alt="Worldlet" />
      </router-link>
      <!-- <router-link to="/" class="plain-link">
        <span class="larger">Worldlet</span>
      </router-link> -->
      <el-menu :default-active="activeIndex" mode="horizontal" :router="true" class="large">
        <template v-for="menu in menuList" :key="menu.id">
          <el-sub-menu v-if="menu.children && menu.children.length" :index="menu.path">
            <template #title>{{ menu.label }}</template>
            <el-menu-item v-for="item in menu.children" :key="item.id" :index="item.path">
              {{ item.label }}
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item v-else :index="menu.path">{{ menu.label }}</el-menu-item>
        </template>
      </el-menu>
    </div>
    <header-bar source="frontend" />
  </div>
</template>

<script>
export default {
  name: 'FrontendHeader',
}
</script>
<script setup>
import HeaderBar from '@/components/HeaderBar/index.vue'

import { ref } from 'vue'

const activeIndex = ref('/')

const menuList = ref([
  { id: 1, path: '/', label: 'Worldlet' },
  { id: 2, path: '/account-book', label: 'AccountBook' },
  { id: 3, path: '/personal-center', label: 'PersonalCenter' },
  { id: 4, path: '4', label: 'Orders', children: [{ id: 5, path: '/example', label: 'PersonalCenter' }] },
])
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
