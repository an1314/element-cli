<template>
  <el-card :body-style="{ padding: '0px' }" class="img-mini-card" shadow="never">
    <div class="img-mini-card-img">
      <div :style="'background-image: url('+ option.url +')'"></div>
    </div>
    <div class="img-mini-card-desc">
      <span>{{ option.description }}</span>
    </div>
  </el-card>
</template>
<style>
.img-mini-card {
  margin-bottom: 10px;
}
.img-mini-card-img {
  padding-bottom: 6px;
  position: relative;
  text-align: center;
}
.img-mini-card-img div {
  padding-top: 90%; /* 1:1 aspect ratio */
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}
.bottom {
  margin-top: 5px;
  line-height: 12px;
  padding-bottom: 5px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.img-mini-card-desc {
  height: 12px;
  font-size: 12px;
  line-height: 12px;
  padding-bottom: 2px;
}
</style>

<script>
export default {
  // 卡片模板用于显示图片
  name: "img-mini-card",
  props: {
    // 用于卡片显示
    option: {
      type: Object,
      default() {
        return {
          url:
            "http://file02.16sucai.com/d/file/2014/0704/e53c868ee9e8e7b28c424b56afe2066d.jpg",
          description: "好吃的汉堡"
        };
      }
    },
    // 是否有独立跳转链接
    showLink: {
      type: Boolean,
      default() {
        return false;
      }
    },
    mapping: {}
  },
  data() {
    return {
      linkLabel: "详情"
    };
  }
};
</script>