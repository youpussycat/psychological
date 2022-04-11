<template>
	<a :href="it.url" class="AList" v-for="(it,index) in MesList" :key="index">
		<a  class="AListItem">
			<div class="itemDate">
				<p class="dateDay">{{it.date.day}}</p>
				<p class="dateYM">{{it.date.year}}-{{it.date.month}}</p>
			</div>
			<div class="itemDes">
				<p class="AItemTitle">{{it.title}}</p>
				<p class="AItemDes">{{it.des}}</p>
			</div>

		</a>
	</a>

</template>

<script>
	export default {
		name: "NoticeList",
		data(){
			return {
				MesList:[//列表数据
					{//跳转页面链接，item的时间，标题以及描述
						url: "#",
						date: {
							day:"10",
							month:"01",
							year:"2022"
						},
						title: "中国心理卫生协会心理咨询师",
						des: "中国心理卫生协会心理咨询师专业技能培训 2022年单独第一次综合考试时间安排第一..."
					},{
						url: "#",
						date: {
							day:"10",
							month:"01",
							year:"2022"
						},
						title: "中国心理卫生协会心理咨询师",
						des: "中国心理卫生协会心理咨询师专业技能培训 2022年单独第一次综合考试时间安排第一11111111111111111111111111111111111111111"
					},{
						url: "#",
						date: {
							day:"10",
							month:"01",
							year:"2022"
						},
						title: "中国心理卫生协会心理咨询师",
						des: "中国心理卫生协会心理咨询师专业技能培训 2022年单独第一次综合考试时间安排第一..."
					}
				]

			}
		}

	}
</script>

<style scoped>
	.AList {
		border-bottom: #E9E9E9 solid 1px;
		padding-bottom: 23px;
		background-color: #F7F7F7;
		display: block;
	}
	.AListItem {
		text-decoration: none;
	}
	.itemDate {
		display: inline-block;
		margin-left: 20px;
		margin-right: 47px;
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
		width: 540px;
	}
</style>