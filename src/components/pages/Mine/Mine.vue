<template>
    <div class="app-mine page page-bottom">
        <div class="my_info">
            <img src="../../../assets/mine1.png"> <div class="my_mian"><p class="my_pic"><img src="../../../assets/mine2.png"></p><p> 用户名: <span v-if = "user_info">{{ user_info.nickname }}</span></p>
            </div>
        </div>
        <div class="my_content clearfix"><ul><li class="my_border topline"><a href="/m/my/info/"><span class="my_pic"><i class="fa fa-user-circle" style="color:#4ca4fe"></i></span> <span class="my_order">我的信息</span> <span class="my_right"><i class="fa fa-caret-right"></i></span></a></li> <li class="my_border topline"><a href="/m/my/order/"><span class="my_pic"><i class="fa fa-file-text" style="color:#fd5e5e"></i></span> <span class="my_order">我的订单</span> <span class="my_right"><i class="fa fa-caret-right"></i></span></a></li> <li class="my_border topline"><a href="/m/my/password/"><span class="my_pic"><i class="fa fa-key" style="color:#fc5830"></i></span> <span class="my_order">修改密码</span> <span class="my_right"><i class="fa fa-caret-right"></i></span></a></li> <li class="my_border topline"><a href="/m/my/coupon/"><span class="my_pic"><i class="fa fa-credit-card" style="color:#ffab33"></i></span> <span class="my_order">我的优惠券</span> <span class="my_right"><i class="fa fa-caret-right"></i></span></a></li></ul></div>
        <button @click = "exit" id="close"><a class="close_con">退出登陆</a></button>
        <footer>
            <div class="qr-code-wrap">
            <h3>新西兰TV33电视台旗下平台</h3>
            <div class="qr-code-cell">
                <img src="../../../assets/erweima1.png">
                <p>TV33微信公众号</p>
            </div>
            <div class="qr-code-cell">
                <img src="../../../assets/erweima2.png">
                <p>33购微信服务号</p>
            </div>
            </div>
            <div class="copyright">
                Copyright © 2018.TV33 All rights reserved.
            </div>
            <div class="contact-us">
                新西兰热线：64-9-5282250       
            </div>
            <p>&nbsp;</p>
        </footer>
    </div>   
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'app-mine',
    computed: mapState({
        user_info : state => state.commons.user_info
    }),
    created () {
        this.$store.dispatch('action_get_user_info')
    },
    methods: {
        exit () {
            this.$store.commit({
                type: 'CHANGE_USER_STATE', user_state: null
            })
            this.$store.commit({
                type: 'CHANGE_USER_INFO', user_info: null
            })
            this.$cookies.clear()

            this.$router.replace('/login-register/login')
        }
    }
    // created () {
    //     let user_state = this.$store.state.commons.user_state
    //     if ( !user_state ) {
    //         this.$router.replace('/login')
    //     }
    // },
    // beforeRouteEnter (to, from, next) {
    //     let user_state = store.state.commons.user_state
    //     if ( !user_state ) {
    //         next('/login')
    //     }else { next() }
    // }
    // beforeRouteUpdate (to, from, next) {
    //     //当路由参数变化，或者内部的子路由切换的时候就会触发
    // },
    // beforeRouteLeave (to, from, next) {
    //     //路由跳转走的时候
    //     console.log('从mine离开了')
    // }
}
</script>

<style lang="scss">
    .my_info {
    width: 100%;
    position: relative;
    img {
    border: 0;
    display: block;
    width: 100%;
    vertical-align: middle;
    }
}
.my_info .my_mian {
    position: absolute;
    left: 0px;
    bottom: 0px;
    right: 0px;
    top: 0px;
    margin: auto;
    width: 40%;
    height: 125px;
}
.my_info .my_mian P.my_pic {
    width: 55%;
    margin: 0 auto;
}
.my_content {
    width: 100%;
    background: #fff;
    margin-top: 15px;
}
.my_content ul {
    padding: 0 0.2rem;
    width: 100%;
    background: #fff;
    overflow: hidden;
}
.my_content ul li {
    width: 100%;
    padding: 0.33rem 0px;
    font-size: 0.21rem;
    position: relative;
    overflow: hidden;
    color: #666;
    border-top:1px solid #ccc;
    line-height: 0.67rem;
    a {
    display: block;
    width: 100%;
    color: #333;
    text-decoration: none;
    }
}
.my_content ul li span.my_pic {
    position: absolute;
    top: 0.05rem;
    left: 0px;
    display: block;
    width: 10%;
    height: 10%;
i{font-size: 0.33rem;
    }
}
.my_content ul li span.my_order {
    position: absolute;
    top: 0rem;
    left: 0.5rem;
    font-size: 0.18rem;
    display: block;
    color: #282828;
    width: 80%;
    text-align: left;
}
.my_content ul li span.my_right {
   position: absolute;
    top: 0rem;
    right: 0px;
    width: 0.14rem;
    height: 0.25rem;
    line-height: 0.67rem;
    float: right;
    font-size: 0.25rem;
    color: #ccc;
    img { width: 100%;
    border: 0;
    display: block;
    width: 100%;
    vertical-align: middle;
    }
}
#close {
    width: 80%;
    height:0.468rem;
    margin-top:0.4rem;
    background: #ed3341;
    border-radius: 5px;
    line-height: 0.4rem;
    text-align: center;

}
#close a.close_con {
    display: block;
    font-size: 0.18rem;
    color: #fff;
}
footer {
    background: #f7f7f7;
    padding: 0.3rem 0 0.9rem;
    text-align: center;
}
.qr-code-wrap {
    padding: 0.2rem 0.5rem;
}

footer div {
    line-height: 0.2rem;
    color: #666666;
}
.qr-code-wrap h3 {
    font-weight: 600;
}
h3{display: block;
    font-size: 1.17em;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
.qr-code-wrap .qr-code-cell {
    margin-top: 0.1rem;
    img {
    border: 0;
    display: block;
    width: 100%;
    vertical-align: middle;
}
}
body{background: #f7f7f7;}
</style>

