<template>
	<div class="treeGroup">
		<p class="treeTitle">角色权限：</p>
		<div class="treeStruct">
			<!--expandedKeys指定默认展开节点-->
			<!--selectedKeys指定默认选中节点[高亮]-->
			<!--checkedKeys选中复选框的树节点【高亮】-->
			<a-tree
					v-model:expandedKeys="expandedKeys"
					v-model:selectedKeys="selectedKeys"
					v-model:checkedKeys="checkedKeys"
					checkable
					:tree-data="treeData"
					@check="onCheck"
			>
				<template #title="{ title, key }">
					<span>{{ title }}</span>
					<template>{{ title }}</template>
				</template>
			</a-tree>
		</div>
	</div>


</template>
<script>
	import { Tree } from 'ant-design-vue';
	import { ref, watch,
		onBeforeUnmount,// 在组件卸载之前执行的函数
	} from 'vue';
	//title为显示文字，key表示关键词用于区别哪个被选中，disabled表示节点的文字可否被选中，
	// disableCheckbox表示checkbox是否可用
	//0-0为根节点
	const treeData = [{
		title: '网站管理',
		key: '0',
		children: [{
			title: 'banner管理',
			key: '0-0',
			children: [{
				title: 'leaf',
				key: '0-0-0',
			}, {
				title: 'leaf',
				key: '0-0-1',
			}],
		}, {
			title: '政策文件管理',
			key: '0-1',
			children: [{
				key: '0-1-0',
				title: '新增',
				},
				{
					key: '0-1-1',
					title: '删除',
				},
				{
					key: '0-1-2',
					title: '编辑',
				},
			],
		},
		],


	}];
	export default {
		name: "TreeGroup",
		components:{
			ATree: Tree,
		},
		data(){
			return {
				allCheckedKeys:[],
			}
		}
		,
		setup() {
			//在setup函数中，可以使用ref函数，用于创建一个响应式数据，当数据发生改变时，Vue会自动更新UI
			const expandedKeys = ref();
			const selectedKeys = ref();
			let checkedKeys = ref();

			watch(expandedKeys, () => {//点击输出
				console.log('expandedKeys', expandedKeys);
			});
			watch(selectedKeys, () => {//点击树节点文字输出key
				console.log('selectedKeys', selectedKeys);
			});
			watch(checkedKeys, () => {//选中输出树节点
				console.log('checkedKeys', checkedKeys);
			});
			return {
				treeData,
				expandedKeys,
				selectedKeys,
				checkedKeys,
			};
		},
		methods:{
			onCheck:function(keys,e) {
				console.log("onCheck")
				console.log(keys)
				keys=[...keys,...e.halfCheckedKeys]
				console.log(keys)
				this.allCheckedKeys=[...keys];
			},

		},
		mounted() {
			let _self = this;
			this.$bus.on("获取树节点",() => {
				_self.allCheckedKeys.sort();
				for(let it of _self.allCheckedKeys) {
					let dta = it.split('-');
					let runCode = "treeData";
					if (dta.length == 0){
						runCode = "";
					}
					else{
						runCode += `[${dta[0]}]`
						for(let i = 1; i < dta.length; i++) {
							runCode += `.children[${dta[i]}]`;
						}
					}
					eval(`console.log(${runCode});`);

				}
			});
		},
		onBeforeUnmount() {
			this.$bus.off("获取树节点");
		}

	}
</script>
<style scoped>
	.treeGroup {
		margin-bottom: 7px;
	}
	.treeTitle, .treeGroup {
		display: inline-block;

	}
	.treeStruct {
		display: inline-block;
		position: relative;
		top: 7px;
		right: 5px;
	}
</style>