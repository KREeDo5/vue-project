<script setup>
const TITLE = 'Начать учить английский - просто'
const BUTTON_TEXT = 'Попробовать бесплатно'

const steps = [
  {
    id: 1,
    title: 'Выбор преподавателя',
    description:
      'Все наши преподаватели — дипломированные специалисты с многолетним опытом обучения.',
  },
  {
    id: 2,
    title: 'Первый урок бесплатно',
    description:
      'Получить личную консультацию от преподавателя в течение 30 минут совершенно бесплатно.',
  },
  {
    id: 3,
    title: 'Фиксированные цены',
    description: 'Вы знаете за что платить. У нас фиксированные цены на все сервисы.',
  },
]
</script>

<template>
  <section class="py-12 lg:py-24 bg-white flex flex-col items-center">
    <p class="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-10 lg:mb-20">
      {{ TITLE }}
    </p>

    <div class="max-w-5xl grid lg:grid-cols-3 gap-8 xl:gap-20 mb-10 lg:mb-20">
      <div v-for="step in steps" :key="step.id" class="flex flex-col items-center text-center">
        <div
          class="bg-white text-base-dark-blue w-10 h-10 lg:w-16 lg:h-16 border border-base-dark-blue rounded-full flex items-center justify-center text-xl font-w500 mb-4"
        >
          {{ step.id }}
        </div>
        <p class="text-xl font-w700 text-gray-800 mb-5">{{ step.title }}</p>
        <p class="max-w-[400px] lg:max-w text-gray-600">{{ step.description }}</p>
      </div>
    </div>

    <button
      class="text-sm font-w700 bg-white hover:bg-base-light-blue text-base-dark-blue py-4 px-12 border border-base-dark-blue rounded-full transition duration-300"
    >
      {{ BUTTON_TEXT }}
    </button>
  </section>
</template>
