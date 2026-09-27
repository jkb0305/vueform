<template>
  <transition name="dialog-fade">

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


<script>
export default {

  name: 'AppDialog',

  props: {

    modelValue: {
      type: Boolean,
      default: false
    },

    title: {
      type: String,
      default: '타이틀입니다.'
    },

    description: {
      type: String,
      default: '내용입니다.'
    }

  },


  emits: [
    'update:modelValue',
    'confirm'
  ],


  data() {

    return {

      lastFocusedElement: null

    }

  },


  watch: {

    modelValue(value) {

      if (value) {

        this.openDialog()

      } else {

        this.removeEvents()

      }

    }

  },


  methods: {

    openDialog() {

      this.lastFocusedElement =
        document.activeElement

      document.body.classList.add(
        'popup-open'
      )


      this.$nextTick(() => {

        this.$refs.dialog?.focus()

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


    confirm() {

      this.$emit('confirm')

      this.close()

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

      // ESC
      if (event.key === 'Escape') {

        event.preventDefault()

        this.close()

        return

      }


      // TAB
      if (event.key !== 'Tab') {
        return
      }


      const dialog = this.$refs.dialog

      if (!dialog) {
        return
      }


      const focusableElements =
        dialog.querySelectorAll(
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


      // Shift + Tab
      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {

        event.preventDefault()

        lastElement.focus()

      }


      // Tab
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
  transition:
    opacity .25s ease;
}


.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
}


.dialog-fade-enter-active .dialog,
.dialog-fade-leave-active .dialog {
  transition:
    opacity .25s ease,
    transform .25s ease;
}


.dialog-fade-enter-from .dialog {
  opacity: 0;
  transform: scale(.94) translateY(10px);
}


.dialog-fade-leave-to .dialog {
  opacity: 0;
  transform: scale(.94) translateY(10px);
}

</style>