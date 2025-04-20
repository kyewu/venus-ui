<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
import { useThemeStore } from './stores'

useResizeObserver(document.body, () => {
  const themeStore = useThemeStore()
  const { width } = useWindowSize()
  const contentWidth = 1200
  themeStore.$patch({
    rate: width.value < 1200 ? +(width.value / contentWidth).toFixed(2) : 1,
  })
})
</script>
