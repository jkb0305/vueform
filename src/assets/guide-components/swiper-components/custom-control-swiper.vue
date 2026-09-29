<template>

  <Swiper
    :slides-per-view="2"
    :slides-per-group="2"
    :space-between="12"
    @swiper="onSwiper"
    @slide-change="onSlideChange"
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


  <div class="swiper-control">

    <button
      type="button"
      @click="prevSlide"
    >
      ←
    </button>


    <span>
      {{ currentPage }} / {{ totalPage }}
    </span>


    <button
      type="button"
      @click="nextSlide"
    >
      →
    </button>

  </div>

</template>


<script setup>

import {
  ref
} from 'vue'

import {
  Swiper,
  SwiperSlide
} from 'swiper/vue'

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


const swiper = ref(null)

const currentPage = ref(1)

const totalPage = Math.ceil(
  products.length / 4
)


const onSwiper = (instance) => {

  swiper.value = instance

}


const onSlideChange = (instance) => {

  currentPage.value =
    Math.floor(
      instance.activeIndex / 2
    ) + 1

}


const prevSlide = () => {

  swiper.value?.slidePrev()

}


const nextSlide = () => {

  swiper.value?.slideNext()

}

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


.swiper-control {

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 20px;

  margin-top: 16px;


  button {

    display: flex;

    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    padding: 0;

    border: 0;

    background: #eee;

    cursor: pointer;

  }


  span {

    min-width: 50px;

    text-align: center;

  }

}

</style>