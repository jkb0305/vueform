<template>
  <header v-bind:class="{fixed:fixedTop}">
        <button type="button" class="back-btn"></button>
        <h1 class="header-title">{{title}}</h1>
        <button v-if="btn" type="button" class="setting-btn"></button>
    </header>
</template>

<script>
export default {
    data(){
        return{
            fixedTop:false,
        }
    },
    methods:{
        onScroll(){
            if (window.scrollY > 0) {
                this.fixedTop = true
            }else {
                this.fixedTop = false
            }
        }
    },
    mounted(){
        window.addEventListener('scroll',this.onScroll)
    },
    beforeUnmount(){
        window.removeEventListener('scroll',this.onScroll)
    },
  props:{
    title: {
        type: String,
        default: ''
    },
    btn: {
        type:Boolean,
        default:false,
    }
  }
}
</script>

<style lang="scss" scoped>
header{
    position:relative;
    display:flex;
    height:48px;
    background-color:#fff;
    justify-content: space-between;
    align-items:center;
    padding:0 16px;
    height: calc(48px + env(safe-area-inset-top));
    padding-top: env(safe-area-inset-top);
    .header-title{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }
    .back-btn, .setting-btn{
        background-size:24px auto;
        background-repeat:no-repeat;
        background-position:center;
        width:24px;
        height:24px;
    }
    .back-btn{
        background-image:url('../assets/styles/images/ico_arrow_back.png');
    }
    .setting-btn{
        background-image:url('../assets/styles/images/icon_setting.png');
    }
    &.fixed{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        padding-top: env(safe-area-inset-top);
        height: calc(48px + env(safe-area-inset-top));
    }
}
</style>