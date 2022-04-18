<template>
	<TopLogo></TopLogo>
	<div class="TopLogoBottom">
		<div class="mymenu">
			<MyMenu></MyMenu>
		</div>
		<div class="PositionMark">
			<MyPosition></MyPosition>
		</div>
	</div>


</template>

<script>
	import myMenuItem from "@/components/BackOrganization/Global/SmallComponents/myMenuItem";
	import TopLogo from "@/components/BackOrganization/Global/TopLogo";
	import MyPosition from "@/components/BackOrganization/Global/MyPosition";
	import Table from "@/components/BackOrganization/Global/Table";
	import MyMenu from "@/components/BackOrganization/Global/myMenu";
	export default {
		name: "CharacterPowerManagement",
		components: {
			MyMenu,
			myMenuItem,
			MyPosition,
			Table,
			TopLogo,
		},
		methods: {

		},
		mounted() {
			this.$bus.emit("页面中改变我的位置",{
				keyPath:["4","4-3"],
				key:"4-3"
			})
		}

	}
</script>

<style scoped>
	.TopLogoBottom {
		display: flex;/*创建flex项目，方便分配剩余空间*/
	}
	.mymenu {

	}
	.PositionMark {
		flex-grow: 1;/*自动占满剩余空间*/
	}
</style>