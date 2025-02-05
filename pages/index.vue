<template>
  <div />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  layout: 'default',
  setup() {
    const route = useRoute();

    if (route.params.group === 'admins' && !route.params.id) {
      console.log('Warning! Make sure user is authenticated!');
    }
  },
});
</script>

<style scoped>
</style>