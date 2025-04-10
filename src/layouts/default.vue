<template>
  <nav class="fixed top-0 w-full bg-black z-50" :class="{'bg-opacity-30 bg-black shadow-lg': isScroll}">
   <Container>
     <div class="text-white">Venus</div>
     <Menu></Menu>
   </Container>
  </nav>
  <router-view></router-view>
  <div class="h-[4000px]"></div>
</template>

<script setup lang="ts">
import Container from '@/components/Container.vue'
import Menu from '@/components/Menu.vue'

const {y} = useWindowScroll()
const isScroll = computed(() => {
  return y.value > 0
})
</script>