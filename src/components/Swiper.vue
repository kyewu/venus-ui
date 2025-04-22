<template>
  <swiper-container class="relative" :style="{ 'height': height }"
    :pagination="{ type: 'fraction', el: '.swiper-pagination' }" :space-between="0"
    :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
     @swiperactiveindexchange="onActiveIndexChange"
     v-bind="$attrs">
    <swiper-slide v-for="(item, index) in items" :key="index">
      <slot :item="item">
        <div class="bg-image" :style="{ 'background-image': `url(${item?.image})` }">
          <Container class="h-full">
            <div class="flex flex-col justify-center items-start lt-sm:px-4">
              <p class="text-xl sm:text-4xl font-bold text-white">{{ item?.title }}</p>
              <p class="text-sm sm:text-xl text-gray-100 pt-4">{{ item?.subTitle }}</p>
            </div>
          </Container>
        </div>
      </slot>
    </swiper-slide>
    <div class="flex justify-center items-center absolute bottom-0 bg-white opacity-60 text-dark-300 w-36 h-12 z-2"
      :style="{ 'right': `${slideRight}px` }">
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev i-mdi-arrow-left-thin text-8">1</div>
      <div class="swiper-button-next i-mdi-arrow-right-thin text-8">2</div>
    </div>
  </swiper-container>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle';
import type { SwiperItemType } from './types';
// 注册Swiper自定义元素
register();

defineProps<{ items: SwiperItemType[], height: string }>()
const emits = defineEmits<{ change: [value: number] }>()

const slideRight = ref<number>(0)
const curActiveIndex = ref<number>(0)


const onActiveIndexChange = (e: CustomEvent) => {
  const [swiper] = e.detail
  const { translate, activeIndex } = swiper
  curActiveIndex.value = activeIndex
  slideRight.value = translate
  emits('change', activeIndex)
};


</script>

<style scoped lang="scss">
.swiper-button-disabled {
  color: rgba($color: #000, $alpha: 0.3);
}
</style>
