<template>
  <el-row :gutter="20">
    <el-col :span="6" v-for="(item, index) in data" :key="index">
      <img-default-card :option="item"></img-default-card>
    </el-col>
  </el-row>
</template>
<script>
import ImgDefaultCard from "@/components/cards/img-default-card";

export default {
  name: "img-default-view",
  components: {
    ImgDefaultCard
  },
  props: {
    data: {
      type: Array,
      default() {
        return [
          {
            url:
              "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            description: "汉堡1"
          },
          {
            url:
              "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            description: "汉堡1"
          },
          {
            url:
              "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            description: "汉堡1"
          },
          {
            url:
              "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            description: "汉堡1"
          },
          {
            url:
              "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            description: "汉堡1"
          },
          {
            url:
              "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            description: "汉堡1"
          }
        ];
      }
    }
  },
  data() {
    return {};
  }
};
</script>