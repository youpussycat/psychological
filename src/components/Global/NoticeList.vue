<template>
	<div id="background">
		<div id="main">
			<div id="title">
				<h3 id="titleText">培训纪实</h3>
				<div id="titleBottom"></div>
				<p id="titleMore">更多</p>
				<div id="titleArrow0"></div>
				<div id="titleArrow1"></div>
			</div>
			<div id="context">
				<div class="contextImage">
					<img class="contextImage">
					<div id="contextImageList">
						<img class="ctxImageUnit" v-for="i in [1,2,3,4]">
					</div>
					<div class="ArrowContext upContext" @click="photoUpButton">
						<div class="ArrowLeft"></div>
						<div class="ArrowRight"></div>
					</div>
					<div class="ArrowContext downContext" @click="photoDownButton">
						<div class="ArrowLeft"></div>
						<div class="ArrowRight"></div>
					</div>
				</div>
				<div id="textContext">
					<a :href="it.url" class="AList" v-for="(it,index) in MesList" :key="index">
						<div class="itemDate">
							<p class="dateDay">{{it.date.day}}</p>
							<p class="dateYM">{{it.date.year}}-{{it.date.month}}</p>
						</div>
						<div class="itemDes">
							<p class="AItemTitle">{{it.title}}</p>
							<p class="AItemDes">{{it.des}}</p>
						</div>
					</a>
				</div>
			</div>
		</div>
		<img id="emptyIMG" style="display: none;" src="../../assets/img/logo.png"/>
	</div>

</template>

<script>
	export default {
		name: "NoticeList",
		data(){
			let rand=(n=12,l=2)=>{
				return String(Math.floor(Math.random()*n)).padStart(l,"0");
			};
			return {
				MesList:[//列表数据
					{//跳转页面链接，item的时间，标题以及描述
						url: "javascript:;",
						date: {day:"03",month:"01",year:"2022"},
						title: "中国心理卫生协会心理咨询师",
						des: "中国心理卫生协会心理咨询师专业技能培训 2022年单独第一次综合考试时间安排第一..."
					},{
						url: "javascript:;",
						date: {day:"15",month:"05",year:"2022"},
						title: "中国心理卫生协会心理咨询师",
						des: "中国心理卫生协会心理咨询师专业技能培训 2022年单独第一次综合考试时间安排第一11111111111111111111111111111111111111111"
					},{
						url: "javascript:;",
						date: {day:"12",month:"01",year:"2022"},
						title: "中国心理卫生协会心理咨询师",
						des: "中国心理卫生协会心理咨询师专业技能培训 2022年单独第一次综合考试时间安排第一..."
					},{
						url: "javascript:;",
						date: {day:"12",month:"01",year:"2022"},
						title: "中国心理卫生协会心理咨询师",
						des: "中国心理卫生协会心理咨询师专业技能培训 2022年单独第一次综合考试时间安排第一..."
					}
				],

			}
		},
		method:{
			photoUpButton(ev){
				console.log("up");
			},
			photoDownButton(ev){
				console.log("down");
			},
		}
	}
</script>

<style scoped>
	.AList {
		width: 500px;
		height: 82px;
		border-bottom: #E9E9E9 solid 1px;
		padding-bottom: 21px;
		background-color: #F7F7F7;
		display: block;
	}
	.itemDate {
		display: inline-block;
		margin-left: 20px;
		margin-right: 43px;
	}
	.dateDay {
		display: inline-block;
		color: #05327B;
		font-size: 26px;
		position: relative;
		left: 14px;
	}
	.dateYM {
		font-size: 14px;
		color: #222222;
	}
	.itemDes {
		display: inline-block;
		text-overflow:ellipsis;
		margin-right: 46px;
		width: 336px;
		height: 49px;
	}
	.AItemTitle {
		color: #222222;
		font-size: 18px;
		margin-bottom: 4px;
	}
	.AItemDes {
		color: #666666;
		font-size: 14px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 336px;
	}


	#background {
		background-color: #F7F7F7;
		height: 534px;
	}

	#main {
		width:1200px;
		margin: 0 auto;
	}
	#title{
		width: 100%;
		height: 82px;
		position: relative;
	}
	#titleText{
		margin: 0;

		top: 40px;
		position: absolute;
	}
	#titleBottom{
		background-color: #05327B;
		width: 39px;
		height: 2px;

		bottom: 0;
		position: absolute;
	}
	#titleMore{
		right: 34px;
		top: 45px;
		position: absolute;
	}
	#titleArrow0{
		background-color: #809FD0;
		width: 14px;
		height: 2px;

		right: 14px;
		top: 56px;
		position: absolute;
	}
	#titleArrow1{
		background-color: #809FD0;
		width: 7px;
		height: 2px;
		transform: rotate(45deg);

		right: 14px;
		top: 53px;
		position: absolute;
	}


	#context{
		top:10px;
		position: relative;
	}
	.contextImage{
		width: 646px;
		height: 392px;
		display: inline-block;
		position: relative;
	}
	.ctxImageUnit{
		width: 180px;
		height: 98px;
		display: table-cell;
	}
	#contextImageList{
		position: absolute;
		top: 0;right: 0;
	}
	#textContext{
		float: right;
		width: 500px;
	}


	.ArrowContext{
		position: absolute;
		background: #04317A;
		opacity: 80%;
		border-radius: 0 0 3px 3px;
		width: 36px;
		height: 12px;
	}
	.ArrowLeft{
		background: #FFF;
		width: 9px;height: 2px;
		transform: rotate(150deg);

		left: 10px;
		bottom: 5px;
		position: absolute;
	}
	.ArrowRight{
		background: #FFF;
		width: 9px;height: 2px;
		transform: rotate(30deg);

		left: 16px;
		bottom: 5px;
		position: absolute;
	}
	.upContext{
		top:0;
		right: 72px;
	}
	.downContext{
		bottom:0;
		right: 72px;
		transform: rotate(180deg);
	}
</style>
