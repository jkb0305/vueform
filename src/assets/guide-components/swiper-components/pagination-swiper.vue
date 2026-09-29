<template>

  <Swiper
    :modules="[Pagination]"
    :pagination="{
      clickable: true
    }"
    :slides-per-view="1"
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
  Pagination
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'


const items = [

  {
    id: 1,
    name: 'Pagination 1'
  },

  {
    id: 2,
    name: 'Pagination 2'
  },

  {
    id: 3,
    name: 'Pagination 3'
  },

  {
    id: 4,
    name: 'Pagination 4'
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
.swiper{
    padding-bottom:30px;
    :deep(.swiper-pagination){
        bottom:0;
    }
}

</style>