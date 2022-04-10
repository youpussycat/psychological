<template>
  <div id="paginationContext">
    <a-config-provider :locale="zh_CN">
      <a-pagination
              show-quick-jumper :total="totalCount"
              @change="onChange" @showSizeChange="showSizeChange"
              :show-total="total => `共 ${total} 条`"
      />
    </a-config-provider>
  </div>
</template>

<script>
  import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
  import { Pagination, ConfigProvider} from 'ant-design-vue';
  export default {
    name: 'PageIndexGroup',
    components: {
        APagination:Pagination,
        AConfigProvider:ConfigProvider
    },
    setup() {
        const onChange = (pageNumber) => {
            console.log('翻页到: ', pageNumber);
        };
        const showSizeChange = (page,size)=>{
            console.log("改变容量: 页码",page,"  容量: ",size);
        };
        return {
            onChange,
            showSizeChange
        };
    },
    data () {
      return {
          totalCount:Math.floor(Math.random()*1000),
          zh_CN
      }
    }
  }
</script>

<style scoped>
  #paginationContext{
    width: fit-content;
    height: 32px;
    background-color: #FFF;
  }
  /*@import url("../../../assets/vendor/css/bootstrap.min.css");*/
  /*@import url("../../../assets/vendor/css/font-awesome.min.css");*/
  /*@import url("../../../assets/vendor/css/ace.min.css");*/
</style>
