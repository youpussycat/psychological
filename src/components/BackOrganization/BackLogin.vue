<template>
	<div class="LoginTotal">
		<div class="LoginHeader">
			<img class="LoginImg" :src="imgSrc" alt="Logo"/>
			<p class="LoginTitle" v-text="title"></p>
		</div>
		<div class="LoginBottom">
			<div class="LoginInput" v-for="(it,index) in mark" :key="index">
				<label>
					<input :placeholder="it" class="LoginInputItem"/>
				</label>
			</div>
			<div class="LoginButton">
				<a-button type="primary" class="LoginButtonItem">登 录</a-button>
			</div>
		</div>
	</div>
</template>

<script>
	import {Button} from 'ant-design-vue';
	export default {
		name: "BackLogin",
		components: {
			AButton: Button,

		},
		data(){
			return {
				mark:[
					"请输入账号/手机号码",
					"请输入密码"
				],
				imgSrc: "",
				title:"欢迎登录心博睿管理系统",
			}
		}
	}
</script>

<style scoped>
	.LoginTotal {
		border-top: #053679 2px solid;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		height: 380px;
	}
	.LoginHeader {
		margin-top: 50px;
		margin-bottom: 38px;
	}
	.LoginTitle, .LoginImg {

		display: inline-block;
	}

	.LoginTitle {
		font-size: 26px;
	}
	.LoginTotal {
		width: 550px;
		text-align: center;
	}
	.LoginInput, .LoginButton {

		margin-left: 56px;
		margin-right: 56px;
	}
	.LoginInputItem {
		outline: none;
		border: none;
		border-bottom: #DCDEE0 1px solid;
		padding-bottom: 13px;
		font-size: 16px;
		width: 100%;
		margin-bottom: 44px;
	}
	.LoginButtonItem {
		background-color: #a4adb3;
		width: 100%;

	}
</style>