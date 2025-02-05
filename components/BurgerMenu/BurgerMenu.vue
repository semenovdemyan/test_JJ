<!-- components/BurgerMenu.vue -->
<template>
  <el-button class="burger-button" @click="toggleDrawer" icon="el-icon-menu"></el-button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import './BurgerMenu.module.scss';

const emit = defineEmits();

const toggleDrawer = () => {
  emit('toggleDrawer');
};
</script>
