<template>
	<div>
		<a-menu
				v-model:openKeys="openKeys"
				v-model:selectedKeys="selectedKeys"
				style="width: 256px"
				mode="inline"
				theme="dark"
		>
			<a-menu-item key="1">
				<template #icon>
					<MailOutlined />
				</template>
				Navigation One
			</a-menu-item>
			<a-menu-item key="2">
				<template #icon>
					<CalendarOutlined />
				</template>
				Navigation Two
			</a-menu-item>
			<a-sub-menu key="sub1">
				<template #icon>
					<AppstoreOutlined />
				</template>
				<template #title>Navigation Three</template>
				<a-menu-item key="3">Option 3</a-menu-item>
				<a-menu-item key="4">Option 4</a-menu-item>
				<a-sub-menu key="sub1-2" title="Submenu">
					<a-menu-item key="5">Option 5</a-menu-item>
					<a-menu-item key="6">Option 6</a-menu-item>
				</a-sub-menu>
			</a-sub-menu>


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