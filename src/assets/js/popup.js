import { ref, nextTick, watch, onBeforeUnmount } from 'vue'

export function usePopup(modelValue) {

  // 팝업을 열기 전에 포커스되어 있던 요소
  const lastFocusedElement = ref(null)

  // 팝업 DOM
  const popupElement = ref(null)


  // ==========================
  // 팝업 열기
  // ==========================

  const openPopup = () => {

    // 현재 포커스 저장
    lastFocusedElement.value =
      document.activeElement


    // body 스크롤 잠금
    document.body.classList.add('popup-open')


    // 키보드 이벤트 등록
    document.addEventListener(
      'keydown',
      handleKeydown
    )


    // 팝업이 화면에 만들어진 다음 focus
    nextTick(() => {

      if (popupElement.value) {

        popupElement.value.focus()

      }

    })

  }


  // ==========================
  // 팝업 닫기
  // ==========================

  const closePopup = () => {

    removeEvents()

  }


  // ==========================
  // 이벤트 제거
  // ==========================

  const removeEvents = () => {

    document.removeEventListener(
      'keydown',
      handleKeydown
    )


    // body 스크롤 잠금 해제
    document.body.classList.remove(
      'popup-open'
    )


    // 원래 포커스로 돌아가기
    if (
      lastFocusedElement.value &&
      typeof lastFocusedElement.value.focus === 'function'
    ) {

      nextTick(() => {

        lastFocusedElement.value.focus()

      })

    }

  }


  // ==========================
  // 키보드 이벤트
  // ==========================

  const handleKeydown = (event) => {

    // ESC
    if (event.key === 'Escape') {

      event.preventDefault()

      // 여기서는 닫는 동작만 담당
      closePopup()

      return

    }


    // TAB
    if (event.key === 'Tab') {

      handleTab(event)

    }

  }


  // ==========================
  // TAB focus trap
  // ==========================

  const handleTab = (event) => {

    const popup =
      popupElement.value

    if (!popup) {
      return
    }


    const focusableElements =
      popup.querySelectorAll(
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


  // ==========================
  // modelValue 감시
  // ==========================

  watch(
    modelValue,
    (value) => {

      if (value) {

        openPopup()

      } else {

        removeEvents()

      }

    }
  )


  // 컴포넌트 제거
  onBeforeUnmount(() => {

    removeEvents()

  })


  return {

    popupElement,

    openPopup,
    closePopup

  }

}