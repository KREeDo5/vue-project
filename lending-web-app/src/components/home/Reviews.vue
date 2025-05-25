<script>
export default {
  name: 'TestimonialsBlock',
  data() {
    return {
      currentIndex: 2,
      testimonials: [
        {
          id: 1,
          text: 'Отличная школа! За 3 месяца подтянул английский с нуля до разговорного уровня. Преподаватели очень внимательные и профессиональные.',
          author: 'Алексей Петров',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          rating: 5,
        },
        {
          id: 2,
          text: 'Ребёнок в восторге от занятий! Виден прогресс в произношении и словарном запасе. Удобное расписание и индивидуальный подход.',
          author: 'Мария Иванова',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          rating: 5,
        },
        {
          id: 3,
          text: 'После года занятий смог пройти собеседование в международную компанию. Спасибо за качественную подготовку и гибкий график!',
          author: 'Дмитрий Смирнов',
          avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
          rating: 4,
        },
        {
          id: 4,
          text: 'Боялся начинать учить английский в 35 лет, но преподаватели нашли подход. Через полгода уже мог свободно общаться в путешествиях!',
          author: 'Андрей Козлов',
          avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
          rating: 5,
        },
        {
          id: 5,
          text: 'Учусь здесь уже 2 года, перешла с уровня А2 на В2. Особенно нравится гибкий график и индивидуальный подход к каждому студенту.',
          author: 'Екатерина Новикова',
          avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
          rating: 5,
        },
        {
          id: 6,
          text: 'Пришла в эту школу, чтобы за разумную цену подготовиться к ЕГЭ по английскому языку. Несколько месяцев меня упорно готовили к экзаменам, и все получилось. Сдала на 100 баллов!',
          author: 'Виктория Шемякина',
          avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
          rating: 5,
        },
        {
          id: 7,
          text: 'Очень качественный визуальный материал к занятиям — многие школы недооценивают его важность. Графики и презентации делают урок нагляднее и помогают лучше усвоить материал.',
          author: 'Елена Кольцова',
          avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
          rating: 5,
        },
        {
          id: 8,
          text: 'После первых трех занятий я уже почувствовала на практике, как мой словарный запас увеличился. Это очень классный прогресс!',
          author: 'Анастасия Хасанова',
          avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
          rating: 5,
        },
      ],
      autoPlayInterval: null,
      isTransitioning: false,
      timeoutId: null,
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    extendedTestimonials() {
      return [
        ...this.testimonials.slice(-2),
        ...this.testimonials,
        ...this.testimonials.slice(0, 2),
      ]
    },
    visibleCount() {
      return this.windowWidth < 768 ? 1 : this.windowWidth < 1024 ? 3 : 5
    },
    cardWidth() {
      return this.windowWidth < 768 ? 'w-full' : this.windowWidth < 1024 ? 'w-1/3' : 'w-1/5'
    },
    translateValue() {
      if (this.windowWidth < 768) {
        return this.currentIndex * 100
      } else if (this.windowWidth < 1024) {
        return (this.currentIndex - 1) * 33.33
      } else {
        return (this.currentIndex - 2) * 20
      }
    },
  },
  mounted() {
    this.startAutoPlay()
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    this.stopAutoPlay()
    if (this.timeoutId) clearTimeout(this.timeoutId)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth
    },
    startAutoPlay() {
      this.stopAutoPlay()
      this.autoPlayInterval = setInterval(() => {
        this.nextTestimonial()
      }, 5000)
    },
    stopAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval)
        this.autoPlayInterval = null
      }
    },
    resetAutoPlay() {
      this.stopAutoPlay()
      this.timeoutId = setTimeout(() => {
        this.startAutoPlay()
      }, 5000)
    },
    nextTestimonial() {
      if (this.isTransitioning) return

      this.isTransitioning = true
      this.currentIndex++

      const maxIndex =
        this.extendedTestimonials.length -
        (this.windowWidth < 768 ? 0 : this.windowWidth < 1024 ? 1 : 2)

      if (this.currentIndex >= maxIndex) {
        setTimeout(() => {
          this.currentIndex = this.windowWidth < 768 ? 0 : this.windowWidth < 1024 ? 1 : 2
          this.isTransitioning = false
        }, 500)
      } else {
        setTimeout(() => {
          this.isTransitioning = false
        }, 500)
      }

      this.resetAutoPlay()
    },
    prevTestimonial() {
      if (this.isTransitioning) return

      this.isTransitioning = true
      this.currentIndex--

      if (this.currentIndex <= (this.windowWidth < 768 ? 0 : this.windowWidth < 1024 ? 1 : 2)) {
        setTimeout(() => {
          this.currentIndex =
            this.extendedTestimonials.length -
            (this.windowWidth < 768 ? 1 : this.windowWidth < 1024 ? 2 : 3)
          this.isTransitioning = false
        }, 500)
      } else {
        setTimeout(() => {
          this.isTransitioning = false
        }, 500)
      }

      this.resetAutoPlay()
    },
    goToTestimonial(index) {
      if (this.isTransitioning) return

      this.isTransitioning = true
      this.currentIndex = index + (this.windowWidth < 768 ? 0 : this.windowWidth < 1024 ? 1 : 2)

      setTimeout(() => {
        this.isTransitioning = false
      }, 500)

      this.resetAutoPlay()
    },
  },
}
</script>

<template>
  <section class="py-12 md:py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
        Что о нас говорят студенты?
      </h2>

      <div class="relative max-w-8xl mx-auto">
        <!-- Кнопки навигации -->
        <button
          @click="prevTestimonial"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition transform hover:scale-110 -ml-2 md:-ml-4"
          aria-label="Предыдущий отзыв"
        >
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          @click="nextTestimonial"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition transform hover:scale-110 -mr-2 md:-mr-4"
          aria-label="Следующий отзыв"
        >
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <!-- Контейнер отзывов -->
        <div class="overflow-hidden px-2 md:px-0">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${translateValue}%)` }"
          >
            <div
              v-for="(testimonial, index) in extendedTestimonials"
              :key="index"
              :class="['flex-shrink-0 px-2 md:px-4 transition-all duration-300', cardWidth]"
              @click="goToTestimonial(index - (windowWidth < 768 ? 0 : windowWidth < 1024 ? 1 : 2))"
            >
              <div
                class="testimonial-card bg-white p-2 md:p-8 rounded-lg shadow-sm border border-gray-100 h-auto flex flex-col transition-all duration-300 hover:shadow-md mx-auto"
                :class="{
                  'opacity-50 scale-90':
                    Math.abs(index - currentIndex) > (windowWidth < 1024 ? 0 : 1),
                  'opacity-100 scale-100':
                    Math.abs(index - currentIndex) <= (windowWidth < 1024 ? 0 : 1),
                  'max-w-full': windowWidth < 768,
                  'max-w-md': windowWidth >= 768 && windowWidth < 1024,
                  'max-w-sm': windowWidth >= 1024,
                  'cursor-pointer': Math.abs(index - currentIndex) <= (windowWidth < 1024 ? 0 : 1),
                }"
              >
                <div class="flex items-center mb-4">
                  <img
                    :src="testimonial.avatar"
                    :alt="testimonial.author"
                    class="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p class="text-lg font-medium text-gray-800">{{ testimonial.author }}</p>
                    <div class="flex items-center">
                      <svg
                        v-for="star in 5"
                        :key="star"
                        class="w-4 h-4"
                        :class="star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p class="testimonial-text text-lg md:text-xl text-gray-700 mb-2 italic">
                  "{{ testimonial.text }}"
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Индикаторы -->
        <div class="flex justify-center mt-6 md:mt-8 space-x-2">
          <button
            v-for="(testimonial, index) in testimonials"
            :key="index"
            @click="goToTestimonial(index)"
            class="w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 focus:outline-none transform hover:scale-125"
            :class="{
              'bg-blue-600 w-3 h-3 md:w-4 md:h-3':
                index ===
                (currentIndex - (windowWidth < 768 ? 0 : windowWidth < 1024 ? 1 : 2)) %
                  testimonials.length,
              'bg-gray-300':
                index !==
                (currentIndex - (windowWidth < 768 ? 0 : windowWidth < 1024 ? 1 : 2)) %
                  testimonials.length,
            }"
            :aria-label="`Перейти к отзыву ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 10;
  -webkit-line-clamp: 10;
}

@media (max-width: 767px) {
  .testimonial-card {
    min-height: 350px;
  }
  .testimonial-text {
    line-clamp: 5;
    -webkit-line-clamp: 5;
  }
}

@media (min-width: 768px) {
  .testimonial-card {
    min-height: 400px;
  }
}
</style>
