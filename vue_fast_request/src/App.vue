<script setup>
import HelloWorld from './components/Header.vue'
import TheWelcome from './components/Compoment.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>
