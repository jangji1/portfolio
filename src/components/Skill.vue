<template>
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
          프론트엔드 개발자로 성장하고 있습니다.
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
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Skill extends Vue {}
</script>

<style scoped></style>
