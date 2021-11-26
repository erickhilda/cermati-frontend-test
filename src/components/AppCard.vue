<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  title: String,
  cardIcon: String,
  content: String,
})
</script>

<template>
  <div class="rounded-sm shadow-inner bg-[#e5e5e5] py-2 border-[#a9a9a9] border">
    <div class="flex justify-between px-4 py-2">
      <div>
        <span class="font-normal text-[#2e2d33] text-lg">{{ title }}</span>
      </div>
      <Icon :icon="cardIcon" class="text-2xl text-[#a9a9a9]" />
    </div>

    <div class="px-4 py-2 text-left text-sm text-[#2e2d33]">{{ content }}</div>
  </div>
</template>