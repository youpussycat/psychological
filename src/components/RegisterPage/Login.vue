<template>
  <div class="Background">
    <a href="/" class="GoIndex">首 页</a>
    <div class="LoginPage">
      <i>
        <img src="../../assets/img/regDiaLeft.png" title="regDiaLeft" class="regDiaLeftImg" alt="regDiaLeft">
      </i>
      <div class="LogDia">
        <Dialog></Dialog>
      </div>
    </div>
  </div>

</template>

<script>
  import Dialog from "../Global/Dialog";
	export default {
		name: "Login",
    components: {
		  Dialog,
    },
    data() {
      return {
        inputs:[["请输入账号/学号/手机号","userAccount"],["请输入密码","password"]],
        title:"账号登录",
      }
    },

    mounted(){

    },

	}
</script>

<style scoped>
  .GoIndex {
    position: fixed;
    top: 3%;
    right: 3%;
    font-size: 150%;
    outline: none;
  }
  .LogDia {
    position: absolute;
    width: 50%;
    height: 100%;
    right: 0;
  }
  .LoginPage {
    position: absolute;
    width: 1030px;
    height: 550px;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .Background {
    background: url("../../assets/img/regBackground.png");
    width: 100%;
    height: 87%;
    position: absolute;
    margin-top: -1%;
    margin-left: -1%;
    text-align: center;
    top: 13%;
  }
  .regDiaLeftImg {
    position: absolute;
    width: 50%;
    height:100%;
    -webkit-user-drag:none;
    left: 0;
  }
</style>
