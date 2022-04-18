<template>
	<TopLogo></TopLogo>
	<MyMenu></MyMenu>
	<div class="PositionMark">
		<MyPosition></MyPosition>
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

		}

	}
</script>

<style scoped>
	.PositionMark {

	}
</style>