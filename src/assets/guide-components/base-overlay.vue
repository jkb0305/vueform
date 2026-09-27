<!-- BaseOverlay.vue -->

<template>
  <transition :name="transitionName">

    <div
      v-show="modelValue"
      class="overlay"
      @mousedown.self="handleBackdropClick"
    >

      <div
        ref="overlay"
        class="overlay-inner"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="titleId"
        tabindex="-1"
        @mousedown.stop
      >

        <slot />

      </div>

    </div>

  </transition>
</template>


<script>
export default {

  name: 'BaseOverlay',

  props: {

    modelValue: {
      type: Boolean,
      default: false
    },

    titleId: {
      type: String,
      default: ''
    },

    transitionName: {
      type: String,
      default: 'popup'
    },

    closeOnBackdrop: {
      type: Boolean,
      default: true
    },

    closeOnEsc: {
      type: Boolean,
      default: true
    }

  },


  emits: [
    'update:modelValue'
  ],


  data() {

    return {

      // 팝업을 열기 전에 포커스가 있던 요소
      lastFocusedElement: null

    }

  },


  watch: {

    modelValue(value) {

      if (value) {

        this.openOverlay()

      }
      else {

        this.closeOverlay()

      }

    }

  },


  mounted() {

    if (this.modelValue) {

      this.openOverlay()

    }

  },


  beforeUnmount() {

    this.removeEvents()

    document.body.classList.remove('popup-open')

  },


  methods: {

    /*
    ========================================
    OPEN
    ========================================
    */

    openOverlay() {

      // 현재 포커스된 요소 저장
      this.lastFocusedElement =
        document.activeElement


      // body 스크롤 잠금
      document.body.classList.add(
        'popup-open'
      )


      this.$nextTick(() => {

        // 팝업으로 포커스 이동
        if (this.$refs.overlay) {

          this.$refs.overlay.focus()

        }


        // 키보드 이벤트 등록
        document.addEventListener(
          'keydown',
          this.handleKeydown
        )

      })

    },


    /*
    ========================================
    CLOSE
    ========================================
    */

    closeOverlay() {

      document.body.classList.remove(
        'popup-open'
      )


      this.removeEvents()


      this.$nextTick(() => {

        // 원래 버튼으로 포커스 복귀
        if (
          this.lastFocusedElement &&
          typeof this.lastFocusedElement.focus === 'function'
        ) {

          this.lastFocusedElement.focus()

        }

      })

    },


    /*
    ========================================
    KEYBOARD
    ========================================
    */

    handleKeydown(event) {

      /*
      ========================================
      ESC
      ========================================
      */

      if (
        event.key === 'Escape' &&
        this.closeOnEsc
      ) {

        event.preventDefault()

        this.close()

        return

      }


      /*
      ========================================
      TAB
      ========================================
      */

      if (event.key !== 'Tab') {

        return

      }


      const overlay =
        this.$refs.overlay


      if (!overlay) {

        return

      }


      const focusableElements =
        overlay.querySelectorAll(
          `
          button,
          [href],
          input,
          select,
          textarea,
          [tabindex]:not([tabindex="-1"])
          `
        )


      if (!focusableElements.length) {

        return

      }


      const firstElement =
        focusableElements[0]


      const lastElement =
        focusableElements[
          focusableElements.length - 1
        ]


      /*
      ========================================
      SHIFT + TAB
      ========================================
      */

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {

        event.preventDefault()

        lastElement.focus()

      }


      /*
      ========================================
      TAB
      ========================================
      */

      else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {

        event.preventDefault()

        firstElement.focus()

      }

    },


    /*
    ========================================
    CLOSE
    ========================================
    */

    close() {

      this.$emit(
        'update:modelValue',
        false
      )

    },


    /*
    ========================================
    BACKDROP
    ========================================
    */

    handleBackdropClick() {

      if (!this.closeOnBackdrop) {

        return

      }


      this.close()

    },


    /*
    ========================================
    REMOVE EVENTS
    ========================================
    */

    removeEvents() {

      document.removeEventListener(
        'keydown',
        this.handleKeydown
      )

    }

  }

}
</script>


<style lang="scss" scoped>

:global(body.popup-open) {
  overflow: hidden;
}


.overlay {

  position: fixed;

  inset: 0;

  z-index: 1000;

  display: flex;

  background-color: rgba(0, 0, 0, 0.2);

}


.overlay-inner {

  position: relative;

  z-index: 1001;

  outline: none;

}

</style>