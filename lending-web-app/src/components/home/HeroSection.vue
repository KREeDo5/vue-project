<script setup>
const TITLE = 'Учите английский онлайн'
const DESCRIPTION =
  'Оттачивайте английский с лучшими преподавателями и носителями языка — это комфортно и доступно.'
const BUTTON_TEXT = 'Попробовать бесплатно'
</script>

<template>
  <div
    class="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-base-gradient-blue/70 to-base-gradient-dark-blue/70"
  >
    <div class="text-center max-w-sm xl:max-w-4xl lg:max-w-xl md:max-w-md">
      <p class="text-6xl font-w600 text-white leading-[70px] mb-10">{{ TITLE }}</p>
      <p class="text-xl text-white mb-14">
        {{ DESCRIPTION }}
      </p>
      <button
        class="text-sm font-w700 bg-white hover:bg-base-light-blue text-base-dark-blue py-4 px-12 rounded-full transition duration-300"
      >
        {{ BUTTON_TEXT }}
      </button>
    </div>
  </div>
</template>
