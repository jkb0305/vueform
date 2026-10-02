<template>
  <div>
    <commonHeader title="제목이에요" btn="true"></commonHeader>
    <div class="content">
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus aliquid harum dicta optio in neque fugiat autem nam. Sequi tempore dolorum enim repellendus quia. Obcaecati suscipit nulla aut ipsam.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus aliquid harum dicta optio in neque fugiat autem nam. Sequi tempore dolorum enim repellendus quia. Obcaecati suscipit nulla aut ipsam.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus aliquid harum dicta optio in neque fugiat autem nam. Sequi tempore dolorum enim repellendus quia. Obcaecati suscipit nulla aut ipsam.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus aliquid harum dicta optio in neque fugiat autem nam. Sequi tempore dolorum enim repellendus quia. Obcaecati suscipit nulla aut ipsam.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus aliquid harum dicta optio in neque fugiat autem nam. Sequi tempore dolorum enim repellendus quia. Obcaecati suscipit nulla aut ipsam.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus aliquid harum dicta optio in neque fugiat autem nam. Sequi tempore dolorum enim repellendus quia. Obcaecati suscipit nulla aut ipsam.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus aliquid harum dicta optio in neque fugiat autem nam. Sequi tempore dolorum enim repellendus quia. Obcaecati suscipit nulla aut ipsam.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus aliquid harum dicta optio in neque fugiat autem nam. Sequi tempore dolorum enim repellendus quia. Obcaecati suscipit nulla aut ipsam.</div>
        <button @click="scrolllMove" :class="{active:'scroll'}" type="button" class="top-btn"></button>
    </div>
  </div>
</template>

<script>
import commonHeader from '../components/header.vue';
export default {
    data(){
        return{
            scroll:false,
        }
    },
    components:{
        commonHeader,
    },
    methods:{
        scrollTop(){
            const moveScrollTop = window.scrollY;
            const topBtn = document.querySelector('.top-btn');
            this.scroll = moveScrollTop > 60;
            if(this.scroll){
                topBtn.classList.add('active');
            }else{
                topBtn.classList.remove('active');
            }
        },
        scrolllMove() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    },
    mounted(){
        window.addEventListener('scroll',()=>{
            this.scrollTop()
        })
    },
    beforeMount(){
        window.removeEventListener('scroll',()=>{
            this.scrollTop()
        })
    }

}
</script>

<style lang="scss" scoped>
.content{
    .top-btn{
    position:fixed;
    bottom:60px;
    right:20px;
    background-image:url('../assets/styles/images/ico_arrow_top.png');
    width:40px;
    height:40px;
    background-size:40px auto;
    background-repeat: no-repeat;
    z-index:11;
    background-color:#fff;
    opacity:0;
    visibility: hidden;
    transition: all .2s;
    transform:translateY(30px);
    &.active{
    visibility: visible;
    opacity:1;
    transform:translateY(0);
    }
  }
}
</style>