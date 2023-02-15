import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { useDark, useToggle, useFullscreen, useWindowSize } from '@vueuse/core'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

export const usePageStore = defineStore(
  'page',
  () => {
    // 语言
    const language = ref('En')
    const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))
    function toggleLanguage() {
      language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
    }

    // 深色模式
    const isDark = useDark()
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

    // 后台侧边栏展开状态

    return {
      language,
      locale,
      isDark,
      isFullscreen,
      size,
      sizeNum,
      windowWidth: width,
      windowHeight: height,
      toggleLanguage,
      toggleDark,
      toggleFullscreen,
    }
  },
  { persist: true },
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
}
