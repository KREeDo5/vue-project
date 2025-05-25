<script setup>
import FooterComponent from '@/components/home/FooterComponent.vue'
import Advantages from '@/components/home/Advantages.vue'
import Courses from '@/components/home/Courses.vue'
import AboutSchool from '@/components/home/AboutSchool.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import HowWeLearn from '@/components/home/HowWeLearn.vue'
import LearnSteps from '@/components/home/LearnSteps.vue'
import Statistics from '@/components/home/Statistics.vue'

import { ref, onMounted, onUnmounted } from 'vue'

const showScrollButton = ref(false)

const handleScroll = () => {
  showScrollButton.value = window.scrollY > window.innerHeight
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div
    class="bg-cover bg-center"
    style="background-image: url('/background.jpg.webp'); background-attachment: fixed"
  >
    <HeroSection />
    <AboutSchool />
    <HowWeLearn />
    <LearnSteps />
    <Statistics />
    <!-- <Courses /> -->
    <!-- <Advantages /> -->
  </div>

  <FooterComponent />
  <!-- Кнопка прокрутки вверх -->
  <button
    v-if="showScrollButton"
    @click="scrollToTop"
    class="fixed bottom-8 right-8 bg-base-blue hover:bg-base-light-blue text-black font-w800 p-3 rounded-full shadow-lg transition-opacity duration-300"
  >
    <img src="/icons/arrow-up.svg" alt="icon" class="w-8 h-8" />
  </button>
</template>
