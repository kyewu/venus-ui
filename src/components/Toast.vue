<template>
  <transition name="fade">
    <!-- Toast 消息提示组件 -->
    <div class="fixed w-full left-0 top-13 flex z-100 transition-all" v-if="show">
      <div :class="['mx-auto bg-black bg-opacity-40 text-white px-4 py-2 rounded-2']">
        {{ text }}
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
interface ToastProps {
  text: string;
  duration?: number;
}

const props = defineProps<ToastProps>()

const show = defineModel<boolean>({ default: false })

watch(show, () => {
  if (show.value) {
    setTimeout(() => {
      show.value = false
    }, props.duration || 2000)
  }
})
</script>

<style scoped>

</style>