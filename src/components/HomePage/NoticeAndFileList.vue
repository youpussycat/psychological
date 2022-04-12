<template>
	<a-button type="primary">Primary</a-button>
	<a-button>secondary</a-button>
	<a-dropdown>
		<template #overlay>
			<a-menu @click="handleMenuClick">
				<a-menu-item key="1">1st item</a-menu-item>
				<a-menu-item key="2">2nd item</a-menu-item>
				<a-menu-item key="3">3rd item</a-menu-item>
			</a-menu>
		</template>
		<a-button>
			Actions
			<DownOutlined />
		</a-button>
	</a-dropdown>
</template>
<script>
	import { DownOutlined } from '@ant-design/icons-vue';
	import { Button, Menu, Dropdown } from "ant-design-vue";

	export default {
		name:"NoticeAndFileList",
		components: {
			DownOutlined,
			AButton:Button,
			AMenu:Menu,
			ADropdown: Dropdown,
			AMenuItem: Menu.Item,

		},

		setup() {
			const handleMenuClick = e => {
				console.log('click', e);
			};

			return {
				handleMenuClick,
			};
		},

	}
</script>