<template>

  <Swiper
    :slides-per-view="1"
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

import 'swiper/css'


const items = [

  {
    id: 1,
    name: 'Slide 1'
  },

  {
    id: 2,
    name: 'Slide 2'
  },

  {
    id: 3,
    name: 'Slide 3'
  },

  {
    id: 4,
    name: 'Slide 4'
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