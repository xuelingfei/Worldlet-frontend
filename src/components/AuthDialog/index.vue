<template>
  <el-dialog :model-value="dialogVisible" append-to-body center @close="closeDialog" class="auth-dialog large">
    <el-tabs :model-value="action" @tab-click="clickTab">
      <el-tab-pane label="登录" name="login">
        <div class="auth-row"><el-input v-model="input" placeholder="请输入手机号或者邮箱" /></div>
        <div class="auth-row"><el-input v-model="input" type="password" placeholder="请输入密码" /></div>
        <div class="auth-row low flex-right">验证码登录</div>
        <div class="auth-row"><el-button type="primary" @click="submitContent">登录</el-button></div>
      </el-tab-pane>
      <el-tab-pane label="注册" name="register">敬请期待</el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<script>
export default {
  name: 'AuthDialog',
}
</script>
<script setup>
import { ref, toRefs } from 'vue'

const emits = defineEmits(['update:visible', 'update:action'])
const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
    default: false,
  },
  action: {
    type: String,
    default: 'login',
  },
})
const { visible: dialogVisible, action } = toRefs(props)

const clickTab = (tab, event) => {
  emits('update:action', tab.value)
  console.log(tab, event)
}

const input = ref('')

const submitContent = () => {
  emits('update:visible', false)
}

const closeDialog = () => {
  emits('update:visible', false)
}
</script>

<style scoped lang="scss">
// Dialog 挂载在 body 上，样式需写入全局
</style>
