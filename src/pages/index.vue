<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">Home</h1>
      <div class="links">
        <nuxt-link to="/about" rel="noopener noreferrer" class="button--green">
          about
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "@/components/Logo.vue";

@Component({
  components: { Logo },
})
export default class IndexPage extends Vue {}
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
