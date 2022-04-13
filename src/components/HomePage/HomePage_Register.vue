<template>
  <div>
    <BackGround/>
    <div class="homePage_register">
      <span class="title">现在注册，即可快速体验</span>
      <span class="introduce">线上直播+录播课程学习，轻松掌握心理健康知识</span>
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
      <label for="protocol">
        <div class="protocol">
          <input type="checkbox" id="protocol">
          <span>同意并阅读</span>
          <a href="javascript:void(0)">用户协议、隐私声明</a>
        </div>
      </label>
      <button class="login_btn">注册</button>
      <span class="not_pwd">已有账号，</span>
      <a href="./#/HomePage/HomePage_Login" class="register">去登录</a>
    </div>
  </div>
</template>

<script>
import BackGround from "@/components/HomePage/BackGround";
export default {
  name:'HomePage_Register',
  components:{
    BackGround
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
.homePage_register{
  position: absolute;
  top: 235px;
  right: 464px;
  width: 550px;
  height: 610px;
  background: #FFFFFF;
  border-radius: 6px;
  border-top: 4px solid #053679;
}

.title{
  position: absolute;
  top: 50px;
  left: 56px;
  width: 286px;
  height: 37px;
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #222222;
}

.introduce{
  position: absolute;
  top: 98px;
  left: 56px;
  width: 348px;
  height: 22px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #999999;
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

.student_name{
  position: absolute;
  top: 160px;
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
  top: 240px;
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
  top: 320px;
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
  top: 400px;
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
  bottom: 188px;
  right: 56px;
  width: 80px;
  height: 22px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #053679;
  border: 0;
}

.not_pwd{
  position: absolute;
  bottom: -30px;
  left: 436px;
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
  left: 506px;
  width: 52px;
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #053679;
}
</style>