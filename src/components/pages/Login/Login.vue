<template>
    <div class="login">
        <div>
            <a></a><span>33购物-用户登录</span>
        </div>
        <form @submit.prevent="submit" class="form-horizontal">
           <div class="form-group">
                <label class="col-sm-2 control-label" id="label0"><i class="fa fa-user" aria-hidden="true"></i></label>
                <div class="col-sm-10" id="input0">
                    <input type="text" v-model="phone" class="form-control" id="username" placeholder="请填写手机用户">
                    <button type="button" @click="sendCode" v-if="isPhone" class="send-code">发送验证码</button>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label" id="label0">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                </label>
                <div class="col-sm-10" id="input0">
                    <input type="password" v-model="code" class="form-control" id="password" placeholder="请填写密码 / 验证码">
                </div>
            </div>
            <p class="login_sub">
                <button type="submit" id="sub">登录</button>
            </p>
        </form>
        <div class="forget">
            <div class="fl register-link">
                <a href="/m/my/register/">33购注册</a>
            </div>
            <div class="fr forgot-password-link">
            <a href="/m/info/forgot-pass/">忘记密码？</a>
            </div>
        </div>
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
export default {
    name: 'app-login',
    data() {
        return {
            phone: '17728056283',
            code: ''
        }
    },
    computed: {
        isPhone() {
            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(this.phone)) {
                return false;
            } else {
                return true;
            }
        }
    },
    methods: {
        submit() {
            if (!this.code) return false;
            this.$store.dispatch('action_login', {  
                code: this.code,
                phone: this.phone,
                success: (user_state) => {
                    console.log('登陆成功')
                    // 存cookie
                    for (const key in user_state) {
                        if (user_state.hasOwnProperty(key)) {
                            const element = user_state[key];
                            this.$cookies.set(key,element,"7d","/"); 
                        }
                    }
                    //登录之后去获取一下用户的购物车信息
                    this.$store.dispatch('action_get_user_cart')
                    this.$router.push('/mine')
                },
                fail: () => {
                    console.log('密码 / 短信验证码 错误')
                }
            })
        },
        sendCode() { //发送验证码了
            this.$http.post(this.server_config+'/v4/api/code?__t=' + Date.now(), {
                mobile: this.phone,
                type: "2"
            }).then(res => {
                console.log(res)
                if (res.data.status === 0) {
                    console.log('验证码发送成功')
                }
            })
        }

    }
}
</script>

<style lang="scss" scoped>
i{font-size: 0.25rem;}
#label0{
        width:10%;
    }
    #input0{width:80%;display:inline-block;}
    input{
           width: 100%; height: 0.4rem;border:1px solid #ccc;
           border-radius: 5px;
           margin-bottom: 0.1rem;
        }
    .login_sub {
    width: 100%;
    margin-top: 0.1rem;
}
    .login_sub #sub {
    width: 90%;
    height: 0.46rem;
    border-radius: 5px;
    background: #ed3341;
    color: #fff;
    -webkit-transition: .3s background;
    transition: .3s background;
    font-weight: bold;
    font-size: 0.2rem;
}
.register-link {
    height: 0.24rem;
    line-height: 0.24rem;
    width: 1rem;
}

.fl {
    float: left;
}
.forgot-password-link {
    height: 0.24rem;
    width: 1rem;
}

.fr {
    float: right;
}
.forget a {
    color: #ed3341;
}
.register-link a,.forgot-password-link a {
    line-height: 0.24rem;
    font-size: 0.14rem
}
a {
    display: block;
    width: 100%;
    color: #333;
    text-decoration: none;
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
.send-code {
            width: 0.95rem;
            position: absolute;
            right: 0.28rem;
            top: 0.65rem;
            background-color: #ed3341;
            color: #fff;
            height: 0.3rem;
            line-height: 0.3rem;
            text-align: center;
            border-radius: 5px;
            cursor: pointer;
        }

</style>


