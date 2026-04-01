<script setup lang="ts">
import HeroLink from './HeroLink.vue';

interface Props {
    active: string;
}

defineProps<Props>()

const handleClick = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
}

</script>


<template>
    <div class="lg:sticky lg:h-[calc(100dvh-12rem)] top-12 md:top-24 flex flex-col overflow-auto pr-8">
        <h1 class="text-primary text-5xl md:text-6xl">Anas Arifin</h1>
        <h2 class="text-primary font-medium mt-2 mb-6">Front End Developer</h2>
        <span class="max-w-[300px]">I build accessible, pixel-perfect digital experiences for the web.</span>
        <div class="hidden lg:flex flex-col my-18 gap-8 font-medium text-sm">
            <HeroLink :isActive="active === 'about'" @click="handleClick('about')">ABOUT</HeroLink>
            <HeroLink :isActive="active === 'experience'" @click="handleClick('experience')">EXPERIENCE</HeroLink>
            <HeroLink :isActive="active === 'project'" @click="handleClick('project')">PROJECTS</HeroLink>
        </div>
        <div class="hidden mt-auto lg:block">
            <Contact />
        </div>
    </div>
</template>