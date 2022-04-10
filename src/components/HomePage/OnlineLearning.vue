<template>
  <div>
    <div class="LearnHeader">
      <div class="HeaderTop">
        <input type="text" placeholder="请输入课程名进行搜索" onfocus="this.placeholder=''" onblur="this.placeholder='请输入课程名进行搜索'">
        <div class="search">
          <img src="../../assets/img/search.png">
        </div>
        <a href="javascript:void(0)">
          <div class="publicCourse">
            <img src="../../assets/img/public_course.png">
            <span>公开课程</span>
          </div>
        </a>
      </div>
      <div class="LearnList">
        <ul>
          <li>
            <a href="javascript:void(0)">
              <img class="course_icon" src="../../assets/img/foundation_course.png">
              <span>基础课程</span>
              <img class="right_arrow" src="../../assets/img/right_arrow.png">
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img class="course_icon" src="../../assets/img/Level_1_course.png">
              <span>一级课程</span>
              <img class="right_arrow" src="../../assets/img/right_arrow.png">
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img class="course_icon" src="../../assets/img/Level_2_course.png">
              <span>二级课程</span>
              <img class="right_arrow" src="../../assets/img/right_arrow.png">
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img class="course_icon" src="../../assets/img/Level_3_course.png">
              <span>三级课程</span>
              <img class="right_arrow" src="../../assets/img/right_arrow.png">
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img class="course_icon" src="../../assets/img/Live_class.png">
              <span>直播课程</span>
              <img class="right_arrow" src="../../assets/img/right_arrow.png">
            </a>
          </li>
        </ul>
      </div>
      <div class="LearnNav">
        <ul class="comprehensive_sorting">
          <li><span>综合排序：</span></li>
          <li v-for="(item, index) in sort_list" :key="index">
            <span @click="SortClick(index)" :class="{active: sort_flag === index}">{{item}}</span>
          </li>
        </ul>
        <ul class="paid_status">
          <li><span>付费状态：</span></li>
          <li v-for="(item,index) in status_list" :key="index">
            <span @click="StatusClick(index)" :class="{active: status_flag === index}">{{item}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="LearnBox">
      <div class="LearnContext" v-for="(item,index) in CourseList" :key="index">
        <img class="course" src="{{item.image}}">
        <span class="title">{{item.title}}</span>
        <span class="number">学习人数：{{item.number}}</span>
        <span class="level">{{item.level}}</span>
        <img class="clock" src="../../assets/img/clock.png">
        <span class="episode">共{{item.episode}}节</span>
        <div class="horizontal_line"></div>
        <img class="lectuer" src="../../assets/img/lectuer.png">
        <span class="teacher">主讲；{{item.teacher}}</span>
        <span class="status">{{item.status}}</span>
      </div>
    </div>
  </div>

</template>

<script>
export default{
  name:'OnlineLearning',
  data(){
    return {
      sort_list:['最新', '最热'],
      status_list:['全部', '免费', '付费'],
      sort_flag:0,
      status_flag:0,
      CourseList:[
        {
          image:'',
          title:'心理咨询师暑期集训营',
          number:15959,
          level:'一级课程',
          teacher:'新博睿',
          status:'免费',
          episode:189,
          lecturer:'../../assets/img/lectuer.png'
        },
        {
          image:'',
          title:'心理咨询师',
          number:16803,
          level:'二级课程',
          teacher:'新博睿',
          status:'免费',
          episode:189,
          lecturer:'../../assets/img/lectuer.png'
        },
        {
          image:'',
          title:'心博瑞-心理健康社会工作职业技能压力培训',
          number:15959,
          level:'一级课程',
          teacher:'新博睿',
          status:'免费',
          episode:189,
          lecturer:'../../assets/img/lectuer.png'
        },
        {
          image:'',
          title:'网易数据分析实战营',
          number:15959,
          level:'一级课程',
          teacher:'新博睿',
          status:'免费',
          episode:189,
          lecturer:'../../assets/img/lectuer.png'
        },
        {
          image:'',
          title:'心理咨询师暑期集训营',
          number:15959,
          level:'一级课程',
          teacher:'新博睿',
          status:'免费',
          episode:189,
          lecturer:'../../assets/img/lectuer.png'
        },
        {
          image:'',
          title:'心理咨询师',
          number:16803,
          level:'二级课程',
          teacher:'新博睿',
          status:'免费',
          episode:189,
          lecturer:'../../assets/img/lectuer.png'
        },
        {
          image:'',
          title:'心博瑞-心理健康社会工作职业技能压力培训',
          number:15959,
          level:'一级课程',
          teacher:'新博睿',
          status:'免费',
          episode:189,
          lecturer:'../../assets/img/lectuer.png'
        },
        {
          image:'',
          title:'网易数据分析实战营',
          number:15959,
          level:'一级课程',
          teacher:'新博睿',
          status:'免费',
          episode:189,
          lecturer:'../../assets/img/lectuer.png'
        },
      ]
    }
  },
  methods:{
    SortClick(index){
      this.sort_flag = index;
    },
    StatusClick(index){
      this.status_flag = index;
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
}

.LearnHeader{
  width: 1200px;
  height: 168px;
  background: #FFFFFF;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
}

.HeaderTop{
  position: relative;
  width: 1140px;
  height: 48px;
  margin: 20px 30px 0;
}

.HeaderTop input{
  width: 911px;
  height: 48px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  background: #F5F5F5;
  padding-left: 20px;
  border: none;
  outline: none;
}

.HeaderTop input:focus{
  outline: none;
  border: none;
}

.HeaderTop .search{
  position: absolute;
  top: 0;
  right: 196px;
  width: 73px;
  height: 48px;
  background: #CF0814;
  border-radius: 0px 6px 6px 0px;
  cursor: pointer;
}

.HeaderTop .search img{
  padding: 13px 25px;
}

.HeaderTop .publicCourse{
  position: absolute;
  top: 0;
  right: 30px;
  width: 136px;
  height: 48px;
  background: #043379;
  opacity: 0.7;
}

.HeaderTop .publicCourse img{
  position: absolute;
  top: 12px;
  left: 26px;
}

.HeaderTop .publicCourse span{
  position: absolute;
  top: 14px;
  left: 54px;
  width: 56px;
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
}

.LearnList{
  width: 1075px;
  height: 40px;
  margin: 30px 63px 30px 62px;
}

.LearnList li{
  box-sizing: border-box;
  position: relative;
  float: left;
  width: 230px;
  height: 40px;
  border-right: 1px solid #DDDDDD;
}

.LearnList li:nth-child(1){
  float: left;
  width: 177px;
  height: 40px;
  border-right: 1px solid #DDDDDD;
}

.LearnList li:nth-child(5){
  float: left;
  width: 177px;
  height: 40px;
  border: 0;
}

.LearnList li .course_icon{
  position: absolute;
  top: 7px;
  left: 63px;
}

.LearnList li span{
  position: absolute;
  top: 10px;
  left: 110px;
  width: 56px;
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #05327B;
}

.LearnList li .right_arrow{
  position: absolute;
  top: 15px;
  left: 175px;
}

.LearnList li:nth-child(1) .course_icon{
  position: absolute;
  top: 7px;
  left: 0;
}

.LearnList li:nth-child(1) span{
  position: absolute;
  top: 10px;
  left: 46px;
  width: 56px;
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #05327B;
}

.LearnList li:nth-child(1) .right_arrow{
  position: absolute;
  top: 15px;
  left: 110px;
}

.LearnList li:nth-child(5) .course_icon{
  position: absolute;
  top: 7px;
  right: 88px;
}

.LearnList li:nth-child(5) span{
  position: absolute;
  top: 10px;
  left: 104px;
  width: 56px;
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #05327B;
}

.LearnList li:nth-child(5) .right_arrow{
  position: absolute;
  top: 15px;
  left: 170px;
}

.LearnNav{
  position: relative;
  width: 1200px;
  height: 38px;
  background: linear-gradient(180deg, #FFFFFF 0%, #F4F4F4 100%);
  border-radius: 4px 4px 0px 0px;
  margin: 20px 0;
}

.LearnNav ul li{
  float: left;
  position: absolute;
  top: 10px;
  font-family: PingFang SC;
  width: 24px;
  height: 17px;
  font-size: 12px;
  font-weight: 400;
  color: #666666;
  cursor: pointer;
}

.LearnNav .comprehensive_sorting li:nth-child(1){
  left: 10px;
  width: 60px;
  color: #999999;
  cursor: default;
}

.LearnNav .comprehensive_sorting li:nth-child(2){
  left: 86px;
  color: #666666;
}

.LearnNav .comprehensive_sorting li:nth-child(3){
  left: 142px;
}

.LearnNav .paid_status li:nth-child(1){
  left: 298px;
  width: 60px;
  color: #999999;
  cursor: default;
}

.LearnNav .paid_status li:nth-child(2){
  left: 369px;
  color: #666666;
}

.LearnNav .paid_status li:nth-child(3){
  left: 430px;
}

.LearnNav .paid_status li:nth-child(4){
  left: 486px;
}

.active{
  color: #CF0814;
}

.LearnBox {
  box-sizing: border-box;
  width: 1200px;
  height: 714px;
  margin-top: 40px;
}

.LearnContext{
  position: relative;
  float: left;
  width: 291px;
  height: 351px;
  /*background: #FFFFFF;*/
  /*background-color: green;*/
  margin: 0 12px 12px 0;
}

.LearnContext:nth-child(4n){
  margin: 0;
}

.LearnContext .course{
  width:291px;
  height:164px;
}

.LearnContext .title{
  display: block;
  width: 160px;
  height: 22px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #222222;
  margin: 13px 0 37px 12px;
}

.LearnContext .number{
  width: 94px;
  height: 17px;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #666666;
  margin-left: 12px;
}

.LearnContext .level{
  display: block;
  width: 48px;
  height: 17px;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #666666;
  margin: 4px 0 0 12px;
}

.LearnContext .clock{
  position: absolute;
  bottom: 70px;
  left: 216px;
}

.LearnContext .episode{
  position: absolute;
  bottom: 70px;
  right: 11px;
  width: 46px;
  height: 17px;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #999999;
  margin-left: 1px;
  vertical-align: middle;
}

.LearnContext .horizontal_line{
  width: 268px;
  height: 1px;
  background: #F0F0F0;
  margin: 14px 12px 21px;
}

.LearnContext .lectuer{
  position: absolute;
  bottom: 21px;
  left: 12px;
}

.LearnContext .teacher{
  position: absolute;
  bottom: 21px;
  left: 38px;
  width: 72px;
  height: 17px;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #222222;
}

.LearnContext .status{
  position: absolute;
  bottom: 16px;
  right: 11px;
  width: 44px;
  height: 30px;
  font-size: 22px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #FD1E1B;
}
</style>