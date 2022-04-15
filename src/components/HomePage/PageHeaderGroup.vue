<template>
	<div class="total">
		<div class="topest">
			<p class="desMes">中小学心理健康教育指导教师培训网&nbsp&nbsp欢迎您！</p>
			<div class="headerButton">
				<a-button size="small" type="primary" class="login"><span class="loginMes">登录</span></a-button>
				<a-button size="small" class="register"><span class="resMes">注册</span></a-button>
			</div>
		</div>

		<div class="logos">
			<div class="leftLogo">
				<img src="../../assets/logo.png" class="logo" alt="logo">
				<p class="logoMes">心博睿</p>
			</div>
			<div class="rightLogo">
				<img src="../../assets/logo.png" class="logo2" alt="logo2">
				<div class="logo2Mes">
					<p class="logo2Dec">联系电话 </p>
					<p class="logo2Number">0571-8528666</p>
				</div>
			</div>
		</div>
	</div>
	<div class="header">
		<a-page-header></a-page-header>
	</div>

</template>

<script>
	import { Button } from 'ant-design-vue'
	import PageHeader  from '../Global/PageHeader'
	export default {
		name: "PageHeaderGroup",
		components: {
			AButton: Button,
			APageHeader: PageHeader,
		}

	}
</script>

<style scoped>
	.header {
		position: absolute;
		top: 130px;
		height: 70px;
		background-color: #0A4A77;
		width: 100%;
		white-space: nowrap;
		text-align: center;
	}
	.topest {
		background-color: #F0F3F8;
	}
	.headerButton {
		float: right;
		display: inline-block;
		height: 24px;
		position: relative;
		top: 5px;
	}
	.desMes {
		font-size: 14px;
		font-weight: 400;
		color: #043278;
		opacity: 1;
		display: inline-block;
		position: relative;
		top: 5px;

	}

	.login {
		background: #043278;
	}
	.loginMes,.resMes {
		font-size: 12px;
		font-weight: 400;
		color: #FFFFFF;
	}
	.resMes {
		color: black;
	}
	.leftLogo{
		float:left;
	}
	.rightLogo {
		float: right;
		position: relative;
		top: 20px;
	}
	.logo {
		width: 37px;
		height: 71px;
	}
	.logo2 {
		width: 36px;
		height: 36px;
		position: relative;
		top: -15px;
	}
	.logoMes {
		display: inline-block;
		font-size: 17px;
		letter-spacing: 5px;
		font-weight: bold;
	}
	.logo2Mes {
		display: inline-block;

	}
	.logo2Dec {
		margin-bottom: -5px;
		font-size: 10px;
	}
	.logo2Number{
		color: #CF0814;
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 0;
	}
	.header ::v-deep .breaditem {
		color:white;
	}
	.header ::v-deep svg{
		color: white;
		font-weight: bolder;
	}
	.header ::v-deep .total {
		position: relative;
		top: 20px;
	}
</style>