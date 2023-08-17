<template>
  <button @click="greet">Greet</button>
</template>


<script setup lang="ts">
import {ref} from 'vue'

//  方法事件处理器
const name = ref('Vue.js')

// 传入一个事件的具体信息
function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` 是 DOM 原生事件
  if (event) {
    // 可以打印出 event 的具体信息
    console.log(event)
    alert(event.target.tagName)
  }
}

</script>

