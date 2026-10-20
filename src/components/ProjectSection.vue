<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue';
import Title from './Title.vue';
import projects from "@/constants/projects";

interface Props {
    contactInView: boolean;
}

defineProps<Props>()

const divRef = ref<HTMLDivElement | null>(null)

defineExpose({
    divRef
})

</script>

<template>
    <div class="relative z-2 scroll-mt-24" ref="divRef" id="project">
        <Title v-if="!contactInView">PROJECTS</Title>
        <div class="flex flex-col gap-24 lg:gap-12 mt-4">
            <ProjectCard v-for="project in projects" :key="project.title" :title="project.title" :desc="project.desc"
                :href="project.href" :image="project.image" :links="project.links" :stacks="project.stacks">
            </ProjectCard>
        </div>
    </div>
</template>