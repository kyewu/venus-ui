<template>
  <swiper class="relative w-full" :style="{ 'height': height }" :modules="modules"
    :pagination="{ type: 'fraction', el: '.swiper-pagination' }" :space-between="0"
    :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
    @activeIndexChange="onActiveIndexChange" v-bind="$attrs">
    <swiper-slide v-for="(item, index) in items" :key="index">
      <slot :item="item">
        <div class="bg-image" :style="{ 'background': `url(${item?.image})` }">
          <Container class="h-full">
            <div class="flex flex-col justify-center items-start lt-sm:px-4 sm:px-6">
              <p class="text-xl sm:text-4xl font-bold text-white">{{ item?.title }}</p>
              <p class="text-sm sm:text-xl text-gray-100 pt-4">{{ item?.subTitle }}</p>
            </div>
          </Container>
        </div>
      </slot>
    </swiper-slide>
    <div class="flex justify-center items-center absolute bottom-0 right-0 bg-white opacity-60 text-dark-300 w-36 h-12 z-2">
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev i-mdi-arrow-left-thin text-8">1</div>
      <div class="swiper-button-next i-mdi-arrow-right-thin text-8">2</div>
    </div>
  </swiper>
</template>

<script setup lang="ts">
// import { register } from 'swiper/element/bundle'
// 注册Swiper自定义元素
// register();
import type { SwiperItemType } from './types'

// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as ISwiper } from 'swiper/types'

const modules = ref([
  Navigation,
  Pagination,
  Autoplay,
])

defineProps<{ items: SwiperItemType[], height: string }>()
const emits = defineEmits<{ change: [value: number] }>()

const curActiveIndex = ref<number>(0)


const onActiveIndexChange = (swiper: ISwiper) => {
  // const [swiper] = e.detail
  const { activeIndex } = swiper
  curActiveIndex.value = activeIndex
  emits('change', activeIndex)
};


</script>

<style scoped lang="scss">
.swiper-button-disabled {
  color: rgba($color: #000, $alpha: 0.3);
}
.swiper-pagination-fraction{
  bottom: unset;
}
</style>
