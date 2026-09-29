<template>
  <!---
  <Swiper
  :space-between="12"
  :breakpoints="{
    0: {
      slidesPerView: 1.2
    },
    768: {
      slidesPerView: 2.2
    },
    1024: {
      slidesPerView: 3.2
    }
  }"
>
  -->
  <Swiper
    :modules="[Navigation]"
    navigation
    :slides-per-view="2.2"
    :space-between="12"
  >

    <SwiperSlide
      v-for="item in items"
      :key="item.id"
    >

      <div class="slide-box">
        {{ item.name }}
      </div>

    </SwiperSlide>

  </Swiper>

</template>


<script setup>

import {
  Swiper,
  SwiperSlide
} from 'swiper/vue'

import {
  Navigation
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'


const items = [

  {
    id: 1,
    name: 'Navigation 1'
  },

  {
    id: 2,
    name: 'Navigation 2'
  },

  {
    id: 3,
    name: 'Navigation 3'
  },

  {
    id: 4,
    name: 'Navigation 4'
  }

]

</script>


<style scoped lang="scss">

.slide-box {

  display: flex;

  align-items: center;
  justify-content: center;

  height: 160px;

  border-radius: 12px;

  background: #eee;

  font-size: 20px;

}

</style>