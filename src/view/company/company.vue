<template>
  <el-container>
    <el-main>
      <el-container>
        <el-aside width="320px">
            <slot name='aside'></slot>
        </el-aside>
        <el-main>
          <slot name='bread' ></slot>
          <img-default-view type="mini" class="box-only"></img-default-view>
          <text-box-card>
            <el-row style="height:320px">
                <el-col :span='8'>
                    <el-image src='http://style.51sole.com/images/defaultlogo_big.png'></el-image>
                </el-col>
                <el-col :span='16' style='text-indent:25px'>
                    郑州新普康动物药业有限公司坐落于美丽的中原腹地郑州，交通便利、信息灵通，是一家专门从事动物生化药品及动物保健品研发、生产、经营，技术合作及兽药原料和制剂贸易的股份制企业。注册资金1000万。公司现有职工300余人，其中管理人员58人，均为大学文化，中级以上技术人员23人，并聘请博士3人，硕士6人，教授11人。在与中国农业大学、中山大学、西北农林、华南农大等多家院校有关专家合作的基础上，致力于对高效生化药剂的研究开发、生产经营和进出口。  郑州新普康药业有限公司是一家私营企业，所在地区位于河南郑州市,主营产品或服务为各种益母康   康乐加   康加。我们以诚信、实力和质量获得业界的高度认可，坚持以客户为核心，“质量到位、服务一流”的经营理念为广大客户提供优质的服务。欢迎各界朋友莅临郑州新普康药业有限公司参观、指导和业务洽谈。您如果对我们感兴趣的话，可以直接联系我们或者留下联系方式。联系人何经理，手机：，联系地址：河南郑州市经三路鑫苑路天府大厦。
                </el-col>
            </el-row>
          </text-box-card>
          <text-box-card>
            <info-default></info-default>
            <info-img-view></info-img-view>
          </text-box-card>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>
<script>
export default {
    name: 'company'
};
</script>
<style lang="less" scoped>
</style>