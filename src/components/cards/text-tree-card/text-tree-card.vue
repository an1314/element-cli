<template>
  <el-card class="text-tree-card">
    <div slot="header" class="clearfix">
      <span class="title">{{title}}</span>
    </div>
    <div class="text-tree-card-body">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      <!-- <el-link
        href="https://element.eleme.io"
        v-for="(item, index) in data"
        :key="index"
        :underline="false"
        target="_blank"
      >{{ item.label }}</el-link>-->
    </div>
  </el-card>
</template>
<script>
export default {
  name: "text-tree-card",
  props: {
    title: {
      type: String,
      default() {
        return "卡片名称";
      }
    },
    defaultProps: {
      type: Object,
      default() {
        return {
          children: "children",
          label: "label"
        };
      }
    },
    data: {
      type: Array,
      default() {
        return [
          {
            url: "https://element.eleme.io",
            label: "范文龙",
            children: [
              {
                url: "https://element.eleme.io",
                label: "傻逼"
              }
            ]
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
  },
  methods: {
    handleNodeClick() {}
  }
};
</script>
<style lang="less" scoped>
.text-tree-card {
  width: 300px;
  background-image: linear-gradient(rgb(14, 139, 255), #017ac3);
  margin-bottom: 20px;
}
.text-tree-card /deep/ .el-card__header {
  padding: 13px 20px;
  margin-left: 0px;
  color: white;
  text-align: left;
  font-family: "PingFang SC";
  font-size: 16px;
  font-weight: 600;
}
.text-tree-card /deep/ .el-card__body {
  padding: 5px;
}
.text-tree-card-body {
  width: 93%;
  font-size: 16px;
  font-weight: 500;
  background-color: rgb(255, 255, 255);
  padding: 5px 10px;
}
.text-tree-card-body /deep/ .el-tree {
  width: 100%;
  text-align: left;
}
</style>