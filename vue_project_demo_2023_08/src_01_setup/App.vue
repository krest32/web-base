<template>
  <div>{{ count }}</div>
  <br/>
  <div>
    <button @click="inc">+1</button>
  </div>

  <A></A>


</template>

<script setup lang="ts">
import {ref} from 'vue'
import A from './components/A.vue'

const count = ref(0)
const inc = () => {
  count.value++
}
</script>

