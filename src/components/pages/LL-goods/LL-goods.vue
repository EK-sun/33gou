<template >
    <div class="LL-goods">
        <LL-header></LL-header>
        <div class="LLcenterG">
            <div class="bar bar-nav">
                <a @click="$router.go(-1)" class="fa fa-angle-left"><span>返回</span> </a>
                <span class="span_bb">{{$route.query.name ? $route.query.name :"蜂产品"}}</span>
            </div>
            <LLGoodsList></LLGoodsList>
            <!-- <LL-barcode></LL-barcode>   -->
        </div>
        <LL-footer></LL-footer> 
    </div>
</template>

<script type="text/javascript">
    import LLGoodsList from './LL-goods-list'
    export default {
        name:'LL-goods',
        components:{
            LLGoodsList
        }
    }
</script>

<style type="text/css" lang="scss" scoped>
   .LLcenterG{
        padding:0.45rem 0 0;
    }
    .bar{
        z-index:5;
        position:fixed;
        top:0.45rem;
        height: 0.49rem;
        border-bottom:1px solid #f3e8e8;
        background:#FFF;
        width: 100%;
        padding-left: 0.1rem;
        a{
            display:block;line-height: 0.5rem;
            font-size: 0.3rem;
            color:#7676bd;
            text-align:left;
            height: 0.5rem;
            width: 0.55rem;
            float: left;
            span{
                display:block;
                height: 0.3rem;
                line-height:0.3rem;
                font-size: 0.18rem;
                float:right;
                padding-top: 0.12rem;
            }
        }
        .span_bb{
            display:block;
            height: 0.3rem;
            line-height:0.3rem;
            font-size: 0.18rem;
            float:right;
            padding-top: 0.12rem;
            width: 2.6rem;
            text-align:left;
            font-weight: 600;
        }

    }
</style>