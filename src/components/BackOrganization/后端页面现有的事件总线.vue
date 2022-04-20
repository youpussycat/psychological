<template>
	<!--
# 后端页面中的事件总线


```赵晟鼎编写的```
#Global的MyPosition文件下
##1
###type
"改变我的位置"
###作用
通过传参使得MyPosition中的显示的位置发生改变
###传参
一个字符串，作为位置的显示
###定义的位置
Global/MyPosition


#Global的MyMenu文件下
##1
###type
"改变Menu数据"
###作用
通过传参使得myMenu组件的数据改变
###传参
一个类，类型的键值应符合myMenu文件中的类型
###定义的位置
Global/MyMenu

##2
###type
"页面中改变我的位置"
###作用
通过传参使得myMenu组件选择与参数所指定的key有相同key值的Menu节点，并根据keyPath属性改变MyPosition中的显示的位置。
###传参
一个类，该类中要有keyPath属性作为选择的节点从根节点到该节点的路径，和key属性作为被选择的节点的key值。
###定义的位置
Global/MyMenu


#Global的TotalShow文件下
##1
###type
"返回Menu的选中key"
###作用
通过传参使得一个作为key的字符串传入TotalShow文件中，改变该文件的this.choosePage一次来改变页面的加载
###传参
一个字符串
###定义的位置
Global/TotalShow


#SystemSetting的TreeGroup文件下
##1.
###type
"获取树节点"
###作用
将TreeGroup中已选择节点和他们的父节点输出
###所需参数
无
###定义的位置
SystemSetting/SmallComponents/TreeGroup

```武世超编写的```
#BackOrganization文件下的Global文件下的Dialog文件
##1.
###type
"sendData"
###作用
接收弹窗所需的内容
###所需参数
一个对象，内容包括是否显示弹窗、弹窗的标题、是否为添加用户、switch开关是否开启、input框是否只读，false:只读，true:可编辑、是否有确认按钮
###定义的位置
BackOrganization/Global/Dialog

##2.
###type
"sendPwd"
###作用
接收更改后的密码
###所需参数
一个字符串
###定义的位置
BackOrganization/Global/Dialog

##3.
###type
"sendStatus"
###作用
接收更改后 switch 开关的状态
###所需参数
一个 boolean 值
###定义的位置
BackOrganization/Global/Dialog

##4.
###type
"pwd_cancel"
###作用
关闭修改密码的弹窗
###所需参数
一个 boolean 值
###定义的位置
BackOrganization/Global/Dialog

##5.
###type
"status_cancel"
###作用
关闭修改 switch 开关的弹窗，并修改 switch 开关的状态
###所需参数
一个对象，内容包括开关状态，气泡是否显示
###定义的位置
BackOrganization/Global/Dialog


#BackOrganization文件下的Global文件下的Test文件（用于测试，后续可删）
##1.
###type
"callback_data"
###作用
接收弹窗内的用户信息
###所需参数
一个对象，内容包括用户姓名、用户电话、所属部门、所属角色、账号名称、用户密码、备注
###定义的位置
BackOrganization/Global/Dialog

	-->
</template>

<script>
	export default {
		name: "后端页面现有的事件总线"
	}
</script>

<style scoped>

</style>