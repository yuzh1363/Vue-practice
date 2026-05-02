<script setup>
import About from './components/About.vue';
import Header from './components/Header.vue';


</script>

<template>
  <Header class="fixed top-0 left-0 right-0 z-50 bg-blue-50 shadow-md" />
  <main class="pt-16 max-h-screen">
    <About></About>
    <!-- <RouterView></RouterView> -->
  </main>

</template>
