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
        <template v-for="menu in frontendMenuList" :key="menu.id">
          <template v-if="menu.children && menu.children.length">
            <el-sub-menu :key="menu.id" :index="String(menu.id)">
              <template #title>{{ menu.name }}</template>
              <el-menu-item v-for="item in menu.children" :key="item.id" :index="item.path">
                {{ item.name }}
              </el-menu-item>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :key="menu.id" :index="menu.path">{{ menu.name }}</el-menu-item>
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

import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const { frontend: frontendMenuList } = storeToRefs(userStore)

const route = useRoute()
const activeMenu = ref(route.path)
watch(
  () => route.path,
  (newPath) => {
    activeMenu.value = newPath
  },
  // { immediate: true }
)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
