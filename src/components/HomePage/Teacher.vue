<template>
  <div class="container">
    <div style="border-bottom:1px solid #6a6464; padding-bottom: 5px">
      <span class="head">
        {{head.teacher}}&nbsp;&nbsp;
      </span>
      <span class="head" style="color: #b8b4b4" v-html="head.teacher1"></span>
    </div>
    <div class="main">
      <span>
        <img :src="teacher.src" alt="" class="teacher_img">
      </span>
      <div>
        <div class="head teacher_head" style="font-size: 30px; font-weight: 800;">{{teacher.name}}介绍</div>
        <div class="context" v-for="con in teacher.context">{{con}}</div>
      </div>
      <div style="border-bottom:1px solid #6a6464; height: 30px "></div>
      <div>
        <div class="head" style="padding-top: 30px; color: #000000">{{head.video}}</div>
        <span class="Related_Video" v-for="video in video"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teacher",
  data() {
    return {
      head: {
        teacher: "名师风采",
        teacher1: "/&nbsp;&nbsp;Famous Teacher Style",
        video: "相关视频:"
      },
      teacher: {
        src: require("../../assets/img/logo.png"),
        name: "黄小明",
        context: [
          "山西大学是中国办学历史最悠久的高等学府之一，是国家“双一流”建设高校，是教育部和山西省人民政府共同建设的部省合建大学。",
          "学校的前身是创建于1902年的山西大学堂，其悠远的文脉可以上溯至明清时期的晋阳书院、三立书院和令德堂书院。学校创办的山西大学堂译书院，是中国近代大学创办的第二所译书院，有力促进了中西文化交流。二十世纪二三十年代，山西大学名宿云集，人才辈出。抗战时期至新中国成立前夕，山西大学辗转多地，坚持办学，众多师生参加抗战，投身民主革命，为民族独立和人民解放献出了鲜血和生命。",
          "新中国成立初期，山西大学共设有文、法、理、工、农、医等六个学院，教职员工增至1000余人，在校生达到近2200人，成为一所名副其实的社会主义综合大学。上世纪五十年代，法学院改称财经学院，并入中国人民大学，法律系并入北京大学，冶金工程系并入北京钢铁学院、纺织工程系和采矿工程系并入西北工学院，工学院、农学院、医学院独立建院，山西大学为国家高等教育布局调整做出了重要的贡献。",
          "改革开放以来，山西大学办学成绩斐然，先后实现了博士点、国家重点学科、国家重点实验室、教育部人文社科重点研究基地、院士、国家级科技大奖等一系列重大突破。1998年，山西大学成为山西省重点建设大学；2005年，成为最早的一批省部共建大学；2012年，成为“中西部高校综合实力提升工程”入选高校。2018年，成为教育部和山西省人民政府共同建设的部省合建高校。2022年，进入国家“双一流”建设高校行列。学校初心如磐，步履铿锵，一步一个脚印，实现了从地方大学到高等教育“国家队”的历史性跨越。",
          "历经世纪沧桑，山西大学形成了“中西会通、求真至善、登崇俊良、自强报国”的光荣传统和“勤奋、严谨、信实、创新”的优良校风，为国家和社会培育了一批又一批优秀人才，为我国高等教育事业的发展作出了重要贡献。在新的起点上，学校正在全面建设高水平综合性研究型大学，向着跻身中国优秀知名大学行列的目标迈进。",
          "学校现有19个一级学科博士学位授权点、35个一级学科硕士学位授权点、24个硕士专业学位种类、14个博士后流动站，6个目录外二级学科博、硕士点，2个交叉学科博、硕士点。哲学、物理学入选国家“双一流”建设学科。科学技术哲学、光学入选国家重点学科。化学、工程学、材料学、环境/生态学、物理学、计算机科学与技术、植物与动物学、农业科学等8个学科进入ESI前1%。拥有1个国家重点实验室、1个教育部人文社会科学重点研究基地、2个省部共建协同创新中心、2个教育部重点实验室、1个环保部重点实验室、1个国家地方联合工程实验室、2个教育部工程研究中心、3个“111”学科创新引智基地、1个国家国际科技合作基地。",
          "山西大学坚守立德树人使命，得天下英才而育之。现有全日制本科生24155人、全日制硕士研究生7366人、非全日制硕士研究生1550人，全日制博士研究生977人。设有本科专业87个，涵盖文、史、哲、理、工、经、管、法、教、艺等10大学科门类。国家级一流专业23个，省级一流专业19个。物理学专业入选教育部基础学科拔尖学生培养计划2.0基地。大力加强创新创业教育，建有国家级实验教学中心3个，国家级虚拟仿真实验教学项目2个，入选首批全国创新创业教育改革示范高校、全国创新创业典型经验高校50强。近年来，学生在“挑战杯”全国大学生课外学术科技作品竞赛、互联网+大学生创新创业大赛、ASC世界大学生超算竞赛等比赛中屡创佳绩，获得国家级奖项近130项。在奥运会、亚运会、全运会等赛事中先后获得金银铜牌十余枚。",
        ]
      },
      video: {
        src: [

        ]
      },
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 50px 50px 50px 50px;
  }
  .head {
    color: #284F8AFF;
    font-size: 20px;
  }
  .teacher_img {
    float: left;
    width: 500px;
  }
  .teacher_head {
    padding: 20px 20px 20px 20px;
  }
  .main {
    padding: 10px 10px 10px 10px;
  }
  .context {
    padding: 15px 15px 15px 15px;
    font-size: initial;
    line-height: 30px;
    text-indent : 33px;
  }
  .Related_Video {
    width: 25%;
  }
</style>