<template>
	<h1>用户信息：{{mes}}</h1>
	<button @click="test()">获取信息</button>
</template>

<script>
	import { ajax } from "../scripts/request/myRequire";
	export default {
		// eslint-disable-next-line vue/multi-word-component-names
		name: "Test",
		data(){
			return {
				mes:"",
			}

		},
		methods:{
			test:function(){
				let _self = this;
				ajax({
					url:"admin/user/getUserInfo",
					success:(res) => {
						console.log("res.data:");
						console.log(res.data);
						_self.mes += res.data.data.userName + "   real:   " + res.data.data.realName;
					},
					error:(err) => {
						console.log("Test err:");
						console.log(err);

						_self.mes = "未获取";
					}
				})
			}
		},
		mounted() {
			let _self = this;
			this.$bus.on("验证",(data) => {
				_self.mes = data;
				console.log(_self.mes);
			});
		},
		onUnmounted(){
			this.$bus.off("验证");
		}

	}
</script>

<style scoped>

</style>