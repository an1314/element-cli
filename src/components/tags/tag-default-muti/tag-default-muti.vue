<template>
  <el-row class="tag-default-muti">
    <el-col :span="23">
      <el-row v-for="(tagsItem, index) in Object.entries(tagsInfo)" :key="index">
        <div class="label">{{tagsItem[1].label}}&nbsp;:&nbsp;</div>
        <el-tag
          v-for="item in tagsItem[1].list"
          :key="item.value"
          effect="dark"
          closable
          @close="tagClose(item, tagsItem[0])"
        >{{ item.label }}</el-tag>
      </el-row>
    </el-col>
    <el-col :span="1">
      <el-popover placement="bottom-end" width="400" trigger="click">
        <el-row v-for="(tagsItem, index) in Object.entries(tags)" :key="index">
          <el-checkbox
            :indeterminate="tagsForCheckAll[tagsItem[0]].isIndeterminate"
            v-model="tagsForCheckAll[tagsItem[0]].checkAll"
            @change="(val) => handleCheckAllChange(val, tagsItem)"
          >{{ tagsItem[1].label }}</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group
            v-model="tagsForCheckAll[tagsItem[0]].checktags"
            @change="(val) => handleCheckedTagsChange(val, tagsItem)"
          >
            <el-checkbox
              v-for="item in tagsItem[1].list"
              :label="item.value"
              :key="item.value"
            >{{item.label}}</el-checkbox>
          </el-checkbox-group>
        </el-row>
        <span class="el-icon-s-grid" slot="reference"></span>
      </el-popover>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "tag-default-muti",
  props: {
    tags: {
      type: Object,
      default() {
        return {
          type: {
            label: "药品类型",
            list: [
              {
                label: "畜禽药",
                value: "1"
              },
              {
                label: "治疗药",
                value: "2"
              },
              {
                label: "肠道药",
                value: "3"
              },
              {
                label: "保健类",
                value: "4"
              }
            ]
          }
        };
      }
    }
  },
  data() {
    return {
      tagsInfo: {
        type: {
          label: "药品类型",
          list: [
            {
              label: "畜禽药",
              value: "1"
            },
            {
              label: "治疗药",
              value: "2"
            },
            {
              label: "肠道药",
              value: "3"
            },
            {
              label: "保健类",
              value: "4"
            }
          ]
        }
      },
      tagsForCheckAll: {
        type: {
          checkAll: true,
          isIndeterminate: false,
          checktags: ["1", "2", "3", "4"]
        }
      }
    };
  },
  watch: {
    tagsInfo() {
      console.log(this.tagsInfo);
    }
  },
  methods: {
    tagClose(tag, type) {
      const index = this.tagsInfo[type].list.findIndex(
        item => item.value == tag.value
      );
      this.tagsInfo[type].list.splice(index, 1);
    },
    handleCheckedTagsChange(val, tagsItem) {
      let checkedCount = val.length;
      this.$set(
        this.tagsForCheckAll[tagsItem[0]],
        "checkAll",
        checkedCount === tagsItem[1].list.length
      );
      this.$set(
        this.tagsForCheckAll[tagsItem[0]],
        "isIndeterminate",
        checkedCount > 0 && checkedCount < tagsItem[1].list.length
      );
    },
    handleCheckAllChange(val, tagsItem) {
      this.$set(
        this.tagsForCheckAll[tagsItem[0]],
        "checktags",
        val ? tagsItem[1].list.map(item => item.value) : []
      );
      this.$set(this.tagsForCheckAll[tagsItem[0]], "isIndeterminate", false);
    }
  }
};
</script>
<style lang="less" scoped>
.tag-default-muti /deep/ .el-tag {
  margin-right: 10px;
  margin-bottom: 10px;
}
.label {
  width: 80px;
  display: inline-block;
}
</style>