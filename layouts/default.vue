<template>
    <div class="DefaultLayout">
        <Loader :isLoading="loading" />
        <Header v-if="!loading"/>
        <slot />
    </div>
</template>

<script>
import Header from '@/components/AppHeader';
import Loader from '~/components/Loader.vue';
import { ref } from 'vue';

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 600);

export default{
    components:{
        Header,
        Loader
    }
}
</script>