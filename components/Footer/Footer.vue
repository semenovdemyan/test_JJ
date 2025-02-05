<template>
  <el-footer :class="$style.footer">
    <div :class="$style.div1"><a href="#"><img src="~/assets/" alt=""></a></div>
    <div :class="$style.div2">Div 2</div>
    <div :class="$style.div3">Div 3</div>
    <div :class="$style.div4">Div 4</div>
    <div :class="$style.div5">Div 5</div>
    <div :class="$style.div6">Div 6</div>
    <div :class="$style.div7">Div 7</div>
  </el-footer>
</template>

<script setup lang="ts">
import { ElFooter } from 'element-plus';
</script>

<style module src="./Footer.module.scss" lang="scss" />