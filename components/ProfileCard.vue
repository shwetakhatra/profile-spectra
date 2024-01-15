<template>
    <div class="card w-96 bg-base-100 shadow-xl m-5 relative min-h-80"  v-if="profile" @mouseleave="isHovered = false">
      <figure class="px-10 pt-10" @mouseover="isHovered = true">
        <img v-if="profile.picture && profile.picture.large" :src="profile.picture.large" :alt="`Photo of ${profile.name.first}`" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center mt-6">
        <h2 v-if="profile" class="card-title">{{ profile.name.title }}. {{ profile.name.first }} {{ profile.name.last }}</h2>
        <transition name="fade-slide">
          <div v-if="isHovered" class="card-details">
            <p class="font-semibold line-clamp-3"><font-awesome-icon icon="fa-solid fa-envelope" />  {{ profile.email }}</p>
            <p class="font-semibold line-clamp-3"><font-awesome-icon icon="fa-solid fa-phone" />  {{ profile.phone }}</p>
            <p class="font-semibold line-clamp-3"><font-awesome-icon icon="fa-solid fa-location-dot" />  {{ profile.location.street.name }}, {{ profile.location.city }}, {{profile.location.state }}</p>
            <p class="font-semibold line-clamp-3"><font-awesome-icon icon="fa-solid fa-user" />  {{ profile.login.username }}</p>
            <div class="card-actions justify-end">
              <button type="button" class="btn btn-primary" @click="deleteProfile">Delete</button>
            </div>
          </div>
        </transition>
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
  const isHovered = ref(false);
  const emit = defineEmits();

  const deleteProfile = () => {
    emit('deleteProfile', profile.login.uuid);
  };
</script>
  
<style scoped>
  .fade-slide-enter, .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }

  .fade-slide-enter-active, .fade-slide-leave-active {
    transition: opacity 0.5s, transform 0.8s;
  }
  .card-body {
    overflow: hidden;
  }
  .card-details {
    position: absolute;
    left: 0;
    right: 0;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateY(100%);
    transition: transform 0.8s ease-in-out;
    z-index: 999;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
  }

  .card:hover .card-details {
    transform: translateY(0);
    bottom: 0;
  }

  .delete-btn {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    color: gray;
    border: none;
    cursor: pointer;
    background-color: red;
    color: white;
    z-index: 9999;
  }
</style>
  