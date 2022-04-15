<template>
    <div class="DiaTotal">

        <div class="Tittle">
            <p class="TittleWords">{{title}}</p>
        </div>
        <div class="InputOut">
            <!--//提示，input标签的id,是否展示眼睛复选框，input的type-->
            <div v-for="it in inputs">
                <label :for="it[1]">
                    <input v-model="content[it[4]]"  :type="it[3]" :placeholder="it[0]" :id = "it[1]" class="DiaInput" :name="it[4]">
                    <input type="checkbox" :id = "'eye' + it[1]" style="display: none;">
                    <label :for="'eye' + it[1]" class="eyeCheck" @click="buttonClick($event,it[2])">
                        <img src="../../assets/img/eye.png" class="eyes" :style="'display:'+it[2] " alt="图片">
                    </label>
                </label>
            </div>
            <div v-bind:style="'display:' + display" class="CheDiv">
                <label for = "remember">
                    <input id = "remember" type="checkbox" >
                    <span class="rememberWords" >记住密码</span>
                </label>
            </div>
            <button class="DiaButton" v-on:click="button(this)">
                <span>{{mes}}</span>
            </button>
        </div>

        <a :href="lefthref" class="downLHref">{{leftbutton}}</a>
        <a :href="righthref" class="downRHref">{{rightbutton}}</a>
    </div>
</template>

<script>
    import {ajax} from '../../scripts/request/myRequest';
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Dialog",
        data(){
            return{
                display: "block",
                //提示，input标签的id,是否展示眼睛复选框，input的type,input的name属性
                inputs: [
                    ["请输入账号/学号/手机号","userAccount","none","text","account1"]
                    ,["请输入密码","password","block","password","password1"],

                ],
                title: "账号登录",

                mes: "登 录",
                leftbutton: "注册",
                rightbutton: "忘记密码",
                lefthref: "",
                righthref: "",
                content:{
                    account1:"",
                    password1:""
                } ,
                judge:function (self) {
                    console.log("judge");
                    this.$bus.emit("验证",self.content);
                    self.$router.push('/Test')
                }
            }
        },
        methods:{
            buttonClick(e,status){
                let ImgSrc = e.target.src;
                if(ImgSrc!=require('../../assets/img/eye_close.png') && status != "none"){
                    e.target.src= require('../../assets/img/eye_close.png');
                    e.currentTarget.parentElement.firstElementChild.type="password";
                }
                else if(status != "none"){
                    e.target.src= require('../../assets/img/eye.png');
                    e.currentTarget.parentElement.firstElementChild.type="text";
                }
            },
            change: function(e,index) {
                console.log(e.target.value);//实时获取输入值
                console.log(index);//获取点击输入框的索引
            },
            button(self) {
                let _self=this;
                ajax({
                    url:'/api/auth/oauth/token',
                    params:{
                        grant_type:"password",
                        username: self.content['account1'],
                        password: self.content['password1'],
                        scope:"all",loginFromType:1
                    },
                    success:(response) => {
                        _self.info = response;
                        localStorage.setItem("access_token",response.data.access_token);
                        localStorage.setItem("token_type",response.data.token_type);
                        console.log(response);
                        _self.judge(self);
                    }
                });
            }
        },
        mounted(){
            for (let i = 0; i < this.inputs.length; i++) {
                if (this.inputs[i][3]==="password") {
                    document.getElementsByClassName("DiaInput")[i].parentElement.children[2].firstElementChild.src=require('../../assets/img/eye_close.png')
                }
            }
        }
    }
</script>

<style scoped>
    #Dialog {
        position: absolute;
        top: 10%;
        left: 10%;
        width: 80%;
        height: 80%;

    }
    .downLHref,.downRHref {
        position: absolute;
        top: 85%;
        text-decoration: none;

    }
    .downLHref {
        left: 10%;
    }
    .downRHref {
        right: 10%;
    }

    .eyeCheck {
        position: absolute;
        right: 0;
        width: 30px;
        height: 30px;
    }
    .eyes {
        position: absolute;
        width: 100%;
        height: 100%;
        right:0;
    }
    input[type=checkbox] {
        cursor: pointer;
        position: relative;
        width: 20px;
        height: 20px;
        font-size: 14px;
    }

    input[type=checkbox]::after {
        position: absolute;
        top: 0;
        color: #000;
        width: 20px;
        height: 20px;
        display: inline-block;
        visibility: visible;
        padding-left: 0;
        text-align: center;
        content: ' ';
        border-radius: 3px
    }

    input[type=checkbox]:checked::after {
        content: "✓";
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        background-color: #1890ff;
        width: 20px;
        height: 20px;
    }
    .CheDiv {
        position: absolute;
        top:45%;
    }
    .rememberWords {
        position: relative;
        top:-5px;
    }

    .InputOut {
        position: absolute;
        width: 100%;
        height: 80%;
        top:30%;
    }

    .DiaButton {
        position: absolute;
        top: 60%;
        left: 0;
        width: 100%;
        height: 15%;
        background-color: #1890ff;
        border: none;
        text-align: center;
        font-size: 25px;
        font-weight: 600;
        color: white;
    }
    .DiaButton:hover {
        background-color: #71bbff;
    }
    .DiaButton:active {
        background-color: #0e7ade;
    }
    button p {
        position: relative;
        top: 0;
        font-weight: 500;
        font-size: 24px;
        color: white;
        margin: unset;
        padding: unset;
    }
    .DiaTotal {
        background-color: white;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .DiaInput {

        font-size: 20px;
        color: black;
        margin-bottom: 14%;
        width:95%;
        border-bottom: rgb(222,222,222) solid 2px ;
        border-top: none;
        border-left: none;
        border-right: none;

    }
    .DiaInput::-webkit-input-placeholder {
        color: #c5c6c7;
    }
    .DiaInput:focus, .DiaInput:hover {
        font-size: 20px;
        color: black;
        margin-bottom: 14%;
        width:95%;
        border-bottom: rgb(170,210,255) solid 2px ;
        border-top: none;
        border-left: none;
        border-right: none;
        outline: none;
    }
    .Tittle {
        text-align: center;
        font-size: 32px;
        font-weight: 600;
    }
    .TittleWords {

    }

</style>
