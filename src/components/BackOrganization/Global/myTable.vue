<template>
	<!--
		columns的数据为表头，dta的数据为表中数据
		columns的title为显示的文字，dataIndex为dta数据的键值，className为css类用于调整样式
		dataClass为该列数据的类型
		dataClass主要有6种类型：a，image，buttons，switch，html，words. words为默认的不要写
		     对应的数据类型为 Object,Object,Object,Object,String,String
	-->
	<a-table v-if="check"
			 :columns="columns" :data-source="dta" bordered
			 :pagination="pagination"
			 :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
	>
		<!--text为要显示的文字-->
		<template #bodyCell="{ column, text }">
			<!--每种类型所需要的参数写法-->
			<template v-if="column.dataClass === 'a'">
				<a :href="text.href">{{ text.text }}</a>
			</template>
			<template v-if="column.dataClass === 'image'">
				<img :src="text.src" :alt="text.alt"/>
			</template>
			<template v-if="column.dataClass === 'buttons'" v-for="it in text">
				<a-button @click="it.click()">{{it.text}}</a-button>
			</template>

			<template v-if="column.dataClass === 'switch'">
				<!--只允许text.disabled为true或false表示是否禁用-->
				<!--text.default必须要设置为true或false表示初始值-->
				<a-switch v-model:checked="text.default" :disabled="text.disabled" />
			</template>
			<template v-if="column.dataClass === 'html'" v-html="text">
			</template>

		</template>
	</a-table>
	<a-table v-else
			:columns="columns" :data-source="dta" bordered
			 :pagination="pagination"
	>
		<!--text为要显示的文字-->
		<template #bodyCell="{ column, text }">
			<!--每种类型所需要的参数写法-->
			<template v-if="!(column.dataClass)" v-text="text">
			</template>
			<template v-else-if="column.dataClass === 'a'">
				<a :href="text.href">{{ text.text }}</a>
			</template>
			<template v-else-if="column.dataClass === 'image'">
				<img :src="text.src" :alt="text.alt"/>
			</template>
			<template v-else-if="column.dataClass === 'buttons'" v-for="it in text">
				<a-button @click="it.click()">{{it.text}}</a-button>
			</template>

			<template v-else-if="column.dataClass === 'switch'">
				<!--只允许text.disabled为true或false表示是否禁用-->
				<!--text.default必须要设置为true或false表示初始值-->
				<a-switch v-model:checked="text.default" :disabled="text.disabled" />
			</template>
			<template v-else-if="column.dataClass === 'html'" v-html="text">
			</template>

		</template>
	</a-table>
</template>

<script>
	import { computed,  reactive, toRefs } from 'vue';
 	import { Table, Switch, Button } from 'ant-design-vue';
	export default {

		name: "myTable",
		components: {
			ATable: Table,
			ASwitch: Switch,
			AButton: Button,
		},
		setup() {
			const state = reactive({
				selectedRowKeys: [],
				// Check here to configure the default column
				loading: false,
			});
			const onSelectChange = selectedRowKeys => {
				console.log('selectedRowKeys changed: ', selectedRowKeys);
				state.selectedRowKeys = selectedRowKeys;
			};
			return {
				...toRefs(state),
				onSelectChange,
			};
		},
		mounted() {
			this.totalData = this.dta.length;
			console.log(this.selectedRowKeys);
			let _self = this;
			this.$bus.on("改变Table数据",(dta) => {
				console.log("改变Table数据",dta[0],dta[1]);
				_self.columns = dta[1];
				_self.dta = dta[0];
				_self.totalData = _self.dta.length;
				//
			})
		},
		data(){
			return {
				//用于决定是否最前方有选择栏
				check: false,
				totalData: 0,//实际多少数据
				pagination:{
					total:0,
					defaultPageSize:20,
					showTotal: total => `共 ${total} 条数据`,
					showSizeChanger:true,
					pageSizeOptions: ['20', '100', '200', '500', '1000'],
					onShowSizeChange:(current, pageSize)=>this.pageSize = pageSize
				},
				//data      key表示数据标识符，剩余属性为columns所规定的属性
				columns: [{
					title: 'Name',
					dataIndex: 'name',
					dataClass: 'buttons',
					width:30
				}, {
					title: 'Cash Assets',
					className: 'column-money',
					dataIndex: 'money',
				}, {
					title: 'Address',
					dataIndex: 'address',
				}],

				dta : [{
					key: '1',
					name: [{
						text: "false",
						click: ()=>console.log("ceshi"),
					},{
						text: "false",
						click: ()=>console.log("ceshi"),
					},{
						text: "false",
						click: ()=>console.log("ceshi"),
					}],
					money: '￥300,000.00',
					address: 'New York No. 1 Lake Park',
				}, {
					key: '2',
					name:  {
						disabled: false,
						default: false,
					},
					money: '￥1,256,000.00',
					address: 'London No. 1 Lake Park',
				}, {
					key: '3',
					name:  {
						disabled: false,
						default: true,
					},
					money: '￥120,000.00',
					address: 'Sidney No. 1 Lake Park',
				},{
					key: '4',
					name: {
						disabled: false,
						default: false,
					},
					money: '￥300,000.00',
					address: 'New York No. 1 Lake Park',
				}, {
					key: '5',
					name:  {
						disabled: false,
						default: false,
					},
					money: '￥1,256,000.00',
					address: 'London No. 1 Lake Park',
				}, {
					key: '6',
					name:  {
						disabled: false,
						default: true,
					},
					money: '￥120,000.00',
					address: 'Sidney No. 1 Lake Park',
				},{
					key: '7',
					name: {
						disabled: false,
						default: false,
					},
					money: '￥300,000.00',
					address: 'New York No. 1 Lake Park',
				}, {
					key: '8',
					name:  {
						disabled: false,
						default: false,
					},
					money: '￥1,256,000.00',
					address: 'London No. 1 Lake Park',
				}, {
					key: '9',
					name:  {
						disabled: false,
						default: true,
					},
					money: '￥120,000.00',
					address: 'Sidney No. 1 Lake Park',
				},{
					key: '11',
					name: {
						disabled: false,
						default: false,
					},
					money: '￥300,000.00',
					address: 'New York No. 1 Lake Park',
				}, {
					key: '12',
					name:  {
						disabled: false,
						default: false,
					},
					money: '￥1,256,000.00',
					address: 'London No. 1 Lake Park',
				}, {
					key: '13',
					name:  {
						disabled: false,
						default: true,
					},
					money: '￥120,000.00',
					address: 'Sidney No. 1 Lake Park',
				},{
					key: '14',
					name: {
						disabled: false,
						default: false,
					},
					money: '￥300,000.00',
					address: 'New York No. 1 Lake Park',
				}, {
					key: '15',
					name:  {
						disabled: false,
						default: false,
					},
					money: '￥1,256,000.00',
					address: 'London No. 1 Lake Park',
				}, {
					key: '16',
					name:  {
						disabled: false,
						default: true,
					},
					money: '￥120,000.00',
					address: 'Sidney No. 1 Lake Park',
				},{
					key: '17',
					name: {
						disabled: false,
						default: false,
					},
					money: '￥300,000.00',
					address: 'New York No. 1 Lake Park',
				}, {
					key: '18',
					name:  {
						disabled: false,
						default: false,
					},
					money: '￥1,256,000.00',
					address: 'London No. 1 Lake Park',
				}, {
					key: '19',
					name:  {
						disabled: false,
						default: true,
					},
					money: '￥120,000.00',
					address: 'Sidney No. 1 Lake Park',
				}],
			};
		}

	}
</script>

<style scoped>
	th.column-money, td.column-money {
		text-align: right !important;
	}

</style>