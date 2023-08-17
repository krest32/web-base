<template>
  <p>{{ firstName }}</p>
  <p>{{ lastName }}</p>
  <span>{{ fullName }}</span>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

//  计算属性默认是只读的。当你尝试修改一个计算属性时，你会收到一个运行时警告。
//  只在某些特殊场景中你可能才需要用到“可写”的属性，你可以通过同时提供 getter 和 setter 来创建：

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ')
  }
  
})

</script>

