<template>
  <div class="container">
    <div style="width: 1200px;">
      <video :src="video.src"></video>
      <div class="sidebar">
        <div v-for="(data, index) in video_data" style="font-size: 14px">
          <div v-if="data.type==='title'" style="margin: 15px">
            <div v-if="index!==0" style="margin: 0; padding: 7px; border-top-color: #313131" class="link-top"></div>
            {{data.context}}
          </div>
          <div v-else style="padding: 10px" class="hover">
            <div class="video_type">{{data.type1}}</div>
            <text>{{data.context}}</text>
            <div class="duration">{{data.duration}}分钟</div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner" style="margin-top: -4px">
      <div class="price" style="padding-top: 15px;">
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
    <div style="float: right; width: 330px; font-size: 16px; padding: 20px; background: #FFFFFF; margin-top: 24px">
      <div style="width: 290px; padding-left: 30px; margin-bottom: -20px">{{course1.title}}</div>
      <div v-for="item in course1.data" style="padding: 20px; height: 220px; width: 290px;">
        <div class="link-top" style="margin-left: 0"></div>
        <img :src="item.img" alt="" style="height: 164px; width: 290px; margin: 10px;">
        <div>{{item.name}}</div>
        <div style="float: right; color: #FD1E1B; margin-top: 8px;">{{item.free}}</div>
        <div style="margin: 5px;">
          <img :src="item.avatar" alt="" style="width: 20px; height: 20px; margin-bottom: -5px; margin-right: 5px;"/>
          <text style="padding-bottom: 10px; font-size: 12px">主讲：{{item.teacher}}</text>
        </div>
      </div>
    </div>
    <div style="background: #FFFFFF; width: 850px; margin-top: 24px;">
      <div style="padding: 10px;">
        <span @click="toggle1()" id="head1" style="font-weight: 800; font-size: 16px; border-bottom: 2px solid #043278; padding-bottom: 7px;">{{course.title}}</span>
        <span @click="toggle2()" id="head2" style="color: #999999; font-size: 16px; margin-left: 50px; padding-bottom: 7px;">{{course.title2}}</span>
      </div>
      <div id="introduction" style="width: 810px; display: block;">
        <input type="text" value=" 课程介绍" disabled>
        <img :src="course.img" alt="" style="width: 798px;">
      </div>
      <div id="catalogue" style="width: 810px; display: none">
        <input type="text" value=" 目录" disabled>
        <div v-for="data in course.context" style="margin-left: 10px">
          <div v-if="data.type==='title'" style="margin: 10px; font-size: 16px; font-weight: 800;">{{data.context}}</div>
          <div v-else style="margin: 10px; font-size: 14px;">
            <div class="link-top"></div>
            <div v-if="data.flag===1" style="float: right">
              <button style="background: #043278; font-size: 10px; width: 40px; height: 20px;">
                已观看
              </button>
            </div>
            <div v-else style="float: right">
              <button style="background: #F5F5F5; color: #999999; font-size: 10px; width: 40px; height: 20px;">
                未观看
              </button>
            </div>
            <div style="margin: 8px;">{{data.context}}</div>
            <div style="float: left; padding-right: 10px; padding-top: 1px; padding-left: 5px;"><img src="../../../assets/img/video.png" alt="" style="width: 18px"></div>
            <div style="color: #CCCCCC">{{data.type1}} | 时长：{{data.duration}}分钟</div>
          </div>
        </div>
        <div style="text-align: center; padding-top: 60px; padding-bottom: 24px; color: #CCCCCC; font-size: 12px;">已到底部</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetails",
  components: {
  },
  methods: {
    toggle1() {
      let a = document.getElementById("introduction");
      let b = document.getElementById("catalogue");
      let c = document.getElementById("head1");
      let d = document.getElementById("head2");
      a.style.display = "block";
      b.style.display = "none";
      d.style.color = "#999999"; d.style.fontWeight = 400; d.style.borderBottom = "none";
      c.style.fontWeight = "800"; c.style.borderBottom = "2px solid #043278"; c.style.color = "#000001";
    },
    toggle2() {
      let a = document.getElementById("introduction");
      let b = document.getElementById("catalogue");
      let c = document.getElementById("head1");
      let d = document.getElementById("head2");
      a.style.display = "none";
      b.style.display = "block";
      c.style.color = "#999999"; c.style.fontWeight = 400; c.style.borderBottom = "none";
      d.style.fontWeight = "800"; d.style.borderBottom = "2px solid #043278"; d.style.color = "#000001";
    }
  },
  data() {
    return {
      video: {
        src: require("../../../assets/video/123.mp4")
      },
      video_data: [
        {
          type: "title",
          context: "第一章：心理健康咨询师大调查"
        },
        {
          type: "context",
          context: "心理健康咨询师是怎样炼成的",
          type1: "录播",
          duration: "18",
          src: require("../../../assets/video/123.mp4"),
        },
        {
          type: "context",
          context: "心理健康咨询师是怎样炼成的",
          type1: "录播",
          duration: "18",
          src: require("../../../assets/video/123.mp4"),
        },
        {
          type: "context",
          context: "心理健康咨询师是怎样炼成的",
          type1: "录播",
          duration: "18",
          src: require("../../../assets/video/123.mp4"),
        },
        {
          type: "title",
          context: "第二章：心理健康咨询师大调查"
        },
        {
          type: "context",
          context: "心理健康咨询师是怎样炼成的",
          type1: "录播",
          duration: "18",
          src: require("../../../assets/video/123.mp4"),
        },
        {
          type: "context",
          context: "心理健康咨询师是怎样炼成的",
          type1: "录播",
          duration: "18",
          src: require("../../../assets/video/123.mp4"),
        },
        {
          type: "context",
          context: "心理健康咨询师是怎样炼成的",
          type1: "录播",
          duration: "18",
          src: require("../../../assets/video/123.mp4"),
        },
        {
          type: "context",
          context: "心理健康咨询师是怎样炼成的",
          type1: "录播",
          duration: "18",
          src: require("../../../assets/video/123.mp4"),
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
        img: require("../../../assets/img/web.png"),
        context: [
          {
            type: "title",
            context: "培训课程第一章",
          },
          {
            type: "context",
            context: "培训课程第一节",
            type1: "录播",
            duration: "18",
            flag: 1,
          },
          {
            type: "context",
            context: "培训课程第一节",
            type1: "录播",
            duration: "18",
            flag: 0,
          },
          {
            type: "context",
            context: "培训课程第一节",
            type1: "录播",
            duration: "18",
            flag: 0,
          }
        ]
      },
      course1: {
        title: "热门课程",
        data: [
          {
            img: require("../../../assets/img/banner1.jpg"),
            name: "心理咨询师暑期集训营",
            teacher: "心博睿",
            free: "免费",
            avatar: require("../../../assets/img/logo.png"),
          },
          {
            img: require("../../../assets/img/banner1.jpg"),
            name: "心理咨询师暑期集训营",
            teacher: "心博睿",
            free: "免费",
            avatar: require("../../../assets/img/logo.png"),
          },
          {
            img: require("../../../assets/img/banner1.jpg"),
            name: "心理咨询师暑期集训营",
            teacher: "心博睿",
            free: "免费",
            avatar: require("../../../assets/img/logo.png"),
          },
        ]
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 1200px;
}
video {
  white-space: nowrap;
  width: 870px;
  height: 489px;
}
.sidebar {
  white-space: nowrap;
  width: 330px;
  height: 489px;
  max-height: 489px;
  overflow-y: auto;
  float: right;
  background: #141414;
  color: #b5b5b5;
  font-size: 14pt;
}
.video_type {
  margin: 3px 10px 10px 10px;
  width: 30px;
  height: 17px;
  background: #6D6D6D;
  color: #141414;
  font-size: 12px;
  float: left;
  text-align: center;
}
.hover:hover .video_type {
  background: #23b7fc;
}
.hover:hover {
  color: #23b7fc;
}
.hover:hover .duration {
  color: #23b7fc;
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
  width: 470px;
}
button {
  width: 100%;
  height: 100%;
  background: #043278;
  font-size: 16pt;
  /*border: 1px solid #000000;*/
  color: #fafafc;
}
.button {
  width: 292px;
  height: 50px;
  float: right;
  padding-right: 16pt;
}
input {
  width: 789px;
  border: none;
  height: 30px;
  font-size: 14px;
  color: #AAAAAA;
  padding-left: 10px;
  margin: 20px 20px 20px 10px;
}
.banner {
  background: #ffffff;
}
.duration {
  padding-left: 30px;
  color: #777777;
  font-size: 12px;
  padding-top: 5px;
}
.link-top {
  width: 100%;
  height: 1px;
  border-top: solid #F5F5F5 1px;
  margin: 16px;
}
</style>
