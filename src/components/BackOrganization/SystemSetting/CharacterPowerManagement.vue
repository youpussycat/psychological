<template>
	<div class="SearchAndButton">
		<div class="SearchMenu">
			<SearchBar></SearchBar>
		</div>
		<Button class="AddCharacterButton" @click="this.$bus.emit('改变TotalShow数据',['addCharacterTitle','新增角色']);this.$bus.emit('显现角色数据栏')">新增角色</Button>
	</div>
	<div class="myTableInCharacterMan">
		<my-table></my-table>
	</div>


</template>

<script>
	import myTable from "@/components/BackOrganization/Global/myTable";
	import SearchBar from "@/components/BackOrganization/Global/SearchBar";
	import Bubble from "@/components/BackOrganization/Global/Bubble";
	import { Button } from 'ant-design-vue';
	export default {
		name: "CharacterPowerManagement",
		components: {
			SearchBar,
			MyTable: myTable,
			MyBubble: Bubble,
			Button,


		},
		methods: {
			butnProduction: function(ll){
				let _self = ll;//此时为data返回值
				return [
					{
						text: "编辑",
						cont: _self.keyCont,
						click: function(){
							console.log(_self.tableDta[this.cont]);
							_self.UsingKey = this.cont;
							//调用编辑窗口
							_self.$bus.emit("改变TotalShow数据",["addCharacterTitle","编辑角色"])
							_self.$bus.emit("改变TotalShow数据",["addCharacterDisplay",true])
							//修改addcharacter中的switchChecked，和名字和备注和状态
							//下面写totalshow文件的气泡确认change事件总线修改表和数据库

						}
					},
					{
						text: "禁用",
						cont: _self.keyCont,
						click: function(){
							console.log(_self.tableDta[this.cont])
							_self.UsingKey = this.cont;
							if(_self.tableDta[this.cont].using) {//被引用
								_self.$bus.emit("显现气泡", "该角色已被引用，确定禁用吗");
							}
							else{
								_self.$bus.emit("显现气泡", "确定禁用该角色吗");
							}
						}
					},
					{
						text: "删除",
						cont: _self.keyCont,
						click: function(){
							console.log(_self.tableDta[this.cont]);
							_self.$bus.emit("显现气泡", "确定删除该角色吗");
						}
					}
				];
			},
			setTableDta: function(dta) {
				this.tableDta=[];
				for(let i of dta){
					i["buttons"] = this.$options.methods.butnProduction(this);
					i['status'] = i.characterStatus?"启用":"禁用";
					this.tableDta.push(i);
				}
			}
		},

		data() {
			return {
				name: "本vue的dta",
				tableDta: [],
				keyCont: 0,
				UsingKey: -1,
				bubbleEndStatus: -1,
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

			this.$bus.on("气泡回复",([status,titleStatus])=>{
				if(status) {
					if(titleStatus==="delete"){
						//是否被引用
						if(_self.tableDta[_self.UsingKey].using) {
							_self.$bus.emit("关闭气泡");
							_self.$bus.emit("显现气泡", "该角色已被引用，不可被删除");
						}
						else{
							//服务器数据删除

							_self.tableDta.splice(_self.UsingKey,1);
						}

					}
					else if(titleStatus==="off") {

						//禁用
						if(_self.tableDta[_self.UsingKey].using){
							//删除服务器中该角色所有权限

						}
						//服务器中禁用该角色

						//表格中禁用该角色
						_self.tableDta[_self.UsingKey].status = "禁用";
						_self.UsingKey = -1;
					}
				}
			})
			//改变搜索框样式
			//left为数据项的左侧宽度，segment为文字与输入框间的距离
			//buttonLeft是数据项与搜索按钮的距离
			//input的type有select和text，text可默认不写
			//value为默认值或选项，为选项时数据类型为字符串数组，默认选项为选项值的第一个
			//tip为input前面文字说明。
			//input内部的width为input的宽度



			let dta = [
				{
					key: '1',
					index: 1,
					name: "李狗蛋",
					remarks: "别名 李靖",
					characterStatus: true,
					using: 0,
					power: ["0-0-1",'0-1-0'],
					powerDetails:['0','0-0','0-0-1','0-1','0-1-0']
				},
			];

			this.setTableDta(dta);

			this.$bus.emit("页面中改变我的位置",{
				keyPath:["4","4-3"],
				key:"4-3"
			});
			this.$bus.emit("改变Table数据",[this.tableDta,col])
		},
		onBeforeUnmount() {
			let busArray = ["气泡回复"];
			for(let it of busArray)
				this.$bus.off(it);
		}

	}
</script>

<style scoped>
	.SearchAndButton {
		width: fit-content;
		white-space: nowrap;
		background-color: #EEE;
		border: 1px solid #BBB;
	}
	.SearchMenu, .AddCharacterButton{
		display: inline-block;
	}
	::v-deep .remarks {
		max-width: 110px;
		white-space: nowrap;
		overflow: auto;
	}
</style>