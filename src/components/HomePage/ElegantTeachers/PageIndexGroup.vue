<template>
  <div>
    <a-pagination v-model:current="current1" show-quick-jumper :total="500" @change="onChange" />
    <br />
    <a-pagination
            v-model:current="current2"
            show-quick-jumper
            :total="500"
            disabled
            show-less-items
            @change="onChange"
    />
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  export default {
    name: 'PageIndexGroup',
    components: {},
    setup() {
        const current1 = ref<number>(1);
        const current2 = ref<number>(2);
        const onChange = (pageNumber: number) => {
            console.log('Page: ', pageNumber);
        };
        return {
            current1,
            current2,
            onChange,
        };
    },
    data () {
      return {
      }
    }
  }
</script>

<style scoped>

  @import url("../../../assets/vendor/css/bootstrap.min.css");
  @import url("../../../assets/vendor/css/font-awesome.min.css");
  @import url("../../../assets/vendor/css/ace.min.css");
</style>
