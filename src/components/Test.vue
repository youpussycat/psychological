<template>
	<h1>用户信息：{{mes}}</h1>
	<button @click="test()">获取信息</button>
</template>

<script>
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
				this.mes = "未获取";
			}
		},
		mounted() {
			this.$bus.on("验证",(data) => {
				this.mes = data;
			});
		},
		onUnmounted(){
			this.$bus.off("验证");
		}

	}
</script>

<style scoped>

</style>