<template>
    <div class="w-full text-center z-50">
      <div class="w-1/2 mx-auto mt-2">
        <button @click="renewProfiles" class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white mr-4">
          Renew
        </button>
        <AddProfileButton :onAddProfiles="addProfiles" class="mt-3"/>
      </div>
    </div>
    <div class="mt-15">
      <ProfileList :profiles="profiles" />
    </div>
    <div v-if="isLoading">
      <Loader :isLoading="isLoading" />
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