<template>
    <div class="not-found">
       <div class="bar bar-nav">
            <a @click="back" class="fa fa-angle-left"></a>
        </div>

        <div class="content">
            <h4>访问的页面不存在 <router-link to="/">回到首页</router-link> </h4>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app-not-found',
    methods: {
        back () {
            //返回， 编程式导航
           this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
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
    .content{
        h4{
            line-height: 2rem;
            font-size: 0.18rem;
            color: #2c3e50;
            font-weight: 800;
            a{
                font-size: 0.18rem;
                color:blue;
                font-weight: 800;
            }
        }
    }
</style>


