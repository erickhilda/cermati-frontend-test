<script setup>
import { ref } from 'vue'

const isNotificationDisplay = ref(true);
</script>

<template>
  <transition name="slide-fade">
    <div class="sticky top-0 bg-[#e5e5e5]" v-if="isNotificationDisplay">
      <div class="flex flex-row justify-center mx-auto p-4 notification-content">
        <div class="max-w-[40rem]">
          By accessing and using this website, you acknowledge that you have
          read and understand our
          <a
            class="text-[#007bc1]"
          >Cookie Policy</a>,
          <a class="text-[#007bc1]">Privacy Policy</a>, and our
          <a class="text-[#007bc1]">Terms of Service</a>.
        </div>
        <div>
          <button
            class="bg-[#007bc1] text-white font-light py-2 px-4 rounded-sm"
            @click="isNotificationDisplay = !isNotificationDisplay"
          >Got It!</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="postcss">
.slide-fade-enter-active {
  @apply transition ease-in-out duration-300;
}
.slide-fade-leave-active {
  @apply transition ease-in-out duration-300;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

@media only screen and (max-width: 767px) {
  .notification-content {
    @apply block;
  }
}
</style>
