<template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'IndexPage',
  layout: 'default',  // Используем layout с Header
  setup() {
    const route = useRoute();

    if (route.params.group === 'admins' && !route.params.id) {
      console.log('Warning! Make sure user is authenticated!');
    }
  },
});
</script>
