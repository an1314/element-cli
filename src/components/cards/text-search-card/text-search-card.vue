<template>
    <el-row class="text-search-card">
        <el-col :span='24' class="title el-card__header">
            {{ title }}
        </el-col>
        <el-col :span='24' class="search">
            <el-input v-model="value" placeholder="请输入关键字" @change="onSearch">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>    
        </el-col>
        <el-col :span='24' v-for="(item, index) in data" :key="index" class="content">
            {{ item }}
        </el-col>
    </el-row>
</template>
<script>
export default {
    name: 'text-search-card',
    props: {
        title: {
            type: String,
            default(){
                return '站内搜索'
            }
        },
        data: {
            type: Array,
            default(){
                return [
                    '企业视频展示',
                    '在线给我留言'
                ]
            }
        }
    },
    data(){
        return {
            value: ''
        }
    },
    methods: {
        onSearch(){
            this.$emit('on-search', this.value);
        }
    }
}
</script>
<style lang="less" scoped>
.text-search-card{
    width: 300px;
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
.search{
    margin-bottom: 10px
}
.content{
    margin-bottom: 10px;
    height: 50px;
    line-height: 40px;
    border: 5px rgb(14, 139, 255) solid; 
}
</style>