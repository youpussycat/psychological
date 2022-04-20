<template>
	<div class="TopLogoTotal">
		<div class="TopLogoLeft">
			<img  class="TopLogoImg" :src="logoSrc" alt="logo"/>
			<p class="TopLogoTitle" >心博睿</p>
		</div>
		<div class="TopLogoRight">
			<div class="MessNotice">
				<a-badge :count="mesCount" :overflow-count="999" >
					<a-avatar shape="circle" size="small" :src='MesImage' />
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
				UserHeadImg: "",
				mesCount: 10,

			};
		},

	}
</script>

<style scoped>
	.TopLogoTotal {
		background-color: white;
		position: sticky;
		top: 0;
		left: 0;
		z-index: 1000;
		width: 100%;
		height: 60px;
	}
	.TopLogoImg, .TopLogoTitle, .TopLogoLeft, .TopLogoRight, .MessNotice, .User {
		display: inline-block;
	}
	.TopLogoImg {
		width: 60px;
		height: auto;
	}
	.TopLogoTitle {
		 font-size: 22px;
		 font-weight: 800;
		 position: relative;
		 top: 5px;
	 }
	.TopLogoLeft {
		position: fixed;
		top: 0;
		left: 0;
	}
	.TopLogoRight {
		position: fixed;
		float: right;
		margin-top: 10px;
		top: 0;
		right: 0;
	}
	.User, .MessNotice {
		margin-right: 50px;
	}
	.User {
		position: relative;
		bottom: 7px;
	}
	.MessNotice {
		margin-top: 5px;
	}
	::v-deep .MessNotice sup {
		padding: 0px 1px;
	}

</style>