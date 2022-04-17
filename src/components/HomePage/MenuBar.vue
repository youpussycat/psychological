<template>
  <nav>
    <div class="el-menu-item" href="#">首页</div>
    <div class="el-menu-item" href="#">政策文件</div>
    <div class="el-menu-item" href="#">通知公告</div>
    <div class="el-menu-item" href="#">报考指南</div>
    <div class="el-menu-item" href="#">在线学习</div>
    <div class="el-menu-item" href="#">证书考务</div>
    <div class="el-menu-item" href="#">心理测评</div>
    <div class="el-menu-item" href="#">师资风采</div>
    <div class="el-menu-item" href="#">培训纪实</div>
  </nav>
</template>

<script>
export default {
  name: "MenuBar"
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

  }
</style>