<template>
  <el-drawer title="Меню" :visible.sync="drawerVisible" direction="ltr" :before-close="handleCloseDrawer">
    <el-menu :default-active="activeMenu" class="el-menu-vertical" @select="handleSelect">
      <el-menu-item index="1">Главная</el-menu-item>
      <el-menu-item index="2">О нас</el-menu-item>
      <el-menu-item index="3">Контакты</el-menu-item>
    </el-menu>
  </el-drawer>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import './MobileDrawer.module.scss';

const emit = defineEmits();

const drawerVisible = ref(false);
const activeMenu = ref('1');

const handleCloseDrawer = () => {
  drawerVisible.value = false;
  emit('updateDrawerVisible', drawerVisible.value);
};

const handleSelect = (index) => {
  activeMenu.value = index;
  emit('updateDrawerVisible', false);
};
</script>
