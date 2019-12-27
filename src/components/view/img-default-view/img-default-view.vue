<template>
  <el-row :gutter="10" v-if="type == 'mini'">
    <el-col :span="4" v-for="(item, index) in data" :key="index">
      <img-mini-card :option="item"></img-mini-card>
    </el-col>
  </el-row>
  <el-row :gutter="20" v-else>
    <el-col :span="6" v-for="(item, index) in data" :key="index">
      <img-default-card :option="item"></img-default-card>
    </el-col>
  </el-row>
</template>
<script>
import ImgDefaultCard from "@/components/cards/img-default-card";
import ImgMiniCard from "@/components/cards/img-mini-card";

export default {
  name: "img-default-view",
  components: {
    ImgDefaultCard,
    ImgMiniCard
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
    },
    type: {
      type: String,
      default() {
        return "default";
      }
    }
  },
  data() {
    return {};
  }
};
</script>