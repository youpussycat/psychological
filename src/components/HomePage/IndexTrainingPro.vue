<template>


	<div class="indexTrainingPro">
		<index-training-pro-caro></index-training-pro-caro><!--走马灯组件-->
		<b class="imgDes">{{imgMes[1]}}</b><!--图片描述-->

	</div>
	<div id="article" ><!--文章内容-->
		<div id="content" v-html="Message">
		</div>
	</div>
</template>

<script>
	import IndexTrainingProCaro from "@/components/Carousels/IndexTrainingProCaro";
	export default {
		name: "IndexTrainingPro",
		components: {
			IndexTrainingProCaro,
		},
		data() {
			return {
				imgMes:[ //显示在图片上的文字描述
					"D:\\Desktop\\StudyProject\\psychology\\psychological\\src\\components\\HomePage\\IndexTrainingPro.vue",
					"第2个文字描述",
					"第3个文字描述",
					"第4个文字描述",
				],
				Message:"",//html生成内容【不用管】
				mess:[//内容，内容类型       内容类型 0：大标题  1：小标题  2：普通文本
					["标题啊", 0],
					["小标题啊", 1],
					["普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊", 2],
					["小标题啊", 1],
					["普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊普通内容啊", 2],
					["小标题啊", 1],
					["普通内容啊普通内容啊普通内通内容啊普通内容啊普通内容啊普通内容啊普通内容啊", 2]
				]
			}
		},
		created() {//生成文本对应的html内容
			for (let it of this.mess) {
				if (it[1] == 0) {
					this.Message += "<p class='BigText'>" + it[0]  + "</p>";
				}
				else if (it[1] == 1) {
					this.Message += "<p class='SmallText'>" + it[0]  + "</p>";
				}
				else {
					this.Message += "<p class='NormalText'>" + it[0]  + "</p>";
				}
			}
		},

	}
</script>

<style scoped>
	.indexTrainingPro{
		width: 50%;
		height: 100%;
		position: absolute;
	}
	#article {
		width: 50%;
		height: 100%;
		position: absolute;
		right:0;
		background-color: #05327B;
	}
	#content {
		position: absolute;
		top: 40px;
	}
	.imgDes {
		position: absolute;
		font-size: 20px;
		top: 90%;
		left: 5%;
		width: 95%;
		color: white;
		overflow: hidden;
	}
	::v-deep(.BigText),::v-deep(.NormalText),::v-deep(.SmallText) {
		margin-left: 70px;
		word-wrap:break-word;
		margin-bottom: 20px;
	}
	::v-deep(.BigText) {
		font-size: 20px;
		color: white;
	}
	::v-deep(.NormalText) {
		font-size: 14px;
		color: #d2d5dd;
		font-weight: 100;
	}
	::v-deep(.SmallText) {
		margin-bottom: 4px;
		font-size: 12px;
		color: #8e8da7;

	}
</style>