<template>
  <div class="home">
    <el-container>
      <Header/>
      <el-container class="content">
        <Menu/>
        <el-container>
          <Bread/>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>
            <Footer/>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Footer from "./common/Footer.vue";
import Header from "./common/Header.vue";
import Menu from "./common/Menu.vue";
import Bread from "./common/Breadcrumb.vue";
export default {
  name: 'Home',
  components:{
    Footer,Header,Menu,Bread,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home{
  width: 100%;
  height: 100%;
  .content{
  position: absolute;
  width: 100%;
  top: 60px;
  bottom: 0;
  
}
}

</style>
