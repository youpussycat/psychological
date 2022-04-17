<template>
  <nav>
    <span v-for="item in data">
      <div class="el-menu-item" :href="item.src">{{item.msg}}</div>
    </span>
  </nav>
</template>

<script>
export default {
  name: "MenuBar",
  data() {
    return {
      data: [
        {
          msg: "首页",
          src: ""
        },
        {
          msg: "政策文件",
          src: ""
        },
        {
          msg: "通知公告",
          src: ""
        },
        {
          msg: "报考指南",
          src: ""
        },
        {
          msg: "在线学习",
          src: ""
        },
        {
          msg: "证书考务",
          src: ""
        },
        {
          msg: "心理测评",
          src: ""
        },
        {
          msg: "师资风采",
          src: ""
        },
        {
          msg: "培训纪实",
          src: ""
        },
      ]
    }
  }
}
</script>

<style scoped>
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav .el-menu-item {
    color: #000000;
    padding: 15px 30px;
    position: relative;
    text-align: center;
    border-bottom: transparent;
    display: flex;
    transition: 0.4s;
    font-size: larger;
    font-weight: bold;
    border-bottom: #807477 3px solid;
  }
  nav .el-menu-item:hover {
    color: #123d80;
    background-color: darkgray;
    /*height: 80px;*/
  }
</style>
