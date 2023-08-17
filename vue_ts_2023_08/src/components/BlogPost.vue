<!-- BlogPost.vue -->
<script setup>
defineProps({
  author: {
    name: "krest",
    company: "ali"
  }
})
</script>

<template>
  <h4>{{ author }}</h4>
  <h4>{{ author.name }}</h4>
  <h4>{{ author.company }}</h4>
</template>