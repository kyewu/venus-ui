import { getHomeData } from "@/api/home"

export const useHomeStore = defineStore('home', {
  state: () => ({
    swipers: [],
    projects: [],
    courses: [],
    'swiper-projects': [],
  }),
  actions: {
    async fetchData() {
      const res = await getHomeData()
      if(res.status === 200) {
        this.swipers = res.data.data.swipers
        this.projects = res.data.data.projects
        this.courses = res.data.data.courses
        this['swiper-projects'] = res.data.data['swiper-projects']
      }
    }
  }
})