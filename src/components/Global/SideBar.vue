<template>
  <div class="main-container ace-save-state" id="main-container">
<!--    <script src="../../assets/vendor/js/jquery.min.js"></script>-->
<!--    <script src="../../assets/vendor/js/bootstrap.min.js"></script>-->
<!--    <script src="../../assets/vendor/js/ace.min.js"></script>-->
    <div id="sidebar" class="sidebar responsive ace-save-state"
         data-sidebar="true" data-sidebar-scroll="true" data-sidebar-hover="true">
      <ul class="nav nav-list" style="top: 0;">
        <li class="">
          <a href="#">
            <i class="menu-icon fa fa-tachometer"></i>
            <span class="menu-text"> Dashboard </span>
          </a>
          <b class="arrow"></b>
        </li>
      </ul>
    </div>
<!--    <link rel="stylesheet" href="../../assets/vendor/css/bootstrap.min.css">-->
<!--    <link rel="stylesheet" href="../../assets/vendor/css/font-awesome.min.css">-->
<!--    <link rel="stylesheet" href="../../assets/vendor/css/ace.min.css"-->
<!--          class="ace-main-stylesheet" id="main-ace-style">-->
  </div>
</template>

<script>
  export default {
    name: "SideBar",
    data() {
      return {};
    },
    methods: {},
  }
</script>

<style scoped>
  @import url("../../assets/vendor/css/bootstrap.min.css");
  @import url("../../assets/vendor/css/font-awesome.min.css");
  @import url("../../assets/vendor/css/ace.min.css");
</style>
