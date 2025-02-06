<template>
  <el-button type="default" :class="$style.burgerButton" @click="toggleDrawer" :icon="Menu" circle />
</template>

<script setup lang="ts">
import { Menu } from '@element-plus/icons-vue';

const emit = defineEmits<{
  (e: 'toggleDrawer'): void;
}>();

const toggleDrawer = () => {
  emit('toggleDrawer');
};
</script>

<style module src="./BurgerMenu.module.scss" lang="scss" />
