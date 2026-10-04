<template>
  <div>
    <header :class="{ fixed: isFixed }">
        <!-- 내부 wrap div -->
        <div class="header-inner">
            <button class="btn prev-btn" type="button" aria-label="뒤로가기"></button>
            <h1 class="header-title">제목이에요</h1> <!-- ⚠️ CSS의 .header-title과 이름 일치 완료 -->
            <button class="btn setting-btn" type="button" aria-label="설정"></button>
        </div>
    </header>
    <main class="main-content">
        <section class="sub-content">
            <h2>서브 타이틀</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error maxime laudantium voluptate beatae voluptatem animi esse architecto laboriosam cumque quam vero voluptates porro quos ipsam, eaque exercitationem! Facere, dolorum consequuntur.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error maxime laudantium voluptate beatae voluptatem animi esse architecto laboriosam cumque quam vero voluptates porro quos ipsam, eaque exercitationem! Facere, dolorum consequuntur.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error maxime laudantium voluptate beatae voluptatem animi esse architecto laboriosam cumque quam vero voluptates porro quos ipsam, eaque exercitationem! Facere, dolorum consequuntur.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error maxime laudantium voluptate beatae voluptatem animi esse architecto laboriosam cumque quam vero voluptates porro quos ipsam, eaque exercitationem! Facere, dolorum consequuntur.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error maxime laudantium voluptate beatae voluptatem animi esse architecto laboriosam cumque quam vero voluptates porro quos ipsam, eaque exercitationem! Facere, dolorum consequuntur.</p>
        </section>
    </main>
  </div>
</template>

<script>

export default {
    data(){
        return{
            isFixed:false,
        }
    },
    components:{
        
    },
    methods:{
        headerOnScroll(){
            const scrollY = window.scrollY;
            
            if(scrollY > 0){
                this.isFixed = true;
            }else{
                this.isFixed = false;
            }
        }
    },   
        

    
    mounted(){
        window.addEventListener('scroll', this.headerOnScroll);
    },
    beforeUnmount(){
        window.removeEventListener('scroll', this.headerOnScroll);
    }

}
</script>
<style lang="scss" scoped>
header {
    position: relative;
    height: 48px; // ⭐️ 헤더의 원래 자리를 48px로 단단히 고정해 둡니다. (main 콘텐츠 밀림 방지)
    width: 100%;

    // 평소 상태와 fixed 상태의 내부 디자인을 완전히 일치시킵니다.
    .header-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 48px;
        padding: 0 16px;
        background-color: #fff;
        box-sizing: border-box;
    }

    // ⭐️ 스크롤되어 fixed 클래스가 붙었을 때
    &.fixed {
        .header-inner {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 100;
            // 미세한 떨림을 그래픽카드(GPU) 가속으로 잡아주는 모바일 필수 속성
            transform: translateZ(0); 
            // 스크롤 시 고정되었다는 느낌을 주기 위해 그림자 효과만 살짝 추가하는 편입니다.
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06); 
        }
    }

    // 내부 아이콘 및 타이틀 스타일 (동일하게 유지)
    .header-inner {
        .header-title { // ⚠️ 템플릿의 .header-title과 매칭되도록 수정
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            font-size: 16px;
            font-weight: 700;
        }
        .btn {
            background-repeat: no-repeat;
            background-position: center;
            z-index: 10;
            border: none;
            background-color: transparent;
        }
        .prev-btn {
            width: 24px;
            height: 24px;
            background-size: contain;
            background-image: url(../assets/styles/images/ico_arrow_back.png);
        }
        .setting-btn {
            width: 24px;
            height: 24px;
            background-size: contain;
            background-image: url(../assets/styles/images/icon_setting.png);
        }
    }
}

// 헤더가 상단에 고정되므로, 본문 콘텐츠가 헤더에 파묻히지 않도록 기본 여백을 줍니다.
.main-content {
    padding-top: 48px;
}
</style>







