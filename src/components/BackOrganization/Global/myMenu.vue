<template>
	<div>
		<a-menu
				v-model:openKeys="openKeys"
				v-model:selectedKeys="selectedKeys"
				style="width: 256px"
				mode="inline"
				theme="dark"
				v-for="it in dta"
				@select="changeMyPosition"
		>
			<my-menu-item :data="it"></my-menu-item>


		</a-menu>
	</div>
</template>
<script>
	import { reactive, toRefs } from 'vue';
	import MyPosition from "@/components/BackOrganization/Global/MyPosition";
	import { Menu } from 'ant-design-vue'
	import  myMenuItem  from './SmallComponents/myMenuItem'
	import { MailOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
	export default {
		name:"myMenu",
		components: {
			MailOutlined,
			CalendarOutlined,
			AppstoreOutlined,
			SettingOutlined,
			AMenu: Menu,
			ASubMenu: Menu.SubMenu,
			AMenuItem: Menu.Item,
			myMenuItem,
			MyPosition,

		},
		data(){
			return {
				res: [],
				dta: [
					{
						key: "1",
						text: "第1级",
						img: {
							src: require("../../../assets/img/logo.png"),
						},
						children: [{
							key: "1-1",
							text: "第1-1级",
							children: [{
								key: "1-1-1",
								text: "第1-1-1级",
								img: {
									src: require("../../../assets/img/logo.png"),
								}
							}]
						}]

					},
					{
						key: "2",
						text: "第2级",
						children: [{
							key: "2-1",
							text: "第2-1级",
							children: [{
								key: "2-1-1",
								text: "第2-1-1级",
							},
							]
						}]

					},
				]
			};
		},
		methods: {

			myTraversal: function(dta,_self){
				for(let it of dta) {
					if (it.children && it.children.length) {
						_self.res.push(it.key);
						this.myTraversal(it.children, _self)
					}
				}
			},
			mySearch: function(dta,_self,index,keyPath,res=""){
				for(let it of dta) {
					if (it.key === keyPath[index]) {
						res += " > " + it.text;
						if (it.children && it.children.length ) {
							res = this.mySearch(it.children, _self, index + 1, keyPath, res)
							break;
						}
						else
							return res;
					}

				}

				return res;
			},
			openAll: function(data){
				this.$options.methods.myTraversal(data,this);
				console.log("所有的有子节点的节点key值为",this.res);
				return this.res;
			},
			changeMyPosition: function(dtas) {
				console.log(dtas.keyPath);
				console.log(this.dta);
				let res = "";
				let item = this.dta;
				let i = 0;
				while (!(item[i].key === dtas.keyPath[0])){
					i++;
				}
				res += item[i].text;
				res = this.$options.methods.mySearch(item[i].children,this,1,dtas.keyPath,res);
				console.log(res);
				this.$bus.emit("改变我的位置",res);
			}
		},
		setup() {

			const state = reactive({
				selectedKeys: [],
				openKeys: [],
			});
			return { ...toRefs(state),
			};
		},
		mounted() {
			this.openKeys = [...this.openAll(this.dta)];
			let _self = this;
			this.$bus.on("后端界面Menu数据传输",
				(data)=>{
					_self.dta = data;
				})
		}

	}
</script>