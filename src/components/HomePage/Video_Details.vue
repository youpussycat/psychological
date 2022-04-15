<template>
  <div class="container">
    <div>
      <video :src="video.src"></video>
      <div class="sidebar">
        <div v-for="data in video_data">
          <div v-if="data.type==='title'" style="margin: 20px 20px 20px 20px">{{data.context}}</div>
          <div v-else style="padding: 20px 20px 20px 20px">
            <div class="video_type">{{data.type1}}</div>
            <text>{{data.context}}</text>
          </div>
        </div>
      </div>
    </div>
    <div class="banner">
      <div class="price">
        <span>￥{{banner.price}}</span>
        <div class="button">
          <button>{{banner.button}}</button>
        </div>
      </div>
      <div class="header">{{banner.title}}</div>
      <div class="context">
        <span class="size1">学习人数：{{banner.people}}</span>
        <span class="size1">课程级别：{{banner.grade}}级课程</span>
        <span class="size1">授课教师：{{banner.teacher}}</span>
      </div>
    </div>
    <div>
      <div style="float: right; width: 350px; font-size: 16px; padding: 30px 30px 30px 30px;">
        {{course1.title}}
        <div v-for="item in course1.data" style="padding: 10px 10px 10px 10px">
          <img :src="item.img" alt="">
          <div>{{item.name}}</div>
          <div style="float: right; color: #FD1E1B">{{item.free}}</div>
          <img :src="item.avatar" alt="" style="width: 20px">
          主讲：{{item.teacher}}
        </div>
      </div>
      <div>
        <span>{{course.title}}</span>
        <span>{{course.title2}}</span>
      </div>
      <div>
        <input type="text" value="课程介绍" disabled>
      </div>
      <div>
        <div>{{course.title3}}</div>
        <div v-for="item in course.data" style="width: 460px; float: left;">
          <span>{{item.name}} {{item.props}}</span>
          <span v-html="item.shortcoming"></span>
        </div>
      </div>
      <div>
        <input type="text" value="目录" disabled>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video_Details",
  components: {
  },
  setup() {

  },
  data() {
    return {
      video: {
        src: require("../../assets/video/123.mp4")
      },
      video_data: [
        {
          type: "title",
          context: "第一章：心理健康咨询师大调查"
        },
        {
          type: "context",
          context: "心理健康咨询师是怎样炼成的",
          type1: "录播"
        },
        {
          type: "context",
          context: "心理健康咨询师是怎样炼成的",
          type1: "录播"
        },
        {
          type: "title",
          context: "第二章：心理健康咨询师大调查"
        },
        {
          type: "context",
          context: "心理健康咨询师是怎样炼成的",
          type1: "录播"
        },
      ],
      banner: {
        title: "心博睿—心理健康社会工作职业技能压力培训",
        people: "15959",// 学习人数
        grade: "一",// 课程级别
        teacher: "张三",// 授课教师
        price: "5800",//价格
        button: "立即购买"
      },
      course: {
        title: "课程介绍",
        title2: "目录",
        title3: "Web前端适合学习人群",
        data: [
          {
            name: "在校大学生",
            props: "提高性能与就业竞争力",
            shortcoming: "缺乏工作经验和技能，<br>对未来没有明确的规划"
          },
          {
            name: "提升技能",
            props: "技能提升，多场景应用",
            shortcoming: "已有队伍落伍，担心被淘汰"
          },
          {
            name: "转行",
            props: "突破转行，升职涨薪",
            shortcoming: "职业瓶颈"
          },
          {
            name: "技术爱好",
            props: "前沿技术学习",
            shortcoming: "对web前端技术感兴趣"
          },
        ],
        context: [

        ]
      },
      course1: {
        title: "热门课程",
        data: [
          {
            img: require("../../assets/img/logo.png"),
            name: "心理咨询师暑期集训营",
            teacher: "心博睿",
            free: "免费",
            avatar: require("../../assets/img/logo.png"),
          },
          {
            img: require("../../assets/img/logo.png"),
            name: "心理咨询师暑期集训营",
            teacher: "心博睿",
            free: "免费",
            avatar: require("../../assets/img/logo.png"),
          },
          {
            img: require("../../assets/img/logo.png"),
            name: "心理咨询师暑期集训营",
            teacher: "心博睿",
            free: "免费",
            avatar: require("../../assets/img/logo.png"),
          },
        ]
      }
    }
  }
}
</script>

<style scoped>
.container {
  padding: 20px 300pt 20px 300pt;
}
video {
  width: 67%;
}
.sidebar {
  width: 33%;
  float: right;
  background: #141414;
  color: #b5b5b5;
  font-size: 14pt;
}
.video_type {
  margin: 0px 10px 10px 10px;
  background: #23b7fc;
  color: #141414;
  float: left;
}
.header {
  padding: 10px 10px 10px 10px;
  font-size: 22px;
  font-weight: 500;
}
.context {
  padding: 10px 10px 10px 10px;
  color: #a9a9a9;
  font-size: 12px;
}
.size1 {
  width: 200px;
  display: table-cell;
}
.price {
  color: #ce0915;
  font-size: 24pt;
  float: right;
  font-weight: 500;
  width: 45%;
}
button {
  width: 100%;
  height: 100%;
  background: #043278;
  font-size: 16pt;
  border: none;
  color: #fafafc;
}
.button {
  width: 292pt;
  height: 50pt;
  float: right;
  padding-right: 16pt;
}
input {
  width: 68%;
  border: none;
}
</style>
