<template>
  <button @click="say('hello')">Say hello</button>
  <button @click="say('bye')">Say bye</button>
</template>


<script setup lang="ts">
function say(msg) {
  alert(msg)
}
</script>

