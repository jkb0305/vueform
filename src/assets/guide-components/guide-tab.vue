<template>

  <div class="tab-wrapper">

    <div class="tab">

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
        1번 이에요
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

      target: 0

    }

  },


  mounted() {

    this.moveIndicator()

    window.addEventListener(
      'resize',
      this.moveIndicator
    )

  },


  beforeUnmount() {

    window.removeEventListener(
      'resize',
      this.moveIndicator
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


    /*
     * indicator 이동
     */
    moveIndicator() {

      const tabList = this.$refs.tabList

      const indicator = this.$refs.indicator

      if (!tabList || !indicator) {
        return
      }


      const currentTab =
        tabList.children[this.target]


      if (!currentTab) {
        return
      }


      /*
       * 현재 탭의 넓이
       */
      const width =
        currentTab.offsetWidth


      /*
       * 현재 탭의 왼쪽 위치
       */
      const left =
        currentTab.offsetLeft


      /*
       * indicator 적용
       */
      indicator.style.width =
        `${width}px`

      indicator.style.transform =
        `translateX(${left}px)`

    }

  }

}

</script>


<style scoped lang="scss">

.tab-wrapper {

  margin-top: 40px;


  .tab {

    position: relative;


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

}

</style>