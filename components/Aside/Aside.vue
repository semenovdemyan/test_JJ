<template>
  <aside :class="$style.aside">
    <el-button :class="$style.toggleButton" type="primary">
      Меню
    </el-button>

    <el-menu :class="$style.menu" unique-opened>
      <el-sub-menu index="1">
        <template #title>
          <span :class="$style.menuTitle">Раздел 1</span>
        </template>
        <el-menu-item index="1-1">Элемент 1.1</el-menu-item>
        <el-menu-item index="1-2">Элемент 1.2</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="2">
        <template #title>
          <span :class="$style.menuTitle">Раздел 2</span>
        </template>
        <el-menu-item index="2-1">Элемент 2.1</el-menu-item>
        <el-menu-item index="2-2">Элемент 2.2</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="3">
        <template #title>
          <span :class="$style.menuTitle">Раздел 3</span>
        </template>
        <el-menu-item index="3-1">Элемент 3.1</el-menu-item>
        <el-menu-item index="3-2">Элемент 3.2</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </aside>
</template>

<script setup lang="ts">
</script>

<style module src="./Aside.module.scss" lang="scss" />
