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

##2
###type
"显现气泡"
###传参
一个字符串表示气泡的title
###定义位置
Global/TotalShow


#SystemSetting的AddCharacter文件下
##1.
###type
"获取树数据"
###作用
将AddCharacter文件中的treeData数据进行改变
###所需参数
一个用于改变treeData变量的数据
###定义的位置
SystemSetting/AddCharacter


#SystemSetting的TreeGroup文件下
##1.
###type
"获取树节点"
###作用
将TreeGroup中已选择节点和他们的父节点的数据集合成数组，并将该数组当作事件总线"获取树数据"的参数传入，以此改变AddCharacter文件中的treeData变量
###所需参数
无
###定义的位置
SystemSetting/SmallComponents/TreeGroup



	-->
</template>

<script>
	export default {
		name: "后端页面现有的事件总线"
	}
</script>

<style scoped>

</style>