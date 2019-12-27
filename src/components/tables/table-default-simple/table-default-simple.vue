<template>
  <el-table class="table-default-simple" :data="tableData" style="width: 100%" :show-header="false">
    <el-table-column prop="label1" min-width="180" class-name="table-label"></el-table-column>
    <el-table-column prop="value1" min-width="250"></el-table-column>
    <el-table-column prop="label2" min-width="180" class-name="table-label"></el-table-column>
    <el-table-column prop="value2" min-width="250" ></el-table-column>
  </el-table>
</template>
<script>
export default {
  name: "table-default-simple",
  props: {
    data: {
      type: Object,
      default() {
        return {
            date: {
                label: '日期',
                value: '2019-12-16'
            },
            name: {
                label: '姓名',
                value: '刘冲'
            },
            address: {
                label: '地址',
                value: '虹漕路'
            }
        };
      }
    }
  },
  computed: {
    tableData(){
        // 将data拆分用于表格渲染
        return Object.values(this.data).reduce((array, item, index) => {
            let len = array.length-1;
            const {
                label, value
            } = item;
            if(index%2 == 1){
                array[len].label2 = label;
                array[len].value2 = value;
            }else{
                array.push({
                    label1: label,
                    value1: value
                })
            }
            return array;
        }, [])
    }
  }
};
</script>
<style lang="less" scoped>
.table-default-simple /deep/ .table-label{
    background-color: rgb(236, 232, 232);
}
</style>