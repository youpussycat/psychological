<template >
    <div id="searchContext">
        <div class="SearchUnit" v-for="_label in labelList">
            <span class="SearchText" :style="`
                margin-left:${_label.left}px;
                margin-right:${_label.segment}px;
            `">{{_label.tip}}</span>
            <label class="SearchInput" :style="`
                width:${_label.input.width ? _label.input.width+'px' : 'auto'};
                ${_label.input.type=='select' ? 'border:0;background:#0000':''};
            `">

                <input  :name="_label.name" v-if="!_label.input.type || _label.input.type=='text'"
                        :placeholder="_label.input.value"
                >
                <select :name="_label.name" v-if="_label.input.type=='select'">
                    <option v-for="_opt in _label.input.value">{{_opt}}</option>
                </select>
                <input  :name="_label.name" v-if="!_label.input.type || _label.input.type=='date'"
                        :placeholder="_label.input.value"
                >
            </label>
            <label v-if="_label.input.type==='date'">
                <input  :name="_label.name" v-if="!_label.input.type || _label.input.type=='date'"
                        :placeholder="_label.input.value"
                >
            </label>
        </div>
        <button id="searchBtn" class="SubmitButton" @click="searchButton"
                :style="`margin-left:${buttonLeft}px;`">查询</button>
        <button id="resetBtn" class="SubmitButton">重置</button>
    </div>
</template>

<script>
    export default {
        name: 'SearchBar',
        methods:{
            searchButton(){
                let _data={},inputList=document.querySelectorAll("input[name],select[name]");
                for(let _input of inputList){
                    _data[_input.name]=_input.value;
                }
                console.log("emit 搜索",_data);
                this.$bus.emit("搜索",_data);
            },
            loadLabel(_event,_label){
                let _elem=_event.target;
                console.log(this,_label);
            }
        },
        data () {
            return {
                labelList:[
                    //left为数据项的左侧宽度，segment为文字与输入框间的距离
                    //buttonLeft是数据项与搜索按钮的距离
                    //input的type有select和text，text可默认不写
                    //value为默认值或选项，为选项时数据类型为字符串数组，默认选项为选项值的第一个
                    //tip为input前面文字说明。
                    //input内部的width为input的宽度
                    {

                        left:0,segment:14,
                        name:"belongTo",tip:"所属页面",
                        input:{type:"select",value:[
                            "首页","政策文件","通知公告","报考指南","师资风采","培训纪实","下载中心",
                        ]}
                    },{
                        left:79,segment:25,
                        name:"imgName",tip:"图片名称",
                        input:{value:"单行输入"}//默认type:"text",
                    },{
                        left:122,segment:8,
                        name:"status",tip:"状态",
                        input:{type:"select",value:["启用","禁用"],width:91}
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
        height: 30px;
    }
    .SearchText{
        font-size: 14px;
        display: inline;
    }
    .SearchInput{
        height: 30px;
        border: 1px solid rgba(187, 187, 187, 100);
        color: #888;
        padding-left: 6px;
        background: #FFF;
        display: inline-block;
    }


    .SubmitButton{
        width: 98px;height:40px;
        border: 1px solid rgba(56, 148, 255, 100);
        border-radius: 3px;
        text-align: center;
        font-size: 14px;
        line-height: 20px;
        margin-top: 30px;
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
        width: inherit;height: inherit;
        display: inline;
    }
    select{
        height: inherit;
    }
    button:hover {opacity: 0.8;outline: none;}
    button       {opacity: 1;  outline: none;}
    button:active{opacity: 0.5;outline: none;}
</style>
