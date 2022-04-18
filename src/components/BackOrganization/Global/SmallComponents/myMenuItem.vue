<template>
	<a-sub-menu v-if="data.children && data.children.length" :key="data.key">
		<template #title>
			<img v-if="data.img" class="ItemBeforeImg" alt="图片" :src="data.img.src"/>
			{{data.text}}
		</template>
		<template v-for="it in data.children">
			<my-menu-item :data="it"></my-menu-item>
		</template>
	</a-sub-menu>
	<a-menu-item v-else :key="data.key">
		<span>
			<img v-if="data.img" class="ItemBeforeImg" alt="图片" :src="data.img.src"/>
			{{data.text}}
		</span>
	</a-menu-item>
</template>
<script>
	import { reactive, toRefs } from 'vue';
	import { Menu } from 'ant-design-vue'
	import { MailOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
	export default {
		name: "myMenuItem",
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

			};
		},
		props: {
			data: {
				type: Object,
				default() {
					return {};
				}
			},
		}
		,
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
<style scoped>
	.ItemBeforeImg {
		display: inline-block;
		width: 30px;
		height: auto;
	}
</style>