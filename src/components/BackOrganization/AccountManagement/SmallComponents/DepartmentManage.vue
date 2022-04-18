<template>
    <div id="manageContext">
        <div id="headerContext">
            <p id="headerText">部门管理</p>
            <i></i>
        </div>
        <div id="mainContext">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'DepartmentManage',
        components: {
        },
        data () {
            return {
            }
        }
    }
</script>

<style scoped>
    #manageContext{
        width: 230px;height:865px;position: relative;
        border: 1px solid rgba(187, 187, 187, 100);
        border-radius: 5px;
        background-color: rgba(16, 16, 16, 100);;
    }
    #headerContext{width: 230px;height: 50px;}
    #headerText{
        position: absolute;
        left: 16px;top:15px;
        font-size: 16px;
    }
    #headerContext i{
        width:190px;height:1px;
        position: absolute;
        top: 49px;
        margin:0 auto;
    }
    #mainContext{
        position: absolute;top:60px;
        width: 230px;min-height: 100px;
    }
    /*@import url("../../../assets/vendor/css/bootstrap.min.css");*/
    /*@import url("../../../assets/vendor/css/font-awesome.min.css");*/
    /*@import url("../../../assets/vendor/css/ace.min.css");*/
</style>
