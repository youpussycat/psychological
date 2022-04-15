<template>
    <div class="total">
        <a-breadcrumb separator="" >
            <a-breadcrumb-item class="breads" v-for="(i,inx) in breads" :key="inx">
                <a href="" class="breaditem">{{i.inner}}</a>
                <template #overlay v-if="i.menuItem.length">
                    <a-menu >
                        <div v-for="(it,index) in i.menuItem" :key="index" class="menu">
                            <a-menu-item>
                                <a :target="it.target" :href="it.href" class="menuitem">{{it.inner}}</a>
                            </a-menu-item>
                        </div>
                    </a-menu>
                </template>
            </a-breadcrumb-item>
        </a-breadcrumb>
    </div>


</template>

<script>
    import { Breadcrumb,Menu } from 'ant-design-vue';
    export default {
        name: "PageHeader",
        components:{
            ABreadcrumb: Breadcrumb,
            ABreadcrumbItem: Breadcrumb.Item,//a-breadcrumb-item
            AMenu: Menu,
            AMenuItem: Menu.Item,
        },
        data() {
            return {
              breads:[
              ],

            };
        },
        methods: {

        },
        mounted(){//组件渲染后会执行该函数
            this.breads.push({//每一个类相当于一个面包屑，inner面包屑本身文字，menuItem二级菜单
                inner:"首页",
                menuItem:[
                ],
            }, {
                inner:"政策文件",
                menuItem:[
                    {
                        target:"",
                        href:"",
                        inner:"政策文件"
                    },
                    {
                        target:"",
                        href:"",
                        inner:"协会文件"
                    },
                    {
                        target:"",
                        href:"",
                        inner:"各地文件"
                    },
                    {
                        target:"",
                        href:"",
                        inner:"其他"
                    },
                ],
            },{
                inner:"通知公告",
                menuItem:[
                    {
                        target:"",
                        href:"",
                        inner:"培训公告"
                    },
                    {
                        target:"",
                        href:"",
                        inner:"课程安排"
                    },
                    {
                        target:"",
                        href:"",
                        inner:"成绩公告"
                    },
                    {
                        target:"",
                        href:"",
                        inner:"考试公告"
                    },
                    {
                        target:"",
                        href:"",
                        inner:"活动公告"
                    },
                    {
                        target:"",
                        href:"",
                        inner:"其他"
                    },
                ],
            },{
                inner:"报考指南",
                menuItem:[
                    {
                        target:"",
                        href:"",
                        inner:"项目介绍"
                    },
                    {
                        target:"",
                        href:"",
                        inner:"课程安排"
                    },
                    {
                        target:"",
                        href:"",
                        inner:"成绩公告"
                    },
                    {
                        target:"",
                        href:"",
                        inner:"考试公告"
                    },
                    {
                        target:"",
                        href:"",
                        inner:"活动公告"
                    },
                    {
                        target:"",
                        href:"",
                        inner:"其他"
                    },
                ],
            },{
                inner:"在线学习",
                menuItem:[
                ],
            },{
                inner:"证书考务",
                menuItem:[
                ],
            },{
                inner:"心理测评",
                menuItem:[
                ],
            },{
                inner:"师资风采",
                menuItem:[
                ],
            },{
                inner:"培训纪实",
                menuItem:[
                    {
                        target:"",
                        href:"",
                        inner:"各地培训"
                    },
                    {
                        target:"",
                        href:"",
                        inner:"新闻转载"
                    },
                    {
                        target:"",
                        href:"",
                        inner:"其他"
                    },
                ],
            },)
        }

    }



</script>

<style scoped>
    .total {
        width: auto;
        text-align: center;
        margin: auto;
        left: 0;
        right: 0;
    }

    .breads {
        margin-right: 54px;
    }

    .breaditem {
        font-size: 18px;
    }

    .menu {
        width: 100px;
        text-align: center;
    }

    .menuitem:hover,.menuitem {
        font-size: 16px;
        color: #222222;
    }

    .menuitem:hover {
        color: #04327A;
    }
</style>
