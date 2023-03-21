<template>
  <el-space class="header-bar">
    <el-button v-auth="'chat'" text round class="header-button">
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
    <el-dropdown v-if="loggedin" @command="handleCommand">
      <div class="user-box flex-center-y">
        <el-avatar :icon="avatar ? avatar : SvgUser" />
        <el-icon class="hidden-icon" @click="toggleFooterHidden">
          <ArrowDown v-show="!footerHidden" />
          <ArrowUp v-show="footerHidden" />
        </el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="personal-center" :icon="User">个人中心</el-dropdown-item>
          <el-dropdown-item command="exit" :icon="SvgExit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <template v-else>
      <el-button text round class="header-button medium" @click="showDialog = true">登录</el-button>
      <el-button text round class="header-button medium">注册</el-button>
    </template>
  </el-space>
  <AuthDialog v-model:show="showDialog" @close="showDialog = false" />
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
import SvgExit from '@/assets/svg/exit.svg'
import { ChatRound, Sunny, Moon, ArrowDown, ArrowUp, User } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores/page'
import { useUserStore } from '@/stores/user'

defineProps({
  source: {
    type: String,
    required: true,
  },
})

const pageStore = usePageStore()
const { language, isDark, isFullscreen, footerHidden, sizeNum } = storeToRefs(pageStore)
const { toggleLanguage, toggleDark, toggleFullscreen, toggleFooterHidden } = pageStore

const userStore = useUserStore()
const { avatar, loggedin } = storeToRefs(userStore)
const router = useRouter()
const handleCommand = (command) => {
  if (command === 'exit') {
    console.log('exit')
  } else {
    router.push({ name: command })
  }
}

const showDialog = ref(false)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
