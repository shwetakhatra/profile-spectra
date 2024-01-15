<template>
    <button @click="incrementAndFetch" class="addbtn fixed bottom-20 right-5 p-5 bg-primary text-white rounded-full font-bold">
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
  