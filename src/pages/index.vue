<template>
 <Swiper :items="slideItems" :height="(store.rate*36) + 'rem'"></Swiper>
 <Card v-bind="card"></Card>
</template>

<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'
import type {Card, SwiperItemType} from '@/components/types';
import bg from '@/assets/images/bg.png';
import { useThemeStore } from '@/stores';
const store = useThemeStore()
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
  image: bg,
  title: 'Venus',
  subTitle: '1'
},{
  image: bg,
  title: 'Hh',
  subTitle: '2'
}
]);

const card: Ref<Card> = ref(
  {
    image: bg,
    imageType: 'rounded',
    // icon: 'i-mdi-home w-8 h-8',
    title: 'card',
    subTitle: 'card1',
    url: '',
    border: true,
  }
);
</script>

<style lang="scss" scoped>

</style>