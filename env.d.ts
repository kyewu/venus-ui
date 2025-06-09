/// <reference types="vite/client" />

declare const __IS_DEVELOPMENT__: boolean

declare module '*.md' {
  import type { ComponentOptions } from 'vue'

  const Component: ComponentOptions
  export default Component
}

declare module 'mockjs' {
  const mockjs: any

  export default mockjs
}