<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</template>

<script setup lang="ts">
import {computed, reactive} from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

//我们在这里定义了一个计算属性 publishedBooksMessage。computed() 方法期望接收一个 getter 函数，返回值为一个计算属性 ref。
// 和其他一般的 ref 类似，你可以通过 publishedBooksMessage.value 访问计算结果。
// 计算属性 ref 也会在模板中自动解包，因此在模板表达式中引用时无需添加 .value。


// Vue 的计算属性会自动追踪响应式依赖。它会检测到 publishedBooksMessage 依赖于 author.books，
// 所以当 author.books 改变时，任何依赖于 publishedBooksMessage 的绑定都会同时更新。
const publishedBooksMessage = computed(() => {
  console.log(author.books.length > 0 ? 'Yes' : 'No')
  return author.books.length > 0 ? 'Yes' : 'No'
})

</script>

