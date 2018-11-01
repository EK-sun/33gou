import Vue from 'vue'
import VueRouter from 'vue-router'
//vue的全局的插件或工具往往需要利用Vue.use去注册一下
Vue.use(VueRouter)

import LLhome from '../components/pages/LL-home/LL-home.vue'
import LLgoods from '../components/pages/LL-goods/LL-goods.vue'
import LLclassify from '../components/pages/LL-classify/LL-classify.vue'
// import LLcall from '../components/pages/LL-call/LL-call.vue'
import NotFound from '../components/pages/NotFound/NotFound.vue'
import Good from '../components/pages/Good/Good.vue'
import Mine from '../components/pages/Mine/Mine.vue'
import LoginRegister from '../components/pages/LoginRegister/LoginRegister.vue'
import Login from '../components/pages/Login/Login.vue'
import Register from '../components/pages/Register/Register.vue'
import Cart from '../components/pages/Cart/Cart.vue'
import store from '../store'
//路由表, 设置路由切换的规则
let routes = [
    {
        path: '/',// 当浏览器的地址为 /
        name : 'home',// 给这个路由起个名字
        component: LLhome// 渲染的组件为LL-home
    },
    {
        path: '/goods',
        name : 'goods',
        component: LLgoods
    },
    {
        path: '/call',
        name : 'call',
        component: Good
    },
    {
        path: '/cart',
        name : 'cart',
        component: Cart
    },
    {
      path: '/mine',
      name : 'mine',
      component: Mine
    },
    {
        path: '/login-register',
        name : 'login-register',
        component: LoginRegister,
        children: [
            {
                path: '',
                // component: Login
                redirect: { name: 'login' }
            },
            {
                path: 'login',
                name : 'login',
                component: Login
            },
            {
                path: 'register',
                name : 'register',
                component: Register
            }
        ]
    },
    {
        path: '/classify',
        name : 'classify',
        component: LLclassify
    },
    // {
    //     path: '/call',
    //     name : 'call',
    //     component: LLcall
    // },
     {
        path: '/not-found',
        name : 'not-found',
        component: NotFound
    },
    {
        path: '**',
        redirect: {name: 'not-found'}
    }
]


//创建路由实例，传入配置项
const router = new VueRouter({
    mode:'history',//默认为hash
    routes
})

//全局路由守卫

let need_user_state = [ 'mine' ]

router.beforeEach((to, from ,next) => {
    //是否需要判断登陆状态
    let need_us = need_user_state.some(name => to.name === name)
    if ( need_us && !store.state.commons.user_state ) {
        next('/login-register');return false;
    }
    next();
})

export default router