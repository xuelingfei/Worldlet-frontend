<template>
  <div class="header-box flex">
    <div class="header-left flex-grow flex-center-y">
      <router-link to="/backend">
        <img class="header-logo" src="/favicon.ico" alt="Worldlet" />
      </router-link>
      <!-- <router-link to="/" class="plain-link">
        <span class="larger">Worldlet</span>
      </router-link> -->
      <el-menu :default-active="activeMenu" mode="horizontal" :router="true" class="large">
        <template v-for="menu in menuList" :key="menu.id">
          <template v-if="menu.children && menu.children.length">
            <el-sub-menu :key="menu.id" :index="String(menu.id)">
              <template #title>{{ menu.label }}</template>
              <el-menu-item v-for="item in menu.children" :key="item.id" :index="String(item.id)" :route="item.route">
                {{ item.label }}
              </el-menu-item>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :key="menu.id" :index="String(menu.id)" :route="menu.route">{{ menu.label }}</el-menu-item>
          </template>
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

const activeMenu = ref('99')

const menuList = ref([
  { id: 91, label: 'Worldlet', route: { path: '/' } },
  { id: 92, label: 'AccountBook', route: { path: '/account-book' } },
  { id: 94, label: 'Example', children: [{ id: 99, label: 'Backend', route: { path: '/back' } }] },
  { id: 93, label: 'PersonalCenter', route: { path: '/personal-center' } },
])
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
