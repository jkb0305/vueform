<template>
  
  <!-- 현재 주소에 맞는 컴포넌트가 여기에 그려집니다 -->
  <main>
    <RouterView />
    1111
    222222
  </main>
</template>

<script>
export default {
  data(){
    return{
      items:['천호동 원룸','금호동 원룸','성수동 원룸'],
      num:[0,0,0],
    }
  },
  name : 'App',
  components : {
  }
}
</script>

<style scoped>
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
/* 현재 활성화된 링크에 자동으로 붙는 클래스 스타일링 */
nav a.router-link-exact-active {
  color: #42b983;
}
</style> 