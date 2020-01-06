<template>
    <el-row class="footer-default">
        <el-row class="footer-default-body" type="flex" justify="space-between">
            <el-col :span='8'>
                <p>关于我们 - 联系我们 - 友情链接 - css培训 - Edu学研室（VIP教程）</p>
                <p>学习CSS，找DIV+CSS资源上DIVCSS5!</p>
            </el-col>
            <el-col :span='8'>
                <p>学习CSS，找DIV+CSS资源上DIVCSS5!</p>
                <p>蜀ICP备09013689号</p>
            </el-col>
        </el-row>
    </el-row>
</template>
<script>
export default {
    name: 'footer-default'
}
</script>
<style lang="less" scoped>
    .footer-default-body{
        padding: 32px 20px 40px 20px;
        width: 1400px;
        margin: 0 auto 0;
        color: #ccc;
        font-size: 12px;
    }

</style>