<template>
<div class="LL-footer">
   <ul>
       <router-link exact :to = "nav.path" v-for = " nav in navs " :key = "nav.id" class="footer-li" active-class="active">
           <i :class="'fa fa-'+nav.icon"></i>
           <span>{{ nav.title }}</span>
       </router-link>
   </ul>
</div>
</template>

<script type="text/javascript">
    export default {
        name:'LL-footer',
        data(){
            return{
                navs: [
                    { id: 1, title: '首页', icon:'home', path: '/', name: 'home' },
                    { id: 2, title: '分类', icon:'bullseye', path: '/classify', name: 'classify' },
                    { id: 3, title: '购物车',icon:'cart-plus' , path: '/cart', name: 'cart' },
                    { id: 4, title: '我的',icon:'user-circle-o', path: '/mine', name: 'mine' }
                ]
            }
        }
    }
</script>

<style type="text/css" scoped lang = "scss">
    .LL-footer{
        height: 0.52rem;
        position:fixed;
        bottom:0;
        left: 0;
        right: 0;
        background:#fff;
        ul{
            border-top: 1px solid #ccc;
            display:flex;
            justify-content: space-between;
            
            .footer-li{
                flex:1;display:flex;flex-direction: column;justify-content:center;text-align:center;height: 0.51rem;
                i{
                    font-size: 0.2rem;
                }
                &.active{
                    color:#3d9ef1;
                }
            }
        }
    }


</style>