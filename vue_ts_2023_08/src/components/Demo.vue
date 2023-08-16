<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script setup lang="ts">
import reactive from 'vue'

const name: 'Demo'
const props: ['msg', 'school']
const emits: ['hello']

const person = reactive({
  name: '张三',
  age: 18
})

//方法
const test = () => {
  context.emit('hello', 666)
}

//返回一个对象（常用）
return {
  person,
  test
}
}
}
</script>

