<script>
import { ref, defineComponent } from 'vue'
import { Icon } from '@iconify/vue';
import scroll from "../directives/scroll";

export default defineComponent({
  name: 'AppNewsletter',
  directives: {
    scroll
  },
  components: {
    Icon
  },
  setup() {
    const newsletterDisplay = ref(false)

    function onCloseNewsletter() {
      const now = new Date();
      const expired = now.setMinutes(now.getMinutes() + 10);

      const config = {
        display: false,
        expired
      };

      newsletterDisplay.value = false;
      localStorage.setItem("newsletter", JSON.stringify(config));
    }

    function displayNewsletter() {
      const now = new Date();
      const minutes = now.setMinutes(now.getMinutes());
      const panelConfig = JSON.parse(localStorage.getItem("newsletter"));

      if (panelConfig !== null) {
        if (minutes > panelConfig.expired) {
          if (window.scrollY > 600) {
            newsletterDisplay.value = true;
          }
          newsletterDisplay.value = true;
        } else {
          newsletterDisplay.value = false;
        }
      } else if (window.scrollY > 600) {
        newsletterDisplay.value = true;
      }
    }

    return {
      onCloseNewsletter,
      displayNewsletter,
      newsletterDisplay
    }
  }
})
</script>

<template>
  <transition name="slide-panel">
    <div
      v-show="newsletterDisplay"
      class="md:w-1/2 sm:w-full rounded-sm newsletter"
      v-scroll="displayNewsletter"
    >
      <div class="flex justify-between px-2 py-2">
        <div>
          <span class="font-bold text-2xl">Get latest updates in web technologies</span>
        </div>
        <div>
          <button @click="onCloseNewsletter">
            <Icon icon="fa-solid:times" class="text-white hover:text-red-500 text-sm" />
          </button>
        </div>
      </div>

      <div class="px-2 py-2 text-left">
        I write articles related to web technologies, such as design trends,
        development tools, UI/UX case studies and reviews, and more. Sign up to
        my newsletter to get them all.
      </div>

      <div class="px-2 py-2 flex">
        <input
          class="w-full text-gray-700 mr-2 mb-2 px-3 py-2 leading-tight focus:outline-none rounded-sm focus:shadow-outline"
          type="text"
          placeholder="Email address"
          aria-label="Email"
        />
        <button
          class="flex-shrink-0 bg-[#ff8000] mb-2 font-bold text-white py-1 px-2 rounded-sm btn-block"
          type="button"
        >Count me In!</button>
      </div>
    </div>
  </transition>
</template>

<style lang="postcss" scoped>
.newsletter {
  @apply fixed z-50 bg-opacity-75 py-4 px-8 bottom-0 left-0 text-white;

  background-color: rgba(0, 123, 193, 0.87);
}

.slide-panel-enter-active {
  @apply transition ease-in-out duration-300;
}
.slide-panel-leave-active {
  @apply transition ease-in-out duration-300;
}
.slide-panel-enter,
.slide-panel-leave-to {
  @apply transform translate-y-full opacity-0;
}

@media only screen and (max-width: 767px) {
  .nl-form {
    @apply block;
  }
  .btn-block {
    @apply w-full;
  }
}
</style>