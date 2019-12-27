<template>
  <el-card class="text-default-card">
    <div slot="header" class="clearfix">
      <span class="title">{{title}}</span>
    </div>
    <div class="text-default-card-body">
      <el-link
        href="https://element.eleme.io"
        v-for="(item, index) in data"
        :key="index"
        :underline="false"
        target="_blank"
      >{{ item.label }}</el-link>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "text-default-card",
  props: {
    title: {
      type: String,
      default() {
        return "卡片名称";
      }
    },
    data: {
      type: Array,
      default() {
        return [
          {
            url: "https://element.eleme.io",
            label: "范文龙"
          },
          {
            url: "https://element.eleme.io",
            label: "傻逼"
          },
          {
            url: "https://element.eleme.io",
            label: "是个傻逼"
          },
          {
            url: "https://element.eleme.io",
            label: "邵恩超"
          },
          {
            url: "https://element.eleme.io",
            label: "是个逗逼"
          },
          {
            url: "https://element.eleme.io",
            label: "刘冲"
          },
          {
            url: "https://element.eleme.io",
            label: "是个天才"
          }
        ];
      }
    }
  }
};
</script>
<style lang="less" scoped>
.text-default-card {
  height: 380px;
  width: 300px;
  background-image: linear-gradient(rgb(14, 139, 255), #017ac3);
  margin-bottom: 20px;
}
.text-default-card /deep/ .el-card__header {
  padding: 13px 20px;
  margin-left: 0px;
  color: white;
  text-align: left;
  font-family: "PingFang SC";
  font-size: 16px;
  font-weight: 600;
}
.text-default-card /deep/ .el-card__body {
  padding: 5px;
}
.text-default-card-body {
  display: flex;
  align-content: flex-start;
  width: 93%;
  height: 310px;
  background-color: rgb(255, 255, 255);
  flex-direction: row;
  flex-wrap: wrap;
  line-height: 30px;
  padding: 5px 10px;
}
.text-default-card-body /deep/ a {
  margin-right: 20px;
}
</style>