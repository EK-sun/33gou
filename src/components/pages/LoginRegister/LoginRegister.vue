<template>
    <div class="login-register">
        <header class="bar bar-nav">
            <a @click="$router.go(-1)" class="icon icon-left pull-left"></a>
        </header>
        <div class="content">
            <div class="buttons-tab">
                <router-link replace active-class="active" :to="{ name: 'login' }" class="tab-link button">登陆</router-link>
                <router-link replace active-class="active" :to="{ name: 'register' }" class="tab-link button">注册</router-link>
            </div>
            <LL-footer></LL-footer>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app-login-register'
}
</script>
<style lang="scss" scoped>
    .buttons-tab{
        height: 0.4rem;line-height: 0.4rem; display: flex;
        justify-content: space-between;
    }
    .tab-link{
        width: 50%;font-size: 0.16rem;border:1px solid #fbfbfb;
    }
</style>


