<template>

  <Swiper
    :modules="[Grid]"
    :slides-per-view="2"
    :slides-per-group="2"
    :grid="{
      rows: 2,
      fill: 'row'
    }"
    :space-between="12"
  >

    <SwiperSlide
      v-for="item in products"
      :key="item.id"
    >

      <div class="product">

        <img
          :src="item.image"
          :alt="item.name"
        >

        <p>
          {{ item.name }}
        </p>

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
  Grid
} from 'swiper/modules'

import 'swiper/css'


const products = [

  {
    id: 1,
    name: '상품 1',
    image: 'https://picsum.photos/300/200?1'
  },

  {
    id: 2,
    name: '상품 2',
    image: 'https://picsum.photos/300/200?2'
  },

  {
    id: 3,
    name: '상품 3',
    image: 'https://picsum.photos/300/200?3'
  },

  {
    id: 4,
    name: '상품 4',
    image: 'https://picsum.photos/300/200?4'
  },

  {
    id: 5,
    name: '상품 5',
    image: 'https://picsum.photos/300/200?5'
  },

  {
    id: 6,
    name: '상품 6',
    image: 'https://picsum.photos/300/200?6'
  },

  {
    id: 7,
    name: '상품 7',
    image: 'https://picsum.photos/300/200?7'
  },

  {
    id: 8,
    name: '상품 8',
    image: 'https://picsum.photos/300/200?8'
  }

]

</script>


<style scoped lang="scss">

.product {

  overflow: hidden;

  border-radius: 10px;

  background: #f5f5f5;


  img {

    display: block;

    width: 100%;
    height: 100px;

    object-fit: cover;

  }


  p {

    margin: 8px 10px 12px;

    font-size: 14px;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;

  }

}

</style>