<template>
  <div>
    <!-- Navbar -->
    <navbar />
    <!-- Header -->
    <Header />
    <!-- First Grid -->
    <profile />
    <!-- Second Grid -->
    <skill />
    <project />
    <contact />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import Profile from '@/components/Profile.vue'
import Skill from '@/components/Skill.vue'
import Project from '@/components/Project.vue'
import Contact from '@/components/Contact.vue'

@Component({
  components: { Navbar, Header, Profile, Skill, Project, Contact },
})
export default class IndexPage extends Vue {}
</script>

<style scoped lang="scss"></style>
