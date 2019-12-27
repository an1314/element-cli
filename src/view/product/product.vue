<template>
  <el-container>
    <el-main>
      <el-container>
        <el-aside width="320px">
          <slot name="aside"></slot>
        </el-aside>
        <el-main>
          <slot name="bread"></slot>
          <img-default-view type="mini" class="box-only"></img-default-view>
          <text-box-card>
            <tag-default-muti></tag-default-muti>
            <img-default-view></img-default-view>
          </text-box-card>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>
<script>
export default {
    name: 'product'
};
</script>
<style lang="less" scoped>
</style>