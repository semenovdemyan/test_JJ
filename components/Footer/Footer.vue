<template>
  <footer :class="$style.footer">
    <div :class="$style.footer__column" id="fc1"><a href="#"><img src="./images/footer_logo.svg" alt=""></a></div>
    <div :class="$style.footer__column" id="fc2">
      <ul>
        <li>
          <a href="tel:+74951812277">+7&nbsp;(495)&nbsp;181&nbsp;22&nbsp;77</a>
        </li>
        <li>
          <p>(МОСКВА, ТВЕРЬ)</p>
        </li>
        <li>
          <a href="tel:+78126352277">+7&nbsp;(812)&nbsp;635&nbsp;22&nbsp;77</a>
        </li>
        <li>
          <p>(САНКТ-ПЕТЕРБУРГ)</p>
        </li>
      </ul>
    </div>
    <div :class="$style.footer__column" id="fc3">
      <ul class="footer__list" flex>
        <li>
          <a href="https://vk.com/" target="_blank" rel="noopener noreferrer"><img class="footer__social-img"
              src="./images/Vk .svg" alt="VK Соцсеть">
          </a>
        </li>
        <li>
          <a href="https://vk.com/" target="_blank" rel="noopener noreferrer"><img class="footer__social-img"
              src="./images/Telegram.svg" alt="Telegram Соцсеть">
          </a>
        </li>
        <li><a href="https://vk.com/" target="_blank" rel="noopener noreferrer"><img class="footer__social-img"
              src="./images/Jjsocial.svg" alt="Joki Joya Соцсеть">
          </a>
        </li>
      </ul>
    </div>
    <div :class="$style.footer__column" id="fc4">
      <span>
        Joki Joya ©<br>
        2023<br>
        joki-joya.ru
      </span>
    </div>
    <div :class="$style.footer__column" id="fc5"> <button @click="scrollToTop"
        class="scroll-to-top-button">НАВЕРХ</button></div>
  </footer>
</template>

<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<style module src="./Footer.module.scss" lang="scss" />