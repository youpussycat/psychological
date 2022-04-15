<template>
	<div class="TopLogoTotal">
		<img class="TopLogoImg" :src="logoSrc" alt="logo"/>
		<div class="TopLogoRight">
			<div class="MessNotice">
				<a-badge :count="1000" :overflow-count="999">
					<a-avatar shape="circle" size="large" :src='MesImage'/>
				</a-badge>
			</div>
			<div class="User">

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
				logoSrc: "",
				MesImage: 'require("../../../assets/img/消息.png")',

			};
		},

	}
</script>

<style scoped>

</style>