<template>
  <nav
    :class="['fixed w-full bg-black z-50 top-0 relative h-12 line-height-12', { 'bg-opacity-30 bg-black shadow-lg': isScroll }]">
    <Container>
      <div class="text-white h-full lt-sm:(mx-auto)">Venus</div>
      <i class="i-mdi-menu hidden text-gray-300 text-2xl absolute right-5 top-3 cursor-pointer hover:text-white lt-sm:block"
        @click="() => toggle()"></i>
      <Menu v-show="show" class="lt-sm:(absolute top-14 right-0 w-full flex-col)"></Menu>
    </Container>
  </nav>
  <router-view></router-view>
  <div class="h-[4000px]"></div>
  <footer>
    <div class="mobile-hide">default footer</div>
    <div class="hidden mobile">mobile footer</div>
  </footer>
</template>

<script setup lang="ts">
import Container from '@/components/Container.vue'
import Menu from '@/components/Menu.vue'

const { y } = useWindowScroll()
const isScroll = computed(() => {
  return y.value > 0
})

const [show, toggle] = useToggle(false)
const flag = ref(false)
useResizeObserver(document.body, () => {
  const { width } = useWindowSize()
  if (width.value < 640) {
    if (flag.value) {
      return
    }
    flag.value = true
    toggle(false)
  } else {
    toggle(true)
  }
})
</script>