<template>
    <!--1. 클릭 했을 때 index의 위치로 스크롤 이동 
        2. 스크롤 시 인덱스의 탑에 위치했을 때 자동으로 indicator 및 active 클래스 on
        3. isTabContentVisible의 index와 tab-content-inner의 인덱스가 맞는지를 체크해야됨
    -->
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
            <div ref="tabContentWrap" class="tab-content-wrap">
                <div 
                    class="tab-content-inner" 
                    v-for="(productListWrap, index) in productListWrapper" 
                    v-bind:key="index"
                    ref="tabScrollTopPosition"
                >
                    <div 
                        v-for="(list,index) in productListWrap.productList" 
                        v-bind:key="index" 
                        class="tab-content"
                    >
                        <h4 v-if="list.title">{{list.title}}</h4>
                        <ul>
                            <li 
                                v-for="(product,index) in list.linkList" 
                                v-bind:key="index"
                        >   {{product}}
                            </li>
                        </ul>   
                    </div>
                </div>
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
            tabs:['가입 상품','자동차','대출', '서비스', '이벤트 혜택', '내 정보 관리', '고객 지원','소비자보호'],
            isTabContentVisible:0,
            liWidth:0,
            liPosition:0,
            liHeight:0,
            ItemScrollPosition:0,
            productListWrapper:[
                {
                    productList:[
                        {
                            title:'이용 금액 결제',
                            linkList:['청구 금액 결제','중도상환','예수금 사용']
                        },
                        {
                            title:'상품 이용 내역',
                            linkList:['명세서','상품 이용 내역','상환 스케줄','입금 내역','내 리스렌트 관리하기','배터리 라이프케어','서류 발급','대출 유예 연장 신청','금리인하 요구권','근저당 설정 해지'],
                        },
                        {
                            title:'결제 정보 관리',
                            linkList:['결제 정보 조회 변경','상품 이용 내역','상환 스케줄','입금 내역','내 리스렌트 관리하기','배터리 라이프케어','서류 발급','대출 유예 연장 신청','금리인하 요구권','근저당 설정 해지'],
                        },
                        {
                            title:'통합 청구',
                            linkList:['서비스 소개'],
                        },
                    ],
                },
                {
                    productList:[
                        {
                            title:'제네시스',
                            linkList:['리스, 렌트']
                        },
                        {
                            title:'현대자동차',
                            linkList:['할부','리스','렌트',],
                        },
                        {
                            title:'기아',
                            linkList:['할부','리스','렌트',],
                        },
                        {
                            title:'중고차',
                            linkList:['할부', '리스'],
                        },
                        {
                            title:'다이렉트',
                            linkList:['다이렉트카',],
                        },
                    ],
                },
                {
                    productList:[
                        {
                            linkList:['주택 담보 대출', '신용대출 간편 비교']
                        },
                    ],
                },
                {
                    productList:[
                        {
                            title:'자동차 서비스',
                            linkList:['모델 비교하기', '내 차 추천 받기', '카 라이프 혜택', '내 차 팔기', 'ai 차계부', '내 차 관리', '모빌리티 소비', '다이렉트 자동차보험 간편 확인']
                        },
                        {
                            title:'자산관리 서비스',
                            linkList:['소비 분석', '자산 분석']
                        },
                    ],
                },
                {
                    productList:[
                        {
                            linkList:['이벤트','쿠폰함','콘텐츠 라운지']
                        },
                    ],
                },
                {
                    productList:[
                        {
                            title:'내 자산관리 설정',
                            linkList:['내 자산관리 설정','마이데이터 설정',]
                        },
                        {
                            title:'회원 설정',
                            linkList:['회원 정보','플러스멤버십','h-coin']
                        },
                    ],
                },
                {
                    productList:[
                        {
                            linkList:['고객센터','공지사항','금융용어사전','상품공시실','챗봇상담']
                        },
                    ],
                },
                {
                    productList:[
                        {
                            title:'민원 신청/상담',
                            linkList:['고객센터1','공지사항','금융용어사전','상품공시실','챗봇상담']
                        },
                        {
                            title:'법규/권리 안내',
                            linkList:['회원 정보11','플러스멤버십','h-coin']
                        },
                        {
                            title:'피해 예방/정보',
                            linkList:['회원 정보11','플러스멤버십','h-coin']
                        },
                    ],
                },
            ]
        }
    },
    components:{
        commonHeader,
    },
    methods:{
        scrollTop(){

    const tabContentWrap =
        this.$refs.tabContentWrap;

    const tabContents =
        this.$refs.tabScrollTopPosition;

    if (!tabContentWrap || !tabContents) {
        return;
    }

    // 오른쪽 영역의 현재 스크롤 위치
    const scrollTop =
        tabContentWrap.scrollTop; //스크롤 양을 구하는 자바스크립트 내장함수? 라고 하나?
        

    // 위로가기 버튼
    //maxScrollTop은  화면에서 맨 아래까지 스크롤할 수 있는 최대 scrollTop 값 구하는 공식.
    const maxScrollTop =
        tabContentWrap.scrollHeight - //스크롤 영역 안에 들어있는 전체 콘텐츠 높이
        tabContentWrap.clientHeight;  //현재 화면에 실제로 보이는 영역의 높이
    this.scroll =
        scrollTop > 60;

    let currentIndex = 0;

    tabContents.forEach((content, index) => {

        const contentTop =
            content.offsetTop;//이건 해당 콘텐츠가 위에서부터 얼마나 떨어져 있는지 가져옵니다. 즉 tabContents 각각의 높이값 구하는 공식

        if (scrollTop >= contentTop - 50) {
            currentIndex = index;
        }

    });
    //스크롤 끝까지 내렸을 때 마지막 부분 active 안되는 부분 active시키는 소스
    if (
        scrollTop >=
        maxScrollTop - 5
    ) {
        currentIndex =
            tabContents.length - 1;
    }
    if (
        currentIndex !==
        this.isTabContentVisible
    ) {

        this.isTabContentVisible =
            currentIndex;

        this.$nextTick(() => {

            this.moveIndicator();

        });

    }

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
                this.moveItemScroll(index);
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
        },
        moveItemScroll(index) {
            const tabContentWrap = this.$refs.tabContentWrap;
            const tabContents = this.$refs.tabScrollTopPosition;

            const currentContent =
                tabContents[index];

            if (!currentContent) {
                return;
            }
            const top =
                currentContent.getBoundingClientRect().top -
                tabContentWrap.getBoundingClientRect().top +
                tabContentWrap.scrollTop;

            tabContentWrap.scrollTo({
                top: top,
                behavior: 'smooth'
        });
},   
        

    },
    mounted(){
       this.$nextTick(()=>{
        this.moveIndicator();
        this.$refs.tabContentWrap.addEventListener('scroll', this.scrollTop);
       })
    },
    beforeUnmount(){
        if (this.$refs.tabContentWrap) {

            this.$refs.tabContentWrap.removeEventListener(
                'scroll',
                this.scrollTop
            );

        }
    }

}
</script>

<style lang="scss" scoped>
.content{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
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
    width:100%;
    height:100%;
    .tab{
        position:relative;
        min-width:80px;
        background-color:#ebebeb;
        flex-shrink:0;
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
                        color:#000;
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
            background-color:#fff;
            transition:transform 0.3s;
        }
    }
    .tab-content-wrap{
        flex:1;
        min-width:0;
        min-height:0;
        overflow-y: auto;
        overflow-x:hidden;
        .tab-content-inner{
            margin-top:32px;
            border-top:8px solid #ebebeb;
            padding-top:8px;
            padding-left:20px;
            .tab-content{
                h4{
                    color:#ccc;
                    font-size:14px;
                    padding-bottom:4px;
                    border-bottom:1px solid #ccc;
                    margin-top:24px;
                    margin-right:20px;
                }
                ul{
                    margin-top:12px;
                    li{
                        margin-top:20px;
                        font-size:16px;
                        color:#000;
                        font-weight:700;
                        &:first-child{
                            margin-top:0;
                        }
                    }
                }
                &:first-child{
                    h4{
                        margin-top:0;
                    }
                }
            }
            &:first-child{
                margin-top:0;
                border:none;
            }
        }
    }
  }
}
</style>