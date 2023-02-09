import { ElMessage } from 'element-plus'

export function showMessage(msg = '', type = 'info', config = {}) {
  if (!config.grouping) {
    ElMessage.closeAll()
  }
  ElMessage({ message: msg, type: type, ...config })
}
