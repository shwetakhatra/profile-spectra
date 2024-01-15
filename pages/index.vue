<template>
  <div>
    <button @click="renewProfiles" class="fixed bottom-2 right-5 p-5 bg-primary text-white rounded-full font-bold">
      Renew
    </button>
    <AddProfileButton :onAddProfiles="addProfiles" />
    <ProfileList :profiles="profiles" />
    <div v-if="isLoading">
      <Loader :isLoading="isLoading" />
    </div>
  </div>
</template>
  
<script setup lang="ts">
  import ProfileList from '@/components/ProfileList.vue';
  import AddProfileButton from '@/components/AddProfileButton.vue';
  import Loader from '@/components/Loader.vue';

  import fetchProfiles from '@/plugins/api';
  import type { Profile } from '@/types/profile.interface';

  const components = {
    ProfileList,
    Loader
  };

  const profiles = ref<Profile[]>([]);
  const isLoading = ref(false);

  onMounted(async () => {
    isLoading.value = true;
    await loadInitialProfiles();
  });

  const loadInitialProfiles = async () => {
    const initialProfiles = await fetchProfiles(20);
    profiles.value = initialProfiles;
    isLoading.value = false;
  };

  const renewProfiles = async () => {
    isLoading.value = true;
    profiles.value = await fetchProfiles(20);
    isLoading.value = false;
  };

  const addProfiles = async (count: number) => {
    isLoading.value = true;
    const newProfiles = await fetchProfiles(count);
    profiles.value = [...profiles.value, ...newProfiles];
    isLoading.value = false;
  };
</script>