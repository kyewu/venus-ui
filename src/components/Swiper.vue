<template>
  <swiper-container
  class="h-80"
    :pagination="true"
    :navigation="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item, index) in items" :key="index">
      <slot :item="item">
        <div class="w-full h-full bg-cover bg-no-repeat bg-center-top">
          <Container class="h-full">
            <div>
              <p>{{ item?.title }}</p>
              <p>{{ item?.subTitle }}</p>
            </div>
          </Container>
        </div>
      </slot>
    </swiper-slide>
  </swiper-container>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle';
import {SwiperItemType} from './types';
// 注册Swiper自定义元素
register();

defineProps<{ items: SwiperItemType[]}>()
const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};
</script>

<style scoped lang="scss">
</style>