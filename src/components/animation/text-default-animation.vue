<template>
  <h2>
    <span
      v-for="(item, index) in data.split('')"
      :key="index"
      :style="`animation:jump 1s linear ${ -0.2*(data.length-1-index) }s infinite alternate`"
    >{{ item }}</span>
  </h2>
</template>
<script>
export default {
  name: "text-default-animation",
  props: {
    data: {
        type: String,
        default(){
            return "我爱你中国范文龙傻逼"
        }
    }
  }
};
</script>
<style type="text/css">
h2 span {
  float: left;
  position: relative;
}

@keyframes jump {
  0% {
    top: 0px;
    color: red;
  }
  50% {
    top: -10px;
    color: green;
  }
  100% {
    top: 10px;
    color: blue;
  }
}
</style>