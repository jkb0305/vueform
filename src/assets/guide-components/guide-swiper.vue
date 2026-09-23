<template>
  <div class="product-wrap">

    <h2>이 장소와 비슷한 맛집</h2>


    <!-- Swiper -->
    <Swiper
      :modules="[Grid]"
      :slides-per-view="2"
      :slides-per-group="2"
      :grid="{
        rows: 2,
        fill: 'row'
      }"
      :space-between="12"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
    >

      <SwiperSlide
        v-for="(item, index) in products"
        :key="index"
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


    <!-- 하단 컨트롤 -->
    <div class="swiper-control">

      <!-- 이전 -->
      <button
        type="button"
        @click="prevSlide"
      >
        ←
      </button>


      <!-- 페이지 -->
      <span>
        {{ currentPage }} / {{ totalPage }}
      </span>


      <!-- 다음 -->
      <button
        type="button"
        @click="nextSlide"
      >
        →
      </button>

    </div>

  </div>
</template>


<script setup>

import { ref } from 'vue'

import {
  Swiper,
  SwiperSlide
} from 'swiper/vue'

import {
  Grid
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/grid'


/*
  상품 데이터
*/

const products = [

  {
    name: '상품 1',
    image: 'https://picsum.photos/300/200?1'
  },

  {
    name: '상품 2',
    image: 'https://picsum.photos/300/200?2'
  },

  {
    name: '상품 3',
    image: 'https://picsum.photos/300/200?3'
  },

  {
    name: '상품 4',
    image: 'https://picsum.photos/300/200?4'
  },

  {
    name: '상품 5',
    image: 'https://picsum.photos/300/200?5'
  },

  {
    name: '상품 6',
    image: 'https://picsum.photos/300/200?6'
  },

  {
    name: '상품 7',
    image: 'https://picsum.photos/300/200?7'
  },

  {
    name: '상품 8',
    image: 'https://picsum.photos/300/200?8'
  }

]


/*
  Swiper 객체
*/

const swiper = ref(null)


/*
  현재 페이지
*/

const currentPage = ref(1)


/*
  전체 페이지

  상품 8개
  한 페이지 4개

  = 2페이지
*/

const totalPage = Math.ceil(
  products.length / 4
)


/*
  Swiper 생성
*/

const onSwiper = (instance) => {

  swiper.value = instance

}


/*
  슬라이드 변경
*/

const onSlideChange = (instance) => {

  currentPage.value =
    Math.floor(
      instance.activeIndex / 2
    ) + 1

}


/*
  이전 버튼
*/

const prevSlide = () => {

  swiper.value.slidePrev()

}


/*
  다음 버튼
*/

const nextSlide = () => {

  swiper.value.slideNext()

}

</script>


<style scoped lang="scss">

/* --------------------------------
   전체
-------------------------------- */

.product-wrap {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}


/* --------------------------------
   제목
-------------------------------- */

.product-wrap h2 {
  margin: 0 0 20px;

  font-size: 20px;
  line-height: 1.4;
}


/* --------------------------------
   Swiper
-------------------------------- */

.swiper {
  width: 100%;
  height: 280px;
}


/*
  중요!

  height: auto 를 넣지 않습니다.
  Swiper Grid가 자동으로 높이를 계산합니다.
*/


/* --------------------------------
   상품
-------------------------------- */

.product {
  width: 100%;
  height: 130px;

  overflow: hidden;

  border-radius: 10px;

  background: #fff;

  box-sizing: border-box;
}


/* --------------------------------
   상품 이미지
-------------------------------- */

.product img {
  display: block;

  width: 100%;
  height: 90px;

  object-fit: cover;
}


/* --------------------------------
   상품 이름
-------------------------------- */

.product p {
  margin: 8px 10px 0;

  font-size: 14px;
  line-height: 18px;

  white-space: nowrap;

  overflow: hidden;

  text-overflow: ellipsis;
}


/* --------------------------------
   하단 컨트롤
-------------------------------- */

.swiper-control {
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 20px;

  margin-top: 16px;
}


/* --------------------------------
   좌우 버튼
-------------------------------- */

.swiper-control button {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  padding: 0;

  border: 0;

  background: transparent;

  font-size: 20px;

  cursor: pointer;
}


/* --------------------------------
   페이지
-------------------------------- */

.swiper-control span {
  min-width: 50px;

  font-size: 14px;

  text-align: center;
}

</style>