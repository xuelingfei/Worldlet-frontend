export default {
  namespaced: true,
  state: {
    // 侧边栏是否折叠
    collapsed: false,
  },
  mutations: {
    SET_DATA(state, payload) {
      for (let key in payload) {
        state[key] = payload[key]
      }
    },
  },
}
