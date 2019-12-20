<template>
  <div>
    <div id="container">
      <ul class="first">
        <li>
          <el-row >
            <el-col :span="len" class="img-view-item" v-for="(item, index) in firstData" :key="index">
              <img-default-card :option="item"></img-default-card>
            </el-col>
          </el-row>
        </li>
      </ul>
      <ul class="last">
        <li>
            <el-row >
            <el-col :span="len" class="img-view-item" v-for="(item, index) in lastData" :key="index">
                <img-default-card :option="item"></img-default-card>
            </el-col>
            </el-row>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import ImgDefaultCard from "@/components/cards/img-default-card";
export default {
  name: "img-default-scroll",
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
              "http://img3.imgtn.bdimg.com/it/u=2455100451,3980453752&fm=26&gp=0.jpg",
            description: "汉堡1"
          },
          {
            url:
              "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            description: "汉堡2"
          },
          {
            url:
              "http://file02.16sucai.com/d/file/2014/0704/e53c868ee9e8e7b28c424b56afe2066d.jpg",
            description: "汉堡3"
          },
          {
            url:
              "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            description: "汉堡4"
          },
          {
            url:
              "http://file02.16sucai.com/d/file/2014/0704/e53c868ee9e8e7b28c424b56afe2066d.jpg",
            description: "汉堡5"
          },
          {
            url:
              "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            description: "汉堡6"
          },
          {
            url:
              "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            description: "汉堡7"
          },
          {
            url:
              "http://img3.imgtn.bdimg.com/it/u=2455100451,3980453752&fm=26&gp=0.jpg",
            description: "汉堡8"
          },
           {
            url:
              "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            description: "汉堡9"
          },
          {
            url:
              "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            description: "汉堡10"
          },
           {
            url:
              "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            description: "汉堡11"
          },
          {
            url:
              "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            description: "汉堡12"
          },
           {
            url:
              "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            description: "汉堡13"
          }
        ];
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    firstData() {
      let len = Math.floor(this.data.length / 2);
      if (len == 0) {
        return [];
      }
      return this.data.slice(0, len);
    },
    lastData() {
      let len = Math.floor(this.data.length / 2);
      if (len == 0) {
        return [];
      }
      return this.data.slice(len, 2 * len);
    },
    len(){
        let len =Math.floor(this.data.length/2)
        if(len == 0){
            return 24
        }else{
            return Math.floor(24/len);
        }
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#container {
  width: 100%;
  height: 260px;
  margin: 10px auto;
  overflow: hidden;
  position: relative;
  border: 1px solid;
  box-sizing: border-box;
}

#container ul.first {
  width: 100%;
  right: -100%;
  top: 0;
  position: absolute;
  animation: scollLeft 30s linear -15s infinite;
}
#container ul.last {
  width: 100%;
  right: -100%;
  top: 0;
  position: absolute;
  animation: scollLeft 30s linear 0s infinite;
}

#container:hover ul {
  animation-play-state: paused;
}

#container ul li {
  float: left;
  line-height: 30px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
}

@-webkit-keyframes scollLeft {
  from {
    right: -100%;
  }
  to {
    right: 100%;
  }
}

@keyframes scollLeft {
  from {
    right: -100%;
  }
  to {
    right: 100%;
  }
}

@-moz-keyframes scollLeft {
  from {
    right: -100%;
  }
  to {
    right: 100%;
  }
}

@-o-keyframes scollLeft {
  from {
    right: -100%;
  }
  to {
    right: 100%;
  }
}
.img-view-item {
    padding: 2px 5px 2px 5px
}
.img-view-item:hover {
    cursor: pointer;
    padding: 2px 5px 2px 5px
}
</style>