<template>
	<div class="carousel">
		<a-carousel arrows dots-class="slick-dots slick-thumb">
			<template #customPaging="props">
				<form name="downButton">
					<a>
						<label :for="getImgUrl(props.i)"></label>
						<input type="radio" :id="getImgUrl(props.i)" style="display: block;">
					</a>
				</form>
			</template>
			<div v-for="item in imgCont" :key="item">
				<img :src="baseUrl + 'abstract0' + item + '.jpg'" alt="走马灯图片2"/>

			</div>
		</a-carousel>
	</div>
</template>
<script>
	import {Carousel} from 'ant-design-vue';
	const baseUrl = 'https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/';
	export default {
		name:"IndexTrainingProCaro",
		components:{
			ACarousel:Carousel,
		},
		data() {
			return {

			};
		},
		setup() {
			const getImgUrl = (i) => {
				return `${baseUrl}abstract0${i + 1}.jpg`;
			};
			// eslint-disable-next-line no-unused-vars
			let imgCont = 4;
			return {
				baseUrl,
				imgCont,
				getImgUrl,
			};
		},

	}
</script>
<style scoped>
	/* For demo */
	.ant-carousel {
		height: 100%;
	}
	.ant-carousel ::v-deep(.slick-slider),.ant-carousel ::v-deep(.slick-list),.ant-carousel ::v-deep(.slick-slide),.ant-carousel ::v-deep(.slick-track), .ant-carousel ::v-deep(.slick-track) div{
		height: 100%;
		width: 100%;
	}
	.carousel {
		top:100px;
		width: 100%;
		height: 100%;
	}
	.ant-carousel ::v-deep(.slick-dots){
		margin-right: 0;
		margin-left: auto;
		width: 20%;
	}
	.ant-carousel ::v-deep(.slick-active), .ant-carousel ::v-deep(li),.ant-carousel ::v-deep(.slick-dots li.slick-active){
		width: auto;
	}

	.ant-carousel ::v-deep(.slick-slide img) {
		height: 100%;
		width: 100%;
	}

	.ant-carousel ::v-deep(.slick-next){
		right:0;
	}


</style>