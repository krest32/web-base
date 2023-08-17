<script setup>
import {ref} from "vue";
import ButtonCounter from './ButtonCounter.vue'
//  通过 title 进行组件之间的参数传递
const posts = ref([
  {id: 1, title: 'My journey with Vue'},
  {id: 2, title: 'Blogging with Vue'},
  {id: 3, title: 'Why Vue is so fun'}
])

</script>

<template>
  <h1>Here is a child component!</h1>
  <ButtonCounter title="My journey with Vue"/>
  <ButtonCounter title="Blogging with Vue"/>
  <ButtonCounter title="Why Vue is so fun"/>
</template>