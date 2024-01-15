<template>
    <div class="flex flex-wrap justify-center">
        <ProfileCard 
            v-for="profile in localProfiles" 
            :key="profile.login.uuid" 
            :profile="profile"
            @deleteProfile="deleteProfile"
        />
    </div>
</template>

<script setup lang="ts">
import ProfileCard from '@/components/ProfileCard.vue';
import type { Profile } from '@/types/profile.interface';

const components = {
  ProfileCard
}

const props = defineProps({
  profiles: {
    type: Array as () => Profile[] | null,
    default: () => [],
  },
});

const localProfiles = ref(props.profiles);

watch(() => props.profiles, (newProfiles) => {
  localProfiles.value = newProfiles;
});

const deleteProfile = (profileId: string) => {
  localProfiles.value = localProfiles.value?.filter(profile => profile.login.uuid !== profileId) || [];
};
</script>
