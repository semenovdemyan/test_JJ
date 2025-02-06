<template>
  <div class="sidebar">
    <menu class="sidebar__menu">
      <button class="sidebar__toggle-button">
        АФИША
      </button>

      <div class="sidebar__menu-item">
        <button class="sidebar__menu-title">
          <i class="icon-menu"></i> РЕСТОРАНЫ
        </button>
        <div class="sidebar__submenu">
          <div class="sidebar__submenu-item">Элемент 1.1</div>
          <div class="sidebar__submenu-item">Элемент 1.2</div>
        </div>
      </div>

      <button class="sidebar__toggle-button">
        ПРАЗДНИКИ
      </button>

      <div class="sidebar__menu-item">
        <button class="sidebar__menu-title">
          <i class="icon-menu"></i> ПАРКИ
        </button>
        <div class="sidebar__submenu">
          <div class="sidebar__submenu-item">Элемент 2.1</div>
          <div class="sidebar__submenu-item">Элемент 2.2</div>
        </div>
      </div>
    </menu>
  </div>
</template>

<script setup lang="ts">
</script>

<style module src="./sidebar.module.scss" lang="scss" />
