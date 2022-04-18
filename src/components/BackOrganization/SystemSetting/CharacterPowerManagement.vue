<template>
	<div class="myTableInCharacterMan">
		<my-table></my-table>
	</div>


</template>

<script>
	import myTable from "@/components/BackOrganization/Global/myTable";
	import SearchBar from "@/components/BackOrganization/Global/SearchBar";
	export default {
		name: "CharacterPowerManagement",
		components: {
			SearchBar,
			MyTable: myTable,
		},
		methods: {

		},
		data() {
			return {

			};
		},
		mounted() {
			let col = [
				{
					title: '序号',      //显示文字
					dataIndex: 'index',//表格内数据key值
					// a，image，buttons，switch，html，words. words为默认的不要写
					width:65,          //表格宽度
					className: "Words",//css样式类名
					align: 'center',
				},
				{
					title: '角色名称',
					dataIndex: 'name',
					width:382,
					className: "Words",
					align: 'center',
				},
				{
					title: '备注',
					dataIndex: 'remarks',
					width:"581px",
					className: "remarks",
					align: 'center',
				},
				{
					title: '状态',
					dataIndex: 'status',
					width:144,
					className: "Words",
					align: 'center',
				},
				{
					title: '操作',
					dataIndex: 'buttons',
					dataClass: 'buttons',
					width:387,
					className: "Buttons",
					align: 'center',
				},
			]
			let dta = [
				{
					key: '1',
					index: 1,
					name: "李狗蛋",
					remarks: "别名 李靖",
					status: "重伤",
					buttons: [
						{
							text: "疗伤",
							click: ()=>console.log("我在疗伤")
						},
						{
							text: "战斗",
							click: ()=>console.log("我tm负伤战斗！")
						},
						{
							text: "摆烂",
							click: ()=>console.log("我无救了，摆烂吧")
						},
					]
				},
				{
					key: '2',
					index: 2,
					name: "李狗蛋",
					remarks: "别名 李靖",
					status: "重伤",
					buttons: [
						{
							text: "疗伤",
							click: ()=>console.log("我在疗伤")
						},
						{
							text: "战斗",
							click: ()=>console.log("我tm负伤战斗！")
						},
						{
							text: "摆烂",
							click: ()=>console.log("我无救了，摆烂吧")
						},
					]
				},
				{
					key: '3',
					index: 3,
					name: "李狗蛋",
					remarks: "别名 李靖",
					status: "重伤",
					buttons: [
						{
							text: "疗伤",
							click: ()=>console.log("我在疗伤")
						},
						{
							text: "战斗",
							click: ()=>console.log("我tm负伤战斗！")
						},
						{
							text: "摆烂",
							click: ()=>console.log("我无救了，摆烂吧")
						},
					]
				},
				{
					key: '4',
					index: 4,
					name: "李狗蛋",
					remarks: "别名 李靖",
					status: "重伤",
					buttons: [
						{
							text: "疗伤",
							click: ()=>console.log("我在疗伤")
						},
						{
							text: "战斗",
							click: ()=>console.log("我tm负伤战斗！")
						},
						{
							text: "摆烂",
							click: ()=>console.log("我无救了，摆烂吧")
						},
					]
				},
				{
					key: '5',
					index: 5,
					name: "李狗蛋",
					remarks: "别名 李靖77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777",
					status: "重伤",
					buttons: [
						{
							text: "疗伤",
							click: ()=>console.log("我在疗伤")
						},
						{
							text: "战斗",
							click: ()=>console.log("我tm负伤战斗！")
						},
						{
							text: "摆烂",
							click: ()=>console.log("我无救了，摆烂吧")
						},
					]
				}
			];
			let _self = this;
			this.$bus.emit("页面中改变我的位置",{
				keyPath:["4","4-3"],
				key:"4-3"
			});
			this.$bus.emit("改变Table数据",[dta,col])
		}

	}
</script>

<style scoped>
	::v-deep .remarks {
		max-width: 110px;
		white-space: nowrap;
		overflow: auto;
	}
</style>