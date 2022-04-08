<template>
  <div id="app">
    <!--<a-top-logo></a-top-logo>    组件复用-->
    <!--<router-link to="/Login">Login</router-link> 跳转组件写法-->
    <router-view/><!--表示我现在要用到router中的东西，会从路由中查找-->
  </div>
</template>

<script>
  //import TopLogo from "@/components/Global/TopLogo";  复用组件引入
  export default {//暴露组件
    name: 'App',
    components: {
      //ATopLogo:TopLogo, 复用组件注册
    },

    methods: {


    },
    mounted() {
      // mounted在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作

    },

  }
</script>

<style>

</style>
