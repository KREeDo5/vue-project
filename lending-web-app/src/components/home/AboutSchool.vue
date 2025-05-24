<script setup>
import AppCard from '@/components/core/AppCard.vue'

const ABOUT_TITLE =
  'Мы создали эту школу, чтобы помочь вам увереннее разговаривать на английском языке!'
const ABOUT_DESCRIPTION_PART1 = 'При успешном прохождении финального тестирования '
const ABOUT_DESCRIPTION_PART2 = 'в школе выдают сертификат с подтверждением уровня языка.'

const cards = [
  {
    id: 'time',
    title: 'Время',
    description: 'Выбирайте любые удобные время – мы подстроимся под ваш график.',
    icon: '/icons/time.svg',
  },
  {
    id: 'place',
    title: 'Место',
    description: 'Учитесь откуда угодно — дома, в офисе или кафе.',
    icon: '/icons/place.svg',
  },
  {
    id: 'effective',
    title: 'Эффективность',
    description: 'Наша задача — сделать так, чтобы вы сразу начали говорить.',
    icon: '/icons/effective.svg',
  },
]
</script>

<template>
  <div class="bg-white py-10 xl:py-36 flex flex-col items-center">
    <div class="max-w-4xl mx-auto text-center flex flex-col items-center mb-20">
      <p class="text-3xl font-w600 mb-8 leading-[48px]">
        {{ ABOUT_TITLE }}
      </p>
      <p class="text-xl max-w-[300px] sm:max-w-[460px] leading-[36px]">
        <span class="font-w700">{{ ABOUT_DESCRIPTION_PART1 }}</span>
        <span class="font-w400"> {{ ABOUT_DESCRIPTION_PART2 }}</span>
      </p>
    </div>

    <div class="max-w-xl md:max-w-3xl xl:max-w-6xl grid md:grid-cols-3 md:gap-10 xl:gap-40">
      <AppCard
        v-for="card in cards"
        :key="card.id"
        :title="card.title"
        :description="card.description"
        :icon="card.icon"
      />
    </div>
  </div>
</template>
