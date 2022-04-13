<template>
	<div class="topContents">
		<div class="contentHeaderLeft">
			<p class="contentTitle">{{mes.title}}</p>
			<p class="contentTitleEn">{{mes.titleEn}}</p>
		</div>
		<div class="contentHeaderRight">
			<p class="contentSource">来源：{{mes.source}}</p>
			<p class="contentDate">时间：{{mes.date}}</p>
		</div>
	</div>
	<div class="detailContent">
		<p class="contentDetails" v-html="mes.content"></p>
	</div>
</template>
<script>

	export default {
		name: "ShowDetailsWithPictures",
		data(){
			return {
				mes:{
					title:"项目介绍",
					titleEn:"/ Project Introduction",
					source:"转载",
					date:"2022.03.20",
					content:"",
					details:[
						{
							type:"title",
							content: "内容内容内容内容内容"
						},
						{
							type:"text",
							content: "内容内容内容 内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容。"
						},
						{
							type:"img",
							content:require('../../assets/img/eye.png'),
						},
						{
							type:"text",
							content: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容。"
						},
					]
				}
			};
		},

		mounted() {
			let _self = this;
			const getmes = function(){
				for(let it of _self.mes.details) {
					console.log(it)
					if (it.type == 'img') {
						_self.mes.content += `<img src='${it.content}' alt='内容图片' class="contentImg">`;
					}
					else if (it.type == 'text'){
						_self.mes.content += `<p class="contentWords">${it.content}</p>`;
					}
					else {
						_self.mes.content += `<p class="contentWordsTitles">${it.content}</p>`;
					}
				}

			}
			getmes();
		}

	}
</script>
<style scoped>
	.contentSource, .contentDate {
		color: #999999;
		font-size: 12px;
		margin-top: 5px;
	}
	.contentSource {
		margin-right: 30px;
	}
	::v-deep .contentImg {
		display: block;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 30px;
		margin-top: -10px;
	}
	::v-deep .contentWords, ::v-deep .contentWordsTitles {
		display: block;
		margin-bottom: 30px;
	}
	::v-deep .contentWordsTitles {
		font-weight: 700;
		font-size: 22px;
		text-align: center;
	}
	::v-deep .contentWords {
		font-size: 16px;
		color: #222222;
	}
	.contentHeaderRight {
		float: right;
	}
	.contentHeaderLeft {
		float: left;
	}
	.topContents,.contentDetails {
		margin-left: 40px;
		display: block;
	}
	.contentTitle {
		color: #053679;
		font-size: 16px;
	}
	.contentTitleEn {
		color: #E6E6E6;
		font-size: 16px;
	}

	.contentDate, .contentTitleEn, .contentTitle, .contentSource{
		display: inline-block;
	}
	.detailContent {
		position: absolute;
		top: 65px;
	}
	.topContents {
		height: 30px;
		border-bottom: #F0F0F0 1px solid;
	}

</style>