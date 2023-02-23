<template>
  <el-scrollbar>
    <div class="frontend-content">
      <p v-for="item in 60" :key="item" class="scrollbar-demo-item">{{ item }}</p>
      <el-backtop :right="100" :bottom="100" />
    </div>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'FrontendHome',
}
</script>
<script setup>
// import { showMessage } from '@/utils/index'

// const open = () => {
//   showMessage('this is a message.', 'warning')
// }
// const open1 = (index) => {
//   showMessage(`this is a ${index} message.`, 'success', { grouping: true, showClose: true })
// }
</script>

<style scoped lang="scss">
@import './index.scss';
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
