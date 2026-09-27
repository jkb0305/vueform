<template>
  <transition name="bottom-fade">

    <div
      v-if="modelValue"
      class="bottom-wrap"
      @mousedown.self="close"
    >

      <div
        ref="sheet"
        class="bottom-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bottom-sheet-title"
        tabindex="-1"
        @mousedown.stop
      >

        <!-- header -->
        <div class="bottom-header">

          <h2
            id="bottom-sheet-title"
            class="bottom-title"
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

        </div>


        <!-- body -->
        <div class="bottom-body">

          <slot>
            <div class="bottom-desc">
              {{ description }}
            </div>
          </slot>

        </div>


        <!-- button -->
        <div
          v-if="showButton"
          class="bottom-btn-wrap"
        >

          <button
            type="button"
            @click="close"
          >
            확인
          </button>

        </div>

      </div>

    </div>

  </transition>
</template>


<script>
export default {

  name: 'AppBottomSheet',

  props: {

    modelValue: {
      type: Boolean,
      default: false
    },

    title: {
      type: String,
      default: 'Bottom Sheet'
    },

    description: {
      type: String,
      default: '내용입니다.'
    },

    showButton: {
      type: Boolean,
      default: true
    }

  },


  emits: [
    'update:modelValue'
  ],


  data() {

    return {

      lastFocusedElement: null

    }

  },


  watch: {

    modelValue(value) {

      if (value) {

        this.openSheet()

      } else {

        this.removeEvents()

      }

    }

  },


  methods: {

    openSheet() {

      this.lastFocusedElement =
        document.activeElement

      document.body.classList.add(
        'popup-open'
      )


      this.$nextTick(() => {

        this.$refs.sheet?.focus()

        document.addEventListener(
          'keydown',
          this.handleKeydown
        )

      })

    },


    close() {

      this.$emit(
        'update:modelValue',
        false
      )

    },


    removeEvents() {

      document.body.classList.remove(
        'popup-open'
      )

      document.removeEventListener(
        'keydown',
        this.handleKeydown
      )


      this.$nextTick(() => {

        if (
          this.lastFocusedElement &&
          document.body.contains(
            this.lastFocusedElement
          )
        ) {

          this.lastFocusedElement.focus()

        }

      })

    },


    handleKeydown(event) {

      if (event.key === 'Escape') {

        event.preventDefault()

        this.close()

        return

      }


      if (event.key !== 'Tab') {
        return
      }


      const sheet = this.$refs.sheet

      if (!sheet) {
        return
      }


      const focusableElements =
        sheet.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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


      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {

        event.preventDefault()

        lastElement.focus()

      }

      else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {

        event.preventDefault()

        firstElement.focus()

      }

    }

  },


  beforeUnmount() {

    this.removeEvents()

  }

}
</script>


<style lang="scss" scoped>

:global(body.popup-open) {
  overflow: hidden;
}


/* ================================
   전체 영역
================================ */

.bottom-wrap {
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, .4);

  z-index: 1000;
}


/* ================================
   Bottom Sheet
================================ */

.bottom-sheet {
  position: absolute;

  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;

  max-height: 80vh;

  background: #fff;

  border-radius: 20px 20px 0 0;

  overflow: hidden;

  box-sizing: border-box;
}


/* ================================
   Header
================================ */

.bottom-header {
  display: flex;

  align-items: center;
  justify-content: space-between;

  min-height: 64px;

  padding: 0 20px;

  border-bottom: 1px solid #eee;
}


.bottom-title {
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

.bottom-body {
  max-height: calc(80vh - 140px);

  padding: 24px 20px;

  overflow-y: auto;
}


.bottom-desc {
  font-size: 16px;
  line-height: 1.6;

  color: #555;
}


/* ================================
   Button
================================ */

.bottom-btn-wrap {
  padding: 12px 20px 20px;
}


.bottom-btn-wrap button {
  width: 100%;
  height: 48px;

  border: 0;
  border-radius: 8px;

  background: #111;
  color: #fff;

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;
}


/* ================================
   Animation
================================ */

.bottom-fade-enter-active,
.bottom-fade-leave-active {
  transition:
    background-color .25s ease;
}


.bottom-fade-enter-from,
.bottom-fade-leave-to {
  background-color: rgba(0, 0, 0, 0);
}


.bottom-fade-enter-active .bottom-sheet,
.bottom-fade-leave-active .bottom-sheet {
  transition:
    transform .3s ease;
}


.bottom-fade-enter-from .bottom-sheet {
  transform: translateY(100%);
}


.bottom-fade-leave-to .bottom-sheet {
  transform: translateY(100%);
}

</style>