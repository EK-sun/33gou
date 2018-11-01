<template >
    <div class="LL-classify-left ">
        <div class="integ_left fl">
            <ul>
                <li @click = "[hit(ifyL.id),fffindex=i]"  v-for="(ifyL, i) in classifyL" :key="ifyL.id" :id="ifyL.id"  :class="{fff:(fffindex === i)}">
                    {{ifyL.nameAlias}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name:'LL-classify-left',
        data() {
            return {
                classifyL: [],
                fffindex:0
            }
        },
        methods:{
            getClassLeft () {
                this.$http.get(this.server_config+'/category/api/level/?level=1').then(res=>{
                         
                    this.classifyL =res.data
                })
            },
             hit (num) {
                this.$parent.$refs.ls.getId(num)
            }
        },
        mounted () {
            this.getClassLeft ()
        }
    }
</script>

<style type="text/css" lang="scss" scoped>
    .integ_left{
        width: 23%;

        li{
            position: relative;
            width: 100%;
            height: 0.4rem;
            text-align: center;
            line-height: 0.4rem;
            background: #f7f7f7;
            color: #282828;
            font-size: 0.13rem;
            border-right:1px solid #ccc;
        }
        .fff{
            background:#fff;border-right:none;
        }
    }
    
</style>