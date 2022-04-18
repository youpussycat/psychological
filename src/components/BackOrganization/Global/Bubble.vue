<template>
  <div class="bubble">
    <span>{{title}}</span>
    <button class="cancel" @click="cancel">取消</button>
    <button class="done" @click="done">确定</button>
  </div>
</template>

<script>
export default {
  name:"Bubble",
  data(){
    return{
      title:''
    }
  },
  mounted() {
    this.$bus.on('sendTitle',(title)=>{
      this.title = title;
    })
  },
  methods:{
    done(){
      if(this.title === '确定重置密码为123456吗？'){
        const pwd_data = {pwd:123456, bubble:false};
        this.$bus.emit('sendPwd', pwd_data);
      } else if(this.title === '确定禁用吗？'){
        const status_data = {status:false, bubble:false};
        this.$bus.emit('sendStatus', status_data);
      } else if(this.title === '确定要删除吗？'){
        const delete_data = {bubble:false};
        this.$bus.emit('sendDelete', delete_data);
      } else if(this.title === '密码不能为空' || this.title === '密码不能小于6位' || this.title === '密码不能大于20位' || this.title === '密码只能是英文和数字' ){
        const bubble = false;
        this.$bus.emit('sendBubble', bubble);
      }

    },
    cancel(){
      if(this.title === '确定重置密码为123456吗？') {
        const bubble = false;
        this.$bus.emit('pwd_cancel', bubble);
      } else if(this.title === '确定禁用吗？') {
        const status_data = {status:true, bubble:false};
        this.$bus.emit('status_cancel', status_data);
      } else if(this.title === '确定要删除吗？'){
        const delete_data = {bubble:false};
        this.$bus.emit('delete_cancel', delete_data);
      } else if(this.title === '密码不能为空' || this.title === '密码不能小于6位' || this.title === '密码不能大于20位' || this.title === '密码只能是英文和数字' ){
        const bubble = false;
        this.$bus.emit('bubble_cancel', bubble);
      }
    }
  }
}
</script>

<style scoped>
.bubble{
  position: relative;
  width: 200px;
  height: 70px;
  line-height: 20px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid rgba(187, 187, 187, 100);
}

.bubble span{
  display: block;
  width: 176px;
  height: 20px;
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
  margin: 10px 0 0 12px;
}

.bubble .cancel{
  position: absolute;
  bottom: 10px;
  left: 83px;
  width: 50px;
  height: 20px;
  border-radius: 4px;
  color: rgba(16, 16, 16, 100);
  background-color: #FFFFFF;
  font-size: 12px;
  font-family: Microsoft Yahei;
  border: 1px solid rgba(187, 187, 187, 100);
  cursor: pointer;
}

.bubble .done{
  position: absolute;
  bottom: 10px;
  right: 5px;
  width: 50px;
  height: 20px;
  border-radius: 4px;
  background-color: rgba(164, 173, 179, 100);
  color: rgba(255, 255, 255, 100);
  font-size: 12px;
  font-family: Microsoft Yahei;
  border: 1px solid rgba(164, 173, 179, 100);
  cursor: pointer;
}
</style>