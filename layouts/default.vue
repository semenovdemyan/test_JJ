<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container class="main-container">
        <el-aside>
          <Sidebar />
        </el-aside>
        <el-container>
          <el-main>
            <slot />
          </el-main>
        </el-container>
      </el-container>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>


<script setup>
import Header from '~/components/Header/Header.vue';
// import Aside from '~/components/Aside/Aside.vue';
// import Footer from '~/components/Footer/Footer.vue';
</script>

<style scoped>
.common-layout .el-container {
  min-height: 88vh;
}


.el-header,
.el-footer {
  z-index: 20;
  padding: 0;
  text-align: center;

}


.el-aside {
  text-align: center;
  line-height: 200px;
  position: fixed;
  z-index: 10;
  background: #000;
  height: 100%;
  width: 64px;

}

.el-main {
  padding: 0;
  overflow: hidden;
}
</style>
