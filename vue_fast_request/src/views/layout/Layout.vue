<template>
  <div class="header">
    <h1>我的网页</h1>
  </div>

  <!--  导航栏  -->
  <div class="top_nav">
    <ul>
      <li>
        <a :class="{ active: 0 === narIndex }" @click='clickNar(0)'>
          <router-link to="/home">主页</router-link>
        </a>
      </li>
      <li>
        <a :class="{ active: 1 === narIndex }" @click='clickNar(1)'>
          <router-link to="/api">Api调用</router-link>
        </a>
      </li>
      <li>
        <a :class="{ active: 2 === narIndex }" @click='clickNar(2)'>
          <router-link to="/about">关于</router-link>
        </a>
      </li>
      <li>
        <a :class="{ active: 3 === narIndex }" @click='clickNar(3)'>
          <router-link to="/about">联系</router-link>
        </a>
      </li>
      <li style="float: right"><a href="/login">登陆</a></li>
    </ul>
  </div>
  <!-- 数据区域  -->
  <div class="row">
    <div class="left_column">
      <div class="card">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
    <div class="right_column">
      <div class="card">
        <h2>关于我</h2>
        <div class="fakeimg" style="height: 100px">图片</div>
        <p>关于我的一些信息..</p>
      </div>
      <div class="card">
        <h3>热门文章</h3>
        <div class="fakeimg">
          <p>图片</p>
        </div>
        <div class="fakeimg">
          <p>图片</p>
        </div>
        <div class="fakeimg">
          <p>图片</p>
        </div>
      </div>
      <div class="card">
        <h3>关注我</h3>
        <p>一些文本...</p>
      </div>
    </div>
  </div>

  <!--  页面底部   -->
  <div class="footer">
    <div class="footer_nav">
      <a href="#">链接</a>
      <a href="#">链接</a>
      <a href="#">链接</a>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

// 设置设置面包屑导航选中效果
const narIndex = ref(-1)
const clickNar = (data) => {
  narIndex.value = data
  console.log(narIndex.value)
}


</script>
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial;
  padding: 10px;
  background: #f1f1f1;
}

/* 头部标题 */
.header {
  padding: 30px;
  text-align: center;
  background: white;
}

.header h1 {
  font-size: 50px;
}

/* 导航条 */
.top_nav {
  overflow: hidden;
  background-color: #333;
}

/* 导航条链接 */
.top_nav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* 链接颜色修改 */
.top_nav a:hover {
  background-color: #ddd;
  color: black;
}


.top_nav a:active {
  background-color: #4CAF50;
  color: white;
}

/* 导航条链接 */
.footer_nav a {
  color: #333;
  text-align: left;
  padding: 14px 16px;
  text-decoration: none;

}

/* 链接颜色修改 */
.footer_nav a:hover {
  background-color: #757677;
  color: black;
}


/* 创建两列 */
/* Left column */
.left_column {
  float: left;
  width: 75%;
}

/* 右侧栏 */
.right_column {
  float: left;
  width: 25%;
  background-color: #f1f1f1;
  padding-left: 20px;
}

/* 图像部分 */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}

/* 文章卡片效果 */
.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}

/* 列后面清除浮动 */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* 底部 */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}

/* 响应式布局 - 屏幕尺寸小于 800px 时，两列布局改为上下布局 */
@media screen and (max-width: 800px) {

  .left_column,
  .right_column {
    width: 100%;
    padding: 0;
  }
}

/* 响应式布局 -屏幕尺寸小于 400px 时，导航等布局改为上下布局 */
@media screen and (max-width: 400px) {
  .top_nav a {
    float: none;
    width: 100%;
  }
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.active {
  background-color: #4CAF50;
}
</style>

