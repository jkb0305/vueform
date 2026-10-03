<template>
  <div>
    <commonHeader title="제목이에요" btn="true"></commonHeader>
    <div class="content">
        <div class="tab-wrapper">
            <div class="tab">
                <ul role="tab">
                    <li v-bind:class="isTabContentVisible === index ? 'active':null" v-for="(tab, index) in tabs" :key="index" class="">
                        <button @click="isTabVisible(index)" class="link-btn" type="button">{{ tab }}</button>
                    </li>
                </ul>
            </div>
            <div class="tab-content">
                <div v-show="isTabContentVisible == 0" class="content">1번 내용</div>
                <div v-show="isTabContentVisible == 1" class="content">2번 내용</div>
                <div v-show="isTabContentVisible == 2" class="content">3번 내용</div>
                <div v-show="isTabContentVisible == 3" class="content">4번 내용</div>
                <div v-show="isTabContentVisible == 4" class="content">5번 내용</div>
            </div>
        </div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus aliquid harum dicta optio in neque fugiat autem nam. Sequi tempore dolorum enim repellendus quia. Obcaecati suscipit nulla aut ipsam.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus aliquid harum dicta optio in neque fugiat autem nam. Sequi tempore dolorum enim repellendus quia. Obcaecati suscipit nulla aut ipsam.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus aliquid harum dicta optio in neque fugiat autem nam. Sequi tempore dolorum enim repellendus quia. Obcaecati suscipit nulla aut ipsam.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus aliquid harum dicta optio in neque fugiat autem nam. Sequi tempore dolorum enim repellendus quia. Obcaecati suscipit nulla aut ipsam.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus aliquid harum dicta optio in neque fugiat autem nam. Sequi tempore dolorum enim repellendus quia. Obcaecati suscipit nulla aut ipsam.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus aliquid harum dicta optio in neque fugiat autem nam. Sequi tempore dolorum enim repellendus quia. Obcaecati suscipit nulla aut ipsam.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus aliquid harum dicta optio in neque fugiat autem nam. Sequi tempore dolorum enim repellendus quia. Obcaecati suscipit nulla aut ipsam.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus aliquid harum dicta optio in neque fugiat autem nam. Sequi tempore dolorum enim repellendus quia. Obcaecati suscipit nulla aut ipsam.</div>
        <button @click="scrolllMove" :class="scroll?'active':null" type="button" class="top-btn"></button>
    </div>
  </div>
</template>

<script>
import commonHeader from '../components/header.vue';
export default {
    data(){
        return{
            scroll:false,
            tabs:['1번탭','2번탭','3번탭', '4번탭', '5번탭'],
            isTabContentVisible:0,
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
            // if(this.scroll){
            //     topBtn.classList.add('active');
            // }else{
            //     topBtn.classList.remove('active');
            // }
        },
        scrolllMove() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
        isTabVisible(index){
            this.isTabContentVisible = index;
        }

    },
    mounted(){
        window.addEventListener('scroll',()=>{
            this.scrollTop()
        })
    },
    beforeUnmount(){
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
  .tab-wrapper{
    .tab{
        ul{
            display:flex;
            li{
                button{
                    padding:0 8px;
                    color:#ccc;
                    font-weight:400;
                }
                &.active{
                    button{
                        color:#000;
                        font-weight:700;
                    }
                }
            }
        }
    }
    .tab-content{
        margin-top:50px;
    }
  }
}
</style>