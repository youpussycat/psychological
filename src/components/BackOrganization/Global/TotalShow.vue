<template>
	<div class="OutSide" v-if="bubbleDisplay||addCharacterDisplay">
	</div>
	<div class="myBubble" v-if="bubbleDisplay">
		<my-bubble :title="bubbleTitle"></my-bubble>
	</div>
	<div class="addCharacter" v-if="addCharacterDisplay">
		<add-character :title="addCharacterTitle"></add-character>
	</div>
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
	import Bubble from "@/components/BackOrganization/Global/Bubble";
	import AddCharacter from "@/components/BackOrganization/SystemSetting/SmallComponents/AddCharacter";
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
			MyBubble: Bubble,
			AddCharacter,


		},
		methods: {

		},
		data() {
			return {
				choosePage: "4-3",
				bubbleTitle: "确定删除该角色吗？",
				bubbleDisplay: 0,
				addCharacterDisplay:0,
				addCharacterTitle: "新增角色",
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
			this.$bus.on("显现气泡",function(title){
				_self.bubbleDisplay = true;
				_self.bubbleTitle = title;
			})


			this.$bus.on("改变TotalShow数据",([key,dta]) => {
				_self[key] = dta;
			})

		},
		onBeforeUnmount() {
			let busArray = ["返回Menu的选中key","显现气泡","改变TotalShow数据"];
			for(let it of busArray)
				this.$bus.off(it);
		}

	}
</script>

<style scoped>
	.OutSide {
		position: fixed;
		width: 100%;
		height: 100%;
		top:0;
		left:0;
		opacity: 50%;
		background-color: black;
		z-index: 1001;

	}
	.myBubble {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		width: fit-content;
		height: fit-content;
		z-index: 1002;
		background-color: white;
	}
	.TopLogoBottom {
		display: flex;
	}
	.mymenu {
		width: 309px
	}
	.mymenuElse {
		flex-grow: 1;
	}
</style>