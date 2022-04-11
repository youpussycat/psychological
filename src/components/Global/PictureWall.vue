<template>
	<div class="clearfix">
		<a-upload
				v-model:file-list="fileList"
				action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
				list-type="picture-card"
				@preview="handlePreview"
		>
			<div v-if="fileList.length < 8">
				<plus-outlined />
				<div style="margin-top: 8px">Upload</div>
			</div>
		</a-upload>
		<a-modal :visible="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
			<img alt="example" style="width: 100%" :src="previewImage" />
		</a-modal>
	</div>
</template>
<script>
	import { Upload, Modal } from 'ant-design-vue'
	import { PlusOutlined } from '@ant-design/icons-vue';
	import {  ref } from 'vue';

	function getBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);

			reader.onload = () => resolve(reader.result);

			reader.onerror = error => reject(error);
		});
	}

	export default {
		name:"PictureWall",
		components: {
			PlusOutlined,
			AUpload:Upload,
			AModal:Modal,
		},

		setup() {
			const previewVisible = ref(false);
			const previewImage = ref('');
			const previewTitle = ref('');
			const fileList = ref([
				//uid:文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
				//  name文件名称   status状态   url图片显示路径
				{
				uid: '-2',
				name: 'image.png',
				status: 'done',
				url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			}, {
				uid: '-3',
				name: 'image.png',
				status: 'done',
				url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			}, {
				uid: '-4',
				name: 'image.png',
				status: 'done',
				url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			}, {
				uid: '-xxx',
				percent: 50,
				name: 'image.png',
				status: 'uploading',
				url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			}, {
				uid: '-5',
				name: 'image.png',
				status: 'error',
			}]);

			const handleCancel = () => {
				previewVisible.value = false;
				previewTitle.value = '';
			};

			const handlePreview = async file => {
				if (!file.url && !file.preview) {
					file.preview = await getBase64(file.originFileObj);
				}

				previewImage.value = file.url || file.preview;
				previewVisible.value = true;
				previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
			};

			return {
				previewVisible,
				previewImage,
				fileList,
				handleCancel,
				handlePreview,
				previewTitle,
			};
		},

	}
</script>
<style>
	/* you can make up upload button and sample style by using stylesheets */
	.ant-upload-select-picture-card i {
		font-size: 32px;
		color: #999;
	}

	.ant-upload-select-picture-card .ant-upload-text {
		margin-top: 8px;
		color: #666;
	}
</style>