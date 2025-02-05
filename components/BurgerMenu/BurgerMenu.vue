<template>
  <el-button :class="$style.burgerButton" @click="toggleDrawer" :icon="Menu" circle />
</template>

<script setup>
import { Menu } from '@element-plus/icons-vue';

const emit = defineEmits(['toggleDrawer']);

const toggleDrawer = () => {
  emit('toggleDrawer');
};
</script>

<style module src="./BurgerMenu.module.scss" lang="scss" />
