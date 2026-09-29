<template>

  <div class="swiper-guide">

    <h1>Swiper Guide</h1>


    <!-- 기본 -->
    <section class="guide-section">

      <h2>01. Basic</h2>

      <p>
        가장 기본적인 Swiper입니다.
      </p>

      <BasicSwiper />

    </section>


    <!-- Navigation -->
    <section class="guide-section">

      <h2>02. Navigation</h2>

      <p>
        이전 / 다음 버튼을 사용하는 Swiper입니다.
      </p>

      <NavigationSwiper />

    </section>


    <!-- Pagination -->
    <section class="guide-section">

      <h2>03. Pagination</h2>

      <p>
        하단 페이지네이션을 사용하는 Swiper입니다.
      </p>

      <PaginationSwiper />

    </section>


    <!-- 여러 장 -->
    <section class="guide-section">

      <h2>04. Multiple Slides</h2>

      <p>
        한 화면에 여러 개의 슬라이드를 보여줍니다.
      </p>

      <MultipleSwiper />

    </section>


    <!-- Grid -->
    <section class="guide-section">

      <h2>05. Grid</h2>

      <p>
        2열 × 2행 Grid 형태의 Swiper입니다.
      </p>

      <GridSwiper />

    </section>


    <!-- Autoplay -->
    <section class="guide-section">

      <h2>06. Autoplay</h2>

      <p>
        일정 시간마다 자동으로 슬라이드가 이동합니다.
      </p>

      <AutoplaySwiper />

    </section>


    <!-- Custom Control -->
    <section class="guide-section">

      <h2>07. Custom Control</h2>

      <p>
        Swiper API를 이용하여 직접 컨트롤 버튼을 만든 형태입니다.
      </p>

      <CustomControlSwiper />

    </section>

  </div>

</template>


<script setup>

import BasicSwiper
  from '@/assets/guide-components/swiper-components/basic-swiper.vue'

import NavigationSwiper
  from '@/assets/guide-components/swiper-components/navigation-swiper.vue'

import PaginationSwiper
  from '@/assets/guide-components/swiper-components/pagination-swiper.vue'

import MultipleSwiper
  from '@/assets/guide-components/swiper-components/multiple-swiper.vue'

import GridSwiper
  from '@/assets/guide-components/swiper-components/grid-swiper.vue'

import AutoplaySwiper
  from '@/assets/guide-components/swiper-components/autoplay-swiper.vue'

import CustomControlSwiper
  from '@/assets/guide-components/swiper-components/custom-control-swiper.vue'

</script>


<style scoped lang="scss">

.swiper-guide {

  width: 100%;

  padding: 30px 20px 60px;

  box-sizing: border-box;


  > h1 {

    margin: 0 0 40px;

    font-size: 28px;

  }


  .guide-section {

    margin-bottom: 60px;

    padding-bottom: 40px;

    border-bottom: 1px solid #ddd;


    h2 {

      margin: 0 0 8px;

      font-size: 20px;

    }


    p {

      margin: 0 0 20px;

      color: #666;

      font-size: 14px;

    }

  }

}

</style>