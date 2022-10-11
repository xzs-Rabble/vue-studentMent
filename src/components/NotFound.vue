<template>
    <div class="box">
        <div><span  class="text">404，找不到页面</span>
            <div>点击<router-link to="/">这里</router-link>进入首页</div>
        </div>
        
    </div>
</template>

<script>
export default ({
    name:'NotFound',
    data() {
        return {
            
        }
    },
})
</script>

<style scoped>
    .box{
        margin-top: 250px;
    }
    .text{
        height: 500px;
        font-size: 55px;
    }
</style>
