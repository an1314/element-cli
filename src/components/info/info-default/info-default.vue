<template>
  <el-row class="info-default">
    <el-row class="info-default-title" v-show="data.title">{{ data.title }}</el-row>
    <el-row v-for="(cols, index) in rows" :key="index" class="info-default-body">
      <el-col v-for="(item, i) in cols" :key="i" :span="item.span">
        <div class="label">{{ item.name }}&nbsp;:&nbsp;</div>

        <div class="content">{{ data[item.key] || '' }}</div>
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
export default {
  name: "info-default",
  props: {
    data: {
      type: Object,
      default() {
        return {
          title: "测试公司",
          type: "私营企业",
          address: "河南郑州市经三路鑫苑路天府大厦",
          contact: "何经理",
          tel: "-",
          phone: "13253527527",
          qq: "3108553112",
          wechat: "13253527527"
        };
      }
    },

    controls: {
      type: Object,
      default() {
        return {
          type: {
            name: "企业类型",
            
          },
          address: {
            name: "地址"
          },
          contact: {
            name: "联系人"
          },
          tel: {
            name: "电话"
          },
          phone: {
            name: "电话"
          },
          qq: "QQ",
          wechat: "微信",
        };
      }
    }
  },
  computed: {
    rows() {
      let span = this.controls.span || 24;
      let i = Math.floor(24 / span);
      let ignoreKeys = new Set(["span"]);
      let zindex = 0;
      return Object.entries(this.controls).reduce((array, item) => {
        if (ignoreKeys.has(item[0]) || !item[1]) {
          // 过滤掉无用的键
          return array;
        } else {
          // 获取当前列数
          let _index = zindex % i;
          // 如果列数为 0；添加新的一行
          if (_index == 0) {
            array.push([]);
          }
          // 填充数据
          let child = array[array.length - 1];
          if (typeof item[1] == "string") {
            child[_index] = {
              name: item[1],
              key: item[0],
              span
            };
            zindex++;
          } else {
            let spannum = item[1].span || span;
            if ((i - _index) * span < spannum) {
              _index = 0;
              zindex += i - _index -1;
              child = [];
              array.push(child);
            }
            child[_index] = Object.assign(
              {
                span,
                key: item[0]
              },
              item[1]
            );
            zindex += Math.floor(child[_index].span / span);
          }
          return array;
        }
      }, []);
    }
  }
};
</script>
<style lang="less" scoped>
.info-default {
  text-align: left;
  line-height: 30px;
}
.info-default-title {
  margin-left: 5px;
  font-weight: 600;
}
.info-default-body /deep/ .el-col {
  display: flex;
}
.info-default-body .label {
  display: inline-block;
  text-align: right;
  color: rgb(194, 194, 194);
  width: 80px;
}
.info-default-body .content {
  display: inline-block;
  text-align: left;
}
</style>