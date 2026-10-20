<script setup lang="ts">
import Title from './Title.vue';
import ExperienceCard from './ExperienceCard.vue';
import experiences from '@/constants/experiences';
import { ref } from 'vue'

const divRef = ref<HTMLDivElement | null>(null)

defineExpose({
    divRef
})

</script>

<template>
    <div ref="divRef" id="experience" class="scroll-mt-24">
        <Title>EXPERIENCE</Title>
        <div class="flex flex-col gap-6">
            <ExperienceCard v-for="experience in experiences" :key="experience.title" :desc="experience.desc"
                :title="experience.title" :date="experience.date" :links="experience.links" />
        </div>
        <a href="/docs/anasarifin-resume.pdf" target="_blank"
            class="mt-4 sm:mt-6 lg:mt-8 lg:mx-6 flex text-base sm:text-md items-center gap-2 w-fit text-white font-semibold hover:text-tertiary group/link">View
            My Full Resume
            <v-icon name="hi-arrow-narrow-right"
                class="size-5 shrink-0 scale-80 transition group-hover/link:translate-x-1" />
        </a>
    </div>
</template>