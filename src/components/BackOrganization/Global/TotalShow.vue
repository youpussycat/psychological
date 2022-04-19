<template>
	<TopLogo></TopLogo>
	<div class="TopLogoBottom">
		<div class="mymenu">
			<MyMenu></MyMenu>
		</div>
		<div class="mymenuElse">
			<div class="PositionMark">
				<MyPosition></MyPosition>
			</div>
			<div class="CharacterManagement">
				<character-power-management v-if="choosePage==='4-3'"></character-power-management>
			</div>
		</div>

	</div>


</template>

<script>
	import myMenuItem from "@/components/BackOrganization/Global/SmallComponents/myMenuItem";
	import TopLogo from "@/components/BackOrganization/Global/TopLogo";
	import MyPosition from "@/components/BackOrganization/Global/MyPosition";
	import Table from "@/components/BackOrganization/Global/myTable";
	import MyMenu from "@/components/BackOrganization/Global/myMenu";
	import CharacterPowerManagement from "@/components/BackOrganization/SystemSetting/CharacterPowerManagement";
	export default {
		name: "TotalShow",
		components: {
			MyMenu,
			myMenuItem,
			MyPosition,
			Table,
			TopLogo,
			CharacterPowerManagement,
		},
		methods: {

		},
		data() {
			return {
				choosePage: "4-3",

			};
		},
		mounted() {
			let _self = this;
			this.$bus.emit("页面中改变我的位置",{
				keyPath:["4","4-3"],
				key:"4-3"
			})
			this.$bus.on("返回Menu的选中key",(dta) => {
				_self.choosePage = dta;
			})
		}

	}
</script>

<style scoped>
	.TopLogoBottom {
		display: flex;
	}
	.mymenu {

	}
	.mymenuElse {
		flex-grow: 1;
	}
</style>