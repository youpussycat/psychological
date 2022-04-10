<template>
  <div>
    <div class="Train">
      <div class="TrainTitle">
        <span>各地培训</span>
        <span>/ Training Arounds</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="TrainContext">
      <div class="ContextBox" v-for="(item, index) in TrainList" :key="index">
        <a href="javascript:void(0)">
          <img src="{{item.image}}">
          <span class="title">{{item.title}}</span>
          <span class="context">{{item.context}}</span>
          <span class="details">查看详情</span>
          <div id="titleArrow0"></div>
          <div id="titleArrow1"></div>
        </a>
        <img class="clock" src="../../assets/img/clock.png">
        <span class="time">{{item.time}}</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name:'TrainingArounds',
  data(){
    return {
      TrainList:[
        {
          image:'',
          title:'中小学生常见心理问题辅导策略',
          context:'中国心理卫生协会心理咨询师专业技能培训年度第一次综合考试时间…',
          time:'2022-01-20'
        },
        {
          image:'',
          title:'长三角高职院校为企业复工复产',
          context:'第一次综合考试时间中国心理卫生协会心理咨询师专业技能培训年度…',
          time:'2022-01-20'
        },
        {
          image:'',
          title:'常见心理问题辅导策略',
          context:'中国心理卫生协会心理咨询师专业技能培训年度第一次综合考试时间…',
          time:'2022-01-20'
        },
        {
          image:'',
          title:'中国心理卫生协会心理咨询师',
          context:'中国心理卫生协会心理咨询师专业技能培训年度第一次综合考试时间…',
          time:'2022-01-20'
        },
        {
          image:'',
          title:'心理问题辅导策略',
          context:'中国心理卫生协会心理咨询师专业技能培训年度第一次综合考试时间…',
          time:'2022-01-20'
        },
        {
          image:'',
          title:'长三角高职院校为企业复工复产',
          context:'中国心理卫生协会心理咨询师专业技能培训年度第一次综合考试时间…',
          time:'2022-01-20'
        }
      ]
    }
  }
}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}

a{
  text-decoration: none;
}


.Train{
  width: 921px;
  height: 31px;
  opacity: 1;
}

.TrainTitle{
  width: 248px;
  height: 22px;
  opacity: 1;
}

.TrainTitle span:nth-child(1){
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 0px;
  color:#053679;
}

.TrainTitle span:nth-child(2){
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 0px;
  color:#E6E6E6;
}

.line{
  width: 921px;
  height: 0px;
  border: 1px solid #F0F0F0;
  opacity: 1;
}

.TrainContext{
  height: 638px;
  width: 921px;
}

.ContextBox {
  position: relative;
  float:left;
  height: 309px;
  width: 293px;
  margin: 0 14px 17px 0;
}

.ContextBox img {
  width: 293px;
  height: 167px;
}

.ContextBox .title{
  display: block;
  width: 224px;
  height: 22px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 700;
  line-height: 26px;
  color: #222222;
  margin: 20px 49px 0 20px
}

.ContextBox .context{
  display: block;
  width: 252px;
  height: 35px;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 18px;
  color: #666666;
  margin: 8px auto 0;
}

.ContextBox .time{
  position: absolute;
  bottom: 20px;
  left: 45px;
  width: 70px;
  height: 17px;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #999999;
  margin-top: 20px;
}

.ContextBox .details{
  position: absolute;
  bottom: 20px;
  right: 38px;
  width: 48px;
  height: 17px;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #616765;
}

.ContextBox #titleArrow0{
  position: absolute;
  right: 22px;
  bottom: 26px;
  width: 12px;
  height: 2px;
  background-color: #809FD0;
}
.ContextBox #titleArrow1{
  position: absolute;
  right: 21px;
  bottom: 28px;
  width: 6px;
  height: 2px;
  transform: rotate(45deg);
  background-color: #809FD0;
}

.ContextBox .clock{
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 15px;
  height: 15px;
}
</style>
