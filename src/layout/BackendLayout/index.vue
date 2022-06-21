<template>
  <a-layout has-sider class="backend-layout">
    <backend-sider />
    <a-layout>
      <backend-header />
      <a-layout-content>
        <router-view />
      </a-layout-content>
      <!-- <a-layout-footer>Footer</a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>

<script>
import BackendSider from "./BackendSider/index.vue"
import BackendHeader from "./BackendHeader/index.vue"

export default {
  name: "BackendLayout",
  components: { BackendSider, BackendHeader },
  setup() {},
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
