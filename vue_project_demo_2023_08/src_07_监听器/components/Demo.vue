<script setup>
import {ref, watch} from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

// 可以直接侦听一个 ref
// watch 的第一个参数可以是不同形式的“数据源”：它可以是一个 ref (包括计算属性)、一个响应式对象、一个 getter 函数、或多个数据源组成的数组：
watch(question, async (newQuestion, oldQuestion) => {
  console.log("旧的：" + oldQuestion)
  if (newQuestion.indexOf('?') > -1) {
    console.log("触发程序")
    console.log("新的内容：" + newQuestion)
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question"/>
  </p>
  <p>{{ answer }}</p>
</template>