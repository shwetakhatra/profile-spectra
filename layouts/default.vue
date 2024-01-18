<template>
    <div class="DefaultLayout">
      <Loader :isLoading="loading" />
      <Header v-if="!loading" />
      <slot />
    </div>
  </template>
  
  <script>
  import Header from '@/components/AppHeader';
  import Loader from '~/components/Loader.vue';
  import { ref, onMounted } from 'vue';
  
  export default {
    components: {
      Header,
      Loader
    },
    setup() {
      const loading = ref(true);
  
      onMounted(() => {
        setTimeout(() => {
          loading.value = false;
        }, 600);
      });
      return {
        loading
      };
    }
  }
  </script>
  