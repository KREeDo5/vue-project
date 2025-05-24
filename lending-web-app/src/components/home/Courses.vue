<script setup>
const tabs = [
  { id: 'group', title: 'Групповые занятия' },
  { id: 'individual', title: 'Индивидуальные занятия' },
  { id: 'kids', title: 'Английский для детей' },
]
</script>

<template>
  <div class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex border-b border-gray-200 mb-8">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="{
            'border-b-2 border-blue-600 text-blue-600': activeTab === tab.id,
            'text-gray-600 hover:text-gray-800': activeTab !== tab.id,
          }"
          class="px-6 py-3 font-medium text-lg focus:outline-none"
        >
          {{ tab.title }}
        </button>
      </div>

      <!-- Контент табов -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Карточка курса (повторяется для каждого курса) -->
        <div
          class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300"
        >
          <!-- <img src="/course1.jpg" alt="Курс английского" class="w-full h-48 object-cover" /> -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">Общий английский (A1-B2)</h3>
            <p class="text-gray-600 mb-4">
              Развитие всех языковых навыков: говорение, аудирование, чтение и письмо.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-blue-600 font-bold">от 3 500 ₽/мес</span>
              <button class="text-blue-600 hover:text-blue-800 font-medium">Подробнее →</button>
            </div>
          </div>
        </div>

        <!-- Ещё 2 аналогичные карточки -->
      </div>
    </div>
  </div>
</template>
