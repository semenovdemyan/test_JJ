<template>
  <div>
    <div v-for="(cardData, index) in advantagesData" :key="index">
      <p v-if="cardData.subtitle">{{ cardData.subtitle }}</p>
      <h3>{{ cardData.header }}</h3>
      <p v-html="cardData.subtitle2"></p>
      <a :href="cardData.advLink">{{ cardData.linkText }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import advantagesData from './advantagesData.json';
</script>

<style scoped></style>
