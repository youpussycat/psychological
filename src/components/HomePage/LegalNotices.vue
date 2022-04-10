<template>
  <div>
    <div class="Legal">
      <div class="LegalTitle">
        <span>法律声明</span>
        <span>/ Legal Notices</span>
      </div>
    </div>
    <div class="line"></div>
    <textarea class="context" placeholder="请填写您的内容"></textarea>
  </div>
</template>

<script>
export default {
  name:'LegalNotices',
  data(){
    return {

    }
  }
}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}

.Legal{
  width: 921px;
  height: 31px;
  opacity: 1;
}

.LegalTitle{
  width: 248px;
  height: 22px;
  opacity: 1;
}

.LegalTitle span:nth-child(1){
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 0px;
  color:#053679;
}

.LegalTitle span:nth-child(2){
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 0px;
  color:#E6E6E6;
}

.line{
  width: 921px;
  height: 0px;
  border: 1px solid #F0F0F0;
  opacity: 1;
}

.context{
  width: 920px;
  height: 470px;
  background: #FAFAFA;
  border: 1px solid #E9E9E9;
  border-radius: 2px;
  resize:none
}
</style>