<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>年龄：{{ person.friend }}</h2>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script setup lang="ts">
import {reactive} from 'vue'

// 将一个对象设置为全局响应的类型
const person = reactive({
  name: "krest",
  age: 16,
  friend: ['kara', 'bob']
})
const test = () => {
  person.friend.push('denny')
}

</script>

