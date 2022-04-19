<template>
	<div class="SearchMenu">
		<SearchBar></SearchBar>
	</div>
	<div class="myTableInCharacterMan">
		<my-table></my-table>
	</div>


</template>

<script>
	import myTable from "@/components/BackOrganization/Global/myTable";
	import SearchBar from "@/components/BackOrganization/Global/SearchBar";
	import Bubble from "@/components/BackOrganization/Global/Bubble";
	export default {
		name: "CharacterPowerManagement",
		components: {
			SearchBar,
			MyTable: myTable,
			MyBubble: Bubble,


		},
		methods: {
			butnProduction: function(ll){
				let _self = ll;
				return [
					{
						text: "编辑",
						cont: _self.keyCont,
						click: function(){
							console.log(_self.tableDta[this.cont])
						}
					},
					{
						text: "禁用",
						cont: _self.keyCont,
						click: function(){
							console.log(_self.tableDta[this.cont])
						}
					},
					{
						text: "删除",
						cont: _self.keyCont,
						click: function(){
							console.log(_self.tableDta[this.cont]);

							_self.tableDta.splice(this.cont,1)
						}
					}
				];
			},
			setTableDta: function(dta) {
				this.tableDta=[];
				for(let i of dta){
					i["buttons"] = this.$options.methods.butnProduction(this);
					this.tableDta.push(i);
				}
			}
		},

		data() {
			return {
				name: "本vue的dta",
				tableDta: [],
				keyCont: 0,
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
			let _self = this;

			let dta = [
				{
					key: '1',
					index: 1,
					name: "李狗蛋",
					remarks: "别名 李靖",
					status: "重伤",
				},
			];
			this.setTableDta(dta);

			this.$bus.emit("页面中改变我的位置",{
				keyPath:["4","4-3"],
				key:"4-3"
			});
			this.$bus.emit("改变Table数据",[this.tableDta,col])
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