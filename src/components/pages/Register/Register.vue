<template>
    <div class="register">
        <div>
            <a></a><span>33购物-用户注册</span>
        </div>
        <form class="form-horizontal register_form">
            <div class="form-group">
                <label class="col-sm-2 control-label" id="label0"><i class="fa fa-user" aria-hidden="true"></i></label>
                <div class="col-sm-10" id="input0">
                    <input type="text" id="username" placeholder="请填写注册用户">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label" id="label0">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                </label>
                <div class="col-sm-10" id="input0">
                    <input type="text" class="form-control" id="username" placeholder="请填写注册密码">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label" id="label0"><i class="fa fa-lock" aria-hidden="true"></i></label>
                <div class="col-sm-10" id="input0">
                    <input type="text" class="form-control" id="password" placeholder="确认注册密码">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label" id="label0"><input type="checkbox"></label>
                <div class="col-sm-10" id="input1">
                    <div class="agree">我已阅读同意<span class="xieyi">33购用户注册协议</span></div>
                </div>
                
            </div>
            <p class="login_sub">
                <button type="submit" id="sub">提交注册</button>
            </p>
            <p class="xieyi">33购用户注册手册</p>
        </form>
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
    name: 'app-register'
}
</script>
<style lang="scss" scoped>
i{font-size: 0.25rem;}
    .register_form{
    margin: auto 0.2rem;
    }
    #label0{
        width:10%;
    }
    #input0{width:80%;height: 0.5rem; display:inline-block;
        input{
           width: 100%; height: 0.4rem;border:1px solid #ccc;
           border-radius: 5px;
        }
    }
    #input1{width: 80%;display:inline-block;}
    .xieyi{color:#3385ff;}
    .agree{text-align: left;display: block;float: left;}
    
    .login_sub #sub {
    width: 90%;
    margin-top:0.47rem;
    height: 0.46rem;
    border-radius: 5px;
    background: #ed3341;
    color: #fff;
    -webkit-transition: .3s background;
    transition: .3s background;
    font-weight: bold;
    font-size: 0.2rem;
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
</style>


