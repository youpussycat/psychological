<template>
	<div class="TopLogoTotal">
		<div class="TopLogoLeft">
			<img class="TopLogoImg" :src="logoSrc" alt="logo"/>
			<p class="TopLogoTitle" >心博睿</p>
		</div>
		<div class="TopLogoRight">
			<div class="MessNotice">
				<a-badge :count="1000" :overflow-count="999">
					<a-avatar shape="circle" size="large" :src='MesImage'/>
				</a-badge>

			</div>
			<div class="User">
				<a-avatar shape="circle" size="large" :src='UserHeadImg'/>
			</div>
		</div>
	</div>
</template>

<script>

	import { Badge, Avatar } from 'ant-design-vue';
	export default {
		name: "TopLogo",
		components:{
			ABadge: Badge,
			AAvatar: Avatar,

		},
		data() {
			return {
				logoSrc: require("../../../assets/img/logo.png"),
				MesImage: require("../../../assets/img/消息.png"),
				UserHeadImg:"",

			};
		},

	}
</script>

<style scoped>
	.TopLogoImg, .TopLogoTitle, .TopLogoLeft, .TopLogoRight, .MessNotice, .User {
		display: inline-block;
	}
	.TopLogoImg {
		width: 60px;
		height: auto;
	}
</style>