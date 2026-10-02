```vue
<template>
  <div class="guide-animation-wrap">

    <!-- ========================================
         Scroll Progress
    ======================================== -->
    <div
      class="scroll-progress"
      :style="{ width: `${scrollProgress}%` }"
    ></div>


    <!-- ========================================
         01. Intro
    ======================================== -->
    <section class="animation-section intro-section">
      <p class="section-number">01</p>

      <h1>
        Scroll<br />
        Animation
      </h1>

      <p class="description">
        스크롤하면서 다양한 애니메이션을 확인해보세요.
      </p>

      <div class="scroll-down">
        <span></span>
        SCROLL
      </div>
    </section>


    <!-- ========================================
         02. Sticky Header
    ======================================== -->
    <section class="animation-section">

      <div class="section-title">
        <span>02</span>
        <h2>Sticky Header</h2>
        <p>
          해당 영역이 화면 상단에 도달하면 헤더가 고정됩니다.
        </p>
      </div>

      <div class="sticky-demo">

        <div class="sticky-header">
          <strong>STICKY HEADER</strong>

          <nav>
            <a href="#">ABOUT</a>
            <a href="#">WORK</a>
            <a href="#">CONTACT</a>
          </nav>
        </div>

        <div class="sticky-content">
          <p v-for="n in 8" :key="n">
            Sticky Header Content {{ n }}
          </p>
        </div>

      </div>

    </section>


    <!-- ========================================
         03. Fade Up
    ======================================== -->
    <section class="animation-section">

      <div class="section-title">
        <span>03</span>
        <h2>Fade Up</h2>
        <p>
          요소가 화면에 들어오면 아래에서 위로 올라옵니다.
        </p>
      </div>

      <div class="fade-up-demo">

        <div
          v-for="n in 3"
          :key="n"
          class="animation-box fade-up"
          :class="{ show: visibleItems[`fade${n}`] }"
          :data-animation="`fade${n}`"
          ref="observeElements"
        >
          <span>0{{ n }}</span>
          <strong>FADE UP</strong>
        </div>

      </div>

    </section>


    <!-- ========================================
         04. Fade Left / Right
    ======================================== -->
    <section class="animation-section">

      <div class="section-title">
        <span>04</span>
        <h2>Fade Direction</h2>
        <p>
          좌우에서 가운데로 들어오는 애니메이션입니다.
        </p>
      </div>

      <div class="direction-demo">

        <div
          class="direction-box from-left"
          :class="{ show: visibleItems.left }"
          data-animation="left"
          ref="observeElements"
        >
          FROM LEFT
        </div>

        <div
          class="direction-box from-right"
          :class="{ show: visibleItems.right }"
          data-animation="right"
          ref="observeElements"
        >
          FROM RIGHT
        </div>

      </div>

    </section>


    <!-- ========================================
         05. Scale
    ======================================== -->
    <section class="animation-section scale-section">

      <div class="section-title">
        <span>05</span>
        <h2>Scale Up</h2>
        <p>
          작은 크기에서 원래 크기로 확대됩니다.
        </p>
      </div>

      <div
        class="scale-box"
        :class="{ show: visibleItems.scale }"
        data-animation="scale"
        ref="observeElements"
      >
        <span>SCROLL</span>
        <strong>SCALE UP</strong>
      </div>

    </section>


    <!-- ========================================
         06. Stagger
    ======================================== -->
    <section class="stagger-section">

  <h2>Stagger Animation</h2>

  <div
    class="stagger-list"
    :class="{ show: staggerVisible }"
    ref="staggerTarget"
  >

    <div
      v-for="n in 5"
      :key="n"
      class="stagger-item"
      :style="{ '--delay': `${(n - 1) * 0.15}s` }"
    >
      {{ n }}
    </div>

  </div>

</section>


    <!-- ========================================
         07. Parallax
    ======================================== -->
    <section class="animation-section parallax-section">

      <div class="section-title">
        <span>07</span>
        <h2>Parallax</h2>
        <p>
          스크롤 속도에 차이를 만들어 깊이감을 표현합니다.
        </p>
      </div>

      <div class="parallax-wrap">

        <div
          class="parallax-circle"
          :style="{
            transform: `translateY(${parallaxY}px)`
          }"
        ></div>

        <div class="parallax-text">
          <span>PARALLAX</span>
          <strong>DEPTH</strong>
        </div>

      </div>

    </section>


    <!-- ========================================
         08. Sticky Content
    ======================================== -->
    <section class="sticky-story">

      <div class="sticky-story-title">
        <span>08</span>
        <h2>Sticky Story</h2>
        <p>
          왼쪽 콘텐츠는 고정되고 오른쪽 콘텐츠가 스크롤됩니다.
        </p>
      </div>

      <div class="sticky-story-inner">

        <div class="sticky-visual">
          <div>
            STICKY
          </div>
        </div>

        <div class="story-list">

          <article
            v-for="n in 5"
            :key="n"
          >
            <span>0{{ n }}</span>

            <h3>
              Story Title {{ n }}
            </h3>

            <p>
              스크롤하면서 콘텐츠가 하나씩 나타나는
              Sticky Layout 예제입니다.
            </p>
          </article>

        </div>

      </div>

    </section>


    <!-- ========================================
         09. Counter
    ======================================== -->
    <section class="animation-section counter-section">

      <div class="section-title">
        <span>09</span>
        <h2>Counter</h2>
        <p>
          화면에 들어오면 숫자가 증가합니다.
        </p>
      </div>

      <div class="counter-box">

        <strong>
          {{ counter }}
        </strong>

        <span>%</span>

      </div>

    </section>


    <!-- ========================================
         End
    ======================================== -->
    <section class="animation-section end-section">

      <strong>
        END
      </strong>

      <p>
        Scroll Animation Guide
      </p>

    </section>

  </div>
</template>


<script setup>
import {
  ref,
  onMounted,
  onBeforeUnmount
} from 'vue'


/* ========================================
   Scroll Progress
======================================== */

const scrollProgress = ref(0)


const handleScroll = () => {

  const scrollTop = window.scrollY

  const documentHeight =
    document.documentElement.scrollHeight -
    window.innerHeight

  scrollProgress.value =
    (scrollTop / documentHeight) * 100


  /* Parallax */

  parallaxY.value =
    (window.scrollY - parallaxStart.value) * 0.15
}


/* ========================================
   Intersection Observer
======================================== */

const visibleItems = ref({})

let observer = null





const createObserver = () => {

  observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) {
          return
        }

        const animation =
          entry.target.dataset.animation

        if (animation) {
          visibleItems.value[animation] = true
        }

        observer.unobserve(entry.target)

      })

    },
    {
      threshold: 0.2
    }
  )


  const elements =
    document.querySelectorAll('[data-animation]')


  elements.forEach(element => {
    observer.observe(element)
  })

}



/* ========================================
   Parallax
======================================== */

const parallaxY = ref(0)
const parallaxStart = ref(0)


const setParallaxStart = () => {

  const element =
    document.querySelector('.parallax-wrap')

  if (!element) {
    return
  }

  parallaxStart.value =
    element.offsetTop -
    window.innerHeight

}


/* ========================================
   Counter
======================================== */

const counter = ref(0)

let counterStarted = false


const startCounter = () => {

  if (counterStarted) {
    return
  }

  counterStarted = true

  const target = 100
  const duration = 1500

  const startTime = performance.now()


  const animate = currentTime => {

    const progress =
      Math.min(
        (currentTime - startTime) / duration,
        1
      )

    counter.value =
      Math.floor(progress * target)


    if (progress < 1) {
      requestAnimationFrame(animate)
    }

  }


  requestAnimationFrame(animate)

}


let counterObserver = null


/* ========================================
   Mounted
======================================== */

onMounted(() => {

  window.addEventListener(
    'scroll',
    handleScroll
  )

  window.addEventListener(
    'resize',
    setParallaxStart
  )


  createObserver()

  setParallaxStart()


  /* Counter Observer */

  const counterElement =
    document.querySelector('.counter-box')

  counterObserver =
    new IntersectionObserver(
      entries => {

        if (entries[0].isIntersecting) {

          startCounter()

          counterObserver.disconnect()

        }

      },
      {
        threshold: 0.5
      }
    )


  if (counterElement) {
    counterObserver.observe(counterElement)
  }

})


/* ========================================
   Before Unmount
======================================== */

onBeforeUnmount(() => {

  window.removeEventListener(
    'scroll',
    handleScroll
  )

  window.removeEventListener(
    'resize',
    setParallaxStart
  )


  if (observer) {
    observer.disconnect()
  }

  if (counterObserver) {
    counterObserver.disconnect()
  }

})
</script>


<style lang="scss">

/* ========================================
   Common
======================================== */

.guide-animation-wrap {
  overflow: hidden;
  background: #f5f5f5;
  color: #111;
}


.animation-section {
  position: relative;

  min-height: 100vh;
  padding: 160px 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}


/* ========================================
   Scroll Progress
======================================== */

.scroll-progress {
  position: fixed;

  top: 0;
  left: 0;

  width: 0;
  height: 4px;

  background: #111;

  z-index: 9999;

  transition: width 0.05s linear;
}


/* ========================================
   Intro
======================================== */

.intro-section {
  min-height: 100vh;

  background: #111;
  color: #fff;
}

.section-number {
  margin-bottom: 30px;

  font-size: 14px;
  opacity: 0.5;
}

.intro-section h1 {
  font-size: clamp(70px, 12vw, 180px);
  line-height: 0.9;
  letter-spacing: -0.06em;
}

.description {
  margin-top: 50px;

  font-size: 18px;
  color: #999;
}

.scroll-down {
  position: absolute;

  bottom: 40px;
  left: 40px;

  display: flex;
  align-items: center;
  gap: 12px;

  font-size: 11px;
  letter-spacing: 0.1em;
}

.scroll-down span {
  width: 30px;
  height: 1px;

  background: #fff;

  animation: scrollLine 1.5s infinite;
}

@keyframes scrollLine {

  0% {
    width: 0;
  }

  50% {
    width: 30px;
  }

  100% {
    width: 0;
  }

}


/* ========================================
   Section Title
======================================== */

.section-title {
  margin-bottom: 70px;
}

.section-title span {
  display: block;

  margin-bottom: 15px;

  font-size: 12px;
  color: #999;
}

.section-title h2 {
  font-size: clamp(40px, 6vw, 80px);
  line-height: 1;
  letter-spacing: -0.05em;
}

.section-title p {
  margin-top: 20px;

  color: #777;
}


/* ========================================
   Sticky Header
======================================== */

.sticky-demo {
  min-height: 150vh;

  border: 1px solid #ddd;
  background: #fff;
}
.sticky-header-section {
  position: relative;
}

.sticky-header {
  position: sticky;
  top: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;
  padding: 0 20px;

  background: #111;
  color: #fff;

  h3 {
    margin: 0;
  }
}

.sticky-header-content {
  min-height: 800px;
  padding: 40px 20px;
  background: #f5f5f5;

  p {
    margin-bottom: 300px;
  }
}


/* ========================================
   Fade Up
======================================== */

.fade-up-demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.animation-box {
  min-height: 300px;

  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #111;
  color: #fff;

  opacity: 0;
  transform: translateY(80px);

  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.animation-box.show {
  opacity: 1;
  transform: translateY(0);
}

.animation-box span {
  color: #777;
}

.animation-box strong {
  font-size: 30px;
}


/* ========================================
   Direction
======================================== */

.direction-demo {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.direction-box {
  height: 180px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #111;
  color: #fff;

  font-size: 30px;

  opacity: 0;

  transition:
    opacity 1s ease,
    transform 1s ease;
}

.from-left {
  transform: translateX(-100px);
}

.from-right {
  transform: translateX(100px);
}

.direction-box.show {
  opacity: 1;
  transform: translateX(0);
}


/* ========================================
   Scale
======================================== */

.scale-section {
  background: #ddd;
}

.scale-box {
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #111;
  color: #fff;

  opacity: 0;
  transform: scale(0.7);

  transition:
    opacity 1s ease,
    transform 1.2s cubic-bezier(.16, 1, .3, 1);
}

.scale-box.show {
  opacity: 1;
  transform: scale(1);
}

.scale-box span {
  font-size: 12px;
  color: #777;
}

.scale-box strong {
  font-size: clamp(50px, 10vw, 150px);
}


/* ========================================
   Stagger
======================================== */

.card-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
}

.card {
  min-height: 250px;

  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #fff;

  opacity: 0;
  transform: translateY(50px);

  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.card.show {
  opacity: 1;
  transform: translateY(0);
}

.card span {
  font-size: 12px;
  color: #999;
}

.card strong {
  font-size: 22px;
}


/* ========================================
   Parallax
======================================== */

.parallax-section {
  min-height: 130vh;
}

.parallax-wrap {
  position: relative;

  height: 600px;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #111;
  color: #fff;
}

.parallax-circle {
  position: absolute;

  width: 450px;
  height: 450px;

  border-radius: 50%;

  background: #333;
}

.parallax-text {
  position: relative;

  display: flex;
  flex-direction: column;

  text-align: center;
}

.parallax-text span {
  font-size: 12px;
  letter-spacing: 0.2em;
}

.parallax-text strong {
  font-size: clamp(70px, 12vw, 180px);
  line-height: 0.8;
}


/* ========================================
   Sticky Story
======================================== */

.sticky-story {
  padding: 160px 40px;
  background: #111;
  color: #fff;
}

.sticky-story-title {
  margin-bottom: 100px;
}

.sticky-story-title span {
  color: #777;
}

.sticky-story-title h2 {
  margin-top: 15px;

  font-size: clamp(40px, 6vw, 80px);
}

.sticky-story-title p {
  margin-top: 20px;
  color: #888;
}

.sticky-story-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.sticky-visual {
  position: sticky;
  top: 80px;

  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #222;
}

.sticky-visual div {
  font-size: 80px;
  font-weight: 700;
  letter-spacing: -0.05em;
}

.story-list article {
  min-height: 500px;

  padding: 30px 0;

  border-bottom: 1px solid #333;
}

.story-list article span {
  color: #666;
}

.story-list h3 {
  margin-top: 80px;

  font-size: 40px;
}

.story-list p {
  margin-top: 20px;

  color: #888;
  line-height: 1.8;
}


/* ========================================
   Counter
======================================== */

.counter-section {
  min-height: 80vh;
  background: #ddd;
}

.counter-box {
  display: flex;
  align-items: baseline;
  justify-content: center;
}

.counter-box strong {
  font-size: clamp(100px, 20vw, 300px);
  line-height: 1;
}

.counter-box span {
  font-size: 40px;
}


/* ========================================
   End
======================================== */

.end-section {
  min-height: 80vh;

  align-items: center;
  justify-content: center;

  background: #111;
  color: #fff;

  text-align: center;
}

.end-section strong {
  font-size: clamp(100px, 20vw, 300px);
  line-height: 1;
}

.end-section p {
  margin-top: 30px;
  color: #777;
}


/* ========================================
   Responsive
======================================== */

@media (max-width: 768px) {

  .animation-section {
    padding: 100px 20px;
  }

  .intro-section h1 {
    font-size: 70px;
  }

  .fade-up-demo {
    grid-template-columns: 1fr;
  }

  .card-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .sticky-story {
    padding: 100px 20px;
  }

  .sticky-story-inner {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .sticky-visual {
    position: relative;
    top: auto;
    height: 300px;
  }

  .sticky-visual div {
    font-size: 50px;
  }

  .story-list article {
    min-height: 350px;
  }

  .story-list h3 {
    margin-top: 50px;
    font-size: 30px;
  }

  .sticky-header nav {
    display: none;
  }

}
</style>
```

### 특히 퍼블리셔 관점에서 봐두시면 좋은 부분

**1. 화면에 들어왔을 때 애니메이션**

```js
const observer = new IntersectionObserver(...)
```

이 부분이 핵심입니다.

예를 들어:

```scss
.fade-up {
  opacity: 0;
  transform: translateY(80px);
}

.fade-up.show {
  opacity: 1;
  transform: translateY(0);
}
```

JS가 화면에 들어왔다는 것을 감지해서 `show` 클래스만 붙여주는 구조입니다.

---

**2. Sticky는 생각보다 간단합니다.**

```scss
.sticky-header {
  position: sticky;
  top: 0;
}
```

이것만으로도 상당히 많은 인터랙션을 만들 수 있습니다.

특히 퍼블리싱할 때는

```scss
position: sticky;
top: 0;
```

와

```scss
position: fixed;
top: 0;
```

의 차이를 확실하게 구분해두시는 게 좋습니다.

* `fixed` → 문서 흐름에서 빠지고 화면에 계속 고정
* `sticky` → **자기 영역 안에서 스크롤하다가 특정 위치에 도달하면 고정**

이번 예제의 `Sticky Header`가 바로 후자입니다.

---

**3. Stagger는 실무에서 굉장히 자주 씁니다.**

```vue
:style="{
  transitionDelay: `${index * 0.15}s`
}"
```

때문에

```text
01 → 0초
02 → 0.15초
03 → 0.30초
04 → 0.45초
05 → 0.60초
```

순서로 나타납니다.

카드 목록, 메뉴, 상품 리스트, 텍스트 등에 상당히 많이 활용할 수 있습니다.

그리고 이 정도까지 익히셨다면 다음 단계로는 **GSAP + ScrollTrigger**를 붙여보는 것이 좋습니다. 지금까지 하셨던 GSAP/ScrollTrigger 학습과도 바로 연결되고, `pin`, `scrub`, `timeline`, `horizontal scroll`, `text reveal` 같은 **실제 사이트에서 볼 법한 인터랙션**을 만들 수 있습니다.
