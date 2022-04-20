<template>
	<div class="addCharacterTotal">
		<div class="addCharacter">
			<div class="characterTop">
				<div class="characterTitle">
					{{title}}
				</div>
				<div class="characterX">
					<close-outlined @click="this.$bus.emit('改变TotalShow数据',['addCharacterDisplay',false])"/>
				</div>
			</div>
			<div class="characterName">
				<span class="redMark">*</span>
				<label class="promptWord" for="characterName">角色名称：</label>
				<input type="text" placeholder="请输入角色名称" id="characterName" v-model="characterName">
			</div>
			<div class="characterAuthority">
				<span class="redMark">*</span>
				<a-tree-group></a-tree-group>
			</div>
			<div class="characterRemarks">
				<label class="promptWord" for="remarks">备注：</label>
				<input type="text" placeholder="请输入备注" id="remarks" v-model="characterRemarks">
			</div>
			<div class="characterStatus">
				<p class="promptWord">状态：</p>
				<a-switch v-model:checked="switchChecked" />
			</div>
			<div class="characterChoose">
				<a-button class="characterCancel" @click="this.$bus.emit('改变TotalShow数据',['addCharacterDisplay',false])" >取消</a-button>
				<a-button class="characterSure" @click="getAddCharacterData()">确定</a-button>
			</div>
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
		data(){
			return {
				characterName: "",
				characterRemarks: "",
				treeData: [],
				PageStatus: "add",

			};
		},
		props:['title'],
		mounted() {
			let _self = this;
			this.$bus.on("获取树数据",(dta) => {
				_self.treeData = dta;
			})
		},
		methods:{
			getAddCharacterData(){
				this.$bus.emit("获取树节点");
				let dta = {
					treeDta: this.treeData,
					switchStatus: this.switchChecked,
					remarks: this.characterRemarks,
					name: this.characterName,
				};
				console.log("确定",dta);
				if(dta.treeDta.length===0 || !dta.name){
					this.$bus.emit("显现气泡","带*的数据必须填写");
					return;
				}
				//数据传输到服务器上,并在表格中显现
				if(this.PageStatus==="add") {

				}
				else if(this.PageStatus==="change") {

				}
				this.$bus.emit('改变TotalShow数据',['addCharacterDisplay',false]);


			},

		},
		setup() {
			const switchChecked = ref(false);
			return {
				switchChecked,
			};
		},
		onBeforeUnmount() {
			let busArray = ['获取树数据'];
			for(let it of busArray)
				this.$bus.off(it);
			console.log("AddCharacter即将销毁");
			this.$bus.emit("获取树数据")
			console.log("'获取树数据'销毁")
		}

	}
</script>
<style scoped>
	.addCharacterTotal {
		z-index: 1001;
		background-color: white;
		position: fixed;
		width: fit-content;
		height: fit-content;
		margin: auto;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
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
		height: auto;
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
		text-align: right;
		margin-top: 50px;
		margin-right: 10px;
		margin-bottom: 10px;
	}
	.characterAuthority, .characterName {
		padding-left: 25px;
	}
	.characterRemarks, .characterStatus {
		padding-left: 55px;
	}
</style>