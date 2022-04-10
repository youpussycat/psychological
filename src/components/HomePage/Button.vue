<template>
<div class="container">
  <button v-for="button in Button" class="mybtn">
    <img :src="button.img" alt="">
    <div v-text="button.text"></div>
  </button>
</div>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      Button: [
        {
          img: require("../../assets/img/证书查询1.png"),
          text: "证书查询"
        },
        {
          img: require("../../assets/img/证书下载.png"),
          text: "证书下载"
        },
        {
          img: require("../../assets/img/考务系统.png"),
          text: "证书考务系统"
        },
        {
          img: require("../../assets/img/证书查询2.png"),
          text: "证书查询"
        },
        {
          img: require("../../assets/img/资料下载.png"),
          text: "资料下载"
        },
        {
          img: require("../../assets/img/测评系统.png"),
          text: "心理测评系统"
        },
      ]
    }
  }
}
</script>

<style scoped>
  .container {
    padding-left: 50px;
  }
  .mybtn {
    width: 33%;
    float: left;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    padding-top: 50px;
    background: none;
    border: 1px solid white;
  }
  img {
    width: 200px;
    float: initial;
  }
  .mybtn:active {
    color: #4FA9FD;
    border: 1px solid #4FA9FD;
  }
  .mybtn:focus {
    color: #4FA9FD;
    border: 1px solid #4FA9FD;
  }
</style>