<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script setup lang="ts">
import {ref} from 'vue'

/**
 * 当你在模板中使用了一个 ref，然后改变了这个 ref 的值时，Vue 会自动检测到这个变化，并且相应地更新 DOM。
 * 这是通过一个基于依赖追踪的响应式系统实现的。当一个组件首次渲染时，Vue 会追踪在渲染过程中使用的每一个 ref
 * 。然后，当一个 ref 被修改时，它会触发追踪它的组件的一次重新渲染。
 *
 * 在标准的 JavaScript 中，检测普通变量的访问或修改是行不通的。然而，我们可以通过 getter 和 setter 方法来拦截对象属性的 get 和 set 操作
 * 该 .value 属性给予了 Vue 一个机会来检测 ref 何时被访问或修改。在其内部，Vue 在它的 getter 中执行追踪，
 * 在它的 setter 中执行触发。从概念上讲，你可以将 ref 看作是一个像这样的对象：
 */
const name = ref("我是哈哈哈")
const test = () => {
  name.value = name.value + "!"
}

</script>

