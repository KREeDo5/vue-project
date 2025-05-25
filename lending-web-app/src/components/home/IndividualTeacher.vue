<script setup>
const emit = defineEmits(['signup'])

const TITLE = 'Осваивайте английский язык с индивидуальным наставником'
const DESCRIPTION =
  'Начни действовать прямо сейчас, не откладывай в долгий ящик свою мечту, которая может стать реальностью!'
const BUTTON_TEXT = 'Записаться на пробный урок'

const handleSignup = () => {
  emit('signup')
}
</script>

<template>
  <div class="py-16 md:py-24 bg-base-dark-blue text-white">
    <div class="container mx-auto px-4 text-center max-w-2xl">
      <h2 class="text-2xl md:text-4xl font-bold mb-8">{{ TITLE }}</h2>

      <p class="text-lg md:text-xl mb-20 max-w-xl mx-auto">
        {{ DESCRIPTION }}
      </p>
      <button
        @click="handleSignup"
        class="text-sm font-w700 bg-base-dark-blue hover:bg-white/10 text-white py-4 px-12 border border-white rounded-full transition duration-300"
      >
        {{ BUTTON_TEXT }}
      </button>
    </div>
  </div>
</template>
