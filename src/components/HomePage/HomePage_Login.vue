<template>
  <BackGround/>
  <div class="login" :class="{he: !loginWay}">
    <div class="login_header_title">
      <a class="institution_login" :class="{active: loginWay, top: !loginWay}" href="javascript:void(0)" rel="external nofollow" @click="loginWay = true">机构登录</a>
      <a class="student_login" :class="{active: !loginWay}"  href="javascript:void(0)" rel="external nofollow" @click="loginWay = false">学员登录</a>
    </div>
    <div :class="{on: !loginWay}">
      <input
          class="institutional_account"
          type="text"
          placeholder="请输入机构账号"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='请输入机构账号'"
      >
      <input
          class="institutional_password"
          type="text"
          placeholder="请输入登录密码"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='请输入登录密码'"
      >
      <label for="auto_login">
        <div class="auto_login">
          <input type="checkbox" id="auto_login" checked="checked">
          <span>3天内自动登录</span>
        </div>
      </label>
      <label for="protocol">
        <div class="protocol">
          <input type="checkbox" id="protocol">
          <span>同意并阅读</span>
          <a href="javascript:void(0)">用户协议、隐私声明</a>
        </div>
      </label>
      <button class="login_btn">登录</button>
      <span class="connect">机构入驻请联系：</span>
      <span class="connect_tel">0571-8528666</span>
    </div>
    <div :class="{on: loginWay}">
      <input
          class="student_name"
          type="text"
          placeholder="请输入学生姓名"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='请输入学生姓名'"
      >
      <input
          class="id_card"
          type="text"
          placeholder="请输入身份证号码"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='请输入身份证号码'"
      >
      <input
          class="tel"
          type="text"
          placeholder="请输入手机号"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='请输入手机号'"
      >
      <input
          class="verification_code"
          type="text"
          placeholder="输入短信验证码"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='输入短信验证码'"
      >
      <button disabled="disabled" class="get_verification">获取验证码</button>
      <label for="auto_login">
        <div class="auto_login">
          <input type="checkbox" id="auto_login" checked="checked">
          <span>3天内自动登录</span>
        </div>
      </label>
      <label for="protocol">
        <div class="protocol">
          <input type="checkbox" id="protocol">
          <span>同意并阅读</span>
          <a href="javascript:void(0)">用户协议、隐私声明</a>
        </div>
      </label>
      <button class="login_btn">登录</button>
      <a href="javascript:void(0)" class="forget_pwd">忘记密码？</a>
      <span class="not_pwd">没有账号，</span>
      <a href="./#/HomePage/HomePage_Register" class="register">免费注册</a>
    </div>
  </div>
</template>

<script>
import BackGround from "./BackGround"
export default {
  name:'HomePage_Login',
  data(){
    return{
      loginWay: true
    }
  },
  components:{
    BackGround
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.login{
  position: absolute;
  top: 235px;
  right: 464px;
  width: 550px;
  height: 451px;
  background: #FFFFFF;
  border-radius: 6px;
  border-top: 4px solid #053679;
  /*background-color: red;*/
}

.institution_login{
  position: absolute;
  top: 50px;
  left: 56px;
  width: 104px;
  height: 37px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 500;
  text-align: center;
  color: #999999;
}

.student_login{
  position: absolute;
  top: 57px;
  right: 286px;
  width: 80px;
  height: 28px;
  font-size: 20px;
  font-family: PingFang SC;
  text-align: right;
  font-weight: 500;
  color: #999999;
}

.top{
  top: 57px;
}

.active{
  width: 104px;
  height: 37px;
  top: 50px;
  font-size: 26px;
  color: #222222;
}

.on {
  display: none;
}

.he{
  height: 611px;
}

.institutional_account{
  position: absolute;
  top: 125px;
  left: 56px;
  width: 438px;
  height: 36px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #CCCCCC;
  outline: none;
  border: 0;
  border-bottom: 1px solid #DCDEE0;
}

.institutional_password{
  position: absolute;
  top: 205px;
  left: 56px;
  width: 438px;
  height: 36px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #CCCCCC;
  outline: none;
  border: 0;
  border-bottom: 1px solid #DCDEE0;
}

.auto_login input{
  position: absolute;
  bottom: 150px;
  left: 56px;
  width: 16px;
  height: 16px;
}

.auto_login span{
  position: absolute;
  bottom: 148px;
  left: 80px;
  width: 93px;
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #222222;
}

.protocol input{
  position: absolute;
  bottom: 114px;
  left: 56px;
  width: 16px;
  height: 16px;
}

.protocol span{
  position: absolute;
  bottom: 112px;
  left: 80px;
  font-size: 14px;
}

.protocol a{
  position: absolute;
  bottom: 112px;
  left: 151px;
  font-size: 14px;
  color: #053679;
}

.login_btn{
  position: absolute;
  bottom: 50px;
  left: 52px;
  width: 438px;
  height: 48px;
  background: #F7F8FA;
  border: 1px solid #EBEDF0;
  border-radius: 2px;
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #CCCCCC;
}

.connect{
  position: absolute;
  bottom: -30px;
  left: 338px;
  width: 112px;
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #999999;
}

.connect_tel{
  position: absolute;
  bottom: -30px;
  left: 452px;
  width: 98px;
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #053679;
}

.student_name{
  position: absolute;
  top: 125px;
  left: 56px;
  width: 438px;
  height: 36px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #CCCCCC;
  outline: none;
  border: 0;
  border-bottom: 1px solid #DCDEE0;
}

.id_card{
  position: absolute;
  top: 205px;
  left: 56px;
  width: 438px;
  height: 36px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #CCCCCC;
  outline: none;
  border: 0;
  border-bottom: 1px solid #DCDEE0;
}

.tel{
  position: absolute;
  top: 285px;
  left: 56px;
  width: 438px;
  height: 36px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #CCCCCC;
  outline: none;
  border: 0;
  border-bottom: 1px solid #DCDEE0;
}

.verification_code{
  position: absolute;
  top: 365px;
  left: 56px;
  width: 438px;
  height: 36px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #CCCCCC;
  outline: none;
  border: 0;
  border-bottom: 1px solid #DCDEE0;
}

.get_verification{
  position: absolute;
  bottom: 224px;
  right: 56px;
  width: 80px;
  height: 22px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #053679;
  border: 0;
}

.forget_pwd{
  position: absolute;
  bottom: -30px;
  left: 0;
  width: 70px;
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #053679;
}

.not_pwd{
  position: absolute;
  bottom: -30px;
  left: 424px;
  width: 70px;
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #999999;
}

.register{
  position: absolute;
  bottom: -30px;
  left: 494px;
  width: 58px;
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #053679;
}
</style>