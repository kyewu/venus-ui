import { getHomeData } from "@/api/home"
import type { Card, SwiperItemType } from "@/components/types"

export const useHomeStore = defineStore('home', {
  state: () => ({
    swiperLists: [] as SwiperItemType[],
    projects: [] as Card[],
    courses: [] as Card[],
    'swiper-projects': [],
  }),
  actions: {
    async fetchData() {
      const res = await getHomeData()
      if(res.status === 200) {
        this.swiperLists = res.data.data.swiperLists
        this.projects = res.data.data.projects
        this.courses = res.data.data.courses
        this['swiper-projects'] = res.data.data['swiper-projects']
      }
    }
  }
})