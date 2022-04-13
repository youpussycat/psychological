<template>
	<div class="treeGroup">
		<p class="treeTitle">角色权限：</p>
		<div class="treeStruct">
			<a-tree
					v-model:expandedKeys="expandedKeys"
					v-model:selectedKeys="selectedKeys"
					v-model:checkedKeys="checkedKeys"
					checkable
					:tree-data="treeData"
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
	import { ref, watch } from 'vue';
	//title为显示文字，key表示关键词用于区别哪个被选中，disabled表示节点的文字可否被选中，
	// disableCheckbox表示checkbox是否可用
	//0-0为根节点
	const treeData = [{
		title: '网站管理',
		key: '0-0',
		children: [{
			title: 'banner管理',
			key: '0-0-0',
			children: [{
				title: 'leaf',
				key: '0-0-0-0',
			}, {
				title: 'leaf',
				key: '0-0-0-1',
			}],
		}, {
			title: '政策文件管理',
			key: '0-0-1',
			children: [{
				key: '0-0-1-0',
				title: '新增',
				},
				{
					key: '0-0-1-1',
					title: '删除',
				},
				{
					key: '0-0-1-2',
					title: '编辑',
				}
			],
		}],
	}];
	export default {
		name: "TreeGroup",
		components:{
			ATree: Tree,


		},
		setup() {
			const expandedKeys = ref(['0-0-0', '0-0-1']);
			const selectedKeys = ref([]);
			const checkedKeys = ref(['0-0-0', '0-0-1']);
			watch(expandedKeys, () => {
				console.log('expandedKeys', expandedKeys);
			});
			watch(selectedKeys, () => {
				console.log('selectedKeys', selectedKeys);
			});
			watch(checkedKeys, () => {
				console.log('checkedKeys', checkedKeys);
			});
			return {
				treeData,
				expandedKeys,
				selectedKeys,
				checkedKeys,
			};
		},

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