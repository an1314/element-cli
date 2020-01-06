<template>
  <el-row>
    <el-row class="info-img-view">
      <el-col :span="4" class="info-img-view-img">
        <div :style="'background-image: url('+ option.url +')'"></div>
      </el-col>
      <el-col :span="20">
        <el-row >
          <el-col :span="24" class="info-img-view-header">
            <span class="title">{{ option.title }}</span>
            <span class="date">{{ option.date }}</span>
          </el-col>
          <el-col :span="24">
            <span class="description">{{ option.description }}</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider></el-divider>
  </el-row>
</template>
<script>
export default {
  name: "info-img-view",
  props: {
    option: {
      type: Object,
      default() {
        return {
          url:
            "http://file02.16sucai.com/d/file/2014/0704/e53c868ee9e8e7b28c424b56afe2066d.jpg",
          description:
            "诚招：中荷时代区域经理/大包业务/代理商/专营服务店武汉文翔中荷生物科技有限公司是集动物保健品、兽药制剂的研制、生产、销售、技术服务一体的现代化高科技兽药企",
          title: "中荷时代超微粉日长三斤催肥通用诚招代理",
          date: "2019-12-30"
        };
      }
    }
  },
  filters: {
    filterDate(date) {
      if (date) {
        return this.$moment(date).format("YYYY/MM/DD");
      } else {
        return "";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.info-img-view {
  height: 170px;
}
.info-img-view-img div {
  padding-top: 90%;
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}
.info-img-view-img {
  height: 170px;
  background: rgb(231, 229, 229);
  display: flex;
  justify-content: center;
}
.title {
  width: auto;
  font-weight: 600;
  height: 100px;
}
.date {
  min-width: 100px;
  float: right;
  color: rgb(206, 205, 205);
}
.info-img-view-header{
  height: 40px;
}
.info-img-view /deep/ .el-col-20 {
  height: 100%;
}
.info-img-view /deep/ .el-row {
  height: 100%;
  padding: 10px 20px;
}
</style>