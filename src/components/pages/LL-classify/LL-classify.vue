<template >
    <div class="LL-classify">
        <LL-header></LL-header>
        <div class="LLcenterC">
            <LLclassifyleft></LLclassifyleft>
            <LLclassifyright ref="ls"></LLclassifyright>
            <LL-barcode></LL-barcode>
        </div>  
        <LL-footer></LL-footer> 
    </div>
</template>

<script type="text/javascript">

    import LLclassifyleft from './LL-classify-left'
    import LLclassifyright from './LL-classify-right'

    export default {
        name:'LL-classify',
        components:{
            LLclassifyleft,
            LLclassifyright
        }
    }
</script>

<style type="text/css" lang="scss" scoped>
    .LLcenterC{
       padding:0.45rem 0 0;
        background:#f7f7f7;
        width: 100%;
        min-height: 6rem;
    }
</style>