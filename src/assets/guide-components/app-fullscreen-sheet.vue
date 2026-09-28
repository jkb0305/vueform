<template>
  <transition name="fullscreen-fade">

    <div
      v-if="modelValue"
      class="fullscreen-wrap"
    >

      <div
        ref="fullscreen"
        class="fullscreen"
        role="dialog"
        aria-modal="true"
        aria-labelledby="fullscreen-title"
        tabindex="-1"
      >

        <!-- header -->
        <header class="fullscreen-header">

          <h2
            id="fullscreen-title"
            class="fullscreen-title"
          >
            {{ title }}
          </h2>


          <button
            type="button"
            class="close-btn"
            aria-label="닫기"
            @click="close"
          >
            ×
          </button>

        </header>


        <!-- body -->
        <main class="fullscreen-body">

          <slot>
            <div class="fullscreen-desc">
              {{ description }}
            </div>
          </slot>

        </main>

      </div>

    </div>

  </transition>
</template>


<script setup>

import { toRef } from 'vue'

import { usePopup } from '@/assets/js/popup'


const props = defineProps({

  modelValue: {
    type: Boolean,
    default: false
  },

  title: {
    type: String,
    default: ''
  },

  description: {
    type: String,
    default: ''
  },

  showButton: {
    type: Boolean,
    default: false
  }

})


const emit = defineEmits([
  'update:modelValue'
])


// props.modelValue를 ref로 변환
const modelValue =
  toRef(props, 'modelValue')


// 공통 팝업 기능 사용
const {
  popupElement
} = usePopup(modelValue)


// 닫기
const close = () => {

  emit(
    'update:modelValue',
    false
  )

}

</script>

<style lang="scss" scoped>

:global(body.popup-open) {
  overflow: hidden;
}


/* ================================
   전체 영역
================================ */

.fullscreen-wrap {
  position: fixed;
  inset: 0;

  width: 100%;
  height: 100%;

  background: #fff;

  z-index: 1000;
}


/* ================================
   Full Screen
================================ */

.fullscreen {
  display: flex;

  flex-direction: column;

  width: 100%;
  height: 100%;

  background: #fff;
}


/* ================================
   Header
================================ */

.fullscreen-header {
  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: space-between;

  height: 64px;

  padding: 0 20px;

  border-bottom: 1px solid #eee;
}


.fullscreen-title {
  margin: 0;

  font-size: 18px;
  font-weight: 700;
}


.close-btn {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  padding: 0;

  border: 0;

  background: transparent;

  font-size: 28px;
  line-height: 1;

  cursor: pointer;
}


/* ================================
   Body
================================ */

.fullscreen-body {
  flex: 1;

  padding: 24px 20px;

  overflow-y: auto;
}


.fullscreen-desc {
  font-size: 16px;
  line-height: 1.6;

  color: #555;
}


/* ================================
   Animation
================================ */

.fullscreen-fade-enter-active,
.fullscreen-fade-leave-active {
  transition:
    opacity .25s ease,
    transform .3s ease;
}

.fullscreen-fade-enter-from,
.fullscreen-fade-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.fullscreen-fade-enter-to,
.fullscreen-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

</style>