<script setup>
defineProps({
  title: String,
  description: String,
  icon: String,
})
</script>

<template>
  <div class="p-8 text-center">
    <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
      <img :src="icon" alt="icon" class="w-8 h-8" />
    </div>
    <h3 class="text-xl font-w700 mb-3">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>
