<template>
  <div>
    <VueDatePicker
      v-model="date"
      format="yyyy-MM-dd"
    />

    <p>
      선택한 날짜:
      {{ date }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref(null)
</script>