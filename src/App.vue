<script setup>
import AppHero from "./components/AppHero.vue";
import AppNotification from "./components/AppNotification.vue";
import AppCard from "./components/AppCard.vue";
import { cards } from "./mock/data.json";
</script>

<template>
  <div class="bg-[#e5e5e5]">
    <AppNotification />
    <AppHero />
    <section class="flex flex-col justify-center items-center mx-auto my-16">
      <div class="mx-auto mb-10 text-center max-w-[38rem]">
        <h1 class="title text-[#2e2d33] my-2">How Can I Help You?</h1>
        <p class="text-lg font-light highlight-text">
          Our work then targeted, best practices outcomes social innovation
          synergy.Venture philanthropy, revolutionary inclusive policymaker
          relief. User-centered program areas scale.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <AppCard
          v-for="(card, index) in cards"
          :key="index"
          :title="card.title"
          :content="card.content"
          :card-icon="card.icon"
        />
      </div>
    </section>
    <footer class="bg-[#050328] p-10 text-sm">
      <div class="flex flex-row justify-center items-center">
        <p class="text-white font-thin">© 2020 Erick Hilda Andreas. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="postcss">
.title {
  @apply block font-normal tracking-wide text-4xl;

  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
</style>