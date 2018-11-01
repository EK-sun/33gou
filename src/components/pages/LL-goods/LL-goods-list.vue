<template >
    <div class="LL-goods-list">
        <div class="LL-goods-listAll">
            <dl  v-for="goods in goodsAll" :key="goods.id">
                <dt>
                    <img :src="goods.defaultSrc | formatImage('gang')" alt="" />
                </dt>
                <dd>
                    <span class="span_a">{{ goods.productName }}</span>
                    <div>
                        <font class="p_font" v-if="goods.price2">
                            促销价:<span class="span_b">${{goods.price2 ? goods.price2 :goods.price1}}.00</span>
                        </font> 
                        <font class="p_font" v-else>
                            热销价:<span class="span_b">${{goods.price2 ? goods.price2 :goods.price1}}.00</span>
                        </font> 
                        <font class="p_font you" v-if="goods.price2">
                            市场价:<del>${{goods.price1}}.00</del>
                        </font> 
                        <font class="p_font">约折合人民币:￥{{goods.price2 ? (goods.price2 * 4.6209).toFixed(2) : (goods.price1 * 4.6209).toFixed(2)}}
                        </font>
                    </div>
                    <a class="a_b">加入购物车</a>
                    <router-link class="a_a" :to="{name:'call', query:{ id: goods.id}}" >点击查看</router-link>
                    
                </dd>
            </dl>
        </div>
    </div>
</template>

<script type="text/javascript">
    // export default {
    //     name:'LL-goods-list',
    //     data(){
    //         return{
    //             goodsAll:[]
    //         }
    //     },
    //     methods:{
            
    //         getGoods(){
    //             let id = this.$route.query.id ? this.$route.query.id : 169
    //             this.$http.get(this.server_config+'/category/api/product/list?categoryId='+id +'&page=1&sortBy=position').then(res=>{
    //                 this.goodsAll = res.data.content   
    //             })            
    //         }
    //     },
    //     mounted(){
    //         this.getGoods()
    //     }
    // }
    

    export default{
        data(){
            return {
                goodsAll : []
            }
        },
        mounted(){
            // 缓存指针
            let _this = this;
            // 设置一个开关来避免重负请求数据
            let sw = true;
            let pag = 1
            let id = _this.$route.query.id ? _this.$route.query.id : 169
            
            // 此处使用node做了代理
            _this.$http.get(this.server_config+'/category/api/product/list?categoryId='+id +'&page=1&sortBy=position')
                .then(res=>{
                    // console.log(JSON.parse(response.data).stories);
                    // 将得到的数据放到vue中的data
                    // console.log(res)
                         
                    _this.goodsAll = res.data.content
                })

            window.addEventListener('scroll',function(){
                // console.log(document.documentElement.clientHeight+'-----------'+window.innerHeight); // 可视区域高度
                // console.log(document.body.scrollTop); // 滚动高度
                // console.log(document.body.offsetHeight); // 文档高度
                // 判断是否滚动到底部
                
                if(window.scrollY + window.innerHeight >=document.body.offsetHeight) {
                    // console.log(sw);
                    // 如果开关打开则加载数据
                    
                    if(sw===true){
                        // 将开关关闭
                        sw = false;
                        pag+=1
                       
                        // console.log(sw,pag);
                        _this.$http.get(this.server_config+'/category/api/product/list?categoryId='+id +'&page='+ pag +'&sortBy=position')
                            .then(res=>{
                                // console.log(res);
                                // 将新获取的数据push到vue中的data，就会反应到视图中了
                                res.data.content.forEach(val=>{
                                    _this.goodsAll.push(val);
                                    // console.log(val);
                                });
                                // 数据更新完毕，将开关打开
                                
                                sw = true;
                            })
                    }
                }
            })



        }
    }  
    
</script>

<style type="text/css" lang="scss" scoped>
    .LL-goods-list{
        margin-top: 0.5rem;
        width: 100%;
        .LL-goods-listAll{
            dl{
                width: 100%;
                padding: 0.187rem 0.1rem;
                overflow: hidden;
                background: #ffffff;
                dt{
                    width: 0.93rem;
                    height: 1.2rem;
                    float: left;
                    img{
                        border: 0;
                        display: block;
                        width: 100%;
                        vertical-align: middle;
                    }
                }
                dd{
                    width: 2.5rem;
                    height: 1.4rem;
                    float:right;
                    .span_a{
                        height: 0.42rem;
                        word-break: break-all;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        text-align: justify;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        font-size: 0.16rem;
                        line-height: 0.2rem;
                        font-weight: 550;
                    }
                    div{
                        height: 0.46rem;
                        position:relative;
                        font{
                            font-size: 0.15rem;
                            color: #666;
                            height: 0.23rem;
                            line-height: 0.23rem;
                            display: block;
                            text-align: left;
                        }
                        .you{
                            position:absolute;
                           right:0;
                           top:0;
                        }
                        .span_b{
                            font-size: 0.16rem;
                            font-weight: 600;
                            color: #ff6868;

                        }
                    }
                    .a_a,.a_b{
                        display:block;
                        width: 0.95rem;
                        height: 0.35rem;
                        margin-top: 0.18rem;
                        margin-left: 0.1rem;
                        position: relative;
                        text-align: center;
                        font-size: 0.14rem;
                        color: #ff6868;
                        line-height: 0.35rem;
                        border:1px solid #b98f8f;
                        border-radius:0.03rem ;
                        float: right;
            
                    }
                }
            }
        }
    }
</style>