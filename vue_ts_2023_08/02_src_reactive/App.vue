<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h3>工作种类：{{ person.job.type }}</h3>
  <h3>工作薪水：{{ person.job.salary }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <h3>测试的数据c：{{ person.job.a.b.c }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script setup lang="ts">
import {reactive} from 'vue'

// 响应式转换是“深层”的：它会影响到所有嵌套的属性。一个响应式对象也将深层地解包任何 ref 属性，同时保持响应性。
// 值得注意的是，当访问到某个响应式数组或 Map 这样的原生集合类型中的 ref 元素时，不会执行 ref 的解包。
// 若要避免深层响应式转换，只想保留对这个对象顶层次访问的响应性，请使用 shallowReactive() 作替代。
// 定义一个 数据对象
const person = reactive({
  name: '张三',
  age: 18,
  job: {
    type: '前端工程师',
    salary: '30K',
    a: {
      b: {
        c: 666
      }
    }
  },
  hobby: ['抽烟', '喝酒', '烫头']
})

//定义方法，更新用户数据
const changeInfo = () => {
  person.name = '李四'
  person.age = 48
  person.job.type = 'UI设计师'
  person.job.salary = '60K'
  person.job.a.b.c = 999
  person.hobby[0] = '学习'
}
</script>

