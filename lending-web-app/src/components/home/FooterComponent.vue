<script setup>
const emit = defineEmits(['signup'])

const handleSignup = () => {
  emit('signup')
}
</script>

<template>
  <footer class="bg-blue-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">English School</h3>
          <p class="mb-4">Эффективное обучение английскому языку для взрослых и детей</p>
        </div>

        <div>
          <h4 class="font-bold mb-4">Курсы</h4>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-blue-200">Для начинающих</a></li>
            <li><a href="#" class="hover:text-blue-200">Разговорный английский</a></li>
            <li><a href="#" class="hover:text-blue-200">Бизнес английский</a></li>
            <li><a href="#" class="hover:text-blue-200">Подготовка к экзаменам</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-4">Контакты</h4>
          <address class="not-italic">
            <p class="mb-2">г. Йошкар-Ола, ул. Машиностроителей, 15</p>
            <p class="mb-2">+7 (999) 999-99-99</p>
            <p>info@english-school.ru</p>
          </address>
        </div>

        <div>
          <h4 class="font-bold mb-4">Записаться</h4>
          <button
            @click="handleSignup"
            class="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-6 rounded-full mb-4 transition duration-300"
          >
            Пробный урок
          </button>
          <p class="text-sm">Оставьте заявку и мы свяжемся с вами в течение дня</p>
        </div>
      </div>

      <div class="border-t border-blue-800 mt-8 pt-8 text-center text-sm">
        <p>© 2025 Батанова Анна - СТ22.</p>
      </div>
    </div>
  </footer>
</template>
