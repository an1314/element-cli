<template>
  <el-row class="header-body">
    <el-col :span="12">
      <div class="left-header"><span>你好，欢迎来到测试网站</span> <span>[请登录]</span><span>[免费注册]</span></div>
    </el-col>
    <el-col :span="12">
      <div class="right-header">
        <span>一网通</span>
        <span>|</span>
        <span>会员中心</span>
        <span>|</span>
        <!-- 下拉菜单 -->
        <el-dropdown placement="bottom">
          <span class="el-dropdown-link">
            搜了服务
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="menu-body">
                <el-row >
                    <el-col class="header-menu" :span="12" v-for="(item, index) in menuList" :key="index" @click.native.stop="menuClick(item.value)">
                        {{ item.label }}
                    </el-col>
                </el-row>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>|</span>
        <span>网站导航</span>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
    name: 'header-default',
    data(){
        return {
            // 下拉菜单展示内容
            menuList: [
                {
                    value: '1',
                    label: '测试1'
                },{
                    value: '2',
                    label: '测试2'
                },{
                    value: '3',
                    label: '测试3'
                },{
                    value: '4',
                    label: '测试4'
                }
            ]
        }
    },
    methods: {
        // 菜单点击事件
        menuClick(val){
            console.log(val)
        }
    }
}
</script>
<style lang="less">
  @import './index.less';
</style>