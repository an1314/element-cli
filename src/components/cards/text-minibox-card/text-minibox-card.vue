<template>
    <el-row class="text-minibox-card">
        <el-col :span='24' class="title el-card__header">
            {{ title }}
        </el-col>
        <el-col :span='24' class="text-minibox-card-body">
            <slot></slot>
        </el-col>
    </el-row>
</template>
<script>
export default {
    name: 'text-minibox-card',
    props: {
        title: {
            type: String,
            default(){
                return '站内搜索'
            }
        },
    },
    data(){
        return {}
    },
    methods: {
    }
}
</script>
<style lang="less" scoped>
.text-minibox-card{
    width: 300px;
    border: 1px solid rgb(190, 189, 189);
}
.title{
    height: 50px;
    background-color: rgb(14, 139, 255);
    color: white;
    text-align: left;
    font-family: "PingFang SC";
    font-size: 16px;
    font-weight: 600;
    line-height: 10px;
    margin-bottom: 10px
}
.text-minibox-card-body{
    padding-bottom: 5px
}
</style>