<template>
  <div>
    <TopLogo/>
    <MyPosition class="position"/>
    <myMenu/>
    <SearchBar/>
  </div>
</template>

<script>
import myMenu from "@/components/BackOrganization/Global/myMenu";
import TopLogo from "@/components/BackOrganization/Global/TopLogo";
import SearchBar from "@/components/BackOrganization/Global/SearchBar";
import MyPosition from "@/components/BackOrganization/Global/MyPosition";
export default{
  name:'ApplicationGuideManagement',
  components:{
    myMenu,
    TopLogo,
    SearchBar,
    MyPosition
  },
  mounted(){
    this.$bus.emit('改变我的位置', '网站管理>报考指南管理')
  }
}
</script>

<style scoped>
.position{
  position: absolute;
  left: 310px;
}
</style>