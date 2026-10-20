<script setup lang="ts">
import { contactInfo } from '@/constants/contact'
</script>

<template>
    <div class="flex flex-col gap-1 text-base">
        <div class="flex items-center gap-2">Get in touch with me <FaHandPointRight /></div>
        <a :href="`mailto:${contactInfo.email}`" target="_blank" class="w-fit relative pb-0.5 group">
            <span class="relative z-2 px-1 group-hover:text-primary text-primary lg:text-secondary">{{ contactInfo.email }}</span>
            <div class="absolute bottom-0 w-full h-0.5 bg-blue-500 group-hover:h-full duration-200"></div></a>
        <a :href="contactInfo.whatsapp" target="_blank" class="w-fit relative pb-0.5 group">
            <span class="relative z-2 px-1 group-hover:text-primary text-primary lg:text-secondary">{{ contactInfo.phone }}</span>
            <div class="absolute bottom-0 w-full h-0.5 bg-blue-500 group-hover:h-full duration-200"></div></a>
    </div>
</template>