<template>
    <div class="LL-home-container">
        <div class="home-h2">
            <h2 >本周特惠</h2>
        </div>
        <div class="home-goods">
            <ul>
                <router-link :to="{name:'call', query:{ id: good.id}}" tag="li" v-for="good in goods" :key="good.id">
                    <img :src="good.defaultSrc | formatImage('gang')" alt="" />
                    <h3>{{good.productName}}</h3>
                    <p>$ {{good.price1}}.00</p>
                </router-link>
            </ul>
        </div>


        <div class="home-h2">
            <h2 >热销产品</h2>
        </div>
        <div class="home-products">
            <ul>
                <router-link :to="{name:'call', query:{ id: good.id}}" tag="li" v-for="good in products" :key="good.id">
                    <img :src="good.defaultSrc | formatImage('gang')" alt="" />
                    <h3>{{good.productName}}</h3>
                    <p v-if="good.price2%1 > 0" >$ {{good.price2}}</p>
                    <p v-else>$ {{good.price2?good.price2:good.price1}}.00</p>
                    <div v-if="good.price2 > 0 "> <del>$ {{good.price1}}.00</del></div>
                </router-link>
            </ul>
        </div>
    </div>

</template>

<script type="text/javascript">
    export default {
        name:'LL-home-container',
        data () {
            return{
                goods:[],
                products:[]
            }
        },
        methods:{
            getGoods (){
                this.$http.get(this.server_config+'/api/index/product/list/hot?size=5&sortBy=position').then(res=>{
                        this.goods = res.data.content      
                })
            },
            getProducts (){
                this.$http.get(this.server_config+'/api/index/product/list/recommend?size=20&sortBy=position').then(res=>{          
                        this.products = res.data.content      
                })
            }
        },
        created (){
            this.getGoods(),
            this.getProducts()
        }
    }
</script>

<style lang="scss" scoped>
    .LL-home-container{
       .home-h2{
            height: 0.26rem;
            background: #f7f7f7;
            position: relative;
            width: 100%;
            h2{
                background: url(http://www.33go.com.cn/static/templates/mobile/images/new/bg-categroy-tag@2x.png) no-repeat;
                background-size: cover;
                color: #fff;
                font-size: 0.16rem;
                font-weight: 600;
                width: 0.93rem;
                height: 0.33rem;
                line-height: 0.33rem;
                text-align: center;
                position: absolute;
                top: 0.16rem;
            }
       }
       .home-goods,.home-products{
            ul{
                display:flex;
                flex-wrap: wrap;
                li{
                    width: 33.3%;
                    height: 1.36rem;
                    border-bottom: 1px solid #eee;
                    border-right: 1px solid #eee;
                    padding: 0 8px;
                    img{
                        display: block;
                        width: 0.54rem;
                        height: 0.54rem;
                        margin: 0.15rem auto 0.05rem;
                    }
                    h3,p,div{
                        font-size: 0.12rem;
                        line-height: 0.18rem;
                        color: #999999;
                        word-break: break-all;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        text-align: left;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        
                    }
                    p,div{
                        font-size: 0.13rem;
                        line-height: 0.22rem;
                        font-weight: 600;
                        color: #333333;
                        width:50%;
                        float: left;
                    }
                    div{
                        float:right;
                        color:#999;
                         font-weight: 100;
                    }
                   
                }

            }
            ul li:first-child{
                width: 66.6%;
                img{
                    width: 1rem;
                    height:1rem;
                    float: right;
                    padding: 0 6px;
                }
                h3{
                    width: 48%;
                    margin-top: 0.6rem;
                }
            }
       }
    }
</style>     