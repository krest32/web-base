import {createRouter, createWebHistory} from "vue-router";


import Layout from '../views/layout/Layout.vue'
import Error from "../views/layout/404.vue";
import Api from '../views/api/Api.vue'
import About from '../views/about/About.vue'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'

// 增加打包
const routerHistory = createWebHistory();
const index = createRouter({
    history: routerHistory,
    routes: [
        {
            path: "/",
            id: 0,
            name: "index",
            redirect: "/home",
            hidden: true,
        },
        // 嵌套路由，使用单页应用进行编写
        {
            path: "/home",
            id: 1,
            name: "home",
            redirect: "/welcome",
            component: Layout,
            children: [
                {
                    path: "/home",
                    id: 0,
                    name: "home",
                    hidden: false,
                    component: Home,
                    meta: {transition: 'slide-left'},
                },
                {
                    path: "/api",
                    id: 1,
                    name: "welcome",
                    hidden: false,
                    component: Api,
                    meta: {transition: 'slide-left'},
                },
                {
                    path: "/about",
                    id: 2,
                    name: "about",
                    hidden: false,
                    component: About,
                    meta: {transition: 'slide-left'},
                }
            ]
        },
        // 错误页面设置
        {
            path: "/404",
            id: 2,
            name: "error",
            component: Error,
            hidden: true,
        },
        // 没有定义的路由跳转到 404
        {
            path: "/:pathMatch(.*)",
            id: 3,
            name: "all_error",
            //访问主页的时候 重定向到index页面
            redirect: "/404",
            hidden: true,
        },
        {
            path: "/login",
            id: 4,
            name: "login",
            hidden: true,
            component: Login,
        },
    ],
});

export default index;