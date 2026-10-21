<script setup lang="ts">
import { useInView } from 'motion-v'
import { ref, watch, onMounted } from 'vue';

import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import Wrapper from './components/Wrapper.vue';
import QuoteSection from './components/QuoteSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import ProjectSection from './components/ProjectSection.vue';
import BackgroundSection from './components/BackgroundSection.vue';

const active = ref("")

const aboutRef = ref()
const experienceRef = ref()
const projectRef = ref()
const contactRef = ref()

const aboutInView = useInView(aboutRef)
const experienceInView = useInView(experienceRef)
const projectInView = useInView(projectRef)
const contactInView = useInView(contactRef)

watch(
  [aboutInView, experienceInView, projectInView, contactInView],
  ([about, experience, project, contact]) => {
    if (about) return active.value = "about"
    if (experience) return active.value = "experience"
    if (project) return active.value = "project"
    if (contact) return active.value = "contact"
  }
)

onMounted(() => {
  if (import.meta.env.DEV) {
    document.body.classList.add("debug-screens");
  }
})
</script>

<template>
  <Wrapper :isContactInView="contactInView">
    <BackgroundSection />
    <div class="flex flex-col lg:flex-row justify-between relative z-2 gap-y-24">
      <HeroSection :active="active" />
      <div class="lg:w-2xl lg:max-w-[60%] flex flex-col gap-24 lg:gap-36">
        <AboutSection ref="aboutRef" />
        <ExperienceSection ref="experienceRef" />
        <ProjectSection ref="projectRef" :contactInView="contactInView" />
        <QuoteSection />
      </div>
    </div>
  </Wrapper>
</template>
