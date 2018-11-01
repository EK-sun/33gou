<template >
    <div ref = "el" class="LL-banner swiper-container" >
        <div class="swiper-wrapper">
            <div class="swiper-slide " v-for="gogo in 2">
                <img src="http://www.33go.com.cn/attachment/img/2018-04-12/7/banner.png" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="LL-yuanbian"></div>
  </div>
</template>

<script type="text/javascript">
    import Vue from 'vue'
    import Swiper from 'swiper'

    export default {
        name:'LL-banner',
        
        methods:{
            getBanners () {
                Vue.nextTick(() => {
                    new Swiper(this.$refs.el, {
                        centeredSlides: true,
                        autoplay: {
                            delay: 2500,
                            disableOnInteraction: false,
                        },
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }
                    })
                })
            }   
        },
        created () {
            this.getBanners()
        }
    }
</script>

<style type="text/css" lang="scss" scoped>
   .LL-banner{
        position:relative;
        // margin-top:0.45rem;
   }
    .swiper-slide {
        img {width: 3.75rem; height: 1.50rem;}
    }
   .LL-yuanbian{
        background: #ffffff;
        width: 100%;
        height: 8px;
        border-radius: 8px 8px 0 0;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index:2;
   }
</style>