<template>
    <div class="full-screen-loader" v-if="isLoading">
      <div class="loader-content">
        <div class="loader-dot"></div>
        <div class="loader-dot"></div>
        <div class="loader-dot"></div>
      </div>
    </div>
</template>

<script setup>
const props = defineProps(['isLoading']);
</script>

<style scoped>
.full-screen-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loader-content {
  display: flex;
}

.loader-dot {
  width: 12px;
  height: 12px;
  background-color: #000;
  border-radius: 50%;
  margin: 0 4px;
  animation: loader-animation 1s infinite ease-in-out;
}

@keyframes loader-animation {
  0%, 100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }
}
</style>