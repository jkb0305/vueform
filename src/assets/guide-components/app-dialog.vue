<!--ref="dialog"
↓
Vue에서 이 DOM을 $refs.dialog로 찾겠다.


class="dialog"
↓
CSS 스타일을 적용하겠다.


role="dialog"
↓
스크린 리더에게 "이건 Dialog입니다."


aria-modal="true"
↓
현재 모달 상태라는 것을 알려준다.


aria-labelledby="dialog-title"
↓
Dialog의 이름은 id="dialog-title"의 텍스트를 사용한다.


tabindex="-1"
↓
Tab 순서에는 넣지 않지만 JavaScript로 focus할 수 있게 한다.


@mousedown.stop
↓
이 영역에서 발생한 mousedown 이벤트를 부모에게 전달하지 않는다.-->

<template>
  <transition name="dialog-fade">
    <!--@mousedown.self="close"는 dialog를 제외한 영역을 클릭했을 때 팝업을 false시키는것--->
    <!--watch: {

  감시할데이터(newValue, oldValue) {

    // 값이 변경되었을 때 실행

  }

}-->
    <div
      v-if="modelValue"
      class="dialog-wrap"
      @mousedown.self="close"
    >

      <div
        ref="dialog"
        class="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        tabindex="-1"
        @mousedown.stop
      >

        <!-- header -->
        <div class="dialog-header">

          <h2
            id="dialog-title"
            class="dialog-title"
          >
            {{ title }}
          </h2>

        </div>


        <!-- body -->
        <div class="dialog-body">

          <div class="dialog-desc">
            <slot>
              {{ description }}
            </slot>
          </div>


          <!-- button -->
          <div class="dialog-btn-wrap">

            <button
              type="button"
              class="cancel-btn"
              @click="close"
            >
              취소
            </button>

            <button
              type="button"
              class="confirm-btn"
              @click="confirm"
            >
              확인
            </button>

          </div>

        </div>

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
  }

})


const emit = defineEmits([
  'update:modelValue'
])


const modelValue =
  toRef(props, 'modelValue')


const {
  popupElement
} = usePopup(modelValue)


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
   Dialog 전체 영역
================================ */

.dialog-wrap {
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(0, 0, 0, .4);

  z-index: 1000;
}


/* ================================
   Dialog
================================ */

.dialog {
  width: 100%;
  max-width: 400px;

  background: #fff;

  border-radius: 16px;

  overflow: hidden;

  box-sizing: border-box;
}


/* ================================
   Header
================================ */

.dialog-header {
  padding: 24px 24px 0;
}


.dialog-title {
  margin: 0;

  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
}


/* ================================
   Body
================================ */

.dialog-body {
  padding: 20px 24px 24px;
}


.dialog-desc {
  font-size: 16px;
  line-height: 1.6;

  color: #555;
}


/* ================================
   Button
================================ */

.dialog-btn-wrap {
  display: flex;

  gap: 8px;

  margin-top: 24px;
}


.dialog-btn-wrap button {
  flex: 1;

  height: 48px;

  border: 0;
  border-radius: 8px;

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;
}


.cancel-btn {
  background: #eee;
  color: #333;
}


.confirm-btn {
  background: #111;
  color: #fff;
}


/* ================================
   Animation
================================ */

.dialog-fade-enter-active,
.dialog-fade-leave-active {
  // transition:
  //   opacity .25s ease;
}


.dialog-fade-enter-from,
.dialog-fade-leave-to {
  // opacity: 0;
}


.dialog-fade-enter-active .dialog,
.dialog-fade-leave-active .dialog {
  transition:
    // opacity .25s ease,
    transform .25s ease;
}


.dialog-fade-enter-from .dialog {
  // opacity: 0; scale(.94)(scale은 transform)
  transform: translateY(30px);
}


.dialog-fade-leave-to .dialog {
  // opacity: 0;
  transform: scale(.94) translateY(0px);
}

</style>