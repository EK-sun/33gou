<template >
    <div class="LL-home-nav">
        <div class="LL-yuan">
            <img src="http://www.33go.com.cn/attachment/article/2018-04-12/Rectangle 10@2x.png" alt="" />
        </div>
        <div class="nav-lan">
            <ul>
                <li v-for="nav in navs" :key="nav.id">
                    <img :src="'/'+ nav.imgurl | formatImage " alt="" />
                    <span>{{ nav.title }}</span>
                </li>
            </ul>
        </div>
    </div>
    <!-- 'http://www.33go.com.cn' -->
</template>

<script type="text/javascript">

    export default {
        name:'LL-home-nav',
        data(){
            return{
                navs:[
                    { id: 1, title: '全部商品', imgurl: '/static/templates/mobile/images/new/img-categroy-ico@2x.png'},
                    { id: 2, title: '订单', imgurl: '/static/templates/mobile/images/new/img-order-ico@2x.png'},
                    { id: 3, title: '浏览历史', imgurl: '/static/templates/mobile/images/new/img-history-ico@2x.png'},
                    { id: 4, title: '分类', imgurl: '/static/templates/mobile/images/new/img-notification-ico@2x.png'}
                ]
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    .LL-yuan{
        width: 100%;
        padding-top: 10px;
        img{
            display: block;
            width: 100%;
            vertical-align: middle;
        }
    }
    .nav-lan{
        ul{
            width: 100%;
            padding-top: 0px;
            text-align: center;
            padding-bottom: 0px;
            display:flex;
            flex-wrap: wrap;
            li{
                text-align: center;
                padding-bottom: 0.1rem;
                line-height: 0.2rem;
                color: #838282;
                padding-top: 0.1rem;
                width: 25%;
                img{
                    width: 0.52rem;
                    height: 0.52rem;
                    margin: 0 auto 0.06rem;
                }
                span{

                }
            }
        }
        
     
        
    }
</style>