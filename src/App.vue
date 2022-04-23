<script setup>
import Hero from './components/sections/Hero.vue'
import ScrollDown from './components/ScrollDown.vue'
import About from './components/sections/About.vue'
import Projects from './components/sections/Projects.vue'
import GitRepos from './components/sections/GitRepos.vue'
import Footer from './components/sections/Footer.vue'
import StatusBar from './components/StatusBar.vue'
</script>

<template>
  <Hero />

  <ScrollDown />

  <About id="about" />

  <Projects id="projects" />

  <GitRepos id="git-repos" />

  <Footer id="footer"/>

  <StatusBar />
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;900&family=Poppins:wght@100;200;400;600;900&display=swap);
@import './assets/base.scss';
@import './assets/tailwind.css';

#about, #projects, #git-repos {
  margin-top: 100px;
}

#app {
  padding-bottom: 3rem;
} 
</style>
