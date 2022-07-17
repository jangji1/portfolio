<template>
  <nav class="w3-top">
    <div
      class="w3-bar w3-light-grey w3-card w3-left-align w3-large"
      @click.prevent="onClickNav"
    >
      <a
        class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-light-grey w3-large w3-light-grey"
        href="javascript:void(0);"
        title="Toggle Navigation Menu"
        @click.prevent.stop="isShowNav = !isShowNav"
        ><i class="fa fa-bars"></i
      ></a>
      <a href="#home" class="w3-bar-item w3-button w3-padding-large w3-white"
        >Home</a
      >
      <a
        href="#profile"
        class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
        >Profile</a
      >
      <a
        href="#skill"
        class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
        >Skill</a
      >
      <a
        href="#project"
        class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
        >Project</a
      >
      <a
        href="#contact"
        class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
        >Contact</a
      >
    </div>

    <!-- Navbar on small screens -->
    <div
      id="navDemo"
      class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large"
      ref="nav"
      :class="{ 'w3-show': isShowNav }"
      @click.prevent="onClickNav"
    >
      <a href="#profile" class="w3-bar-item w3-button w3-padding-large"
        >Profile</a
      >
      <a href="#skill" class="w3-bar-item w3-button w3-padding-large">Skill</a>
      <a href="#project" class="w3-bar-item w3-button w3-padding-large"
        >Project</a
      >
      <a href="#contact" class="w3-bar-item w3-button w3-padding-large"
        >Contact</a
      >
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Navbar',
  data() {
    return {
      isShowNav: false,
    }
  },
  methods: {
    onClickNav(e: any) {
      const href = e.target?.getAttribute('href')
      const offsetTop = document.querySelector(href)?.offsetTop || 0
      window.scroll({
        top: offsetTop,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped></style>
