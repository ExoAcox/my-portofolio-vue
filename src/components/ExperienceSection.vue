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
    </div>
</template>