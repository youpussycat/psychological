<template>
  <div id="background">
    <div id="main">
      <div id="title">
        <h3 id="titleText">典型课程</h3>
        <div id="titleBottom"></div>
        <p id="titleMore">更多</p>
        <div id="titleArrow0"></div>
        <div id="titleArrow1"></div>
      </div>
      <div id="courses">
        <div class="Course" v-for="courseData in CourseList">
          <div class="CourseContext">
            <img class="CourseImage" :src="courseData.image"/>
            <div class="CourseContent">
              <p class="CourseTitle">{{courseData.title}}</p>
              <div class="DefaultDisplay">
                <p class="CourseText">{{courseData.text}}</p>
              </div>
              <div class="HoverDisplay">
                <img class="AuthorImage" :src="courseData.authorImage"/>
                <p class="AuthorName">主讲: {{courseData.authorName}}</p>

                <p class="AuthorRecord">共{{courseData.authorRecord}}节</p>
                <img class="TimeClock" src=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img id="emptyIMG" style="display: none;" src="../../assets/img/logo.png"/>
  </div>
</template>

<script>
    export default {
        name: "ExampleCourses",
        data() {
            return {
                CourseList: [
                    {
                        image:"",
                        title: "中小学常见心理问题辅导策略",
                        text: "1.厌学心理。有厌学倾向的学生,主要特 征是对学习反感,甚至感到",
                        authorImage:"",
                        authorName:"心博睿",
                        authorRecord:Math.floor(Math.random()*10000)
                    }, {
                        image:"",
                        title: "中小学常见心理问题辅导策略",
                        text: "具有挫折感的学生会出现自卑、敏感、焦虑抑郁、闭锁等反应",
                        authorImage:"",
                        authorName:"心博睿",
                        authorRecord:Math.floor(Math.random()*10000)
                    }, {
                        image:"",
                        title: "中小学常见心理问题辅导策略",
                        text: "1.厌学心理。有厌学倾向的学生,主要特 征是对学习反感,甚至感到",
                        authorImage:"",
                        authorName:"心博睿",
                        authorRecord:Math.floor(Math.random()*10000)
                    }, {
                        image:"",
                        title: "中小学常见心理问题辅导策略",
                        text: "习能力低下,把自己看成学习上的失败者常以消极的态度对待学习",
                        authorImage:"",
                        authorName:"心博睿",
                        authorRecord:Math.floor(Math.random()*10000)
                    },
                ]
            }
        },
        methods: {},
        mounted(){
            console.log("test");
            let imgList=document.getElementsByTagName("img")
            for(let i of imgList)i.onerror=()=>{
                i.src=document.getElementById("emptyIMG").src;
            }
        }
    }
</script>

<style scoped>
  #background {
    background-color: #F7F7F7;
    height: 534px;
  }

  #main {
    width:1200px;
    margin: 0px auto;
  }
  #title{
    width: 100%;
    height: 82px;
    position: relative;
  }
  #titleText{
    margin: 0px;

    top: 40px;
    position: absolute;
  }
  #titleBottom{
    background-color: #05327B;
    width: 39px;
    height: 2px;

    bottom: 0px;
    position: absolute;
  }
  #titleMore{
    right: 34px;
    top: 45px;
    position: absolute;
  }
  #titleArrow0{
    background-color: #809FD0;
    width: 14px;
    height: 2px;

    right: 14px;
    top: 56px;
    position: absolute;
  }
  #titleArrow1{
    background-color: #809FD0;
    width: 7px;
    height: 2px;
    transform: rotate(45deg);

    right: 14px;
    top: 53px;
    position: absolute;
  }


  #courses{
    top:10px;
    position: relative;
  }

  .Course{
    width: 306px;
    top:30px;
    display: table-cell;
    -webkit-transition: 1s;
    transition: 0.5s;

    position: relative;
  }
  .Course:hover{
    top:10px;
  }

  .Course:hover .CourseContext{
    box-shadow: 0 3px 3px 3px #0001;
  }
  .Course:hover .DefaultDisplay{
    opacity: 0;
  }
  .Course:hover .HoverDisplay{
    top:49px;
    opacity: 100%;
  }

  .CourseContext{
    background-color: #FFFFFF;
    width: 282px;
    height: 372px;
    transition: 0.5s;
  }

  .CourseImage{
    width: 282px;
    height: 232px;
  }
  .CourseContent{
    width: 237px;

    left:24px;
    top:33px;
    position: relative;
  }
  .CourseTitle{
    font-size: 16px;
    font-weight: bolder;
    color: #222222;
  }

  .DefaultDisplay{
    opacity: 100%;
    transition: 0.5s;
    position: absolute;
  }
  .CourseText{
    font-size: 14px;
    color: #666666;
    margin: 0;
  }

  .HoverDisplay{
    width: 234px;
    height: 20px;
    opacity: 0;

    top:78px;
    position: absolute;

    transition: 0.5s;
  }
  .AuthorImage{
    width: 20px;
    height: 20px;
    background: #F0F0F0;
    border-radius: 50%;
    float:left;
  }
  .AuthorName{
    float:left;position: relative;left: 6px;
    font-size:12px;
    margin: 0;
  }


  .TimeClock{
    width: 15px;
    height: 15px;
    background: #FFFFFF;
    border: 1px solid #999999;
    border-radius: 50%;

    right: 6px;
    top: 2px;
    float: right;
    position: relative;
  }
  .AuthorRecord{
    float: right;
    position: relative;
    font-size:12px;
    margin: 0;
  }

  @import url("../../assets/vendor/css/bootstrap.min.css");
  @import url("../../assets/vendor/css/font-awesome.min.css");
  @import url("../../assets/vendor/css/ace.min.css");
</style>
