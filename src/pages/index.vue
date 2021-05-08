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
        <a href="#project" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Project</a>
        <a href="#contact" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Contact</a>
      </div>

      <!-- Navbar on small screens -->
      <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large" ref="nav">
        <a href="#profile" class="w3-bar-item w3-button w3-padding-large">Profile</a>
        <a href="#skill" class="w3-bar-item w3-button w3-padding-large">Skill</a>
        <a href="#project" class="w3-bar-item w3-button w3-padding-large">Project</a>
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
            <a href="https://sass-lang.com/" target="_blank">Sass</a>를 사용하여 만들어졌습니다.<br />
            <a href="https://kr.vuejs.org/v2/guide/index.html" target="_blank">Vue.js</a>를 사용하여 마크업과 프론트엔드 개발을
            주로 하고 있습니다.<br />
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
            프론트엔드 개발자로 정착하게 되었습니다.
          </h5>

          <div class="w3-text-grey">
            <dl class="skill-list">
              <dt>MARKUP</dt>
              <dd>HTML,SCSS를 이용한 PC, MOBILE 웹 퍼블리싱</dd>
              <dd>UI Framework(<a href="https://element.eleme.io/#/en-US" target="_blank">Element UI</a>) 경험</dd>
              <dt>VUE.JS</dt>
              <dd>Vue.js, Vuex, Axios, NuxtJS 이용한 웹 프론트 개발</dd>
              <dt>ES6+</dt>
              <dd>Babel을 이용한 ES6+ 개발</dd>
              <dt>TYPESCRIPT</dt>
              <dd>Typescript with Vue 개발</dd>
              <dt>STORYBOOK</dt>
              <dd>공통 UI 컴포넌트 제작 및 테스트</dd>
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

    <div id="project" class="w3-row-padding w3-padding-64 w3-container">
      <div class="w3-content">
        <h1>PROJECT</h1>
        <div>
          <ul class="u-lst-project">
            <li class="item">
              <a href="https://mtour.wd.wemakeprice.com/" target="_blank">
                <div class="img">
                  <img src="~@/assets/common/img/wtour_m.png" alt="" class="flex-target" />
                </div>
                <div class="u-info-project">
                  <strong class="tit">위메프 여행레저(APP)</strong>
                  <p class="grade">
                    <span class="start-day">2020.04 ~ 진행중</span>
                  </p>
                  <p class="role">APP 출시 지원 프론트 개발</p>
                  <p class="description">위메프 여행레저 APP 서비스<br />출시</p>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="#" target="_blank">
                <div class="img">
                  <img src="~@/assets/common/img/qna.png" alt="" class="flex-target" />
                </div>
                <div class="u-info-project">
                  <strong class="tit">상품 Q&A 관리 파트너 어드민(PC)</strong>
                  <p class="grade">
                    <span class="start-day">2021.04 ~ 2021.04</span>
                  </p>
                  <p class="role">프론트 개발(100%) - VueJS</p>
                  <p class="description">상품 Q&A 관리 파트너 어드민 서비스<br />신규 구축</p>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="#" target="_blank">
                <div class="img">
                  <img src="~@/assets/common/img/specialPrice.png" alt="" class="flex-target" />
                </div>
                <div class="u-info-project">
                  <strong class="tit">특가신청 관리 어드민(PC)</strong>
                  <p class="grade">
                    <span class="start-day">2021.02 ~ 2021.03</span>
                  </p>
                  <p class="role">마크업 개발(100%)<br />프론트 개발(30%) - VueJS</p>
                  <p class="description">특가신청 관리 어드민 서비스<br />신규 구축</p>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="#" target="_blank">
                <div class="img">
                  <img src="~@/assets/common/img/wtalk_pc.png" alt="" class="flex-target" />
                </div>
                <div class="u-info-project">
                  <strong class="tit">위메프 고객문의톡 어드민(PC)</strong>
                  <p class="grade">
                    <span class="start-day">2021.01 ~ 2021.02</span>
                  </p>
                  <p class="role">마크업 개발(100%)</p>
                  <p class="description">위메프 판매자톡(1:1문의) 어드민 서비스<br />신규 구축</p>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="https://wtalk.wd.wemakeprice.com/" target="_blank">
                <div class="img">
                  <img src="~@/assets/common/img/wtalk_m.png" alt="" class="flex-target" />
                </div>
                <div class="u-info-project">
                  <strong class="tit">위메프 판매자톡(MO)</strong>
                  <p class="grade">
                    <span class="start-day">2021.01 ~ 2021.01</span>
                  </p>
                  <p class="role">마크업 개발(100%)</p>
                  <p class="description">위메프 판매자톡(1:1문의) 서비스<br />신규 구축</p>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="https://ticket.wemakeprice.com/" target="_blank">
                <div class="img">
                  <img src="~@/assets/common/img/wticket_pc.png" alt="" class="flex-target" />
                </div>
                <div class="u-info-project">
                  <strong class="tit">위메프 공연티켓(PC)</strong>
                  <p class="grade">
                    <span class="start-day">2020.12 ~ 2020.12</span>
                  </p>
                  <p class="role">마크업 개발(70%)</p>
                  <p class="description">공연티켓 PC 서비스 메인/리스팅 UI/UX 개편</p>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="https://mticket.wemakeprice.com/" target="_blank">
                <div class="img">
                  <img src="~@/assets/common/img/wticket_m.png" alt="" class="flex-target" />
                </div>
                <div class="u-info-project">
                  <strong class="tit">위메프 공연티켓(MO)</strong>
                  <p class="grade">
                    <span class="start-day">2020.12 ~ 2020.12</span>
                  </p>
                  <p class="role">마크업 개발(70%)</p>
                  <p class="description">공연티켓 Mobile 서비스 메인/리스팅 UI/UX 개편</p>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="https://tour.wd.wemakeprice.com/" target="_blank">
                <div class="img">
                  <img src="~@/assets/common/img/wtour_pc.png" alt="" class="flex-target" />
                </div>
                <div class="u-info-project">
                  <strong class="tit">위메프 여행레저(PC)</strong>
                  <p class="grade">
                    <span class="start-day">2020.05 ~ ~ 2021.01</span>
                  </p>
                  <p class="role">마크업 개발(50%)<br />프론트 개발(50%) - VueJS</p>
                  <p class="description">여행레저 PC 서비스 신규 구축<br />여행레저 PC 서비스 유지 보수</p>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="https://mtour.wd.wemakeprice.com/" target="_blank">
                <div class="img">
                  <img src="~@/assets/common/img/wtour_m.png" alt="" class="flex-target" />
                </div>
                <div class="u-info-project">
                  <strong class="tit">위메프 여행레저(MO)</strong>
                  <p class="grade">
                    <span class="start-day">2018.12 ~ 2021.01</span>
                  </p>
                  <p class="role">마크업 개발(50%)<br />프론트 개발(50%) - VueJS</p>
                  <p class="description">여행레저 Mobile 서비스 신규 구축<br />여행레저 Mobile 서비스 유지 보수</p>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="https://www.wisebirds.co/#adwitt" target="_blank">
                <div class="img">
                  <img src="~@/assets/common/img/adwitt.png" alt="" class="flex-target" />
                </div>
                <div class="u-info-project">
                  <strong class="tit">광고 최적화 플랫폼 Adwitt 2.0(PC)</strong>
                  <p class="grade">
                    <span class="start-day">2018.02 ~ 2018.12</span>
                  </p>
                  <p class="role">프론트 개발(30%) - React</p>
                  <p class="description">광고 최적화 솔루션(Admin) 개발</p>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="https://github.com/jangji1/markup-schooling" target="_blank">
                <div class="img">
                  <img src="~@/assets/common/img/schooling.png" alt="" class="flex-target" />
                </div>
                <div class="u-info-project">
                  <strong class="tit">아이스크림홈런(중등) 홈페이지(PC)</strong>
                  <p class="grade">
                    <span class="start-day">2017.10 ~ 2017.12</span>
                  </p>
                  <p class="role">마크업 개발(100%)</p>
                  <p class="description">
                    친절한 스쿨링 홈페이지 퍼블리싱<br />
                    <a class="link-txt" href="https://github.com/jangji1/markup-schooling" target="_blank">홈페이지 마크업</a>
                  </p>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="https://github.com/jangji1/jquery-chat" target="_blank" @click.sto="">
                <div class="img">
                  <img src="~@/assets/common/img/exam.png" alt="" class="flex-target" />
                </div>
                <div class="u-info-project">
                  <strong class="tit">아이스크림홈런(중등) 웹뷰(MO)</strong>
                  <p class="grade">
                    <span class="start-day">2017.09 ~ 2017.12</span>
                  </p>
                  <p class="role">마크업 개발(100%)<br />프론트 개발(100%) - jQuery</p>
                  <p class="description">
                    친절한 스쿨링 웹뷰 컨텐츠 개발<br />
                    <a class="link-txt" href="https://github.com/jangji1/jquery-chat" target="_blank">채팅 서비스</a>
                    <a class="link-txt" href="https://github.com/jangji1/jquery-problem" target="_blank">문제풀기 서비스</a>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div id="contact" class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
      <div class="w3-content">
        <h1>CONTACT</h1>
        <div>
          <p><a href="mailto:jangji1@gmail.com">jangji1@gmail.com</a></p>
        </div>
      </div>
    </div>
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
