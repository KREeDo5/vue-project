<script setup>
import FooterComponent from '@/components/home/FooterComponent.vue'
import Advantages from '@/components/home/Advantages.vue'
import Courses from '@/components/home/Courses.vue'
import AboutSchool from '@/components/home/AboutSchool.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import HowWeLearn from '@/components/home/HowWeLearn.vue'
import LearnSteps from '@/components/home/LearnSteps.vue'
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
    <Courses />
    <Advantages />
  </div>

  <FooterComponent />
</template>
