<template>
  <footer class="p-4 bg-gray-700 text-white">
    <Container class="flex-col px-8">
      <section class="w-full flex flex-row justify-between items-center">
        <!-- menu -->
        <Menu class="flex-1 justify-start"></Menu>
        <aside class="flex items-center pr-10 text-lg">
          <div class="group relative">
            <div class="i-ic:baseline-wechat cursor-pointer"></div>
            <!-- image -->
            <img
              class="hidden w-20 h-20 absolute top-0 left-[-1/2] translate-x-[-50%] translate-y-[-100%] group-hover:block max-w-unset"
              src="@/assets/images/wechat-code.jpg" alt="WeChat QR Code">
          </div>
          <div class="ml-4 i-bi:sina-weibo cursor-pointer"></div>
        </aside>
      </section>
      <div class="my-4 border-b-1 border-coolgray-600 w-full"></div>
      <!-- 介绍，联系信息，媒体信息，外链 -->
      <ul class="w-full flex flex-row justify-start mb-4 pl-4">
        <li class="mr-10">
          <div class="text-gray-200 font-500 text-lg pb-4 flex items-center">
            <i class="i-lineicons:phone mr-2"></i>
            <span>联系信息</span>
          </div>
          <div class="text-gray-200 font-300 mb-2">
            <span>邮箱:</span>
            <span>admin@qq.com</span>
          </div>
          <div class="text-gray-200 font-300 mb-2">
            <span>电话:</span>
            <span>+86 123456789</span>
          </div>
          <div class="text-gray-200 font-300 mb-2">
            <span>地址:</span>
            <span>浙江省杭州市西湖区</span>
          </div>
        </li>
        <li>
          <div class="text-gray-200 font-500 text-lg pb-4 flex items-center">
            <i class="i-solar:link-bold mr-2"></i>
            <span>友链信息</span>
          </div>
          <div class="text-gray-200 font-300 mb-2">
            <span>Blog</span>
          </div>
          <div class="text-gray-200 font-300 mb-2">
            <span>Github</span>
          </div>
        </li>
      </ul>
      <!-- record -->
      <div class="flex items-center justify-center w-full">
        Copyright @ Kevin 2025-2026
        <div class="record"></div>
        <a href="https://github.com/venus-ui">沪公网安备4564564646号</a>
      </div>
    </Container>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.record {
  background: url('@/assets/icons/record.png') no-repeat;
  @apply w-4 h-4 mx-2;
}
</style>