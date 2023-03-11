import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { useDark, useToggle, useFullscreen, useWindowSize, useNow, useDateFormat } from '@vueuse/core'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

export const usePageStore = defineStore(
  'page',
  () => {
    // 语言
    const language = ref('zh-cn')
    const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))
    function toggleLanguage() {
      language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
    }

    // 暗黑模式
    const isDark = useDark({ initialValue: 'light' })
    const toggleDark = useToggle(isDark)

    // 全屏
    const { isFullscreen, toggle: toggleFullscreen } = useFullscreen()

    // 组件尺寸
    const { width, height } = useWindowSize()
    const size = computed(() => {
      if (width.value < 1366) {
        return 'small'
      } else if (width.value > 2560) {
        return 'large'
      } else {
        return 'default'
      }
    })
    const sizeNum = computed(() => {
      if (width.value < 1366) {
        return 20
      } else if (width.value > 2560) {
        return 24
      } else {
        return 24
      }
    })

    // 时间
    const now = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss ddd')

    // 底栏隐藏
    const footerHidden = ref(false)
    function toggleFooterHidden() {
      footerHidden.value = !footerHidden.value
    }

    // 后台侧边栏折叠状态
    const sideCollapsed = ref(false)
    function toggleSideCollapsed() {
      sideCollapsed.value = !sideCollapsed.value
    }

    return {
      language,
      locale,
      isDark,
      isFullscreen,
      size,
      sizeNum,
      windowWidth: width,
      windowHeight: height,
      now,
      footerHidden,
      sideCollapsed,
      toggleLanguage,
      toggleDark,
      toggleFullscreen,
      toggleFooterHidden,
      toggleSideCollapsed,
    }
  },
  { persist: true },
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
}
