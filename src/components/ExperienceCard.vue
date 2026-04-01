<script setup lang="ts">
interface Props {
    date: string;
    title: string;
    desc: string;
    links?: {
        label: string;
        href: string;
    }[]
}

defineProps<Props>()
</script>


<template>
    <div
        class="group flex flex-col md:flex-row gap-10 gap-y-1 rounded-md py-4 lg:px-6 sm:hover:bg-black/25 duration-500">
        <div class="w-[136px] mt-1.5 text-xs font-medium">{{ date }}</div>
        <div class="flex-1 mb-1">
            <label class="font-bold text-base text-primary group-hover:text-tertiary">{{ title }}</label>
            <p class="mt-2 mb-4 text-sm group-hover:text-primary">{{ desc }}</p>
            <div class="flex flex-wrap gap-3 text-xs text-white max-w-[360px]">
                <a v-for="link in links" :key="link.href" :href="link.href" target="_blank"
                    class="flex items-center gap-1 border rounded px-2 py-1 text-tertiary">
                    <v-icon name="fa-link" /> {{ link.label }}
                </a>
            </div>
        </div>
    </div>
</template>