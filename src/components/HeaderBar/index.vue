<template>
  <el-space class="header-bar">
    <el-button text round class="header-button"><bell /></el-button>
    <el-button text round class="header-button" @click="toggleLanguage">{{ language }}</el-button>
    <el-button text round class="header-button" @click="toggleDark()">
      <el-icon :size="sizeNum">
        <moon v-show="isDark" />
        <sunny v-show="!isDark" />
      </el-icon>
    </el-button>
    <div class="user-bar flex-center-y">
      <el-button text circle class="header-button">登录</el-button>
      <el-button text round class="header-button">注册</el-button>
    </div>
    <el-dropdown @command="handleCommand">
      <div class="user-bar flex-center-y">
        <el-avatar :src="avatar ? avatar : Avatar" />
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="personal-center" :icon="User">个人中心</el-dropdown-item>
          <el-dropdown-item command="backend-home">进入后台</el-dropdown-item>
          <el-dropdown-item command="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-space>
</template>

<script>
export default {
  name: 'HeaderBar',
}
</script>
<script setup>
import { Bell, Sunny, Moon, Avatar, ArrowDown, User } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores/page'
import { useAuthStore } from '@/stores/auth'

const pageStore = usePageStore()
const { language, isDark, windowWidth, windowHeight, sizeNum } = storeToRefs(pageStore)
const { toggleLanguage, toggleDark } = pageStore

const authStore = useAuthStore()
const { avatar, loggedin } = storeToRefs(authStore)
// const user = reactive({
//   name: ''
// })
const handleCommand = (command) => {
  console.log(`click on item ${command}`)
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
