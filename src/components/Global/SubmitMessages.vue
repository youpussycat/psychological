<template>
    <div id="context">
        <div id="complaintFeedbackContext">
            <div id="header">
                <p id="headerText">{{headerText}}</p>
                <p id="headerTip">{{headerTip}}</p>
            </div>
        </div>
        <div id="buttonsContext">
            <div v-for="btn in buttonsList" class="btnContext">
                <button class="buttonUnit" @click="changeChoice" data-active="false">{{btn}}</button>
            </div>
        </div>
        <div id="textAreaContext" style="font-size: 16px;">
            <p id="textTip">{{textTip}}</p>
            <textarea @keyup="textAreaChange"></textarea>
            <span id="placeHolder">{{textHolder}}</span>
            <span id="placeHolder_">*</span>
            <span id="textNow">{{textCount}}</span><p id="textLimit">/500</p>
        </div>
        <div id="pictureContext">
            <p id="pictureHead">{{pictureHead}}</p>
            <picture-wall></picture-wall>
            <p style="font-size: 14px;color: #666">文件小于5M, 支持JPG/PNG/BMP等格式图片,最多可以上传5张图片</p>
        </div>
        <div id="contact">
            <p id="contactHead">{{contactHead}}</p>
            <label for="contactInput"><input id="contactInput"></label>
            <span id="contactHolder">{{contactHolder}}</span>
        </div>
        <button id="submit">{{submitText}}</button>
    </div>
</template>

<script>
    import PictureWall from "@/components/Global/PictureWall";
    export default {
        name: "SubmitMessages",
        data() {
            return {
                headerText:"意见反馈",headerTip:"/ Complaint Feedback",
                buttonsList:[
                    "登陆注册","内容建议","平台建议","技术建议","其他问题或建议"
                ],
                textTip:"填写您的建议:",
                textHolder:"请填写具体内容帮助我们了解您的意见或建议",
                textCount:0,
                pictureHead:"上传相关照片:",
                contactHead:"联系方式:",
                contactHolder:"请留下您的真实联系方式(邮箱、QQ), 以便我们答疑解惑",
                submitText:"提交",
            }
        },
        methods: {
            changeChoice(mouseEv){
                for(let _e of document.getElementsByClassName("buttonUnit")){
                    _e.dataset.active="false";
                }
                let _elem=mouseEv.target;
                _elem.dataset.active="true";
            },
            textAreaChange(ev){
                let _elem=ev.target;
                if(_elem.value.length>500){
                    _elem.value.length=_elem.value.slice(0,500)
                }
                this.textCount=_elem.value.length;
                document.getElementById("placeHolder").style.display="none";
                document.getElementById("placeHolder_").style.display="none";
            }
        },
        mounted(){
        },
        components:{
            PictureWall,
        }
    }
</script>

<style scoped>
    #complaintFeedbackContext{
        height: 32px;
        border-bottom: 1px solid #F0F0F0;;
    }
    p{
        display: inline;
        font-size: 16px
    }
    #header{width: 235px;height: 22px;}
    #headerText{color: #053679;}
    #headerTip {color: #E6E6E6;position: relative;left:5px;}

    #buttonsContext{
        width: 921px;
        margin-bottom: 31px;
        margin-top:19px;
    }
    .btnContext{
        width: 148px;
        height: 40px;
        display: table-cell;
    }
    .buttonUnit{
        background-color: #F0F3F8;
        border-style: none;

        width: 128px;
        height: 40px;
    }
    .buttonUnit[data-active=true]{
        border: 1px solid #084278;
        background: #FFF;
    }
    #textAreaContext{
        width: 920px;
        height: 132px;
        position: relative;
        margin-bottom: 33px;
    }
    textarea{
        width: 920px;
        height: 100px;
        resize: none;
        background: #FAFAFA;
        border: 1px solid #E9E9E9;
        padding: 7px;
        font-size: 14px;
    }
    #placeHolder{
        position: absolute;
        left:27px;
        top:33px;
        font-size: 13px;
        color: #CCC;
    }
    #placeHolder_{
        position: absolute;
        left:15px;
        top:33px;
        font-size: 13px;
        color: #CF0814;
    }
    #textLimit{
        position: absolute;
        margin: 0;
        bottom: 7px;right: 8px;
        font-size: 12px;
        color: #CCC;
    }
    #textNow{
        font-size: 12px;
        position: absolute;
        margin: 0;
        bottom: 7px;right: 33px;
        color: #333;
    }
    #pictureContext{
        width: 920px;
        height: 180px;
        margin-bottom: 30px;
    }
    #pictureHead{
        display: block;
        margin-bottom: 14px;
    }

    #contact{
        height: 79px;
        width: 920px;
        position: relative;
        margin-bottom: 30px;
    }
    #contactInput{
        display: block;
        background: #FAFAFA;
        border: 1px solid #E9E9E9;
        width: 508px;
        height: 47px;
        border-radius: 2px;
        padding: 14px 14px 14px 15px;
    }
    #contactHolder{
        position: absolute;
        font-size: 14px;
        color: #CCC;
        top: 37px;
        left: 15px;
    }
    #submit{
        width: 120px;
        height: 44px;
        background: #084278;
        border-radius: 2px;
        color: white;
    }
    /*@import url("../../assets/vendor/css/bootstrap.min.css");*/
    /*@import url("../../assets/vendor/css/font-awesome.min.css");*/
    /*@import url("../../assets/vendor/css/ace.min.css");*/
</style>
