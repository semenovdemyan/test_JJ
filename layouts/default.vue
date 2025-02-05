<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>
            <slot />
            <p>Main</p>
          </el-main>
        </el-container>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
};
</script>

<style scoped>
.common-layout .el-container {
  min-height: 88vh;
}

.el-header,
.el-footer {
  background-color: #333;
  color: #e9eef3;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #333;
  color: #e9eef3;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #333;
  color: #e9eef3;
  text-align: center;
  line-height: 160px;
}
</style>