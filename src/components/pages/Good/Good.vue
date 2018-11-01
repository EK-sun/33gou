<template>
    <div class="goods">
        <div id="productDetail">
            <div class="int_title">
                <a href="javascript:void(0);" onclick="javascript:history.back(-1)"><span class="int_pic"><i>back</i></span>商品详情</a>
            </div>
            <div class="video details_back">
                <div class="deta_pic topline">
                    <p class="deta_box"><img :src="'http://www.33go.com.cn/'+goods.defaultSrc"></p><p class="deta_con">{{ goods.productName }}</p><br><p class="deta_con">{{ goods.productNameAlias }}</p><br>
                    <div id="cartAnchor" class="deta_con deta_price clearfix">
                        <span class="deta_display fl">价格(新西兰元)：</span><span v-if = "goods.price2" class="deta_display fl int_color price0">$&nbsp;{{ goods.price1 }} </span><span v-else class="deta_display fl int_color">$&nbsp;{{ goods.price1 }} </span><span class="deta_display fl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="deta_display fl " style="color: red;">$&nbsp;{{ goods.price2 }} </span><span class="deta_display fl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                    </div>
                    <div class="deta_con deta_price clearfix">
                        <span class="deta_display fl">价格(人民币)：</span><span v-if = "goods.price2" class="deta_display fl int_color price0">￥&nbsp;{{ (goods.price1*4.61).toFixed(2) }} </span><span v-else class="deta_display fl int_color">￥&nbsp;{{ (goods.price1*4.61).toFixed(2) }} </span><span class="deta_display fl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="deta_display fl " style="color: red;">￥&nbsp;199.72 </span><span class="deta_display fl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                    </div><br>
                    <div class="deta_con topline deta_height clearfix">
                        <span class="deta_display fl">数量：</span>
                        <div class="deta_display fl">
                            <p class="supp_c_inpt perfor_input deta_top" style="margin-top: 0.094rem;"><input @click = "goods.status -= (goods.status === 1 ? 0: 1)" type="button" value="-" id="plus"><input type="number" id="txt" :value="goods.status"><input @click = "goods.status++" type="button" value="+" id="reduce"></p>
                        </div><span class="deta_display fl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="deta_display fl">库存：</span><span class="deta_display fl">{{ goods.stock }}</span><span class="deta_display fl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="deta_display fl" id="10175" style="color: rgb(230, 0, 18);"></span>
                    </div>
                </div>
                <div class="perform topline">
                    <div class="fill_name clearfix topline">
                        <ul>
                            <li class="fill fl name_color">详情</li>
                            <li class="addr_name fill fr">规格</li>
                        </ul>
                    </div>
                    <div class="name_perf details_padding">
                        <div class="name_box " style="display: block;" v-html="goods.mobileDefaultDesc">

                        </div>
                        <div class="name_box detail_width_con"></div>
                    </div>
                </div>
            </div>
            <div style="height: 150px;"></div>
            <div class="con_sub cart_che clearfix">
                <a href="javascript:void(0);" class="con_ti fr"><button @click = "checkIsLogin">加入购物车</button></a>
            </div>
        </div>
        <LL-footer></LL-footer>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'app-goods',
    data () {
        return {
            goods: []
        }
    },
    computed: mapState(['commons', 'cart']),
    methods: {
        getGoods () {
            this.$http.get(this.server_config+'/category/api/product/detail?productId='+this.$route.query.id).then(res => {
                // console.log(res.data)
                this.goods = res.data
            })
        },
        checkIsLogin () {
            if (!this.commons.user_state) {
                // this.$router.push({name: 'login'})
                console.log(222)
            }else {
                //加入购物车, 其实是要和服务器交互，并在store中管理
                //既然数据都会保持在数据库里，所有的组件都可以通过与服务器交互来操作、查找数据，为什么还要在store中管理？

                //用户操作之后->调用actions方法，在actions中与服务端交互达到操作数据库的目的，再去调用mutations操作store中的数据
                this.$store.dispatch('action_add_good_in_cart', {
                    good_id: this.$route.query.id,
                    price:   this.$route.query.price2, 
                    name:    this.$route.query.productName,
                    num: this.$route.query.status
                })

            }
        }
    },
    created () {
        this.getGoods()
        if ( !this.commons.detail_common_info ) {
            this.$store.dispatch('action_get_detail_common_info')
        }
    }
}
</script>
<style lang="scss" scoped>
.con_sub {
    width: 100%;
    height: 0.45rem;
    line-height: 0.45rem;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    background: #fff;
    text-indent: 0.1rem;
    color: #666;
    bottom:0.52rem;
}
.con_sub span.con_color {
    display: block;
    float: left;
    height: 50%;
    line-height: 30px;
    position: relative;
}
    .cart_che .cart_main {
    height: 50%;
    line-height: 30px;
    position: relative;
}
.cart_che .cart_main font.cart_money {
    position: absolute;
    left: 0px;
    top: 18px;
}
.con_sub a, .con_sub button {
    display: block;
    float: right;
    width: 1rem;
    height: 100%;
    background: #ED0012;
    text-align: center;
    border-radius: 3px 3px 0px 0px;
    font-size: 0.16rem;
    color: #fff;
}
div.int_title {
    width: 100%;
    height: 0.42rem;
    text-align: center;
    line-height: 0.42rem;
    position: relative;
    color: #282828;
    background: #fff;
    a {
    display: block;
    width: 100%;
    font-size: 0.18rem;
    color: #333;
    text-decoration: none;
}

}
.int_title span.int_pic {
    position: absolute;
    top: 0rem;
    left: 0rem;
    width: 4%;
    height: 0.18rem;
    background-position: -0.24rem 0rem;
}
.details_back {
    height: 122% !important;
    background: #f7f7f7;
}
.video {
    width: 100%;
    position: relative;
}
.deta_pic {
    background: #fff;
    margin: 0 auto;
    img {
    border: 0;
    display: block;
    width: 100%;
    vertical-align: middle;
}
}
a.line, .topline {
    position: relative;
}
.deta_pic p.deta_box {
    padding: 5% 10%;
}
.deta_pic p.deta_con {
    padding: 0% 3%;
    font-size: 0.14rem;
    color: #282828;
    text-align: left;
}
.deta_pic div.deta_price {
    height: 0.28rem;
    padding: 0rem 3%;
    margin-top: 0.046rem;
    line-height: 0.28rem;
    span{color:#282828;}
}
.deta_pic div.deta_height {
    height: 0.469rem;
    padding: 0rem 3%;
    margin-bottom: 0.094rem;
    position: relative;
    border-top: 1px solid #ccc;
    color:#282828;
}
.deta_pic div.deta_height span.deta_display {
    line-height: 0.46rem;
}
.fl {
    float: left;
}
p.supp_c_inpt {
    width: 40%;
    float: right;
    // background: #fff;
    // border: 1px solid #c3c3c3;
    border-radius: 2px;
}
.perfor_input {
    width: 1.02rem !important;
    float: left !important;
    margin-left: 0.07rem;
}
p.supp_c_inpt input#plus {
    width: 25%;
    height: 23px;
    border: 1px solid #c3c3c3;
    background: #fff;
}
p.supp_c_inpt input#txt {
    width: 50%;
    height: 23px;
    text-align: center;
    border: 1px solid #c3c3c3;
}
p.supp_c_inpt input#reduce {
    width: 25%;
    height: 23px;
    border: 1px solid #c3c3c3;
    background: #fff;
}
.perform {
    width: 100%;
    position: relative;
}
.fill_name {
    width: 100%;
}
a.line, .topline {
    position: relative;
    ul {
    width: 100%;
    background: #fff;
    overflow: hidden;
    display: flex;
}
}
.fill_name li.name_color {
    color: #ED0012;
    transition: .1s all;
}
.fill_name li.fill {
    width: 50%;
    height: 0.527rem;
    text-align: center;
    line-height: 0.527rem;
    font-size: 0.16rem;
    color: #333;
    position: relative;
}
.fl {
    float: left;
}
li.addr_name:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0px;
    margin-top: -0.2rem;
    width: 1px;
    height: 0.4rem;
    background: #ccc;
}
.price0{
    text-decoration: line-through;
    color: grey;
}
</style>


