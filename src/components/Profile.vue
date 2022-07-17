<template>
  <section id="profile" class="w3-row-padding w3-padding-64 w3-container">
    <div class="w3-content">
      <div class="w3-twothird">
        <h1>PROFILE</h1>
        <h5 class="w3-padding-32">웹 프론트엔드 개발자 장지원입니다.</h5>

        <p class="w3-text-grey">
          이 페이지는
          <a href="https://ko.nuxtjs.org/" target="_blank">NuxtJS</a>,
          <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>,
          <a href="https://sass-lang.com/" target="_blank">Sass</a>를 사용하여 만들어졌습니다.<br />
          <a href="https://ko.reactjs.org" target="_blank">React</a>,
          <a href="https://kr.vuejs.org/v2/guide/index.html" target="_blank">Vue.js</a>를 사용한 UI, 프론트엔드 개발을 주로 하고
          있습니다.<br />
          웹 표준, 웹 접근성, 크로스 브라우징을 고려한 개발이 되도록 하고<br />프론트엔드 기술의 동향을 파악해서 다양하게
          적용해보고 반복적으로 발생하는 로직을 컴포넌트화하여 효율적이고 유지 보수가 용이한 코딩을 할 수 있도록 발전하고자
          합니다.
        </p>
      </div>

      <div class="w3-third w3-center">
        <div class="img">
          <img src="~@/assets/common/img/frontend.png" alt="" width="250px" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'Profile',
}
</script>

<style scoped></style>
