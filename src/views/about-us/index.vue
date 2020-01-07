<template>
  <section class="about-us">
    <section class="about-us-banner">
      <img
        :src="$imgUrl + '/about-us/banner_img_bg%402x.png'"
        alt=""
      />
    </section>
    <section class="about-us-company">
      <h2>伍壹叁教育集团</h2>
      <img
        :src="$imgUrl + '/about-us/513_img%402x.png'"
        alt=""
      />
      <div class="about-us-company-synopsis">
        伍壹叁教育集团（以下简称：513教育） 513起名来源于，网址513.com域名，513谐音“我要上”在教
        育行业便于寓意帮助、传播品牌。集团旗下有513商学院、513在线教育、云南513、桂林513、洋贸国
        际电子商务有限公司、兴茂国际电子商务有限公司、零时科技等。主要业务线上线下结合的职业教育模
        式，自主开发在线平台、在线课程、在线实训、软件研发、产学研合作、教育信息化、创业孵化服务为
        一体的教育生态科技企业，专注跨境电商、大数据、电竞、网络安全、区块链等人才培养。公司以“产教
        融合、协同育人”为理念...
      </div>
      <van-button 
        plain 
        type="primary"
        size='small'
        @click="handleShow"
        class="about-us-more"
      >更多></van-button>
    </section>
    <MainBusiness />
    <TeamMien />
    <Corporate />
    <Map />
    <Collaborate />
    <van-dialog
      v-model="show"
      title="伍壹叁教育集团"
      show-cancel-button
    >
      <section class="about-us-van-dialog">
        <p>
          伍壹叁教育集团（以下简称：513教育） 513起名来源于，网址513.com域名，513谐音“我要上”
          在教育行业便于寓意帮助、传播品牌。集团旗下有513商学院、513在线教育、云南513、桂林513、
          洋贸国际电子商务有限公司、兴茂国际电子商务有限公司、零时科技等。主要业务线上线下结合的
          职业教育模式，自主开发在线平台、在线课程、在线实训、软件研发、产学研合作、教育信息化、
          创业孵化服务为一体的教育生态科技企业，专注跨境电商、大数据、电竞、网络安全、区块链等人
          才培养。公司以“产教融合、协同育人”为理念，
        </p>
        <p>
          513教育，是阿里巴巴“百城千校 百万英才”项目官方指定平台，携手阿里巴巴、亚马逊、 深圳大学、
          江西财经大学、吉首大学、广东技师学院等大批一流跨境电商企业、高校， 共建专业、学科及课程体系，
          为学校师生提供“教学—实训—认证—就业—创业”的一站式人 才培养输送服务，为企业提供专岗人才定制服务。
        </p>
        <p>
          513教育拥有专业的课程研发团队及师资队伍约100多人，具有完善的课程体系和实训课程， 联合全国高校创建
          了32所跨境电商实训与创业中心基地，在高新技术行业与四叶草、DLB大 数据开展网络安全、大数据等课程，联
          合高校创建了15所校外实训基地，并建立有创业扶持 基金500多万，帮助学生创业。已通过培训就业学生共计25
          000多人次，未来三年力争达到年10万人次。
        </p>
        <p>
          513教育将继续秉持创新、专注、专业、共赢的精神，积极探索互联网创新教学新模式， 打造双元化教育模式，
          以就业为教育的初心，实现优势互补、产教融合、校企协同、 合作育人，促进我国教育行业高速发展，大量培养
          国际化复合型、创新型、实战型的高科技 人才，为我国教育事业、高新行业发展做出更大贡献.
        </p>
      </section>
    </van-dialog>
  </section>
</template>

<script>
import { Dialog, Button } from "vant";
import MainBusiness from './children/main-business';
import TeamMien from './children/team-mien';
import Corporate from './children/about-corporate';
import Map from './children/about-map';
import Collaborate from './children/about-collaborate';

export default {
  data() {
    return {
      show: false
    };
  },
  components: {
    [Dialog.Component.name]: Dialog.Component,
    [Button.name]: Button,
    MainBusiness,
    TeamMien,
    Corporate,
    Map,
    Collaborate,
  },
  methods: {
    handleShow() {
      this.show = true;
    }
  }
};
</script>

<style lang="less" scoped>
.about-us {
  .about-us-banner {
    width: 100%;
    height: 180px;
    img {
      width: 100%;
      height: 180px;
    }
  }
  .about-us-company {
    overflow: hidden;
    background: #fff;
    text-align: center;
    h2:nth-child(1) {
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      margin-top: 60px;
      margin-bottom: 30px;
      text-align: center;
    }
    img:nth-child(2) {
      width: 100%;
      height: 205px;
      margin-bottom: 30px;
    }
    .about-us-company-synopsis {
      margin: 0 16px;
      height: 230px;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(128, 128, 128, 1);
      line-height: 21px;
      text-align: justify;
      text-justify: distribute-all-lines; //ie6-8
      text-align-last: left; //一个块或行的最后一行对齐方式
      -moz-text-align-last: left;
      -webkit-text-align-last: justify;
    }
    .about-us-more {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  .about-us-van-dialog {
    height: 350px;
    overflow-y: auto;
    padding: 0 15px;
    p {
      text-align: justify;
      text-justify: distribute-all-lines;
      text-align-last: left;
      -moz-text-align-last: left;
      -webkit-text-align-last: justify;
      margin-bottom: 20px;
      text-indent: 32px;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(128, 128, 128, 1);
      line-height: 21px;
    }
  }
}
</style>
