  <template>

    <div class="form-guide">
      <div class="group-form">
        <FormDate
          v-model="form.date"
          label="날짜"
        />
      </div>
      <div class="group-form">
        <FormInput
          id="user-name"
          v-model="form.name[0]"
          label="이름"
          placeholder="이름을 입력해주세요."
          required
        />
        <div>-</div>
        <FormInput
          v-model="form.name[1]"
        />
      </div>

      <div class="group-form">
        <FormInput
          id="user-email"
          v-model="form.email[0]"
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요."
          required
        />
        <div>@</div>
        <FormInput
          id="user-email"
          v-model="form.email[1]"
          type="email"
        />
      </div>


      <FormInput
        id="user-password"
        v-model="form.password"
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        required
      />

      <div class="group-form">
        <FormInput
          id="user-phone"
          v-model="form.phone"
          type="tel"
          label="휴대폰 번호"
          placeholder="휴대폰 번호를 입력해주세요."
          error="미안해요"
        />
      </div>


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
  import FormDate from './formdate.vue'

  const form = reactive({
    name: ['',''],
    email: ['',''],
    password: '',
    phone: '',
    age: '',
    search: '',
    date:null,
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
  .group-form{
    display:flex;
    align-items:center;
    div{
      margin:0 8px;
    }
  }

  </style>