<template>
  <el-button :plain="true" @click="open">Show message</el-button>
  <el-button :plain="true" @click="open1(1)">Show msg</el-button>
  <el-button :plain="true" @click="open1(2)">Show msg2</el-button>
  <el-button :plain="true" @click="open1(3)">Show msg2</el-button>
  <el-button :plain="true" @click="open1(4)">Show msg2</el-button>
  <el-button :plain="true" @click="open1(5)">Show msg2</el-button>
  <!-- <el-button type="primary" :icon="Edit" /> -->
  <el-icon :size="20">
    <edit />
  </el-icon>
  <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
  <el-badge :value="1" class="item" type="primary">
    <el-button>comments</el-button>
  </el-badge>
  <el-badge :value="2" class="item" type="warning">
    <el-button>replies</el-button>
  </el-badge>
  <el-table mb-1 :data="[]" />
  <el-pagination :total="100" />
</template>

<script>
export default {
  name: 'FrontendHome',
}
</script>

<script setup>
import { Edit } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { showMessage } from '@/utils/index'

const open = () => {
  showMessage('this is a message.', 'warning')
}

const open1 = (index) => {
  showMessage(`this is a ${index} message.`, 'success', { grouping: true, showClose: true })
}

const value1 = ref('')
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
