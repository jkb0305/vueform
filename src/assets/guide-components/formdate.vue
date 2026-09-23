<template>
  <div class="form-date">

    <label v-if="label">
      {{ label }}
    </label>

    <VueDatePicker
      :model-value="modelValue"
      format="yyyy-MM-dd"
      :enable-time-picker="false"
      :year-picker="false"
      :month-picker="false"
      :teleport="true"
      :clearable="false"
      :auto-apply="true"
      @update:model-value="updateDate"
      @open="openDatePicker"
      @closed="closeDatePicker"
    />

  </div>
</template>


<script setup>
import { onUnmounted } from 'vue'

import { VueDatePicker } from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'


defineProps({
  modelValue: {
    type: [Date, String, null],
    default: null
  },

  label: {
    type: String,
    default: ''
  }
})


const emit = defineEmits([
  'update:modelValue'
])


const updateDate = (value) => {

  emit(
    'update:modelValue',
    value
  )

}


const openDatePicker = () => {

  document.body.classList.add(
    'datepicker-open'
  )

}


const closeDatePicker = () => {

  document.body.classList.remove(
    'datepicker-open'
  )

}


onUnmounted(() => {

  document.body.classList.remove(
    'datepicker-open'
  )

})
</script>


<style scoped lang="scss">

body.datepicker-open {
  background: rgba(0, 0, 0, .2);
}


.form-date {

  width: 100%;

  label {

    display: block;

    margin-bottom: 10px;

  }

  .dp__main {

    width: 100%;

  }

}
:global(.dp--menu-wrapper) {
  position: fixed !important;

  left: 50% !important;
  top: 50% !important;

  transform: translate(-50%, -50%) !important;

  width: calc(100vw - 40px) !important;

  max-width: none !important;

  box-sizing: border-box;

  z-index: 9999;
}

:global(.dp__menu) {
  width: 100% !important;

  max-width: none !important;

  box-sizing: border-box;
}

.dp__menu {

  width: 100vw !important;

  max-width: 100vw !important;

  border: 0 !important;

  border-radius: 0 !important;

  box-shadow:
    0 -4px 20px rgba(0, 0, 0, .08);

  padding: 20px !important;

  box-sizing: border-box;

  left: 0 !important;

  right: 0 !important;

  margin: 0 !important;

}


.dp__month_year_row {

  justify-content: center;

}


.dp__month_year_select {

  display: none;

}


.dp__month_year_col_nav {

  width: 100%;

  justify-content: space-between;

}


.dp__overlay_action {

  display: none;

}


.dp__calendar {

  width: 100%;

}


.dp__calendar_item {

  height: 44px;

}


.dp__cell_inner {

  width: 40px;

  height: 40px;

  border-radius: 50%;

  font-size: 14px;

  transition:
    background-color .15s ease,
    color .15s ease;

}


.dp__active_date {

  background: #1976d2 !important;

  color: #fff !important;

}


.dp__today {

  border: 1px solid #1976d2;

}


.dp__range_start,
.dp__range_end {

  background: #1976d2 !important;

  color: #fff !important;

}


.dp__calendar_header_item {

  font-size: 12px;

  color: #888;

}


.dp__inner_nav {

  width: 36px;

  height: 36px;

}

</style>