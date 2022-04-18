<template>
	<div class="MyPosition">
		<p>我的位置:{{position}}</p>
	</div>
</template>

<script>
	export default {
		name: "MyPosition",
		data() {
			return {
				position: "",
			};
		},
		mounted() {
			let _self = this;
			this.$bus.on("改变我的位置",(position)=>{
				_self.position = position;
			})
		}
	}
</script>

<style scoped>

</style>