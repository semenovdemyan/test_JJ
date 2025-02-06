import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  if (typeof window !== 'undefined') {
    // Отключаем масштабирование при прокрутке с зажатым ctrl
    window.addEventListener(
      'wheel',
      (e) => {
        if (e.ctrlKey) {
          e.preventDefault();
        }
      },
      { passive: false }
    );

    // Отключаем масштабирование при нажатии клавиш (+, -, 0)
    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '0')) {
        e.preventDefault();
      }
    });
  }
});
