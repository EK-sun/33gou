<template >
    <div class="LL-call">
        <div class="LLcenterCA">
            {{$route.query.id ? $route.query.id : 10163}}
        </div> 
        <div class="bar bar-nav">
            <a @click="$router.go(-1)" class="fa fa-angle-left"></a>
        </div> 
    </div>
</template>

<script type="text/javascript">
    export default {
        name:'LL-call'
    }
</script>

<style type="text/css" lang="scss" scoped>
    .LLcenterCA{
        padding:0.45rem 0 0;
        // background:#f7f7f7;
    }


    .bar{
        height: 0.5rem;
        background:#f7f7f8;
        padding-left: 0.1rem;
        a{
            display:block;line-height: 0.5rem;
            font-size: 0.3rem;
            color:blue;
            text-align:left;
        }
    }
</style>