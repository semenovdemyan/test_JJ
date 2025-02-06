<template>
  <header :class="$style.header">
    <nav :class="$style.nav">
      <!-- Лого -->
      <NuxtLink to="/" :class="$style.logo"><img src="/public/JJ.svg" alt="Joki Joya Logo"></NuxtLink>

      <!-- Первый список кнопок -->
      <ul :class="$style.navList">
        <li><el-button type="primary">Москва</el-button></li>
        <li><el-link type="primary" href="tel:+78126352277">+7&nbsp;(812)&nbsp;635&nbsp;22&nbsp;77</el-link></li>
      </ul>

      <!-- Второй список кнопок -->
      <ul :class="$style.navList">
        <li><el-button type="success">КУПИТЬ&nbsp;БИЛЕТЫ</el-button></li>
        <li><el-button type="success">ЗАКАЗАТЬ&nbsp;ПРАЗДНИК</el-button></li>
      </ul>

      <!-- Бургер-меню -->
      <div>
        <div>
          <BurgerMenu @toggle="isMenuOpen = !isMenuOpen" />
        </div>

      </div>

      <!-- Мобильное меню -->
      <MobileDrawer v-model:isOpen="isMenuOpen" />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BurgerMenu from '~/components/BurgerMenu/BurgerMenu.vue';
import MobileDrawer from '~/components/MobileDrawer/MobileDrawer.vue';
// import { type } from '../../.nuxt/types/imports';

const isMenuOpen = ref(false);
</script>

<style module src="./Header.module.scss" lang="scss" />
