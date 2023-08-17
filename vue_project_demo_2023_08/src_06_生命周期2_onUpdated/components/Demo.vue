<template>
  <button id="count" @click="count++">{{ count }}</button>
</template>


<script setup lang="ts">
import {ref, onUpdated} from 'vue'

const count = ref(0)

//  注册一个回调函数，在组件因为响应式状态变更而更新其 DOM 树之后调用。
//  监听某个属性的变化，然后进行回调
onUpdated(() => {
  // 文本内容应该与当前的 `count.value` 一致
  console.log(document.getElementById('count').textContent)
})
</script>

