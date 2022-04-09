<template>
  <div id="sidebar">
    <div v-for="data in msg" class="container">
      <div>
        <div class="sidebar_img"><img :src="data.src" alt=""></div>
        <div>{{data.text}}</div>
      </div>
    </div>
    <div class="sidebar_img"><img src="../../assets/img/Customer.png" alt=""></div>
    <div class="sidebar_text">人工客服</div>
  </div>
</template>

<script>
export default {
  name: "RightSidebar",
  data() {
    return {
      msg: [
        {
          src: require("../../assets/img/Triangular.png"),
          text: "课程安排"
        },
        {
          src: require("../../assets/img/Headset.png"),
          text: "课程试听"
        },
        {
          src: require("../../assets/img/Message.png"),
          text: "考试查询"
        },
        {
          src: require("../../assets/img/Wechat.png"),
          text: "公众号"
        },
        {
          src: require("../../assets/img/App.png"),
          text: "App下载"
        }
      ],
    }
  },
}
</script>

<style scoped>
.sidebar_img {
  width: 100px;
  position: center;
}
.sidebar_text {
  width: 15%;
  font-size: 50px;
  text-align: center;
}
.container {
  width: 15%;
  font-size: 50px;
  text-align: center;
  border-bottom: #807477 1px solid;
  right: 0px;
}
</style>