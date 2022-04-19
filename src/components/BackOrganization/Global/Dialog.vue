<template>
  <div v-show="data.show" class="Dialog" :class="{add: data.add}">
    <div class="box">
      <div class="title">
        <span>{{data.title}}</span>
      </div>
      <div class="content">
        <div class="user_name">
          <span>{{userNameTitle}}</span>
          <a-input v-model:value="user_data.userName" @blur="change_name" placeholder="请输入用户姓名" required="required" :readonly="data.read?false:'readonly'" onblur="this.placeholder='请输入用户姓名'"/>
        </div>
        <div class="tel">
          <span>{{telTitle}}</span>
          <a-input v-model:value="user_data.tel" placeholder="请输入手机号码" @blur="change_tel" type="number"  required="required" :readonly="data.read?false:'readonly'" onblur="this.placeholder='请输入手机号码'"/>
        </div>
        <div class="department">
          <span>{{departmentTitle}}</span>
          <a-select v-model:value="departmentList.text"
                    label-in-value
                    :options="departmentList"
                    mode="multiple"
                    @change="handleChange0"
                    :max-tag-count="maxTagCount"
                    placeholder="请选择所属部门"
                    style="width: 348px;height: 30px;"
          >
          </a-select >
        </div>
        <div class="user_role">
          <span>{{userRoleTitle}}</span>
          <a-select v-model:value="userRoleList.value"
                    :options="userRoleList"
                    label-in-value
                    mode="multiple"
                    @change="handleChange1"
                    :max-tag-count="maxTagCount"
                    placeholder="请选择用户角色"
                    style="width: 348px;height: 30px;">
          </a-select >
        </div>
        <div class="account_name" v-show="!data.add">
          <span>{{accountNameTitle}}</span>
          <a-input v-model:value="user_data.accountName" @blur="change_account" placeholder="请输入账号名称" required="required" readonly/>
        </div>
        <div class="account_name" v-show="data.add">
          <span>{{accountNameTitle}}</span>
          <a-input v-model:value="user_data.accountName" @blur="change_account" placeholder="请输入账号名称" required="required" onblur="this.placeholder='请输入账号名称'"/>
        </div>
        <div class="password" v-show="data.add">
          <span>{{passwordTitle}}</span>
          <a-input v-model:value="user_data.password" type="password" @blur="change_pwd" placeholder="请输入账号密码" required="required" :readonly="data.read?false:'readonly'" onblur="this.placeholder='请输入密码'"/>
          <button class="btn_pwd" @click="default_pwd">默认密码</button>
        </div>
        <div class="remark">
          <span>{{remarkTitle}}</span>
          <a-input v-model:value="user_data.remark" @blur="change_remark" placeholder="请输入备注" :readonly="data.read?false:'readonly'" onblur="this.placeholder='请输入备注'"/>
        </div>
        <div class="switch">
          <span>状态：</span>
          <a-switch v-model:checked="data.status" @click="open"/>
        </div>
      </div>
    </div>
    <button class="cancel" :class="{active: !data.done}" @click="cancel">取消</button>
    <button class="done" v-show="data.done" @click="done">确定</button>
    <Bubble class="bubble" v-show="bubble_pwd" title="确定重置密码为123456吗？"/>
    <Bubble class="bubble" v-show="bubble_forbidden" title="确定禁用吗？"/>
  </div>
  <a-alert class="warning_bubble" :message="message" v-if="alert_show" closable @click="Onclose" type="error" show-icon/>
</template>

<script>
import {Switch, Select, Input, Alert} from 'ant-design-vue';
import Bubble from "@/components/BackOrganization/Global/Bubble";
export default {
  name:'Dialog',
  data(){
    return{
      data:{
        show: false, //弹窗显示
        title:'查看用户', //判断是查看用户或新增用户或编剧用户
        add: false,  //是否为增加用户弹窗
        status: true,  //switch开关是否启用
        read: true, //是否只读，false为只读
        done: true  //是否显示确定按钮
      },
      userNameTitle:'*用户姓名：',
      telTitle:'*手机号码：',
      departmentTitle:'*所属部门：',
      userRoleTitle:'*用户角色：',
      accountNameTitle:'*账号名称：',
      passwordTitle:'*账号密码：',
      remarkTitle:'备注：',
      user_data:{
        userName:'',
        tel:'',
        department:[],
        userRole:[],
        accountName:'',
        password:'',
        remark:'',
        switch: true
      },
      departmentList:[
        {value:'测试部门1', text:'测试部门1'},
        {value:'测试部门2', text:'测试部门2'},
        {value:'测试部门3', text:'测试部门3'},
        {value:'测试部门4', text:'测试部门4'}
      ],
      userRoleList:[
        {value:'角色1', text:'角色1'},
        {value:'角色2', text:'角色2'},
        {value:'角色3', text:'角色3'}
      ],
      maxTagCount:2,
      bubble_pwd: false,
      bubble_forbidden: false,
      alert_show: false,
      message:''
    }
  },
  components:{
    ASwitch:Switch,
    ASelect:Select,
    AInput:Input,
    AAlert:Alert,
    Bubble
  },
  methods:{
    cancel(){
      this.data.show = !this.data.show;
    },
    done(){
      this.data.show = !this.data.show;
      this.$bus.emit('callback_data', this.user_data);
    },
    change_tel(){
      if(!this.user_data.tel.match("^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\d{8}$")){
        if(this.user_data.tel.length === 11){
          this.alert_show = true;
          this.message = '不是合法手机号码';
        } else if(this.user_data.tel.length === 0){
          this.alert_show = true;
          this.message = '手机号码不能为空';
        } else if(this.user_data.tel.length > 11){
          this.alert_show = true;
          this.message = '手机号码位数大于11位';
        } else if(this.user_data.tel.length < 11){
          this.alert_show = true;
          this.message = '手机号码位数小于11位';
        }
      }
    },
    change_remark(){
      if(!this.user_data.remark.match("^[\u4e00-\u9fa5\\s\\S_a-zA-Z0-9_]{1,200}$")){
        if(this.user_data.remark.length === 0){
          this.alert_show = true;
          this.message = '备注不能为空';
        } else if(this.user_data.remark.length > 200){
          this.alert_show = true;
          this.message = '备注内容不能大于200字';
        }
      }
    },
    change_account(){
      if(!this.user_data.accountName.match("^[\u4e00-\u9fa5\\s\\S_a-zA-Z0-9_]{1,50}$")){
        if(this.user_data.accountName.length === 0){
          this.alert_show = true;
          this.message = '用户名称不能为空';
        } else if(this.user_data.accountName.length > 50){
          this.alert_show = true;
          this.message = '用户名称不能大于50位';
        }
      }
    },
    change_pwd(){
      if(!this.user_data.password.match("^[A-Za-z0-9]{6,20}$")){
        if(this.user_data.password.length === 0){
          this.alert_show = true;
          this.message = '密码不能为空';
        } else if(this.user_data.password.length < 6){
          this.alert_show = true;
          this.message = '密码不能小于6位';
        } else if(this.user_data.password.length > 20){
          this.alert_show = true;
          this.message = '密码不能大于20位';
        } else {
          this.alert_show = true;
          this.message = '密码只能是英文和数字';
        }
      }
    },
    change_name(){
      if(!this.user_data.userName.match("^[\u4e00-\u9fa5\\s\\S_a-zA-Z0-9_]{1,50}$")){
        if(this.user_data.userName.length === 0){
          this.alert_show = true;
          this.message = '用户姓名不能为空';
        } else if(this.user_data.userName.length > 50){
          this.alert_show = true;
          this.message = '用户姓名不能大于50位';
        }
      }
    },
    default_pwd(){
      this.bubble_pwd = true;
      this.$bus.emit('sendTitle', '确定重置密码为123456吗？');
    },
    Onclose(){
      this.alert_show = false;
    },
    open(){
      if(this.data.status === false){
        this.bubble_forbidden = true;
        this.$bus.emit('sendTitle', '确定禁用吗？');
      }
    },
    handleChange0(value){
      this.user_data.department = [];
      value.forEach(h=>{
        this.user_data.department.push(h.value);
      })
    },
    handleChange1(value){
      this.user_data.userRole = [];
      value.forEach(h=>{
        this.user_data.userRole.push(h.value);
      })
    }
  },
  mounted(){
    this.$bus.on('sendData', (data)=>{
      this.data = data;
    });
    this.$bus.on('sendPwd', (data)=>{
      this.user_data.password = data.pwd;
      this.bubble_pwd = data.bubble;
    });
    this.$bus.on('sendStatus', (data)=>{
      this.data.status = data.status;
      this.user_data.switch = data.status;
      this.bubble_forbidden = data.bubble;
    });
    this.$bus.on('pwd_cancel', (data)=>{
      this.bubble_pwd = data;
    });
    this.$bus.on('status_cancel', (data)=>{
      this.data.status = data.status;
      this.bubble_forbidden = data.bubble;
    });
    this.$bus.on('bubble_cancel', (data)=>{
      this.bubble = data;
    })
  },
  beforeDestroy() {
    this.$bus.$off('sendData');
    this.$bus.$off('sendPwd');
    this.$bus.$off('sendStatus');
    this.$bus.$off('pwd_cancel');
    this.$bus.$off('status_cancel');
    this.$bus.$off('bubble_cancel');
  }
}
</script>

<style scoped>
input, select{
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.Dialog{
  position: absolute;
  top: 150px;
  left: 500px;
  width: 510px;
  height: 438px;
  line-height: 20px;
  border-radius: 5px;
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  font-family: Roboto;
  border: 1px solid rgba(187, 187, 187, 100);
}

.add{
  height: 500px;
}

.Dialog .box .title{
  box-sizing: border-box;
  height: 47px;
  border-bottom: 1px solid rgba(187, 187, 187, 100);
}

.Dialog .box .title span{
  display: inline-block;
  width: 64px;
  height: 24px;
  color: rgba(16, 16, 16, 100);
  font-size: 16px;
  text-align: left;
  font-family: SourceHanSansSC-medium;
  margin-top: 11px;
  margin-left: 20px;
}

.Dialog .content .user_name,
.Dialog .content .tel,
.Dialog .content .department,
.Dialog .content .user_role,
.Dialog .content .account_name,
.Dialog .content .password,
.Dialog .content .remark,
.Dialog .content .switch,
.Dialog .content .password
{
  margin: 20px 0 20px 32px;
}

.Dialog .content .user_name{
  margin-top: 19px;
}

.Dialog .content .remark,
.Dialog .content .switch{
  margin-left: 66px;
}

.Dialog .content div span{
  width: 77px;
  height: 20px;
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  font-family: SourceHanSansSC-regular;
}

.Dialog .content div input{
  width: 348px;
  height: 30px;
  color: rgba(136, 136, 136, 100);
  font-size: 14px;
  font-family: Microsoft Yahei;
  border: 1px solid rgba(187, 187, 187, 100);
}

.Dialog .content .password input{
  width: 253px;
}

.Dialog .content .password .btn_pwd{
  width: 80px;
  height: 30px;
  border-radius: 4px;
  background-color: rgba(164, 173, 179, 100);
  color: rgba(255, 255, 255, 100);
  font-size: 14px;
  font-family: Microsoft Yahei;
  border: 1px solid rgba(164, 173, 179, 100);
  margin-left: 15px;
  cursor: pointer;
}

.Dialog .content{
  position: absolute;
}

.Dialog{
  position: relative;
}

.Dialog .cancel{
  position: absolute;
  bottom: 20px;
  right: 113px;
  width: 80px;
  height: 30px;
  border-radius: 4px;
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  font-family: Microsoft Yahei;
  background-color: #FFFFFF;
  border: 1px solid rgba(187, 187, 187, 100);
  cursor: pointer;
}

.Dialog .done{
  position: absolute;
  bottom: 21px;
  right: 18px;
  width: 80px;
  height: 30px;
  border-radius: 4px;
  background-color: rgba(164, 173, 179, 100);
  color: rgba(255, 255, 255, 100);
  font-size: 14px;
  font-family: Microsoft Yahei;
  border: 1px solid rgba(164, 173, 179, 100);
  cursor: pointer;
}

.Dialog .active{
  position: absolute;
  bottom: 21px;
  right: 18px;
}

.Dialog .bubble{
  position: absolute;
  top: 100px;
  left: 200px;
}

.warning_bubble{
  position: absolute;
  top: 100px;
  left: 630px;
  width: 228px;
  height: 30px;
}
</style>