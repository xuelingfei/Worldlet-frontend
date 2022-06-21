import { createStore } from "vuex"
import VuexPersistence from "vuex-persist"

import eventHub from "./modules/eventHub"

const vuexLocal = new VuexPersistence({
  reducer: (state) => ({
    eventHub: state.eventHub,
  }),
  storage: window.localStorage,
})

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { eventHub },
  plugins: [vuexLocal.plugin],
})
