<template>
  <div>
    <div class="tab-wrapper">
      <div
        class="tab"
        :class="{ fixed: isTabFixed }"
      >

        <ul ref="tabList">

          <li
            v-for="(tab, index) in tabs"
            :key="index"
            :class="target === index ? 'active' : ''"
          >

            <button
              @click="tabFunc(index)"
              class="tab-btn"
              type="button"
            >
              {{ tab }}
            </button>

          </li>

        </ul>

        <span
          ref="indicator"
          class="indicator"
        ></span>

      </div>
      <div class="tab-content-wrap">

        <div
          v-show="target === 0"
          class="tab-content"
        >
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus tempora, ipsam beatae tempore dolore cum sint laborum fugiat, nobis corrupti nemo eligendi repudiandae ex, laboriosam voluptatibus eveniet assumenda debitis voluptatem.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus tempora, ipsam beatae tempore dolore cum sint laborum fugiat, nobis corrupti nemo eligendi repudiandae ex, laboriosam voluptatibus eveniet assumenda debitis voluptatem.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus tempora, ipsam beatae tempore dolore cum sint laborum fugiat, nobis corrupti nemo eligendi repudiandae ex, laboriosam voluptatibus eveniet assumenda debitis voluptatem.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus tempora, ipsam beatae tempore dolore cum sint laborum fugiat, nobis corrupti nemo eligendi repudiandae ex, laboriosam voluptatibus eveniet assumenda debitis voluptatem.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus tempora, ipsam beatae tempore dolore cum sint laborum fugiat, nobis corrupti nemo eligendi repudiandae ex, laboriosam voluptatibus eveniet assumenda debitis voluptatem.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus tempora, ipsam beatae tempore dolore cum sint laborum fugiat, nobis corrupti nemo eligendi repudiandae ex, laboriosam voluptatibus eveniet assumenda debitis voluptatem.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus tempora, ipsam beatae tempore dolore cum sint laborum fugiat, nobis corrupti nemo eligendi repudiandae ex, laboriosam voluptatibus eveniet assumenda debitis voluptatem.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus tempora, ipsam beatae tempore dolore cum sint laborum fugiat, nobis corrupti nemo eligendi repudiandae ex, laboriosam voluptatibus eveniet assumenda debitis voluptatem.</div>
        </div>

        <div
          v-show="target === 1"
          class="tab-content"
        >
          2번 이에요
        </div>

        <div
          v-show="target === 2"
          class="tab-content"
        >
          3번 이에요
        </div>

        <div
          v-show="target === 3"
          class="tab-content"
        >
          4번 이에요
        </div>
      </div>
      <button @scroll="scrollTop" class="top-btn" type="button"></button>
    </div>
  </div>
</template>


<script>

export default {

  data() {

    return {

      tabs: [
        '1번탭',
        '2번탭',
        '3번탭',
        '4번탭'
      ],
      target: 0,
      isTabFixed: false,
      lastScrollY: 0,
      tabWrapperTop: 0,
      scrollY:0,
    }
  },


  mounted() {

  this.$nextTick(() => {

    this.moveIndicator()

    this.setTabWrapperTop()

    this.lastScrollY =
      window.scrollY

  })


  window.addEventListener(
    'resize',
    this.handleResize
  )


  window.addEventListener(
    'scroll',
    this.handleScroll
  )

},


  beforeUnmount() {

  window.removeEventListener(
    'resize',
    this.handleResize
  )


  window.removeEventListener(
    'scroll',
    this.handleScroll
  )

},


  watch: {

    target() {

      this.$nextTick(() => {

        this.moveIndicator()

      })

    }

  },


  methods: {

    /*
     * 탭 클릭
     */
    tabFunc(index) {

      this.target = index

    },
    scrollTop(){
      const topBtn = document.querySelector('.top-btn');
      window.addEventListener('scroll', ()=>{
        if(this.scrollY > 60){
          topBtn.classList.add('active');
        }else{
          topBtn.classList.remove('active');
        }
      })
    },
    setTabWrapperTop() {

    const wrapper =
      this.$el.querySelector(
        '.tab-wrapper'
      )


    if (!wrapper) {

      return

    }


    this.tabWrapperTop =
      wrapper.getBoundingClientRect().top +
      window.scrollY

  },


    /*
     * indicator 이동
     */
    moveIndicator() {

      const tabList =
        this.$refs.tabList

      const indicator =
        this.$refs.indicator


      if (!tabList || !indicator) {
        return
      }


      const currentTab =
        tabList.children[
          this.target
        ]


      if (!currentTab) {
        return
      }


      const width =
        currentTab.offsetWidth


      const left =
        currentTab.offsetLeft


      indicator.style.width =
        `${width}px`


      indicator.style.transform =
        `translateX(${left}px)`

    },


    /*
     * 스크롤
     */
    handleScroll() {

  const currentScrollY =
    window.scrollY


  /*
   * 아래로 스크롤 중인지 확인
   */
  const isScrollingDown =
    currentScrollY >
    this.lastScrollY


  /*
   * 아래로 스크롤
   *
   * tab-wrapper 시작 위치를 지나면
   * fixed
   */
  if (
    isScrollingDown &&
    currentScrollY >= this.tabWrapperTop
  ) {

    this.isTabFixed = true

  }


  /*
   * 위로 스크롤
   *
   * tab-wrapper의 원래 위치까지
   * 올라오면 fixed 해제
   */
  if (
    !isScrollingDown &&
    currentScrollY <= this.tabWrapperTop
  ) {

    this.isTabFixed = false

  }


  /*
   * 현재 스크롤 위치 저장
   */
  this.lastScrollY =
    currentScrollY

},

  }

}

</script>


<style scoped lang="scss">

.tab-wrapper {
  margin-top: 120px;
  .tab {

    position: relative;

    background-color: #fff;


    &.fixed {

      position: fixed;

      top: 0;
      left: 0;

      width: 100%;

      z-index: 1000;

      background-color: #fff;

    }


    ul {

      display: flex;

      margin: 0;
      padding: 0;

      list-style: none;


      li {

        margin-right: 8px;


        .tab-btn {

          padding: 0;

          border: 0;

          background: none;

          color: #ccc;

          font-size: 16px;

          cursor: pointer;


          &:focus-visible {

            outline: 2px solid #000;

          }

        }


        &.active {

          .tab-btn {

            color: #000;

            font-weight: 700;

          }

        }

      }

    }


    .indicator {

      position: absolute;

      left: 0;
      bottom: 0;

      width: 0;
      height: 2px;

      background-color: #000;

      transition:
        width .3s ease,
        transform .3s ease;

    }

  }
  .tab-content-wrap {

    margin-top: 20px;
  }
  .top-btn{
    position:fixed;
    bottom:60px;
    right:20px;
    background-image:url('../../assets/styles/images/ico_arrow_top.png');
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