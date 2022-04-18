<template>
	<div class="MyPosition">
		<p class="MyPositionWords">我的位置:&nbsp{{position}}</p>
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
	.MyPosition {
		position: relative;
		border: #BBBBBB 1px solid;
		height: 46px;
		width: 100%;
	}
	.MyPositionWords {
		position: absolute;
		margin-left: 16px;
		font-size: 14px;
		margin-bottom: auto;
		margin-top: auto;
		bottom: 0;
		top: 0;
		height: fit-content;
		width: fit-content;
	}
</style>