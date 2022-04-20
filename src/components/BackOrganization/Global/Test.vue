<template>
  <div>
    <button @click="test">测试</button>
    <Dialog></Dialog>
    <button @click="del">删除</button>
    <Bubble v-if="bubble" title="确定删除吗？"/>
  </div>
</template>

<script>
import Dialog from "@/components/BackOrganization/Global/Dialog";
import Bubble from "@/components/BackOrganization/Global/Bubble";
export default {
  name:'Test',
  data(){
    return{
      data:{
        show: true,  //是否显示弹窗
        title:'添加用户',  //弹窗的标题
        add: true,  //是否是添加用户
        status: true, //switch开关
        read: true,  //input 框是否只读，false：只读，true：可编辑
        done: true  //确认按钮
      },
      bubble: false,
    }
  },
  components:{
    Bubble,
    Dialog
  },
  methods:{
    test(){
      this.$bus.emit('sendData', this.data);
      this.data.show = true;
    },
    del(){
      this.bubble = true;
    }
  },
  mounted(){
    this.$bus.on('callback_data', (data)=>{
      // data.forEach(h=>{
      //     console.log(h.user_data);
      // })
      console.log('用户姓名：',data.userName);
      console.log('用户电话：', data.tel);
      console.log('所属部门：');
      data.department.forEach(h=>{
        console.log(h);
      });
      console.log('所属角色:');
      data.userRole.forEach(h=>{
        console.log(h);
      });
      console.log('账户名称：', data.accountName);
      console.log('用户密码', data.password);
      console.log('备注：', data.remark);
    });
    // this.$bus.on('')
  }
}
</script>

