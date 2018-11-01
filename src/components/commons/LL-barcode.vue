<template>
    <div class="LL-barcode">
        <div class="barcode">
            <h3>新西兰TV33电视台旗下平台</h3>
            <div class="barcode-1">
                <img src="http://www.33go.com.cn/static/templates/mobile/images/tv33-qr-code.png" alt="" />
                <p>TV33微信公众号</p>
            </div>
            <div class="barcode-2">
                <img src="http://www.33go.com.cn/static/templates/mobile/images/33go-qr-code.png" alt="" />
                <p>33微信服务号</p>
            </div>
        </div>
        <div class="copyright">
            Copyright © 2018.TV33 All rights reserved.
        </div>
        <div class="contact-us">
            新西兰热线：64-9-5282250       
        </div>
    </div>
</template>

<script type="text/javascript">
    
    export default {
        name:'LL-barcode'
    } 

</script>

<style type="text/css" lang="scss" scoped>
    .LL-barcode{
        background: #f7f7f7;
        padding: 0.3rem 0 0.9rem;
        text-align: center;
        .barcode{
            padding: 0.2rem 0.5rem;
            color: #666666;
            h3{
                font-weight: 600;
            }
            img{
                border: 0;
                display: block;
                width: 100%;
                vertical-align: middle;
            }
        }
        .contact-us{
            margin-bottom: 0.2rem;
        }
    }
</style>