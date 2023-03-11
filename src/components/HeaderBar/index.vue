<template>
  <el-space class="header-bar">
    <el-button text round class="header-button">
      <el-badge :value="2">
        <el-icon :size="sizeNum"><ChatRound /></el-icon>
      </el-badge>
    </el-button>
    <el-button text round class="header-button" @click="toggleLanguage">
      <el-icon :size="sizeNum">
        <SvgZh v-show="language !== 'zh-cn'" />
        <SvgEn v-show="language === 'zh-cn'" />
      </el-icon>
    </el-button>
    <el-button text round class="header-button" @click="toggleDark()">
      <el-icon :size="sizeNum">
        <Moon v-show="isDark" />
        <Sunny v-show="!isDark" />
      </el-icon>
    </el-button>
    <el-button text round class="header-button" @click="toggleFullscreen">
      <el-icon :size="sizeNum">
        <SvgFullscreen v-show="!isFullscreen" />
        <SvgFullscreenExit v-show="isFullscreen" />
      </el-icon>
    </el-button>
    <el-dropdown v-if="!loggedin" @command="handleCommand">
      <div class="user-box flex-center-y">
        <el-avatar :icon="avatar ? avatar : SvgUser" />
        <el-icon class="el-icon--right"><ArrowDown /></el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="personal-center" :icon="User">个人中心</el-dropdown-item>
          <el-dropdown-item v-if="props.source === 'backend'" command="frontend-home" :icon="SvgFrontend">
            进入前台
          </el-dropdown-item>
          <el-dropdown-item v-if="props.source === 'frontend'" command="backend-home" :icon="SvgBackend">
            进入后台
          </el-dropdown-item>
          <el-dropdown-item command="hideFooter" :icon="footerHidden ? SvgUpCircle : SvgDownCircle">
            {{ footerHidden ? '显示' : '隐藏' }}底栏
          </el-dropdown-item>
          <el-dropdown-item command="exit" :icon="SvgExit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <template v-else>
      <el-button text round class="header-button medium">登录</el-button>
      <el-button text round class="header-button medium">注册</el-button>
    </template>
  </el-space>
</template>

<script>
export default {
  name: 'HeaderBar',
}
</script>
<script setup>
import SvgZh from '@/assets/svg/language-zh.svg'
import SvgEn from '@/assets/svg/language-en.svg'
import SvgFullscreen from '@/assets/svg/fullscreen.svg'
import SvgFullscreenExit from '@/assets/svg/fullscreen-exit.svg'
import SvgUser from '@/assets/svg/user.svg'
import SvgFrontend from '@/assets/svg/frontend.svg'
import SvgBackend from '@/assets/svg/backend.svg'
import SvgUpCircle from '@/assets/svg/up-circle.svg'
import SvgDownCircle from '@/assets/svg/down-circle.svg'
import SvgExit from '@/assets/svg/exit.svg'
import { ChatRound, Sunny, Moon, ArrowDown, User } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores/page'
import { useAuthStore } from '@/stores/auth'

const props = defineProps({
  source: {
    type: String,
    required: true,
  },
})

const pageStore = usePageStore()
const { language, isDark, isFullscreen, footerHidden, sizeNum } = storeToRefs(pageStore)
const { toggleLanguage, toggleDark, toggleFullscreen, toggleFooterHidden } = pageStore

const authStore = useAuthStore()
const { avatar, loggedin } = storeToRefs(authStore)
const router = useRouter()
const handleCommand = (command) => {
  if (command === 'hideFooter') {
    toggleFooterHidden()
  } else if (command === 'exit') {
    console.log('exit')
  } else {
    router.push({ name: command })
  }
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
