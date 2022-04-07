<template>
  <div id="banner">
    <div class="banner_img">
      <!-- 图片展示 -->
      <img :src="imgArr[index]" alt="" />

      <!-- 左箭头 -->
      <a href="javascript:void(0)"  @click="prev" class="left">
        <img src="../../assets/img/prev.png" alt="" />
      </a>
      <!-- 右箭头 -->
      <a href="javascript:void(0)"  @click="next" class="right">
        <img src="../../assets/img/next.png" alt="" />
      </a>
    </div>
    <!-- 小圆点展示 -->
    <div class="dots">
      <ul>
        <li v-for="(item, num) in imgArr" :key="num" :class="{'active':num===index}" @mouseover="changeImg(num)" @mouseenter="stop" @mouseleave="go"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {

  },
  data () {
    return {
      imgArr: [
        require("../../assets/img/banner1.jpg"),
        require("../../assets/img/banner2.jpg"),
        require("../../assets/img/banner3.jpg"),
        require("../../assets/img/banner4.jpg"),
      ],
      index: 0,
    }
  },
  created() {
    this.timer = setInterval(()=>{
      this.autoPlay();
    }, 2000);
  },
  methods: {
    prev:function(){
      this.stop();
      this.index--;
      if(this.index < 0){
        this.index = this.imgArr.length - 1;
      }
      this.go();
    },
    next:function(){
      this.stop();
      this.index++;
      if(this.index >= this.imgArr.length){
        this.index = 0;
      }
      this.go();
    },
    go(){
      this.timer = setInterval(()=>{
        this.autoPlay();
      }, 2000);
    },
    stop(){
      clearInterval(this.timer);
    },
    changeImg(num){
      this.index = num;
    },
    autoPlay(){
      this.index++;
      this.index %= this.imgArr.length;
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

html,
body,
#banner {
  width: 100%;
  height: 100%;
}

#banner .banner_img {
  position: absolute;
  background-color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
}
#banner .banner_img .title {
  position: absolute;
  display: flex;
  align-items: center;
  height: 56px;
  top: -61px;
  left: 0;
  padding: 5px;
  padding-left: 10px;
  padding-bottom: 0;
  color: rgba(175, 47, 47, 0.8);
  font-size: 26px;
  font-weight: normal;
  background-color: white;
  padding-right: 50px;
  z-index: 2;
}
#banner .banner_img .title img {
  height: 40px;
  margin-right: 10px;
}

#banner .banner_img .title::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 65px solid;
  border-color: transparent transparent white;
  top: -65px;
  right: -60px;
  z-index: 1;
}

#banner .banner_img > img {
  display: block;
  width: 700px;
  height: 458px;
}

#banner .banner_img a {
  text-decoration: none;
  width: 45px;
  height: 100px;
  position: absolute;
  top: 179px;
  vertical-align: middle;
  opacity: 0.5;
}
#banner .banner_img a :hover {
  opacity: 0.8;
}

#banner .banner_img .left {
  left: 10px;
  text-align: left;
  padding-right: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

#banner .banner_img .right {
  right: 20px;
  text-align: right;
  padding-left: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

#banner .dots {
  position: absolute;
  bottom: 26%;
  left: 47%;
}

#banner .dots li {
  list-style: none;
  float: left;
  width: 15px;
  height: 15px;
  background-color: red;
  opacity: 0.5;
  filter: alpha(opacity=50);
  margin: 0 5px;
  border-radius: 7.5px;
}

#banner .dots li:hover {
  cursor: pointer;
  background-color: black;
}

#banner .dots .active {
  background-color: black;
}

</style>
