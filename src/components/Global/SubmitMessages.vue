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
            <textarea v-model="textAreaChange"></textarea>
            <span id="placeHolder">{{textHolder}}</span>
            <span id="textNow">{{textAreaChange.length}}</span><p id="textLimit">/500</p>
            <span style="">*</span>
        </div>
        <div id="pictureContext">
            <p id="pictureTip">{{pictureTip}}</p>
            <picture-wall></picture-wall>
            <p style="font-size: 14px;color: #666">文件小于5M, 支持JPG/PNG/BMP等格式图片,最多可以上传5张图片</p>
        </div>
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
                pictureTip:"上传相关照片:",
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
                console.log(ev)
                if(this.content.length>400){
                    this.content=String(this.content).slice(0,400)
                }
                placeHolder.style.display="none";
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
    }
    textarea{
        width: 920px;
        height: 100px;
        resize: none;
    }
    #placeHolder{
        position: absolute;
        left:27px;
        top:33px;
        font-size: 13px;
        color: #CCC;
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
    }
    /*@import url("../../assets/vendor/css/bootstrap.min.css");*/
    /*@import url("../../assets/vendor/css/font-awesome.min.css");*/
    /*@import url("../../assets/vendor/css/ace.min.css");*/
</style>
