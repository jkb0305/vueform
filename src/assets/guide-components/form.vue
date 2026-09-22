<template>
  <div
    class="form-field"
    :class="{
      'is-focused': isFocused,
      'has-value': modelValue,
      'is-error': error,
      'is-disabled': disabled
    }"
  >
    <div class="input-wrap">
        <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :autocomplete="autocomplete"
        @input="onInput"
        @focus="isFocused = true"
        @blur="isFocused = false"
        />
        <span class="form-line"></span>
        <button class="cancel-btn" type="button"></button>
    </div>
    <label :for="id">
      {{ label }}

      <span v-if="required" class="required">
        *
      </span>
    </label>
    <p v-if="error" class="error-message">
      {{ error }}
    </p>
  </div>
</template>


<script setup>
import { ref } from 'vue'

defineProps({
  id: {
    type: String,
    required: true
  },

  modelValue: {
    type: String,
    default: ''
  },

  type: {
    type: String,
    default: 'text'
  },

  label: {
    type: String,
    required: true
  },

  placeholder: {
    type: String,
    default: ''
  },

  required: {
    type: Boolean,
    default: false
  },

  disabled: {
    type: Boolean,
    default: false
  },

  autocomplete: {
    type: String,
    default: 'off'
  },

  error: {
    type: String,
    default: ''
  }
})

const emit = defineEmits([
  'update:modelValue'
])

const isFocused = ref(false)

const onInput = (event) => {
  emit(
    'update:modelValue',
    event.target.value
  )
}
</script>


<style scoped lang="scss">
.form-field,
.form-field *,
.form-field *::before,
.form-field *::after {
  box-sizing: border-box;
}

.form-field {
  position: relative;
  width: 100%;
  padding-top: 24px;
  box-sizing: border-box;
  /* -------------------------
     Input
  ------------------------- */
    .input-wrap{
        position:relative;
        width:100%;
        max-width: 100%;
        .cancel-btn{
            position:absolute;
            right:0;
            top:50%;
            transform:translateY(-50%);
            background-image:url(../styles/images/ico_cancel.png);
            background-repeat: no-repeat;
            background-size:24px auto;
            width:24px;
            height:24px;
            padding: 0;
            border: 0;
            cursor: pointer;
        }
    }
    input {
    position:relative;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 32px;
    padding: 0;
    border:0;
    border-bottom: 1px solid #ccc;
    outline: none;

    background:#fff !important;

    font-size: 16px;
    line-height: 32px;
    color: #111;

    box-sizing: border-box;

    &::placeholder {
        color: #ccc;
    }

    &:disabled {
        cursor: not-allowed;
        color: #999;
    }
    &.is-disabled{
        background-color:#888;
    }
    }


  /* -------------------------
     Label
  ------------------------- */

    label {
        position: absolute;

        left: 0;
        top: 30px;

        font-size: 16px;
        line-height: 20px;

        color: #888;

        pointer-events: none;

        transform-origin: left center;
        visibility: hidden;

        transition:
        top 0.25s ease,
        font-size 0.25s ease,
        color 0.25s ease;
    }


  /* -------------------------
     Underline
  ------------------------- */

    .form-line {
    position: absolute;

    left: 50%;
    bottom: 0;

    width: 0;
    height: 1px;

    background-color: #111;

    transform: translateX(-50%);

    transition:
        width 0.3s ease;

    }


  /* -------------------------
     Focus
  ------------------------- */

    &.is-focused {

        label {
            visibility: visible;
        top: 0;

        font-size: 12px;
        color: #111;
        }

        .form-line {
        width: 100%;
        }
    }


  /* -------------------------
     값이 들어간 상태
  ------------------------- */

    &.has-value {

    label {
        visibility: visible;
        top: 0;

        font-size: 12px;
    }
    }


  /* -------------------------
     Error
  ------------------------- */

    &.is-error {

    label {
        color: #e53935;
    }

    .form-line {
        background-color: #e53935;
    }
    }

  /* -------------------------
     Disabled
  ------------------------- */

    &:has(input:disabled) {

        label {
            color: #aaa;
        }

        .form-line {
            background-color: #ddd;
        }
        input {
            background-color:#ebebeb;
        }
    }
}


/* -------------------------
   Error Message
------------------------- */

.error-message {
  margin: 7px 0 0;

  font-size: 12px;
  line-height: 18px;

  color: #e53935;
}


/* -------------------------
   Required
------------------------- */

.required {
  margin-left: 2px;

  color: #e53935;
}

</style>