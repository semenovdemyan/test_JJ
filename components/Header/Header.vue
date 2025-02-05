<template>
  <el-layout>
    <el-header :class="$style.header">
      <div :class="$style.logo">
        <img src="/logo.svg" alt="Logo" />
      </div>
      <el-menu :default-active="activePage" class="menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="home">Home</el-menu-item>
        <el-menu-item index="about">About</el-menu-item>
        <el-menu-item index="contact">Contact</el-menu-item>
      </el-menu>
    </el-header>
  </el-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElHeader, ElMenu, ElMenuItem } from 'element-plus';

const activePage = ref<string>('home');

const handleSelect = (index: string) => {
  activePage.value = index;
};
</script>

<style module lang="scss">
@import './Header.module.scss';
</style>
