<template>
  <el-container>
    <el-header class="main-header">
      <header-default></header-default>
    </el-header>
    <el-main class="main-body">
      <title-default></title-default>
      <el-row class="main-menu-backgroud">
        <el-tabs class="main-menu" v-model="menuName" @tab-click="mainMenuClick" stretch>
          <el-tab-pane label="首页" name="1"></el-tab-pane>
          <el-tab-pane label="公司介绍" name="2"></el-tab-pane>
          <el-tab-pane label="产品展厅" name="3"></el-tab-pane>
          <el-tab-pane label="公司相册" name="4"></el-tab-pane>
          <el-tab-pane label="产品视频" name="5"></el-tab-pane>
          <el-tab-pane label="最新供应" name="6"></el-tab-pane>
          <el-tab-pane label="资质证书" name="7"></el-tab-pane>
          <el-tab-pane label="新闻资讯" name="8"></el-tab-pane>
          <el-tab-pane label="联系我们" name="9"></el-tab-pane>
        </el-tabs>
      </el-row>
      <el-carousel :interval="4000" type="card" height="200px" style="margin-top:20px">
        <el-carousel-item v-for="(img, index) in imgList" :key="index">
          <el-row>
            <el-col :span="24">
              <el-image :src="img" fit="fill" style="width:100%;height:200px"></el-image>
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
      <transition name="el-fade-in-linear" mode="out-in">
        <div v-if="menuName == '1'" :key="1">
          <home>
            <aside-default slot="aside"></aside-default>
            <el-breadcrumb separator-class="el-icon-arrow-right" slot="bread">
              <el-breadcrumb-item>您现在的位置：首页</el-breadcrumb-item>
              <el-breadcrumb-item>测试网站</el-breadcrumb-item>
            </el-breadcrumb>
          </home>
        </div>
        <div v-if="menuName == '2'" :key="2">
          <company>
            <aside-default slot="aside"></aside-default>
            <el-breadcrumb separator-class="el-icon-arrow-right" slot="bread">
              <el-breadcrumb-item>您现在的位置：首页</el-breadcrumb-item>
              <el-breadcrumb-item>测试网站</el-breadcrumb-item>
              <el-breadcrumb-item>公司介绍</el-breadcrumb-item>
            </el-breadcrumb>
          </company>
        </div>
        <div v-if="menuName == '3'" :key="3">
          <product>
            <aside-default slot="aside"></aside-default>
            <el-breadcrumb separator-class="el-icon-arrow-right" slot="bread">
              <el-breadcrumb-item>您现在的位置：首页</el-breadcrumb-item>
              <el-breadcrumb-item>测试网站</el-breadcrumb-item>
              <el-breadcrumb-item>产品展示</el-breadcrumb-item>
            </el-breadcrumb>
          </product>
        </div>
        <div v-if="menuName == '4'" :key="4">公司相册</div>
      </transition>
    </el-main>
  </el-container>
</template>
<style lang="less">
@import "./index.less";
</style>
<script>
import Home from "@/view/home";
import Company from "@/view/company";
import Product from "@/view/product";

export default {
  name: "index",
  components: {
    Home,
    Company,
    Product
  },
  props: {},
  data() {
    return {
      // 大图轮播
      imgList: [
        "http://t10.baidu.com/it/u=217507662,2525644431&fm=76",
        "http://t10.baidu.com/it/u=217507662,2525644431&fm=76",
        "http://t10.baidu.com/it/u=217507662,2525644431&fm=76",
        "http://t10.baidu.com/it/u=217507662,2525644431&fm=76"
      ],
      menuName: "1"
    };
  },
  methods: {
    mainMenuClick() {}
  },
  mounted() {}
};
</script>