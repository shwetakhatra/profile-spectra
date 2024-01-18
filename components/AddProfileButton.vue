<template>
    <button @click="incrementAndFetch" class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white">
      Add
    </button>
</template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  interface AddProfileButtonProps {
    onAddProfiles: (count: number) => void;
  }
  
  const props = defineProps<AddProfileButtonProps>();
  
  const incrementAndFetch = () => {
    count.value += 1;
    props.onAddProfiles(count.value);
  };
  
  const count = ref(1);
  </script>
  