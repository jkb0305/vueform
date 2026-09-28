<template>

  <div>

    <button
      type="button"
      @click="dialogOpen = true"
    >
      dialog popup
    </button>


    <button
      type="button"
      @click="bottomOpen = true"
    >
      bottom popup
    </button>


    <button
      type="button"
      @click="fullOpen = true"
    >
      full popup
    </button>


    <!-- Dialog -->
    <AppDialog
      v-model="dialogOpen"
      title="Dialog 타이틀"
      description="Dialog 내용입니다."
      @confirm="dialogConfirm"
    />


    <!-- Bottom Sheet -->
    <AppBottomSheet
      v-model="bottomOpen"
      title="바텀 팝업입니다."
    >

      <p>
        Bottom Sheet 내용입니다.
      </p>

      <p>
        필요한 내용을 여기에 넣으면 됩니다.
      </p>
      <div class="btn-wrap">
        <button style="width:100%" type="button">112</button>
      </div>

    </AppBottomSheet>


    <!-- Full Screen -->
    <AppFullScreen
      v-model="fullOpen"
      title="Full Screen"
    >

      <p>
        Full Screen 내용입니다.
      </p>

    </AppFullScreen>

  </div>

</template>


<script>

import AppDialog
  from '@/assets/guide-components/app-dialog.vue'

import AppBottomSheet
  from '@/assets/guide-components/app-bottom-sheet.vue'

import AppFullScreen
  from '@/assets/guide-components/app-fullscreen-sheet.vue'


export default {

  name: 'GuidePopup',


  components: {

    AppDialog,
    AppBottomSheet,
    AppFullScreen

  },


  data() {

    return {

      dialogOpen: false,

      bottomOpen: false,

      fullOpen: false

    }

  },


  methods: {

    dialogConfirm() {

      console.log('확인 버튼 클릭')

    }

  }

}

</script>


<style lang="scss" scoped>

button {
  margin: 5px;
  padding: 12px 20px;

  border: 0;
  border-radius: 8px;

  background: #111;
  color: #fff;

  cursor: pointer;
}

</style>