<template>
  <div>
    <div class="Teacher">
      <div class="TeacherTitle">
        <span>名师风采</span>
        <span>/ Famous Teacher Style</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="TeacherContext">
      <li v-for="(item,index) in TeacherList" :key="index">
        <div class="TeacherBox">
          <img class="teacherImg" src="">
          <span class="name">{{item.name}}</span>
          <span class="introduction">{{item.introduction}}</span>
          <div class="likeImg" @click="changeImg(index)">
            <img v-if="item.flag" clsss="like" src="../../assets/img/likes.png">
            <img v-else clsss="like" src="../../assets/img/likes_click.png">
          </div>
          <span class="likes">{{item.likes}}</span>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
export default{
  name:'FamousTeacherTitle',
  data(){
    return {
      TeacherList:[
        {
          image:'',
          name:'黄小明',
          introduction:'心理咨询师，心理培训讲师，EAP讲师，ICF国际认证系统企业教练，深圳心理师协会家庭治疗专业委员会委员，擅长课题《有温度的沟通》，《情绪管理觉察力》',
          likes:110,
          flag:1
        },
        {
          image:'',
          name:'常小菲',
          introduction:'心博睿心理咨询师，天合心理青少年研学老师，首届老年心理健康管理师资库成员。',
          likes:0,
          flag:1
        },
        {
          image:'',
          name:'白淑峰',
          introduction:'心理咨询师，心理培训讲师，EAP讲师，ICF国际认证系统企业教练，深圳心理师协会家庭治疗专业委员会委员，天合心理青少年研学老师，首届老年心理健康管理师资库成员。',
          likes:0,
          flag:1
        },
        {
          image:'',
          name:'宁晓锋',
          introduction:'心理咨询师，心理培训讲师，EAP讲师，ICF国际认证系统企业教练，深圳心理师协会家庭治疗专业委员会委员，擅长课题有温度的沟通，情绪管理觉察力',
          likes:0,
          flag:1
        }
      ]
    }
  },
  methods:{
    changeImg(index){
      this.TeacherList.forEach((item, n)=>{
        if(n === index){
          if(item.flag === 1){
            item.flag = 0;
          }
          item.likes++;
        }
      })
    }
  },
  mounted(){
    this.TeacherList.forEach((item)=>{
      item.flag = 1;
    })
  }
}
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }

  .Teacher{
    width: 921px;
    height: 31px;
    opacity: 1;
  }

  .TeacherTitle{
    width: 248px;
    height: 22px;
    opacity: 1;
  }

  .TeacherTitle span:nth-child(1){
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 0px;
    color:#053679;
  }

  .TeacherTitle span:nth-child(2){
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

  li{
    list-style:none;
  }

  .TeacherBox{
    position: relative;
    width: 921px;
    height: 140px;
    margin: 25px 0;
  }

  .TeacherBox .teacherImg {
    width: 142px;
    height: 117px;
    margin-bottom: 24px;
  }

  .TeacherBox .name{
    position: absolute;
    left: 172px;
    width: 48px;
    height: 22px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #053679;
  }

  .TeacherBox .introduction{
    position: absolute;
    left:172px;
    top:38px;
  }

  .TeacherBox .likes{
    position:absolute;
    right:0
  }

  .TeacherBox .likeImg{
    position:absolute;
    top:0;
    right:30px;
    cursor:pointer;
  }
</style>