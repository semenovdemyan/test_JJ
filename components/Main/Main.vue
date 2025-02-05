<template>
  <section :class="$style.main">
    <div :class="$style.tickerWrapper">
      <div :class="$style.ticker">
        <template v-for="(item, index) in duplicatedTickerTexts" :key="index">
          <span v-if="index % 2 === 0" :class="$style.tickerItem">
            {{ item }}
          </span>
          <img v-else :src="svgIcon" alt="icon" :class="$style.tickerItem" />
        </template>
      </div>
    </div>

    <div :class="$style.content">
      <div>
        <iframe id="videoPlayer" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen frameborder="0" loading="lazy" height="100%" width="100%" :src="videoUrl">
        </iframe>
      </div>
      <h1>{{ title }}</h1>

      <!-- Секция advantages -->
      <div :class="$style.advantagesSection">
        <div v-for="(item, index) in transformedAdvantagesData" :key="index"
          :class="[$style.advItem, item.Theme === 'dark' ? $style.dark : $style.light]">
          <h3>{{ item.header }}</h3>
          <p v-html="item.span2"></p>
          <a :href="item.advLink">{{ item.linkText }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import data from './info.json';
import advantagesData from './advantages/advantagesData.json';
import svgIcon from '../../assets/images/icon.svg';

const tickerTexts = data.tickerTexts.map(text => text.toUpperCase());

const duplicatedTickerTexts = computed(() => [...tickerTexts, ...tickerTexts]);

// Очищаем title от тегов и заменяем пробелы на неразрывные
const title = data.title.replace(/<[^>]*>/g, '').toUpperCase().replace(/ /g, '\u00A0');
const videoUrl = data.videoUrl;

const transformedAdvantagesData = advantagesData.map(item => ({
  ...item,
  Theme: item.Theme || 'light'
}));
</script>

<style module src="./Main.module.scss" lang="scss" />