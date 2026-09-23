<template>

  <div>

    <h1>날짜 테스트</h1>

    <VueDatePicker
  v-model="date"

  locale="ko-KR"

  format="yyyy-MM-dd"

  :enable-time-picker="false"

  :clearable="false"

  :auto-apply="true"
  :teleport="true"
/>

  </div>

</template>


<script setup>

import FormDate from './formdate.vue'

</script>