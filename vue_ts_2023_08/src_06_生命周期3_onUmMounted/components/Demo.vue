<template>
  <p>{{ intervalId }}</p>
</template>


<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue'

let intervalId
onMounted(() => {
  intervalId = setInterval(() => {
    // ...
  })
})
//  注册一个回调函数，在组件实例被卸载之后调用。
//  一个组件在以下情况下被视为已卸载：
//    1. 其所有子组件都已经被卸载。
//    2. 所有相关的响应式作用 (渲染作用以及 setup() 时创建的计算属性和侦听器) 都已经停止。
// 可以在这个钩子中手动清理一些副作用，例如计时器、DOM 事件监听器或者与服务器的连接。
onUnmounted(() => clearInterval(intervalId))
</script>

