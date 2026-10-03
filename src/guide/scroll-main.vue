<template>
  <div>
    <div class="content">
        <div class="tab-wrapper">
            <div class="tab">
                <ul role="tab">
                    <li ref="tabItems" v-bind:class="isTabContentVisible === index ? 'active':null" v-for="(tab, index) in tabs" :key="index" class="">
                        <button @click="isTabVisible(index)" class="link-btn" type="button">{{ tab }}</button>
                    </li>
                </ul>
                <span ref="indicator" class="indicator"></span>
            </div>
            <div class="tab-content">
                <div class="content">
                    <div class=""></div>
                </div>
                <div class="content">2번 내용</div>
                <div class="content">3번 내용</div>
                <div class="content">4번 내용</div>
                <div class="content">5번 내용</div>
                <div class="content">5번 내용</div>
                <div class="content">5번 내용</div>
            </div>
        </div>
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
            tabs:['자동차','기차','화상전문병원', '베스티안', '서울병원', '잣근성', '불도그'],
            isTabContentVisible:0,
            liWidth:0,
            liPosition:0,
            liHeight:0,
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
            this.$nextTick(() => {
                this.moveIndicator();
            });
        },
        moveIndicator(){
            const tabItems = this.$refs.tabItems;
            const indicator = this.$refs.indicator;
            // if (!tabItems || !indicator) {
            //     return;
            // }
            const currentTab =
                tabItems[this.isTabContentVisible];
            // if (!currentTab) {
            //     return;
            // }
            this.liWidth =
                currentTab.offsetWidth;
            this.liPosition =
                currentTab.offsetTop;
            this.liHeight = 
                currentTab.offsetHeight;
            indicator.style.width =
                `${this.liWidth}px`;
            indicator.style.transform =
                `translateY(${this.liPosition}px)`;
            indicator.style.height =
                `${this.liHeight}px`;
        }

    },
    mounted(){
       window.addEventListener('scroll',this.scrollTop)
        this.$nextTick(() => {
            this.moveIndicator();
        });
    },
    beforeUnmount(){
        window.removeEventListener('scroll', this.scrollTop)
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
    display:flex;
    .tab{
        position:relative;
        min-width:80px;
        margin-right:20px;
        ul{
            li{
                position:relative;
                padding:10px 0;
                z-index:10;
                button{
                    padding:0 8px;
                    color:#ccc;
                    font-weight:400;
                    z-index:10;
                    
                }
                &.active{
                    button{
                        font-weight:700;
                        color:#fff;
                        z-index:10;
                    }
                }
            }
        }
        .indicator{
            position:absolute;
            top:0;
            left:0;
            z-index:1;
            background-color:#ebebeb;
            transition:transform 0.3s;
        }
    }
    .tab-content{
        margin-top:50px;
        flex:1;
    }
  }
}
</style>