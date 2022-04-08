<template>
  <div id="app">
    <!--<a-top-logo></a-top-logo>    组件复用-->
    <!--<router-link to="/Login">Login</router-link> 跳转组件写法-->
    <router-view/><!--表示我现在要用到router中的东西，会从路由中查找-->
  </div>
</template>

<script>
  import TopLogo from "@/components/Global/TopLogo";
  export default {//暴露组件
    name: 'App',
    components: {
      ATopLogo:TopLogo,
    },

    methods: {
      draw (canv, w, h) {
        let contex = canv.getContext('2d');//获取canvas对应的上下文
        let log = new Image();//创建一个img dom对象
        //设置当前画布大小
        canv.width = w;
        canv.height = h;
        let aImg = new Image();//创建img对象
        aImg.src = require("./assets/img/logo.png");//require是为了解析静态路径，要不引用不了
        aImg.onload = function() {//当图片加载好了会运行此函数
          contex.drawImage(aImg, 17, h/10 + 5, 58, 50);//画图片，参数分别为img类，左上角的坐标，图片大小
        }
        contex.font = "600 30px 微软雅黑";//字体样式 粗度 大小 字体
        contex.fillStyle = "black";//画笔颜色
        let txt = "国匠云心理健康网站";//要写的文本
        contex.fillText(txt, 85, 48);//绘制文本
      },

    },
    mounted() {
      // mounted在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
      let canv = document.getElementsByClassName("TopLogocls")[0];//获取canvas的dom对象
      this.draw(canv, 400, 75);
    },

  }
</script>

<style>

</style>
