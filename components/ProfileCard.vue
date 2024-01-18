<template>
  <div class="card-container">
    <div class="card w-96 bg-base-100 shadow-xl m-5 relative min-h-80" v-if="profile" :class="{ 'flipped': isFlipped }" @mouseover="isFlipped = true" @mouseleave="isFlipped = false">
      <figure class="px-10 pt-10" v-if="!isFlipped">
        <img v-if="profile.picture && profile.picture.large" :src="profile.picture.large" :alt="`Photo of ${profile.name.first}`" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center mt-6">
        <h2 v-if="profile && !isFlipped" class="card-title">{{ profile.name.title }}. {{ profile.name.first }} {{ profile.name.last }}</h2>
        <transition name="fade-slide">
          <div v-if="isFlipped" class="card-details mt-3">
            <p class="font-semibold mb-2"><font-awesome-icon icon="fa-solid fa-envelope" />  {{ profile.email }}</p>
            <p class="font-semibold mb-2"><font-awesome-icon icon="fa-solid fa-phone" />  {{ profile.phone }}</p>
            <p class="font-semibold mb-2"><font-awesome-icon icon="fa-solid fa-location-dot" />  {{ profile.location.street.name }}, {{ profile.location.city }}, {{profile.location.state }}</p>
            <p class="font-semibold mb-5"><font-awesome-icon icon="fa-solid fa-user" />  {{ profile.login.username }}</p>
            <div class="card-actions justify-end">
              <button type="button" class="rounded bg-primary px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white" @click="deleteProfile">Delete</button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
  </template>
  
<script setup lang="ts">
  import { ref } from 'vue';

  const props = defineProps({
    profile: {
      type: Object,
      required: true,
    },
  });
  const { profile } = props;
  const isFlipped = ref(false);
  const emit = defineEmits();

  const deleteProfile = () => {
    emit('deleteProfile', profile.login.uuid);
  };
</script>
  
<style scoped>
  .card-container {
    perspective: 1000px;
  }
  .card {
    transform-style: preserve-3d;
    transition: transform 1s;
  }
  .card:hover {
    transform: rotateY(180deg);
  }
  .card:hover .card-details{
    transform: rotateY(180deg);
  }
</style>
  