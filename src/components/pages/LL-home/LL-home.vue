<template >
    <div class="LL-home">
        <LL-header></LL-header>
        <div class="LLcenterH">
            <LLbanner></LLbanner>
            <LLhomenav></LLhomenav>
            <LLhomecontainer></LLhomecontainer>
            <LL-barcode></LL-barcode>
        </div>  
        <LL-footer></LL-footer> 
    </div> 
</template>

<script type="text/javascript">
    import LLbanner from './LL-banner'
    import LLhomenav from './LL-home-nav'
    import LLhomecontainer from './LL-home-container'
    export default {
        name:'LL-home',
        components:{
            LLbanner,
            LLhomenav,
            LLhomecontainer
        }
    }
</script>

<style lang="scss" scoped>
    // .LL-home{
    //     height: 100%;display:flex;
    //     flex-direction: column;
    //     .LLcenter{
    //         flex:1;overflow-x:hidden;
    //     }
    // }
    // .header-home{
    //     height:0.45rem;
    // }
    // .footer-home{
    //     height:0.52rem;
    // }

    .LLcenterH{
        padding:0.45rem 0 0;
        // background:#f7f7f7;
    }
</style>