<template>
  <header class="w3-container w3-red w3-center" style="padding: 128px 16px">
    <h1 class="w3-margin w3-jumbo">Hello!</h1>
    <p class="w3-xlarge">I'm Web Frontend Developer.</p>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>

<style scoped></style>
