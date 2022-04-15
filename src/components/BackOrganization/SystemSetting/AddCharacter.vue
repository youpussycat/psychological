<template>
	<div class="addCharacter">
		<div class="characterTop">
			<div class="characterTitle">
				新增角色
			</div>
			<div class="characterX">
				<close-outlined />
			</div>
		</div>
		<div class="characterName">
			<span class="redMark">*</span>
			<label class="promptWord" for="characterName">角色名称：</label>
			<input type="text" placeholder="请输入角色名称" id="characterName">
		</div>
		<div class="characterAuthority">
			<span class="redMark">*</span>
			<a-tree-group></a-tree-group>
		</div>
		<div class="characterRemarks">
			<label class="promptWord" for="remarks">备注：</label>
			<input type="text" placeholder="请输入备注" id="remarks">
		</div>
		<div class="characterStatus">
			<p class="promptWord">状态：</p>
			<a-switch v-model:checked="switchChecked" />
		</div>
		<div class="characterChoose">
			<a-button class="characterCancel" >取消</a-button>
			<a-button class="characterSure" @click="getAddCharacterData()">确定</a-button>
		</div>
	</div>

</template>

<script>
	import TreeGroup from "@/components/BackOrganization/SystemSetting/SmallComponents/TreeGroup";
	import { Switch, Button } from 'ant-design-vue'
	import {
		CloseOutlined,
	} from '@ant-design/icons-vue';
	import {ref} from "vue";
	export default {
		name: "AddCharacter",
		components:{
			ATreeGroup: TreeGroup,
			ASwitch: Switch,
			AButton: Button,
			CloseOutlined,

		},
		methods:{
			getAddCharacterData(){
				let a = this.$bus.emit("获取树节点");
				let treeData = {...a};
				return {
					status: this.switchChecked,

				}
			},

		},
		setup() {
			const switchChecked = ref(false);
			return {
				switchChecked,
			};
		},


	}
</script>
<style scoped>
	.characterSure {
		background: #bac1c8;
		color: white;
	}
	#characterName, #remarks {
		width: 300px;
		border: currentColor 1px solid;
		outline: none;
	}
	.addCharacter {
		width: 485px;
		border: black 1px solid;
		position: relative;
		left: 400px;
		top: 40px;
		padding-bottom: 50px;
	}
	.characterTitle {
		margin-bottom: 5px;
		margin-top: 5px;
	}
	.characterX {
		float: right;
		margin: 5px 10px 10px 10px;
		font-size: 17px;
	}
	.characterTop {
		margin-bottom: 15px;
		padding-left: 15px;
		border-bottom: black 1px solid;
	}
	.characterTitle, .characterX {
		display: inline-block;
	}
	.promptWord {
		display: inline-block;
		margin-bottom: 20px;
	}
	.redMark {
		display: inline-block;
		color: red;
	}
	.characterChoose {
		position: absolute;
		margin-bottom: 10px;
		margin-right: 10px;
		bottom: 0;
		right: 0;
	}
	.characterAuthority, .characterName {
		padding-left: 25px;
	}
	.characterRemarks, .characterStatus {
		padding-left: 55px;
	}
</style>