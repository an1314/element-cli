<template >
  <el-card class="text-box-card">
    <div slot="header" class="clearfix">
      <el-row>
        <el-col class="title" :span="5">
          <span class="el-icon-arrow-right">{{ title }}</span>
        </el-col>
        <el-col :span="19" class="link">
          <el-button type="text">{{ link }}</el-button>
        </el-col>
      </el-row>
    </div>
    <slot></slot>
  </el-card>
</template>
<script>
export default {
  name: "text-box-card",
  props: {
    title: {
      type: String,
      default() {
        return "简介";
      }
    },
    link: {
      type: String,
      default() {
        return "更多";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.text-box-card {
  margin-top: 20px;
  text-align: left;
}
.text-box-card /deep/ .el-card__header{
    padding: 10px 20px;
}
.text-box-card .title {
  background-color: #2086da;
  height: 50px;
  color: white;
  padding-left: 20px;
  line-height: 50px;
  font-size: 20px;
  font-weight: 400;
}
.text-box-card .link {
  height: 50px;
}
.text-box-card .link /deep/ button {
  position: absolute;
  right: 0px;
  bottom: -5px;
}
</style>