<template>
  <el-container>
    <el-main>
      <el-container>
        <el-aside width="320px" style="position:sticky;top:0">
          <slot name='aside'></slot>
        </el-aside>
        <el-main>
          <slot name='bread'></slot>
          <text-box-card>
            <img-default-scroll></img-default-scroll>
          </text-box-card>
          <text-box-card>
            <img-default-view></img-default-view>
          </text-box-card>
          <text-box-card title="工商信息">
            <table-default-simple :data="tableCardData"></table-default-simple>
          </text-box-card>
          <img-default-view type="mini" class="box-only"></img-default-view>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>
<script>

import { getExcelData } from "@/api/excel";
export default {
  name: "home",
  props: {},
  components: {
  },
  data() {
    return {
     
      tableCardData: {
        name: {
          label: "公司名称",
          value: "测试公司"
        },
        type: {
          label: "企业类型",
          value: "私营企业"
        },
        product: {
          label: "主要经营产品",
          value: "益母康 康乐加 康加"
        },
        mode: {
          label: "经营模式",
          value: "生产型"
        },
        createTime: {
          label: "成立时间",
          value: "暂无"
        },
        money: {
          label: "注册资本",
          value: "暂无"
        }
      }
    };
  },
  mounted() {
    getExcelData("sb.xlsx");
  }
};
</script>
<style lang="less">
@import "./index.less";
</style>