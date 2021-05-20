<template>
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
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {
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

<style scoped></style>
