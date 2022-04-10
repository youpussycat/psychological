<template>
  <div class="prompt">
    <img class="background_img" src="{{image}}">
    <span class="title">{{title}}</span>
    <span class="introduce">{{introduce}}</span>
  </div>
</template>

<script>
export default {
  name:'Page_Prompt',
  data(){
    return {
      image:'',
      title:'通知公告',
      introduce:'相信有更多的可能与你一起创造'
    }
  }
}
</script>

<style scoped>
.prompt{
  position: relative;
  width: 1920px;
  height: 300px;
  background: #042C48;
  opacity: 0.85;
}

.prompt .background_img{
  width: 1920px;
  height: 300px;
}

.prompt .title{
  position: absolute;
  top: 111px;
  left: 864px;
  width: 192px;
  height: 67px;
  font-size: 48px;
  font-family: PingFang SC;
  font-weight: 600;
  color: #FFFFFF;
}

.prompt .introduce{
  position: absolute;
  bottom: 91px;
  left: 834px;
  width: 252px;
  height: 25px;
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 300;
  color: #FFFFFF;
}
</style>