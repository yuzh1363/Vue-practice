<script setup>
import About from './components/About.vue';
import Header from './components/Header.vue';
import Skill from './components/Skill.vue';


</script>

<template>
  <Header class="fixed top-0 left-0 right-0 z-50" />
  <main class="pt-16">
    <About/>
    <Skill/>
    <!-- <RouterView></RouterView> -->
  </main>

</template>
