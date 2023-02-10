import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useWindowSize } from '@vueuse/core'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

//语言，侧边栏展开状态，明暗
//size，全屏状态
export const usePageStore = defineStore(
  'page',
  () => {
    const language = ref('En')
    const locale = computed(() => (language.value === 'En' ? zhCn : en))
    function toggle() {
      language.value = language.value === 'En' ? '中' : 'En'
    }

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

    return { language, locale, size, windowWidth: width, windowHeight: height, toggle }
  },
  { persist: { storage: localStorage } },
)
