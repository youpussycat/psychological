<template>
	<div>
		<a-menu
				v-model:openKeys="openKeys"
				v-model:selectedKeys="selectedKeys"
				style="width: 256px"
				mode="inline"
				theme="dark"
				v-for="it in data"
		>
			<my-menu-item :data="it"></my-menu-item>


		</a-menu>
	</div>
</template>
<script>
	import { reactive, toRefs } from 'vue';
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

		},
		data(){
			return {
				data: [
					{
						key: "1",
						text: "第一级",
						img: {
							src: require("../../../assets/img/logo.png"),
						},
						children: {
							key: "1-1",
							text: "第2级",
							children: {
								key: "1-1-1",
								text: "第3级",
								img: {
									src: require("../../../assets/img/logo.png"),
								}
							}
						}

					},
					{
						key: "2",
						text: "第一级",
						children: {
							key: "2-1",
							text: "第2级",
							children: {
								key: "2-1-1",
								text: "第3级",
							}
						}

					},
				]
			};
		},
		setup() {
			const state = reactive({
				selectedKeys: ['1'],
				openKeys: ['sub1'],
			});

			const changeTheme = checked => {
				state.theme = checked ? 'dark' : 'light';
			};

			return { ...toRefs(state),
				changeTheme,
			};
		},

	}
</script>