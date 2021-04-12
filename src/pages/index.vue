<template>
  <div>
    <!-- Navbar -->
    <div class="w3-top">
      <div class="w3-bar w3-red w3-card w3-left-align w3-large">
        <a
          class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red"
          href="javascript:void(0);"
          title="Toggle Navigation Menu"
          @click.prevent="showNav"
          ><i class="fa fa-bars"></i
        ></a>
        <a href="#" class="w3-bar-item w3-button w3-padding-large w3-white">Home</a>
        <a href="#profile" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Profile</a>
        <a href="#skill" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Skill</a>
        <a href="#portfolio" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Portfolio</a>
        <a href="#contact" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Contact</a>
      </div>

      <!-- Navbar on small screens -->
      <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large" ref="nav">
        <a href="#profile" class="w3-bar-item w3-button w3-padding-large">Profile</a>
        <a href="#skill" class="w3-bar-item w3-button w3-padding-large">Skill</a>
        <a href="#portfolio" class="w3-bar-item w3-button w3-padding-large">Portfolio</a>
        <a href="#contact" class="w3-bar-item w3-button w3-padding-large">Contact</a>
      </div>
    </div>

    <!-- Header -->
    <header class="w3-container w3-red w3-center" style="padding: 128px 16px">
      <h1 class="w3-margin w3-jumbo">Hello!</h1>
      <p class="w3-xlarge">I'm Web Frontend Developer.</p>
    </header>

    <!-- First Grid -->
    <div id="profile" class="w3-row-padding w3-padding-64 w3-container">
      <div class="w3-content">
        <div class="w3-twothird">
          <h1>PROFILE</h1>
          <h5 class="w3-padding-32">웹 프론트엔드 개발자 장지원입니다.</h5>

          <p class="w3-text-grey">
            이 페이지는 <a href="https://ko.nuxtjs.org/" target="_blank">NuxtJS</a>,
            <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>,
            <a href="https://sass-lang.com/" target="_blank">Sass</a> 를 사용하여 만들어졌습니다.<br />
            <a href="https://kr.vuejs.org/v2/guide/index.html" target="_blank">Vue.js</a>를 사용하여 마크업과 프론트엔드 개발을
            담당하고 있습니다.<br />
            웹 표준, 웹 접근성, 크로스 브라우징을 고려한 개발이 되도록 하고 프론트엔드 기술의 동향을 파악해서 다양하게 적용해보고
            반복적으로 발생하는 로직을 컴포넌트화하여 효율적이고 유지 보수가 용이한 코딩을 할 수 있도록 발전하고자 합니다.
          </p>
        </div>

        <div class="w3-third w3-center">
          <div class="img">
            <img src="~@/assets/common/img/frontend.png" alt="" width="250px" />
          </div>
        </div>
      </div>
    </div>

    <!-- Second Grid -->
    <div id="skill" class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
      <div class="w3-content">
        <div class="w3-third w3-center">
          <div class="img">
            <img src="~@/assets/common/img/roadmap.jpeg" alt="" width="250px" />
          </div>
        </div>

        <div class="w3-twothird">
          <h1>SKILL</h1>
          <h5 class="w3-padding-32">
            마크업 개발자로 시작하여<br />
            백엔드 개발자를 거쳐<br />
            프론트엔드 개발자로 정착하게 되었습니다.
          </h5>

          <div class="w3-text-grey">
            <dl class="skill-list">
              <dt>MARKUP</dt>
              <dd>HTML,SCSS를 이용한 PC, MOBILE 웹 퍼블리싱</dd>
              <dd>UI Framework(<a href="https://element.eleme.io/#/en-US" target="_blank">Element UI</a>) 경험</dd>
              <dt>VUE</dt>
              <dd>Vue, Vuex, Axios, NuxtJS 이용한 웹 프론트 개발</dd>
              <dt>ES6+</dt>
              <dd>Babel을 이용한 ES6+ 개발</dd>
              <dt>TYPESCRIPT</dt>
              <dd>Vue with Typescript 개발</dd>
              <dt>STORYBOOK</dt>
              <dd></dd>
              <dt>JSP</dt>
              <dd>JAVA Framework 환경에서 JSP 개발</dd>
              <dt>GIT</dt>
              <dd>GUI, CUI Git 활용</dd>
              <dt>AWS</dt>
              <dd>CloudFront + S3 배포</dd>
              <dt>NPM</dt>
              <dd>npm publish 이용한 패키지 배포</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <div id="portfolio" class="w3-row-padding w3-padding-64 w3-container">
      <!--<div class="w3-content">
        <div class="w3-twothird">
          <h1>PORTFOLIO</h1>
          <div class="w3-text-grey">
            <ul>
              <li data-v-781f5510="" class="item">
                <a href="https://mtour.wd.wemakeprice.com" title="새 창으로 열림" target="_blank"
                  ><div class="img">
                    <img
                      data-v-5a0eede8=""
                      src="https://tourimg.wtour.wemakeprice.com/vendor?w=460&amp;h=460&amp;url=https://tourimg.wonderscdn.app/20201006/2/58cc4928-f95e-4d22-bdc0-88c61238acea.jpg"
                      alt="제주 해비치호텔앤리조트"
                      class="flex-target"
                    />&lt;!&ndash;&ndash;&gt;
                  </div>
                  <div class="u-info-tour">
                    <strong class="tit">제주 해비치호텔앤리조트</strong>
                    <p class="grade">
                      <span class="local">서귀포시</span><span class="star"><span>5</span>성급</span
                      ><span class="point">평점 <span>4.6</span></span>
                    </p>
                    <p class="price">
                      <span class="original">&lt;!&ndash;&ndash;&gt;</span><ins> 483,900<span class="won">원~</span></ins>
                    </p>
                    <div class="bedge">&lt;!&ndash;&ndash;&gt;<span>할인쿠폰</span></div>
                    <strong class="category khotel">국내숙박</strong>
                  </div></a
                >
              </li>
              <li>위메프 공연티켓</li>
              <li></li>
            </ul>
          </div>
        </div>
        <div class="w3-third w3-center">
          <div class="img">
            <img src="~@/assets/common/img/programming-1009134_640.jpg" alt="" width="250px" />
          </div>
        </div>
      </div>-->
    </div>

    <!--<div class="w3-container w3-black w3-center w3-opacity w3-padding-64">
      <h1 class="w3-margin w3-xlarge">Quote of the day: live life</h1>
    </div>-->

    <!-- Footer -->
    <!--<footer class="w3-container w3-padding-64 w3-center w3-opacity">
      <div class="w3-xlarge w3-padding-32">
        <i class="fa fa-facebook-official w3-hover-opacity"></i>
        <i class="fa fa-instagram w3-hover-opacity"></i>
        <i class="fa fa-snapchat w3-hover-opacity"></i>
        <i class="fa fa-pinterest-p w3-hover-opacity"></i>
        <i class="fa fa-twitter w3-hover-opacity"></i>
        <i class="fa fa-linkedin w3-hover-opacity"></i>
      </div>
      <p>
        Powered by
        <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a>
      </p>
    </footer>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from '@/components/Logo.vue'

@Component({
  components: { Logo },
})
export default class IndexPage extends Vue {
  showNav() {
    const nav: any = this.$refs.nav
    if (nav.className.indexOf('w3-show') == -1) {
      nav.className += ' w3-show'
    } else {
      nav.className = nav.className.replace(' w3-show', '')
    }
  }
}
</script>

<style scoped lang="scss"></style>
