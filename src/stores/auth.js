import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    username: '',
    avatar: '',
    loggedin: false,
    access: [],
  }),

  actions: {
    // async login(user, password) {
    //   const userData = await apiLogin(user, password)

    //   this.$patch({
    //     name: user,
    //     ...userData,
    //   })
    // },

    logout() {
      this.$patch({
        username: '',
        avatar: '',
        loggedin: false,
        access: [],
      })
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
