<template>
  <h2>Api调用</h2>
  <div>

  </div>

</template>
<script setup lang="js">
import requestUtil from "../../utils/axios_util";
import {ref} from "vue";

const url = ref('')
const responseContent = ref('')
const send = () => {
  // 数据校验
  if (url.value.length === 0) {
    alert("数据为空")
    return
  }
  requestUtil.get(url.value).then(response => {
    responseContent.value = response
    console.log(response)
  }).catch(error => {

  })
}
</script>
