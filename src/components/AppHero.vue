<script setup>
import AppNavbar from "./AppNavbar.vue";
</script>

<template>
  <div class="hero">
    <AppNavbar />
    <div class="mx-auto flex flex-row justify-center items-center mt-24">
      <div class="text-white hero-text text-center">
        <h1 class="title">Hello! I'm Erick Hilda</h1>
        <h2 class="subtitle">Consult, Design, and Develop Websites</h2>
        <p class="text-lg font-light">Have something great in mind? Feel free to contact me.</p>
        <p class="text-xl font-light">I'll help you to make it happen.</p>
        <button
          class="bg-transparent hover:bg-white text-white hover:text-blue-700 font-bold py-2 px-4 mt-4 border border-white rounded-sm"
        >Let's Make Contact</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.hero {
  @apply bg-cover bg-center w-full h-screen bg-fixed;

  background-image: -webkit-linear-gradient(
      rgba(0, 74, 117, 0.7),
      rgba(0, 74, 117, 0.7)
    ),
    url(../assets/work-desk__dustin-lee.jpg);
  background-image: linear-gradient(
      rgba(0, 74, 117, 0.7),
      rgba(0, 74, 117, 0.7)
    ),
    url(../assets/work-desk__dustin-lee.jpg);
}

@media only screen and (max-width: 767px) {
  .hero-text {
    @apply mx-5;
  }
}

.title {
  @apply block font-normal tracking-wide text-4xl;

  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.subtitle {
  @apply text-3xl font-medium pb-[15px];

  word-spacing: 5px;
}
</style>
