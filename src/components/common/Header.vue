<template>
    <div class="header">
        <el-header>
            <div class="title">学生管理系统</div>
            <div>{{name}}</div>
        </el-header>
    </div>
</template>

<script>
import { getToken } from "@/utils/setToken";
export default {
    data() {
        return {
            name:""
        }
    },
    created(){
        this.name = getToken('username')
    }
}
</script>

<style scoped lang="less">
.header{
    width: 100%;
    padding: 0;
    .el-header{
        background: #3a8fcc;
        color:#fff;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        .title{
            width: 200px;
            font-size: 23px;
        }
    }
}
</style>