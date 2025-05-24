<script setup>
const TITLE = 'Как мы учим языку?'
const BUTTON_TEXT = 'Узнать больше об уроках'
const DESCRIPTION =
  'Наш подход в работе — доставлять клиентам качество и уверенность. Все наши преподаватели имеют более 5 лет опыта обучения языку.'
const QUOTE = 'Мы любим свое дело и хотим помочь вам полюбить английский язык!'
</script>

<template>
  <section class="py-16 xl:py-32 bg-base-light-grey">
    <div class="h-[680px] xl:h-[340px] flex flex-col xl:flex-row max-w-lg xl:max-w-6xl mx-auto">
      <div class="h-[340px] xl:h-full w-full xl:w-1/2 mb-8 xl:mb-0 xl:mr-10">
        <img
          src="/how-we-learn.jpg.webp"
          alt="how-we-learn"
          class="h-full w-full object-cover rounded-lg shadow-md"
        />
      </div>

      <div class="h-[340px] xl:h-full w-full xl:w-1/2 flex flex-col justify-between">
        <div>
          <h2 class="text-3xl xl:text-4xl font-w600 mb-8">{{ TITLE }}</h2>
          <p class="text-lg text-gray-700">
            {{ DESCRIPTION }}
          </p>
          <p class="text-lg text-gray-700 italic mr-10">
            {{ QUOTE }}
          </p>
        </div>

        <button
          class="text-sm text-center font-w700 bg-base-dark-blue hover:bg-base-blue text-white py-4 px-12 rounded-full transition duration-300"
        >
          {{ BUTTON_TEXT }}
        </button>
      </div>
    </div>
  </section>
</template>
