
<template>

  <div class="autoplay-wrap">


    <!-- Swiper -->

    <Swiper
      :modules="[Autoplay]"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false
      }"
      :slides-per-view="1"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
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


    <!-- 재생 / 정지 컨트롤 -->

    <div
      class="autoplay-control"
      aria-label="슬라이드 자동 재생 제어"
    >

      <!-- 재생 -->

      <button
        v-if="!isPlaying"
        type="button"
        aria-label="슬라이드 자동 재생"
        :aria-pressed="isPlaying"
        @click="playAutoplay"
      >
        ▶
      </button>


      <!-- 정지 -->

      <button
        v-else
        type="button"
        aria-label="슬라이드 자동 재생 정지"
        :aria-pressed="isPlaying"
        @click="stopAutoplay"
      >
        ■
      </button>
      <div class="index-area">
        <p>{{currentIndex}}</p>
        <p class="space">/</p>
        <p>{{items.length}}</p>
      </div>


    </div>

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


import {
  Autoplay
} from 'swiper/modules'


import 'swiper/css'


/*
  상품 데이터
*/

const items = [

  {
    id: 1,
    name: 'Autoplay 1'
  },

  {
    id: 2,
    name: 'Autoplay 2'
  },

  {
    id: 3,
    name: 'Autoplay 3'
  },

  {
    id: 4,
    name: 'Autoplay 4'
  }

]


/*
  Swiper 인스턴스
*/

const swiper = ref(null)


/*
  현재 자동 재생 상태

  true
  → 재생 중

  false
  → 정지 상태
*/

const isPlaying = ref(true)


/*
  Swiper 생성

  Swiper 인스턴스를 저장합니다.
*/

const onSwiper = (instance) => {

  swiper.value = instance

}

const currentIndex = ref(1)

const onSlideChange = (instance) => {

  currentIndex.value = instance.realIndex + 1

}

/*
  자동 재생

  swiper.autoplay.start()
*/

const playAutoplay = () => {

  if (!swiper.value) return

  swiper.value.autoplay.start()

  isPlaying.value = true

}


/*
  자동 재생 정지

  swiper.autoplay.stop()
*/

const stopAutoplay = () => {

  if (!swiper.value) return

  swiper.value.autoplay.stop()

  isPlaying.value = false

}

</script>


<style scoped lang="scss">

.autoplay-wrap {
  width: 100%;
  position: relative;
}


/* --------------------------------
   슬라이드
-------------------------------- */

.slide-box {

  display: flex;

  align-items: center;
  justify-content: center;

  height: 160px;

  border-radius: 12px;

  background: #eee;

  font-size: 20px;

}


/* --------------------------------
   재생 / 정지 영역
-------------------------------- */

.autoplay-control {

  position:absolute;
  bottom:10px;
  right:20px;
  z-index:11;
  display:flex;
  align-items:center;
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right:4px;
    padding: 0;
    border: 1px solid #ddd;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    &:focus{
        outline: 3px solid #222;
        outline-offset: 3px;
    }
  }
  .index-area{
    display:flex;
    .space{
        margin:0 4px;
    }
  }
}
</style>
