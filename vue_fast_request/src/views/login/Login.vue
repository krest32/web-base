<template>
  <div>
    <h1>login</h1>
    <form action="">
      <input type="text" v-model="username"> :Username<br>
      <input type="password" v-model="password"> :Password
    </form>
    <button @click='submit'> 提交 </button>
    <button><a href="/home"> 回到首页 </a></button>
  </div>

</template>
<script setup>
import {ref} from "vue";

const username = ref('')
const password = ref('')
const submit = () => {
  console.log(username.value)
  console.log(password.value)
}
</script>

<style scoped>
input {
  margin: 5px;
}

button {
  margin: 5px;
}
</style>