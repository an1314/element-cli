<template>
  <el-card :body-style="{ padding: '0px' }" class="img-default-card">
    <div class="img-default-card-img">
      <div :style="'background-image: url('+ option.url +')'"></div>
    </div>
    <div class="img-default-card-desc">
      <span>{{ option.description }}</span>
      <div class="bottom clearfix" v-show="showLink">
        <el-button type="text" class="button">{{ linkLabel }}</el-button>
      </div>
    </div>
  </el-card>
</template>
<style>
.img-default-card {
  margin-bottom: 10px;
}
.img-default-card-img {
  padding: 2%;
  position: relative;
  width: 96%;
  text-align: center;
}
.img-default-card-img div {
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
.img-default-card-desc {
  height: 45px;
  font-size: 12px;
  background: rgb(196, 191, 191);
}
</style>

<script>
export default {
  // 卡片模板用于显示图片
  name: "img-default-card",
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