<template>
  <el-drawer title="Меню" v-model="drawerVisible" direction="ltr" :before-close="handleCloseDrawer">
    <el-menu :default-active="activeMenu" class="el-menu-vertical" @select="handleSelect">
      <el-menu-item index="1">Главная</el-menu-item>
      <el-menu-item index="2">О нас</el-menu-item>
      <el-menu-item index="3">Контакты</el-menu-item>
    </el-menu>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElDrawer, ElMenu, ElMenuItem } from 'element-plus';
import './MobileDrawer.module.scss';

const emit = defineEmits<{
  (e: 'updateDrawerVisible', value: boolean): void;
}>();

const drawerVisible = ref(false);
const activeMenu = ref('1');

const handleCloseDrawer = () => {
  drawerVisible.value = false;
  emit('updateDrawerVisible', false);
};

const handleSelect = (index: string) => {
  activeMenu.value = index;
  emit('updateDrawerVisible', false);
};
</script>

<style module src="./MobileDrawer.module.scss" lang="scss" />
