<script setup>
const statistics = [
  {
    id: 1,
    value: '25',
    description: 'Преподавателей, которые знают, как помочь вам заговорить по-английски.',
  },
  {
    id: 2,
    value: '1500+',
    description: 'Студентов во всем мире уже присоединились к нашей программе.',
  },
  {
    id: 3,
    value: '89',
    description: 'Средний балл ЕГЭ по английскому у наших студентов.',
  },
]
</script>

<template>
  <div class="bg-cover bg-center" style="background-image: url('/books.webp')">
    <div
      class="py-20 bg-gradient-to-b from-base-gradient-blue/90 to-base-gradient-dark-blue/90 text-white"
    >
      <div class="lg:max-w-6xl grid md:grid-cols-3 gap-8 text-center mx-auto">
        <div v-for="stat in statistics" :key="stat.id" class="p-6">
          <div class="max-w-[300px]">
            <div class="text-7xl font-w600 mb-8">{{ stat.value }}</div>
            <p class="text-md leading-[28px]">{{ stat.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
