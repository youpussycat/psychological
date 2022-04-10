<template>
  <div class="banner">
    <text style="color: white">{{data.msg1}}</text>
    <text style="color: #00ffb5">{{data.msg2}}</text>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      data: {
        msg1: "心理健康指数是多少？",
        msg2: "快来测一测"
      }
    }
  }
}
</script>

<style scoped>
  .banner {
    background: url("../../assets/img/banner.png") no-repeat center fixed;
    position: relative;
    background-size: cover;
    font-size: 30px;
    font-family: 楷体;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 300px;
  }
</style>