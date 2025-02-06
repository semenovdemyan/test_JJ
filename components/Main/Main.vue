<template>
  <section :class="$style.main">
    <div>
      <iframe id="videoPlayer" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen frameborder="0" loading="lazy" height="100%" width="100%" :src="videoUrl"
        :class="$style.video"></iframe>
    </div>
    <div :class="$style.content">

      <div :class="$style.tickerWrapper">
        <img :src="verticalIcon" alt="vertical" :class="$style.tickerItem" />
      </div>

      <div>
        <h1 :class="$style.title">
          <span :class="$style['title__text title__text--letter']">O</span>
          <span :class="$style['title__text title__text--name']"> JOKI&nbsp;JOYA</span>
        </h1>
        <Advantages />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import data from './info.json';
import verticalIcon from '../../assets/images/vertical.svg';
import Advantages from '../Main/advantages/Advantages.vue';

const videoUrl = data.videoUrl;
</script>

<style module src="./Main.module.scss" lang="scss" />
