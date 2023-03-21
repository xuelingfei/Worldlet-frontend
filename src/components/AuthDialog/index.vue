<template>
  <el-dialog :value="show" append-to-body center @close="handleClose">
    <div>Test</div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="handleClose">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'AuthDialog',
}
</script>
<script setup>
import { toRefs } from 'vue'

const emits = defineEmits(['close'])
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
    default: false,
  },
})
const { show } = toRefs(props)
// const showDialog = computed(() => props.show)

const handleClose = () => {
  emits('close')
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
