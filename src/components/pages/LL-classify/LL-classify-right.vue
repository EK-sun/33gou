<template >
    <div class="LL-classify-right">
       <div class="integ_fight fr">
           <ul>
               <router-link :to="{name:'goods',query:{id:ifyR.id,name:ifyR.name}}" tag="li" v-for="ifyR in classifyR" :key="ifyR.id">
                   <a >
                       <img :src="ifyR.defaultSrc | formatImage" alt="" />
                       <span>{{ifyR.nameAlias}}</span>
                   </a>
               </router-link>
           </ul>
       </div>
    </div>
</template>

<script type="text/javascript">
   
    export default {
        name:'LL-classify-right',
        data () {
            return {
                numId:166,
                classifyR:[],       
            }
        },
        methods:{
            getId (num) {
                this.numId = num
            },
            getClassRight () {
                this.$http.get(this.server_config+'/category/api/getbyfartherid?fatherId='+this.numId).then(res=>{
                         
                    this.classifyR = res.data
                })
            }
           
        },
        watch:{
            numId:{
                deep:true,
                handler(){
                    this.getClassRight ()
                }
            }
        },
        created(){
            this.getClassRight ()
        }
    }
</script>

<style type="text/css" lang="scss" scoped>
    .LL-classify-right{
        height:100%;
        min-height: 6rem;
    }
   .integ_fight{
        width: 77%;
        height:100%;
        ul{
            width: 100%;
            padding: 0 2% 15% 1%;
            background: #fff;
            overflow: hidden;
            min-height: 6rem;
            li{
                padding: 4%;
                width: 33.3%;
                text-align: center;
                float: left;
                img{
                    display: block;
                    width: 100%;
                    vertical-align: middle;
                }
                span{
                    color: #666;
                    font-size: 0.14rem;
                }
            }
        }
   }
</style>