<template>
  <ul>
    <li v-for="value in myObject">
      {{ value }}
    </li>
  </ul>
  <!--可以通过提供第二个参数表示属性名 (例如 key)：-->
  <li v-for="(value, key) in myObject">
    {{ key }}: {{ value }}
  </li>
  <br/>
  <!-- 第三个参数表示位置索引：-->
  <li v-for="(value, key, index) in myObject">
    {{ index }}. {{ key }}: {{ value }}
  </li>
</template>


<script setup lang="ts">
import {reactive} from 'vue'

// v-for 与对象
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})


</script>

