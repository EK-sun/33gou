<template>

    <div class="car">
        <!-- <p v-if = "!commons.user_state"> 请 <router-link :to="{name: 'login-register'}">登录</router-link>后查看 </p>
        <div v-else>
            <p v-if = "!cart.goods.length">购物车空空如也，快去 <router-link :to = "{name: 'LL-home'}">挑选</router-link> 想要的商品的</p> -->
            <!-- <div v-else> -->
                <div class="car_goods">
                    <div class="s_title">
                        <h2 class="s_t_width">购物车</h2>
                    </div>
                    <div class="supplier clearfix">
                        <h2 class="supp_title">
                            <i class="far fa-trash-alt"></i>
                        </h2>
                        <dl class="supp_main clearfix">
                            <dt class="supp_pic_t">
                                <a href="/m/category/product/detail?productId=10175"><img :src="'http://www.33go.com.cn/'+commons.defaultSrc"></a>
                            </dt>
                            <dd class="supp_con">
                                <span class="supp_c_txt">{{ commons.productName }}</span>
                                <span class="supp_c_money " style="color: red;">价格: $&nbsp;{{ commons.price2 }} </span>
                                <span class="supp_c_money">库存: {{ commons.stock }} </span>
                                <div class="supp_c_price clearfix">
                                    <p class="supp_c_inpt"><input type="button" value="-" id="plus"><input type="text" id="txt" :value="commons.status"><input type="button" value="+" id="reduce">
                                    </p>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div class="con_sub cart_che clearfix">
                    <span class="con_color cart_main fl" style="color: red;">合计:<font>{{all_num_and_price.all_price}};</font><font class="cart_money">(免运费)</font>
                    </span><a href="javascript:;" class="con_ti fr">确认提交</a>
                </div>
            <!-- </div> -->
        <LL-footer></LL-footer>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
   name: 'app-cart',
    computed: {
        ...mapState(['commons', 'cart']),
        ...mapGetters(['all_num_and_price'])
    },
    methods: {
        reduce (good_id) {
            this.$store.dispatch('action_reduce_good_from_cart', { good_id })
        },
        add (good_id) {
            this.$store.dispatch('action_add_good_in_cart', {
                good_id
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .s_title {
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    .s_t_width {
    display: block;
    height: 0.4rem;
    width: 100%;
    float: left;
    font-family: inherit;
    font-weight: 500;
    line-height: 0.4rem;
}
}
.supplier h2.supp_title {
    height: 0.45rem;
    line-height: 45rem;
    font-size: 0.7rem;
    padding: 0 0.1rem;
}
.fa-trash-alt {
    font-size: 0.18rem;
    margin-top: 0.12rem;
    background-position: -1.36rem -1.28rem;
    float: right;
}
.supp_main{
    a {
    display: block;
    width: 100%;
    color: #333;
    text-decoration: none;
}
    img{width: 1.3rem;
    height: 1.3rem;
    }
}
.supplier dl.supp_main dt.supp_pic_t {
    width: 40%;
    padding: 0px 10px 10px 10px;
    float: left;
}
.supplier dl.supp_main dd.supp_con {
    width: 60%;
    float: right;
    margin-top: 10px;
    padding-right: 10px;
    text-align: left;
}
.supplier dl.supp_main dd.supp_con span.supp_c_txt {
    height: 30px;
    line-height: 0.25rem;
    font-size: 0.14rem;
}
.supplier dl.supp_main dd.supp_con span.supp_c_money {
    display: block;
    line-height: 32px;
    font-size: 0.12rem;
}
.supplier dl.supp_main dd.supp_con span.supp_c_money {
    display: block;
    line-height: 32px;
    font-size: 0.12rem;
}
p.supp_c_inpt {
    width: 40%;
    float: right;
    border-radius: 2px;
}
p.supp_c_inpt input#plus {
    width: 25%;
    height: 23px;
    border: 1px solid #ccc;
    
    background: #fff;
}
p.supp_c_inpt input#txt {
    width: 50%;
    height: 23px;
    text-align: center;
    border: 1px solid #ccc;
}
p.supp_c_inpt input#reduce {
    width: 25%;
    height: 23px;
    border: 1px solid #ccc;
    
    background: #fff;
}
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
    width: 0.9rem;
    height: 100%;
    background: #ED0012;
    text-align: center;
    border-radius: 3px 3px 0px 0px;
    font-size: 0.16rem;
    color: #fff;
}
</style>


