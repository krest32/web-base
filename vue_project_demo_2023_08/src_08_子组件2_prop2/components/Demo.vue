<script setup>
import BlogPost from './BlogPost.vue'

</script>

<template>
  <h1>Here is a child component!</h1>
  <!-- 虽然这个对象字面量是个常量，我们还是需要使用 v-bind -->
  <!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
  <BlogPost
      :author="{
              name: 'Veronica',
              company: 'Veridian Dynamics'
      }"
  />

</template>