<template>
  <div class="backGround">
    <div class="logo">
      <img src="../../assets/img/login_logo.png">
      <span class="logo_context">新博睿</span>
    </div>
    <div class="phone">
      <img src="../../assets/img/login_phone.png">
      <span class="phone_tel">联系电话</span>
      <span class="phone_num">0571-8528666</span>
    </div>
    <span class="foot_context">Copyright 2019 All rights reserved&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;版权所有：蓝色匠士教育科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;晋ICP备19008219号</span>
  </div>
</template>

<script>
export default{
  name:'BackGround'
}
</script>

<style scoped>
.backGround{
  position:relative;
  width: 1920px;
  height: 1100px;
  /*opacity: 0.1;*/
  background: url("../../assets/img/back.jpg") no-repeat;
  background-size: 100% 100%;
}

.logo{
  position: absolute;
  top: 48px;
  left: 259px;
  width: 112px;
  height: 55px;
}
.logo img{
  width: 37px;
  height: 71px;
}
.logo .logo_context{
  position: absolute;
  top: 24px;
  left: 38px;
  width: 87px;
  height: 33px;
}

.phone img{
  position: absolute;
  top: 53px;
  right: 348px;
}

.phone .phone_tel{
  position: absolute;
  top:54px;
  right: 290px;
  font-size: 12px;
  color: #A8A8A8;
}

.phone .phone_num{
  position: absolute;
  top:70px;
  right: 200px;
  font-size: 20px;
  color: #CF0814;
}

.foot_context{
  position: absolute;
  bottom: 50px;
  left: 1189px;
  width: 641px;
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 20px;
  color: #999999;
  opacity: 1;
}
</style>