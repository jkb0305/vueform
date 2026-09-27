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


<script>
export default {

  name: 'AppFullScreen',

  props: {

    modelValue: {
      type: Boolean,
      default: false
    },

    title: {
      type: String,
      default: 'Full Screen'
    },

    description: {
      type: String,
      default: '내용입니다.'
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

        this.openFullScreen()

      } else {

        this.removeEvents()

      }

    }

  },


  methods: {

    openFullScreen() {

      this.lastFocusedElement =
        document.activeElement

      document.body.classList.add(
        'popup-open'
      )


      this.$nextTick(() => {

        this.$refs.fullscreen?.focus()

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


      const fullscreen =
        this.$refs.fullscreen

      if (!fullscreen) {
        return
      }


      const focusableElements =
        fullscreen.querySelectorAll(
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

  transform: translateY(30px);
}

</style>