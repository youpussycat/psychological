<template >
    <div id="searchContext">
        <div class="SearchUnit" v-for="_label in labelList">
            <span class="SearchText" :style="`
                margin-left:${_label.left}px;
                margin-right:${_label.segment}px;
            `">{{_label.name}}</span>
            <label class="SearchInput" :style="`
                width:${_label.input.width ? _label.input.width+'px' : 'auto'}
            `"><input></label>
        </div>
        <button id="searchBtn" class="SubmitButton" :style="`margin-left:${buttonLeft}px;`">查询</button>
        <button id="resetBtn" class="SubmitButton">重置{{}}</button>
    </div>
</template>

<script>
    export default {
        name: 'SearchBar',
        methods:{
            searchButton(){
                console.log("emit 搜索");
                this.$bus.emit("搜索",{
                    data:"?",
                });
            },
            loadLabel(_event,_label){
                let _elem=_event.target;
                console.log(this,_label);
            }
        },
        data () {
            return {
                labelList:[
                    {
                        left:0,segment:14,
                        name:"所属页面",
                        input:{type:"selector",value:[
                            "首页","政策文件","通知公告","报考指南","师资风采","培训纪实","下载中心",
                        ]}
                    },{
                        left:79,segment:25,
                        name:"图片名称",
                        input:{type:"text",value:"单行输入"}
                    },{
                        left:122,segment:8,
                        name:"状态",
                        input:{type:"selector",value:["启用","禁用"],width:91}
                    }
                ],
                buttonLeft:93,
                //我发现所有页面查询按钮全是基本完全相同,只是可能左侧距离不同
            }
        }
    }
</script>

<style scoped>
    #searchContext{
        width: 1610px;height:100px;
        background: #EEE;
        border: 1px solid #BBB;
        padding-left: 34px;
    }
    .SearchUnit{
        display: inline;
        position: relative;
        top: 35px;
        height: 30px;
    }
    .SearchText{
        font-size: 14px;
    }
    .SearchInput{
        height: 30px;
        border: 1px solid rgba(187, 187, 187, 100);
    }


    .SubmitButton{
        width: 98px;height:40px;
        border: 1px solid rgba(56, 148, 255, 100);
        border-radius: 3px;
        text-align: center;
        font-size: 14px;
        line-height: 20px;
    }
    #searchBtn{
        color: rgba(255, 255, 255, 100);
        background-color: rgba(56, 148, 255, 100);
    }
    #resetBtn{
        background-color: rgba(255, 255, 255, 100);
        color: rgba(16, 16, 16, 100);
        margin-left:32px;
    }
    /*@import url("../../../assets/vendor/css/bootstrap.min.css");*/
    /*@import url("../../../assets/vendor/css/font-awesome.min.css");*/
    /*@import url("../../../assets/vendor/css/ace.min.css");*/
    input , input:focus{
        border: 0;
        background: transparent;
        outline: transparent;
        width: inherit;
    }
</style>
