<template>
</template>


<script setup lang="ts">
import {onMounted} from 'vue'
//  onMounted 钩子可以用来在组件完成初始渲染并创建 DOM 节点后运行代码：
onMounted(() => {
  console.log(`the component is now mounted.`)
})
</script>

