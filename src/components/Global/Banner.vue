<template>
  <a-carousel autoplay>
    <div v-for="(img, index) in imgArr" :key="index">
      <a href="javascript:void(0)"><img :src="img.img" alt="" /></a>
    </div>
  </a-carousel>
</template>

<script>
import {Carousel} from "ant-design-vue"
export default {
  name: 'Banner',
  components: {
    ACarousel:Carousel
  },
  props: {

  },
  data () {
    return {
      imgArr: [
        {img: require("../../assets/img/banner1.jpg")},
        {img: require("../../assets/img/banner2.jpg")},
        {img: require("../../assets/img/banner3.jpg")},
        {img: require("../../assets/img/banner4.jpg")},
      ],
      index: 0,
    }
  }
}
</script>

<style scoped>
.ant-carousel :deep(.slick-slide) {
  /*text-align: center;*/
  width: 1920px;
  height: 645px;
  opacity: 1;
  border-radius: 0px;
  /*line-height: 160px;*/
  /*background: #364d79;*/
  overflow: hidden;
}

/*.ant-carousel :deep(.slick-slide h3) {*/
/*  color: #fff;*/
/*}*/
</style>
