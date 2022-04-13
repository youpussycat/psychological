<template>
  <div id="sideBarContext">
    <div id="breadCrumbContext">
        <a-breadcrumb separator=">">
          <div id="iconHome"><home-outlined /></div>
          <a-breadcrumb-item v-for="_item in breadCrumbList" v-bind:href="_item.href">
            {{_item.name}}
          </a-breadcrumb-item>
        </a-breadcrumb>
    </div>
    <div id="barContext">
      <div id="barHeader">
        <div id="barHeaderContent">
          <p id="barHeaderText">{{HeaderBar.name}}</p>
          <p id="barHeaderTip">{{HeaderBar.tip}}</p>
        </div>
      </div>
      <div id="barList">
        <div class="Bar" v-for="(_bar,_index) in SideBarList" :active="_index==nowIndex" :onclick="`location.href='${_bar.href}'`">
          <p class="BarText">{{_bar.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent} from 'vue';
  import { Breadcrumb } from "ant-design-vue";
  import { HomeOutlined, UserOutlined } from '@ant-design/icons-vue';
  export default {
    name: "SideBar",
    components: {
        ABreadcrumb:Breadcrumb,
        ABreadcrumbItem:Breadcrumb.Item,
        HomeOutlined,
        UserOutlined,
    },
    data() {
      return {
        breadCrumbList:[
          {name:"首页",href:"#"},
          {name:"意见反馈",href:"#"},
        ],
        HeaderBar:{name:"帮助中心",tip:"Help Center"},
        SideBarList:[
            {name:"关于我们",href:"javascript:;"},
            {name:"法律声明",href:"javascript:;"},
            {name:"意见反馈",href:"javascript:;"},
            {name:"举报监督",href:"javascript:;"},
        ],
        nowIndex:3, //从0计数
        locationHref(url){
          window.location.href=url;
        }
      };
    },
    methods: {

    },
    mounted(){

    },
  }
</script>

<style scoped>
  #sideBarContext{
    width: 240px;
    background: #FFF;
  }
  #breadCrumbContext{
    padding:20px 0;
  }
  #iconHome{
    margin-right: 10px;
    display: inline;
  }
  p{
    display: inline;
  }
  #barHeaderText{
    margin-left: 24px;
    font-size: 16px;
    color: #053679;
    font-weight: bolder;
  }
  #barList{
    border: 1px solid #F0F0F0;
  }
  #barHeaderTip{
    font-size: 12px;
    color: #333;
    opacity: 16%;

    left:10px;
    margin:0;
    position:relative;
  }
  #barContext{
    width:240px;
  }
  #barHeader,.Bar{
    height: 50px;
    border: 1px solid #F0F0F0;
    border-left: 0;
  }
  #barHeader{
    width: 240px;
    background: #F8F8F8;
    border-top: 2px solid rgb(5,54,121);
    position: relative;
    vertical-align: middle;
  }
  .Bar{
    width: 205px;
    margin-left: 35px;
  }
  .Bar:hover p{
    text-decoration: underline;
  }
  .Bar[active=true]{
    font-weight: bolder;
    color: #043278;
  }
  .BarText{
    font-size: 16px;
  }
  #barHeaderContent,.BarText{
    top:17px;
    position:relative;
  }
  @import url("../../assets/vendor/css/bootstrap.min.css");
  @import url("../../assets/vendor/css/font-awesome.min.css");
  @import url("../../assets/vendor/css/ace.min.css");
</style>
