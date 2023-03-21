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
    <template v-for="menu in backendMenuList" :key="menu.id">
      <template v-if="menu.children && menu.children.length">
        <el-sub-menu :key="menu.id" :index="String(menu.id)">
          <template #title>
            <el-icon>
              <img v-if="menu.icon" class="menu-icon" :src="menu.icon" alt="" />
              <SvgBackend v-else />
            </el-icon>
            <span>{{ menu.name }}</span>
          </template>
          <el-menu-item v-for="item in menu.children" :key="item.id" :index="item.path">
            <template #title>
              <el-icon>
                <img v-if="item.icon" class="menu-icon" :src="item.icon" alt="" />
                <SvgBackend v-else />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
          </el-menu-item>
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item :key="menu.id" :index="menu.path">
          <el-icon>
            <img v-if="menu.icon" class="menu-icon" :src="menu.icon" alt="" />
            <SvgBackend v-else />
          </el-icon>
          <template #title>
            <span>{{ menu.name }}</span>
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
import SvgBackend from '@/assets/svg/backend.svg'

import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { usePageStore } from '@/stores/page'

const pageStore = usePageStore()
const { sideCollapsed } = storeToRefs(pageStore)

const userStore = useUserStore()
const { backend: backendMenuList } = storeToRefs(userStore)

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
