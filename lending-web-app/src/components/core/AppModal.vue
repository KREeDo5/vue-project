<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const name = ref('')
const phone = ref('')
const email = ref('')
const course = ref('')
const isLoading = ref(false)
const isSuccess = ref(false)

const openModal = () => {
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const submitForm = async () => {
  isLoading.value = true
  try {
    // Здесь будет логика отправки формы
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Имитация запроса
    isSuccess.value = true
    setTimeout(() => {
      closeModal()
      isSuccess.value = false
    }, 2000)
  } catch (error) {
    console.error('Ошибка при отправке формы:', error)
  } finally {
    isLoading.value = false
  }
}

// Экспортируем функцию открытия модального окна
defineExpose({ openModal })
</script>

<template>
  <transition name="modal">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <!-- Фон -->
        <transition name="modal-backdrop">
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
            @click="closeModal"
          ></div>
        </transition>

        <!-- Модальное окно -->
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 id="modal-title" class="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Записаться на пробный урок
                </h3>

                <div v-if="!isSuccess" class="mt-2">
                  <form @submit.prevent="submitForm">
                    <div class="mb-4">
                      <label for="name" class="block text-sm font-medium text-gray-700 mb-1"
                        >Ваше имя</label
                      >
                      <input
                        id="name"
                        v-model="name"
                        type="text"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div class="mb-4">
                      <label for="phone" class="block text-sm font-medium text-gray-700 mb-1"
                        >Телефон</label
                      >
                      <input
                        id="phone"
                        v-model="phone"
                        type="tel"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div class="mb-4">
                      <label for="email" class="block text-sm font-medium text-gray-700 mb-1"
                        >Email</label
                      >
                      <input
                        id="email"
                        v-model="email"
                        type="email"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div class="mb-6">
                      <label for="course" class="block text-sm font-medium text-gray-700 mb-1"
                        >Курс</label
                      >
                      <select
                        id="course"
                        v-model="course"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Выберите курс</option>
                        <option value="beginner">Для начинающих</option>
                        <option value="intermediate">Средний уровень</option>
                        <option value="advanced">Продвинутый уровень</option>
                        <option value="business">Бизнес-английский</option>
                        <option value="kids">Английский для детей</option>
                      </select>
                    </div>

                    <div class="flex justify-end space-x-3">
                      <button
                        type="button"
                        @click="closeModal"
                        class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Отмена
                      </button>
                      <button
                        type="submit"
                        :disabled="isLoading"
                        class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                      >
                        <span v-if="isLoading">Отправка...</span>
                        <span v-else>Отправить</span>
                      </button>
                    </div>
                  </form>
                </div>

                <div v-else class="py-4 text-center">
                  <div
                    class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
                  >
                    <svg
                      class="h-6 w-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 class="mt-3 text-lg font-medium text-gray-900">Заявка отправлена!</h3>
                  <p class="mt-2 text-sm text-gray-500">
                    Мы свяжемся с вами в ближайшее время для уточнения деталей.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-backdrop-enter-active,
.modal-backdrop-leave-active {
  transition: opacity 0.3s ease;
}

.modal-backdrop-enter-from,
.modal-backdrop-leave-to {
  opacity: 0;
}
</style>
