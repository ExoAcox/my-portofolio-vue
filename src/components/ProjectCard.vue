<script setup lang="ts">
import stackData from "@/constants/stacks";

interface Props {
    image: string;
    title: string;
    desc: string;
    href?: string;
    stacks: (keyof typeof stackData)[]
    links?: {
        label: string;
        href: string;
    }[]
}

defineProps<Props>()
</script>


<template>
    <div
        class="flex flex-col-reverse sm:pl-4 sm:pr-6 sm:py-4 rounded-md sm:flex-row gap-8 gap-y-6 group sm:hover:bg-black/25">
        <div
            class="w-full max-w-67.5 h-fit max-h-45 border-2 border-secondary/50 group-hover:border-secondary overflow-hidden">
            <img :src="image" :alt="title" />
        </div>
        <div class="flex-1 min-w-75">
            <div class="flex gap-4 items-end justify-between">
                <a :href="href" target="_blank" class="flex-1">
                    <h4 class="flex gap-1 group/link w-fit text-primary group-hover:text-tertiary">
                        {{ title }}
                        <v-icon v-if="href" name="hi-arrow-up"
                            class="size-5 shrink-0 rotate-45 scale-80 transition translate-y-1.5 group-hover/link:translate-y-1 group-hover/link:translate-x-1.5" />
                    </h4>
                </a>
                <div class="flex gap-x-4 text-sm -translate-y-1.5">
                    <a v-for="link in links" :href="link.href" :key="link.href" target="_blank">
                        <span class="flex items-end gap-0.5 group/link w-fit hover:text-tertiary underline text-xs">
                            {{ link.label }}
                            <v-icon name="hi-arrow-up"
                                class="size-3 shrink-0 rotate-45 scale-80 transition translate-y-px group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </span>
                    </a>
                </div>
            </div>
            <p class="mt-2 mb-4 text-sm group-hover:text-primary">{{ desc }}</p>
            <div class="flex flex-wrap gap-3 text-xs font-medium">
                <a v-for="stack in stacks" :key="stack" :href="stackData[stack].href" target="_blank"
                    class="py-1 px-3 bg-sky-400/10 text-tertiary rounded-xl">{{ stackData[stack].label }}</a>
            </div>
        </div>
    </div>
</template>