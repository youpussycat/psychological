<template>
    <div id="sidebar">
      <div v-for="data in msg" class="sidebartop" @click="data.click">
        <div><img :src="data.src" style="width: 40px" alt=""></div>
        <div>{{data.text}}</div>
      </div>
      <div class="service">
        <div><img src="../../assets/img/Customer.png" style="width: 40px" alt=""></div>
        <div class="sidebar_text">人工客服</div>
      </div>
    </div>
</template>

<script>
export default {
  name: "RightSidebar",
  methods: {
    get_image() {

    }
  },
  data() {
    return {
      msg: [
        {
          src: require("../../assets/img/Triangular.png"),
          text: "课程安排",
          click: ""
        },
        {
          src: require("../../assets/img/Headset.png"),
          text: "课程试听",
          click: ""
        },
        {
          src: require("../../assets/img/Message.png"),
          text: "考试查询",
          click: ""
        },
        {
          src: require("../../assets/img/Wechat.png"),
          text: "公众号",
          click: "get_image"
        },
        {
          src: require("../../assets/img/App.png"),
          text: "App下载",
          click: ""
        }
      ],
    }
  },
}
</script>

<style scoped>
  #sidebar {
    float: right;
    width: 68pt;
    padding-right: 30px;
    padding-top: 100px;
  }
  .sidebartop {
    width: 100%;
    background: #fdfdfe;
    border-bottom: #807477 1px solid;
    font-size: 8px;
    text-align: center;
    padding-bottom: 5px;
    padding-top: 5px;
  }
  .service {
    width: 100%;
    font-size: 10px;
    text-align: center;
    padding-bottom: 10px;
    padding-top: 10px;
  }
</style>
