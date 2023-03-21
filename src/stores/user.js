import { defineStore, acceptHMRUpdate } from 'pinia'

const DEFAULT = {
  username: '',
  avatar: '',
  loggedin: false,
  frontend: [
    { id: 91, name: 'Worldlet', path: '/' },
    { id: 92, name: 'AccountBook', path: '/account-book' },
    { id: 94, name: 'Example', children: [{ id: 99, name: 'Backend', path: '/backend' }] },
    { id: 93, name: 'PersonalCenter', path: '/personal-center' },
  ],
  backend: [
    { id: 91, name: 'Worldlet', path: '/' },
    { id: 92, name: 'AccountBook', path: '/account-book' },
    {
      id: 94,
      name: 'Example',
      icon: 'https://www.runoob.com/try/demo_source/paris.jpg',
      children: [{ id: 99, name: 'Backend', path: '/backend' }],
    },
    {
      id: 93,
      name: 'PersonalCenter',
      path: '/personal-center',
      icon: 'https://www.runoob.com/try/demo_source/paris.jpg',
    },
  ],
  access: [],
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => DEFAULT,

  actions: {
    // async login(user, password) {
    //   const userData = await apiLogin(user, password)

    //   this.$patch({
    //     name: user,
    //     ...userData,
    //   })
    // },

    logout() {
      this.$patch(DEFAULT)
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
