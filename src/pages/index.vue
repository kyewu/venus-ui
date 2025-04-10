<template>
 <Swiper :items="slideItems"></Swiper>
</template>

<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'
import {SwiperItemType} from '@/components/types';
onMounted(() => {
  useRegisterSW({
    immediate: true,
    onRegisteredSW(swScriptUrl, registration) {
      console.log('swScriptUrl:', swScriptUrl)
      console.log('registration:', registration)
      setInterval(() => {
        if (registration) {
          registration.update()
        }
      }, 5000)
    },
  })
})

const slideItems: Ref<SwiperItemType[]> = ref([
  {
  image: 'https://cdn.pixabay.com/photo/2015/09/18/19/03/space-5579.jpg',
  title: 'Venus',
  subTitle: '1'
},{
  image: 'https://cdn.pixabay.com/photo/2015/09/18/19/03/space-5579.jpg',
  title: 'Hh',
  subTitle: '2'
}
]);
</script>
