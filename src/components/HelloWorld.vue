<template>
  <a-carousel :after-change="onChange">
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
</template>
<script>
  import { defineComponent} from 'vue';
  import {Carousel} from "ant-design-vue";
  export default defineComponent({
    setup() {

      const onChange = current => {
        console.log(current);
      };

      return {

        onChange,
      };
    },
    components:{
      ACarousel:Carousel,

    }

  });
</script>
<style scoped>
  /* For demo */
  .ant-carousel ::v-deep(.slick-slide) {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }

  .ant-carousel ::v-deep(.slick-slide h3) {
    color: #fff;
  }
</style>