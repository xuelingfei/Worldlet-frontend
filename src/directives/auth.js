import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

export default {
  mounted(el, binding) {
    const bindVal = binding.value
    const userStore = useUserStore()
    const { access } = storeToRefs(userStore)
    if (!(access.value.length && access.value.includes(bindVal))) {
      el.remove()
    }
  },
}
