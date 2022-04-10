<template>
		<a-radio-group v-model:value="dotPosition" style="margin-bottom: 8px">
			<a-radio-button value="top">Top</a-radio-button>
			<a-radio-button value="bottom">Bottom</a-radio-button>
			<a-radio-button value="left">Left</a-radio-button>
			<a-radio-button value="right">Right</a-radio-button>
		</a-radio-group>
		<a-carousel :dot-position="dotPosition">
			<div><h3>1</h3></div>
			<div><h3>2</h3></div>
			<div><h3>3</h3></div>
			<div><h3>4</h3></div>
		</a-carousel>


</template>
<script>
	import { Carousel, Radio } from 'ant-design-vue';
	import { ref } from 'vue';
	const baseUrl = 'https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/';
	export default {
		name: "IndexReactCaro",
		components: {
			ACarousel: Carousel,
			ARadioButton:Radio.Button,
			ARadioGroup:Radio.Group,
		},
		setup() {
			const getImgUrl = i => {
				return `${baseUrl}abstract0${i + 1}.jpg`;
			};
			return {
				baseUrl,
				getImgUrl,
				dotPosition: ref('left'),
			};
		},

	}
</script>
<style scoped>
	/* For demo */
	.ant-carousel ::v-deep(.slick-slide) {
		text-align: center;
		height: 160px;
		line-height: 160px;
		background: #364d79;
		overflow: hidden;
	}

	.ant-carousel ::v-deep(.slick-slide h3) {
		color: #fff;
	}
</style>