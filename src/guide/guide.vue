<template>
  <div class="guide-wrap">
    <h2 class="tit">가이드</h2>
    <div class="tab-wrap">
        <ul>
            <li v-for="menu in menuList" :key="menu.id" :class="{ active: currentTab === menu.id }">
            <button @click="currentTab = menu.id" type="button">{{ menu.name }}</button>
            </li>
        </ul>
        <span class="indicator"></span>
    </div>
    <div class="tab-content-wrap">
        <div class="tab-content">
        <component :is="currentTab" />
      </div>
    </div>
  </div>
</template>

<script>
import GuideStyle from '../assets/guide-components/guide-style.vue'
import GuideTab from '../assets/guide-components/guide-tab.vue'
import GuideForm from '../assets/guide-components/guide-form.vue'
import GuideSwiper from '../assets/guide-components/guide-swiper.vue'
import GuidePopup from '../assets/guide-components/guide-popup.vue'
export default {
    data(){
        return{
            currentTab: 'GuideStyle', // 초기 보여줄 컴포넌트 명칭
            menuList: [
                { id: 'GuideStyle', name: '스타일' },
                { id: 'GuideTab', name: 'tab' },
                { id: 'GuideForm', name: 'form' },
                { id: 'GuideSwiper', name: 'swiper' },
                { id: 'GuidePopup', name: 'popup' }
            ]
        }
    },
    methods:{
        tabFunc(index){
            this.tab = index;
        }
    },
    components:{
        GuideStyle,
        GuideTab,
        GuideForm,
        GuideSwiper,
        GuidePopup
    },
}
</script>

<style lang="scss" scoped>
.guide-wrap{
    .tit{
        color:#0066ff;
        font-weight:700;
    }
    .tab-wrap{
        position:relative;
        ul{
            display:flex;
            list-style:none;
            li{
                margin-right:8px;
                button{
                    background:none;
                    border:none;
                    -webkit-appearance: none;
                }
                &.active{
                    button{
                        font-weight:700;
                    }
                }
            }
        }
        .indicator{
            position:absolute;
            bottom:0;
            left:0;
            height:2px;
            background-color:#000;
        }
    }
}

</style>