<template>
  <div id="sidebar">
    <div v-for="data in msg" class="sidebartop" >
      <a v-if="data.text==='公众号'" @click="data.click()">
        <div ><img :src="data.src" style="width: 40px" alt=""></div>
        <div>{{data.text}}</div>
      </a>
      <a v-else>
        <div ><img :src="data.src" style="width: 40px" alt=""></div>
        <div>{{data.text}}</div>
      </a>
    </div>
    <img id="wechat" :src="img" alt="">
    <div class="service">
      <div><img src="../../assets/img/Customer.png" style="width: 40px;" alt=""></div>
      <div class="sidebar_text">人工客服</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightSidebar",
  methods: {
    get_image() {
      let a = document.getElementById("wechat");
      if(a.style.display === "block")
        a.style.display="none";
      else a.style.display="block";
    }
  },
  data() {
    let _self = this;
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
          click: _self.get_image
        },
        {
          src: require("../../assets/img/App.png"),
          text: "App下载",
          click: ""
        }
      ],
      img: require("../../assets/img/Official_Account.png")
    }
  },
}
</script>

<style scoped>
  #sidebar {
    float: right;
    width: 120pt;
    padding-right: 12pt;
    padding-top: 100px;
  }
  .sidebartop {
    width: 68pt;
    background: #fdfdfe;
    border-bottom: #807477 1px solid;
    font-size: 8px;
    text-align: center;
    padding-bottom: 5px;
    padding-top: 5px;
    float: right;
  }
  .service {
    width: 68pt;
    font-size: 10px;
    text-align: center;
    padding-bottom: 10px;
    padding-top: 10px;
    float: right;
  }
  #wechat {
    width: 40pt;
    padding-top: 220px;
    display: none;
  }
</style>
