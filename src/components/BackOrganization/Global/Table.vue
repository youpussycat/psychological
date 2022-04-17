<template>
	<!--
		columns的数据为表头，data的数据为表中数据
		columns的title为显示的文字，dataIndex为data数据的键值，className为css类用于调整样式
		dataClass为该列数据的类型
		dataClass主要有7种类型：a，image，button，checkbox，switch，html，words. words为默认的不要写
	-->
	<a-table :columns="columns" :data-source="data" bordered>
		<!--text为要显示的文字-->
		<template #bodyCell="{ column, text }">
			<!--每种类型所需要的参数写法-->
			<template v-if="column.dataClass === 'a'">
				<a :href="text.href">{{ text.text }}</a>
			</template>
			<template v-if="column.dataClass === 'image'">
				<img :src="text.src" :alt="text.alt"/>
			</template>
			<template v-if="column.dataClass === 'button'">
				<a-button @click="text.click()">{{text.text}}</a-button>
			</template>
			<template v-if="column.dataClass === 'checkbox'"><!--暂时没有-->

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

</template>

<script>


	import { ref } from 'vue';
 	import { Table, Switch, Button } from 'ant-design-vue';



	export default {
		name: "Table",
		components: {
			ATable: Table,
			ASwitch: Switch,
			AButton: Button,
		},
		setup() {

			return {

			};
		},
		data(){
			return {
				//data      key表示数据标识符，剩余属性为columns所规定的属性
				data : [{
					key: '1',
					name: {
						disabled: false,
						default: false,
					},
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
				}],
				columns: [{
					title: 'Name',
					dataIndex: 'name',
					dataClass: 'switch'
				}, {
					title: 'Cash Assets',
					className: 'column-money',
					dataIndex: 'money',
				}, {
					title: 'Address',
					dataIndex: 'address',
				}],

			};
		}
	}
</script>

<style scoped>

	.TableWords {

	}
	th.column-money, td.column-money {
		text-align: right !important;
	}
</style>