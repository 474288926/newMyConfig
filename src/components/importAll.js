import { defineAsyncComponent } from 'vue'

const importAll = (app) => {
  // 导入 components/public 目录下的所有 .vue 文件
  const context = import.meta.glob('@/components/public/**/*.vue')
  Object.entries(context).forEach(([key, module]) => {
    const match = key.match(/\/([^/]+)\.vue$/)
    // 如果匹配成功，提取的组件名将在 match[1] 中
    const componentName = match ? match[1] : null
    app.component(
      componentName,
      defineAsyncComponent(() => module())
    )
  })
}

export default importAll
