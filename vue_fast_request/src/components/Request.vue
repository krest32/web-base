<template xmlns="http://www.w3.org/1999/html">

  <n-grid cols="6" item-responsive>
    <n-grid-item span="0 400:1 600:2 800:3">
      <div class="light-green">

        <n-input v-model:value="url" autosize style="min-width: 80%" type="text" placeholder="请求路径"/>
        <n-button type="primary" @click=send >Primary</n-button>

        <n-input
            v-model:value="responseContent"
            type="textarea"
            size="small"
            placeholder=""
            :disabled="!active"
            round
        />

      </div>
    </n-grid-item>
  </n-grid>
</template>
<script setup lang="js">
import requestUtil from "../utils/axios_util";
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
