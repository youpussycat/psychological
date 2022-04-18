<template>
  <div class="add">
    <div class="add_title">
      <span>新增</span>
    </div>
    <div class="add_content">
      <div class="category">
        <span>*所属分类：</span>
        <select>
          <option selected="selected" value="please_choose">请选择</option>
          <option value="project_introduction">项目介绍</option>
          <option value="exam_introduction">考试介绍</option>
          <option value="registration_conditions">报名条件</option>
          <option value="application_materials">报名材料</option>
          <option value="examination_content">考试内容</option>
          <option value="exam_book">考试用书</option>
        </select>
      </div>
      <div class="title">
        <span>*标题：</span>
        <input placeholder="最多允许20个字符" onfocus="this.placeholder=''" onblur="this.placeholder='最多允许20个字符'">
      </div>
      <div class="source">
        <span>来源：</span>
        <select v-model="val">
          <option value="original">原创</option>
          <option value="reprint">转载</option>
        </select>
      </div>
      <div class="publisher">
        <span v-show="!is_reprint">发布人：</span>
        <span v-show="is_reprint">转载自：</span>
        <input>
      </div>
      <div class="content">
        <span>*内容：</span>
        <textarea></textarea>
      </div>
      <div class="is_top">
        <span>是否置顶：</span>
        <div class="switch">
         <div class="switch_bg" :class="{switch_bg_on:is_top, switch_bg_off:!is_top}">
           <div class="switch_btn" :class="{switch_btn_on:is_top, switch_btn_off:!is_top}" @click="show"></div>
         </div>
        </div>
      </div>
      <div class="appendix">
        <span>附件：</span>
        <a-upload
            v-model:file-list="fileList"
            name="file"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :headers="headers"
            @change="handleChange"
        >
          <button class="btn">
            选择文件
          </button>
        </a-upload>
      </div>
    </div>
    <span class="preview">预览</span>
    <button class="btn_cancel">取消</button>
    <button class="btn_save">保存</button>
    <button class="btn_submit">提交</button>
  </div>
</template>

<script>
import {message} from 'ant-design-vue';
import { defineComponent, ref} from 'vue';
import { Upload } from 'ant-design-vue';

export default defineComponent({
  name:'ApplicationGuideTableAdd',
  components:{
    AUpload: Upload,
  },
  data(){
    return {
      is_top: false,
      is_reprint: false,
      val:''
    }
  },
  methods:{
    show(){
      this.is_top = !this.is_top;
    }
  },
  watch:{
    val(newVal){
      if(newVal === 'reprint'){
        this.is_reprint = true;
      } else {
        this.is_reprint = false;
      }
    }
  },
  setup() {
    const handleChange = info => {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === 'done') {
        message.success(`${info.file.name} 上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 上传失败`);
      }
    };

    const fileList = ref([]);

    return {
      fileList,
      headers: {
        authorization: 'authorization-text',
      },
      handleChange,
    };
  }
});
</script>

<style scoped>
.add{
  position: absolute;
  box-sizing: border-box;
  right: 0;
  width: 705px;
  height: 1080px;
  border: 1px solid rgba(187, 187, 187, 100);
}

.add_title{
  box-sizing: border-box;
  width: 705px;
  height: 54px;
  border-bottom: 1px solid rgba(187, 187, 187, 100);
}

.add_title span{
  display: inline-block;
  width: 32px;
  height: 24px;
  color: black;
  font-size: 16px;
  font-weight: 700;
  font-family: SourceHanSansSC-bold;
  margin: 16px 0 0 20px;
}

.add_content .category{
  position: absolute;
  left: 32px;
  top: 75px;
}

.add_content .title{
  position: absolute;
  left: 60px;
  top: 124px;
}

.add_content .source{
  position: absolute;
  left: 67px;
  top: 173px;
}

.add_content .publisher{
  position: absolute;
  left: 53px;
  top: 222px;
}

.add_content .content{
  position: absolute;
  left: 61px;
  top: 271px;
}

.add_content .is_top{
  position: absolute;
  top: 400px;
  left: 37px;
}

.add_content .appendix{
  position: absolute;
  top: 452px;
  left: 65px;
}

.add_content .category span,
.add_content .title span,
.add_content .source span,
.add_content .publisher span,
.add_content .content span,
.add_content .is_top span,
.add_content .appendix span {
  width: 77px;
  height: 20px;
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  font-family: SourceHanSansSC-regular;
  margin-right: 8px;
}

.add_content .category select,
.add_content .source select{
  width: 200px;
  height: 30px;
  border: 1px solid rgba(187, 187, 187, 100);
  outline: none;
  text-indent: 8px;
  border-radius: 6px;
}

.add_content .title input,
.add_content .publisher input{
  width: 200px;
  height: 30px;
  border: 1px solid rgba(187, 187, 187, 100);
  outline: none;
  text-indent: 8px;
}

.add_content .content textarea{
  width: 550px;
  height: 100px;
  background-color: rgba(255, 255, 255, 100);
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  font-family: Roboto;
  border: 1px solid rgba(187, 187, 187, 100);
  vertical-align: top;
  resize:none;
  outline: none;
}

.add_content .appendix button {
  width: 80px;
  height: 30px;
  border-radius: 4px;
  background-color: rgba(164, 173, 179, 100);
  color: rgba(255, 255, 255, 100);
  font-size: 14px;
  text-align: center;
  font-family: Microsoft Yahei;
  border: 1px solid rgba(164, 173, 179, 100);
  cursor: pointer;
}

.add_content .is_top .switch{
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  vertical-align: middle;
  border-radius: 24px;
  background-color: #DCE0E7;
}

.add_content .is_top .switch .switch_bg{
  width: 40px;
  height: 24px;
  background-color: #DCE0E7;
  border-radius: 24px;

}

.add_content .is_top .switch .switch_bg .switch_btn{
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 18px;
  box-shadow: 0 3px 0 0 rgba(193, 193, 194, 0.4);
  background-color: #FFFFFF;
  border: 1px solid rgba(193, 193, 194, 0.4);
  cursor: pointer;
}

.add_content .is_top .switch .switch_bg .switch_btn_on{
  left: 20px;
  transition: left .4s;
}

.add_content .is_top .switch  .switch_bg_on{
  background-color: #00E065;
  transition: width .4s;
}

.add_content .is_top .switch .switch_bg .switch_btn_off{
  left: 3px;
  transition: left .4s;
}

.add_content .is_top .switch  .switch_bg_off{
  background-color: #DCE0E7;
  transition: width .4s;
}

.add .preview{
  position: absolute;
  right: 57px;
  bottom: 129px;
  width: 32px;
  height: 24px;
  color: rgba(16, 16, 16, 100);
  font-size: 16px;
  text-align: left;
  font-family: SourceHanSansSC-bold;
  cursor: pointer;
}

.add .btn_cancel{
  position: absolute;
  left: 265px;
  bottom: 38px;
  width: 98px;
  height: 40px;
  line-height: 20px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 100);
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  text-align: center;
  font-family: Roboto;
  border: 1px solid rgba(220, 224, 231, 100);
  cursor: pointer;
}

.add .btn_save{
  position: absolute;
  left: 418px;
  bottom: 38px;
  width: 97px;
  height: 40px;
  border-radius: 4px;
  background-color: rgba(164, 173, 179, 100);
  color: rgba(255, 255, 255, 100);
  font-size: 14px;
  text-align: center;
  font-family: Microsoft Yahei;
  border: 1px solid rgba(164, 173, 179, 100);
  cursor: pointer;
}

.add .btn_submit{
  position: absolute;
  right: 20px;
  bottom: 38px;
  width: 98px;
  height: 40px;
  line-height: 20px;
  border-radius: 3px;
  background-color: rgba(56, 148, 255, 100);
  color: rgba(255, 255, 255, 100);
  font-size: 14px;
  text-align: center;
  font-family: Roboto;
  border: 1px solid rgba(56, 148, 255, 100);
  cursor: pointer;
}
</style>