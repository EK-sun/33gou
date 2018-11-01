<template>
    <div id="search" class="search-wrap">
        <header>
            <div class="logo-wrap"><a><img alt="" src="http://www.33go.com.cn/static/templates/mobile/images/new/img-logo@2x.png"></a></div> 
            <div class="search-bar"><form action="/m/category/product/q"><button type="submit" class="search-submit"></button> <input type="text" name="q" maxlength="30" required="required" placeholder="搜索"></form></div>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'LL-header'
    }
</script>

<style scoped lang = "scss">
    #search{
        background: url(http://www.33go.com.cn/static/templates/mobile/images/new/bg-header@2x.png) no-repeat;
        background-position: 0 -0.45rem;
        background-size: cover;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        margin: auto;
        width: 100%;
        max-width: 6.4rem;
        min-width: 3rem;
        height: 0.45rem;
        z-index: 1001;
        header{
            position: relative;
            width: 100%;
            height: 100%;
            .logo-wrap {
                position: absolute;
                left: 7px;
                top: 7px;
                width: 0.71rem;
                height: 0.3rem;
                a{
                    display: block;
                    width: 100%;
                    color: #333;
                    text-decoration: none;
                    img{
                        display: block;
                        width: 0.71rem;
                        height: 0.3rem;
                    }
                }
            }
             .search-bar {
                width: 100%;
                height: 100%;
                padding-left: 0.85rem;
                padding-right: 0.12rem;
                form{
                    display: inline-block;
                    width: 100%;
                    height: 0.32rem;
                    border-radius: 5px;
                    margin-top: 5px;
                    overflow: hidden;
                    border: none;
                    background-color: rgba(255,255,255,0.2);
                    .search-submit{
                        width: 0.18rem;
                        height: 0.18rem;
                        display: inline-block;
                        margin: 0 8px;
                        vertical-align: middle;
                        background: url(http://www.33go.com.cn/static/templates/mobile/images/new/bg-search-btn@2x.png) no-repeat;
                        background-size: cover;
                    }
                    input{
                        color: #fff;
                        width: 85%;
                        height: 100%;
                        line-height: 0.32rem;
                        display: inline-block;
                        background: none;
                        padding-left: 3%;
                    }
                }
            }
            
        }
    }
</style>