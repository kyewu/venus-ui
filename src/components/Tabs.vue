<template>
  <ul class="tabs flex w-full">
    <li :class="['px-4 py-2 cursor-pointer', { active: index === activeIndex }]" v-for="(item, index) in items"
      :key="index" @click="activeIndex = index">
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts" generic="T">
withDefaults(defineProps<{
  items: T[]
}>(), {
  items: () => []
})

const activeIndex = defineModel<number>({ default: 2 })
</script>

<style scoped lang="scss">
.tabs {
  .active {
    @apply text-sky-400 relative;

    &:after {
      @apply content-none absolute bg-sky-400 w-8 h-[2px] bottom-0 left-1/2 transform-translate-x--1/2;
    }
  }
}
</style>