<template>
  <div class="menu">
    <div v-for="(item,index) in items" :key="index">
      <h4>{{items[index]}}</h4>
      <p>50만원</p>
      <button v-on:click="num[index]++" type="button">증가</button><span>신고수 : {{num[index]}}</span>        
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>