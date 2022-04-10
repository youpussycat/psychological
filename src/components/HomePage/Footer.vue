<template>
  <div class="container">
    <div id="cooperative">
      <span v-html="Data.text" style="color: #284f8a; font-size: 15px; font-weight: 700; width: 150px; float: left; border-left: 5px solid #7d97ba; padding-left: 10px;"></span>
      <span class="span_size1" v-for="Cooperative in Cooperative_Partner">
        <img :src="Cooperative.img" alt="" class="c_img1">
        <span style="top: 100px;"><a :href="Cooperative.href" v-html="Cooperative.msg"></a></span>
      </span>
    </div>
    <div id="footer1">
      <span style="float: right;">
      <span class="span_size2" v-for="extension in Extension" style="float: left">
        <div><img :src="extension.img" alt="" class="c_img2"></div>
        <span v-html="extension.msg" style="line-height: 35px"></span>
      </span>
      </span>
      <span style="display: inline">
        <div>
          <a class="span_size2" v-for="footer in Footer" v-html="footer.msg"></a>
        </div>
        <div class="padding_1">
          <div>
            <text>Tel.{{Data.tel}}</text>
            <div class="line"></div>
            <text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email.{{Data.email}}</text>
          </div>
          <div>
            <text>地址：{{Data.address}}</text>
          </div>
        </div>
      </span>
    </div>
    <div id="footer2">
      <text v-html="Data.msg"></text>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      Cooperative_Partner: [
        {
          msg: "中国心理学会<br>心理学普及工作委员会",
          img: require("../../assets/img/logo1.png"),
          href: "https://www.chinaappc.org/index/index.html"
        },
        {
          msg: "中国心理卫生协会",
          img: require("../../assets/img/logo2.png"),
          href: "https://www.camh.org.cn/"
        },
        {
          msg: "中国民族卫生协会",
          img: require("../../assets/img/logo3.png"),
          href: "https://www.chnha.org.cn/html/index.html"
        },
        {
          msg: "中国医疗保健国际<br>交流促进会",
          img: require("../../assets/img/logo4.png"),
          href: "https://www.cpam.org.cn/"
        },
      ],
      Extension: [
        {
          msg: "&nbsp;&nbsp;微信公众号",
          img: require("../../assets/img/Official_Account.png")
        },
        {
          msg: "&nbsp;&nbsp;&nbsp;APP下载",
          img: require("../../assets/img/App_Download.png")
        },
      ],
      Footer: [
        {
          msg: "关于我们",
        },
        {
          msg: "法律声明",
        },
        {
          msg: "意见反馈",
        },
        {
          msg: "监督举报"
        }
      ],
      Data: {
        text: "合作伙伴<br>链接",
        tel: "0571-8528268",
        email: "heartbright@gmail.com",
        address: "浙江省 杭州市 余杭区 东湖街东湖中路 48号101室 杭州心博睿教育科技有限公司",
        msg: "Copyright 2019 All rights reserved&nbsp;&nbsp;&nbsp;&nbsp;版权所有：蓝色匠土教育科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;晋ICP备19008219号"
      }
    }
  }
}
</script>

<style scoped>
  .c_img1 {
    float: left;
    width: 30%;
  }
  .c_img2 {
    width: 70px;
    display: table-cell;
  }
  a:link { text-decoration: none;color: #141415}
  a:active { text-decoration:blink}
  a:hover { text-decoration:underline;color: red}
  .padding_1 {
    padding-top: 20px;
    line-height: 25px;
  }
  .span_size1 {
    width: 250px;
    top: 30px;
    display: table-cell;
  }
  .span_size2 {
    width: 100px;
    display: table-cell;
  }
  #cooperative {
    height: 70px;
    padding: 40px 280px 40px 280px;
    font-size: 10px;
  }
  #footer1 {
    height: 70px;
    color: #dae2f1;
    font-size: 10px;
    background: #043079;
    padding: 40px 280px 40px 280px;
  }
  #footer2 {
    height: 40px;
    color: #dae2f1;
    font-size: 10px;
    background: #012764;
    text-align: center;
    padding-top: 18px;
  }
  .line {
    background: #E7E7E7;/*背景色为浅灰色*/
    width: 0.2px;/*设置宽高*/
    height: 13px;
    position: relative;/*调整位置*/
    left: 110px;
    float: left;/*让此div与前面的并排显示*/
  }
</style>