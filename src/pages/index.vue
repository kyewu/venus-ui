<template>
 <Swiper :items="slideItems" :height="(store.rate*36) + 'rem'"></Swiper>
 <!-- title -->
 <Container class="px-4">
  <div class="flex items-center justify-between w-full py-4">
    <h1 class="text-3xl font-bold text-gray-800">热门推荐</h1>
    <div class="flex items-center">
      <i class="i-mdi-magnify text-2xl text-gray-500"></i>
      <input type="text" class="border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 ml-2" placeholder="搜索...">
    </div>
  </div>
 </Container>
 <!-- card -->
 <Container class="p-4">
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full lt-sm:px-4">
    <a class="['hover:(text-white bg-sky-500 shadow-lg transform-all transform-translate-y--5)']" :href="card.url" target="_blank" v-for="(card, index) in cards" :key="index">
      <Card v-bind="card" class="w-full rounded-0 card">
        <template #default>
          <div class="flex flex-row items-center justify-between text-gray-500 mb-4 mx-4">
            <span>查看更多</span>
            <i class="i-mdi-arrow-right-thin text-3xl"></i>
          </div>
        </template>
      </Card>
    </a>
  </div>
 </Container>
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

const cards: Ref<Card[]> = ref(
  [
    {
      // image: bg,
      imageType: 'rounded',
      icon: 'i-streamline:web w-12 h-12',
      title: '前端高级工程师（full stack）',
      subTitle: '"技术成长&职业破局"双高体系，打通“全栈 + 全流程 + 多端 + 提效 + AI赋能”',
      url: '',
      border: true,
    },
    {
      // image: bg,
      imageType: 'rounded',
      icon: 'i-streamline:web w-12 h-12',
      title: '前端高级工程师（full stack）',
      subTitle: '"技术成长&职业破局"双高体系，打通“全栈 + 全流程 + 多端 + 提效 + AI赋能”',
      url: '',
      border: true,
    },
    {
      // image: bg,
      imageType: 'rounded',
      icon: 'i-streamline:web w-12 h-12',
      title: '前端高级工程师（full stack）',
      subTitle: '"技术成长&职业破局"双高体系，打通“全栈 + 全流程 + 多端 + 提效 + AI赋能”',
      url: '',
      border: true,
    },
    {
      // image: bg,
      imageType: 'rounded',
      icon: 'i-streamline:web w-12 h-12',
      title: '前端高级工程师（full stack）',
      subTitle: '"技术成长&职业破局"双高体系，打通“全栈 + 全流程 + 多端 + 提效 + AI赋能”',
      url: '',
      border: true,
    },
    {
      // image: bg,
      imageType: 'rounded',
      icon: 'i-streamline:web w-12 h-12',
      title: '前端高级工程师（full stack）',
      subTitle: '"技术成长&职业破局"双高体系，打通“全栈 + 全流程 + 多端 + 提效 + AI赋能”',
      url: '',
      border: true,
    },
    {
      // image: bg,
      imageType: 'rounded',
      icon: 'i-streamline:web w-12 h-12',
      title: '前端高级工程师（full stack）',
      subTitle: '"技术成长&职业破局"双高体系，打通“全栈 + 全流程 + 多端 + 提效 + AI赋能”',
      url: '',
      border: true,
    },
    {
      // image: bg,
      imageType: 'rounded',
      icon: 'i-streamline:web w-12 h-12',
      title: '前端高级工程师（full stack）',
      subTitle: '"技术成长&职业破局"双高体系，打通“全栈 + 全流程 + 多端 + 提效 + AI赋能”',
      url: '',
      border: true,
    },
    {
      // image: bg,
      imageType: 'rounded',
      icon: 'i-streamline:web w-12 h-12',
      title: '前端高级工程师（full stack）',
      subTitle: '"技术成长&职业破局"双高体系，打通“全栈 + 全流程 + 多端 + 提效 + AI赋能”',
      url: '',
      border: true,
    },
  ]
);
</script>

<style lang="scss" scoped>
  :deep(.card) {
    &:hover {
      div,p {
        @apply text-white
      }
    }
  }
</style>