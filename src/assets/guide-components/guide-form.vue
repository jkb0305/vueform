<template>

  <div class="form-guide">

    <FormInput
      id="user-name"
      v-model="form.name"
      label="이름"
      placeholder="이름을 입력해주세요."
      required
      disabled
    />


    <FormInput
      id="user-email"
      v-model="form.email"
      type="email"
      label="이메일"
      placeholder="이메일을 입력해주세요."
      required
    />


    <FormInput
      id="user-password"
      v-model="form.password"
      type="password"
      label="비밀번호"
      placeholder="비밀번호를 입력해주세요."
      required
    />


    <FormInput
      id="user-phone"
      v-model="form.phone"
      type="tel"
      label="휴대폰 번호"
      placeholder="휴대폰 번호를 입력해주세요."
      error="미안해요"
    />


    <FormInput
      id="user-age"
      v-model="form.age"
      type="number"
      label="나이"
      placeholder="나이를 입력해주세요."
    />


    <FormInput
      id="search"
      v-model="form.search"
      type="search"
      label="검색"
      placeholder="검색어를 입력해주세요."
    />

  </div>

</template>


<script setup>
import { reactive } from 'vue'
import FormInput from './form.vue'

const form = reactive({
  name: '',
  email: '',
  password: '',
  phone: '',
  age: '',
  search: ''
})
</script>


<style scoped lang="scss">


.form-guide {
  width: 100%;
  max-width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.form-guide :deep(.form-field) {
  width: 100%;
  max-width: 100%;
  margin-bottom: 40px;
}

</style>