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
      <div class="cover-photo">
        <span>*封面图片：</span>
        <a-upload
            v-model:file-list="fileList"
            name="avatar"
            list-type="picture-card"
            class="avatar-uploader"
            :show-upload-list="false"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :before-upload="beforeUpload"
            @change="handleChange1"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" style="max-width: 108px; max-height: 108px;" />
          <div v-else>
            <loading-outlined v-if="loading"></loading-outlined>
            <plus-outlined v-else></plus-outlined>
            <div class="ant-upload-text">Upload</div>
          </div>
        </a-upload>
        <span style="padding-left: 30px;">只能上传jpg、png格式图片，且不能超过1M</span>
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
            @change="handleChange2"
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
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default defineComponent ({
  name: "TrainingDocumentaryTableAdd",
  components:{
    AUpload: Upload,
    LoadingOutlined,
    PlusOutlined,
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
    const fileList1 = ref([]);
    const fileList2 = ref([]);
    const loading = ref(false);
    const imageUrl = ref('');

    const handleChange1 = info => {
      if (info.file.status === 'uploading') {
        loading.value = true;
        return;
      }

      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, base64Url => {
          imageUrl.value = base64Url;
          loading.value = false;
        });
      }

      if (info.file.status === 'error') {
        loading.value = false;
        message.error('上传错误');
      }
    };

    const handleChange2 = info => {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList2);
      }

      if (info.file.status === 'done') {
        message.success(`${info.file.name} 上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 上传失败`);
      }
    };

    const beforeUpload = file => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

      if (!isJpgOrPng) {
        message.error('你只能上传jpg / png图片');
      }

      const isLt2M = file.size / 1024 / 1024 < 1;

      if (!isLt2M) {
        message.error('图片必须小于1MB!');
      }

      return isJpgOrPng && isLt2M;
    };

    return {
      fileList1,
      fileList2,
      headers: {
        authorization: 'authorization-text',
      },
      handleChange1,
      handleChange2,
      loading,
      imageUrl,
      beforeUpload,
    };
  }
});
</script>

<style scoped>
  .add{
    position: absolute;
    box-sizing: border-box;
    left: 1215px;
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

  .add_content .cover-photo{
    position: absolute;
    left: 33px;
    top: 173px;
  }

  .add_content .source{
    position: absolute;
    left: 67px;
    top: 300px;
  }

  .add_content .publisher{
    position: absolute;
    left: 53px;
    top: 350px;
  }

  .add_content .content{
    position: absolute;
    left: 61px;
    top: 400px;
  }

  .add_content .is_top{
    position: absolute;
    top: 520px;
    left: 37px;
  }

  .add_content .appendix{
    position: absolute;
    top: 570px;
    left: 65px;
  }

  .add_content .category span,
  .add_content .title span,
  .add_content .cover-photo span,
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
  .add_content .cover-photo input,
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
  .avatar-uploader > .ant-upload {
    width: 128px;
    height: 128px;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
