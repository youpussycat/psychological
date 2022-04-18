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



		</a-menu>
	</div>
</template>
<script>
	import { reactive, toRefs } from 'vue';
	import { Menu } from 'ant-design-vue'
	import { MailOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
	export default {
		components: {
			MailOutlined,
			CalendarOutlined,
			AppstoreOutlined,
			SettingOutlined,
			AMenu: Menu,
			ASubMenu: Menu.SubMenu,
			AMenuItem: Menu.Item,

		},
		data(){
			return {
				data: {
					key:""
				},
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