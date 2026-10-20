<script setup lang="ts">
import { motion, useMotionValueEvent, useScroll } from 'motion-v';
import { ref } from 'vue';

interface Props {
    isContactInView: boolean;
}

defineProps<Props>();

const { scrollY } = useScroll();

const isContactVisible = ref(false)

useMotionValueEvent(scrollY, "change", (value) => {
    isContactVisible.value = value > 300
});

const handleContact = () => {
    const element = document.getElementById("contact")
    element!.scrollIntoView({ behavior: "smooth" })
}
</script>


<template>
    <div class="relative scroll-mt-18 max-w-dvw">
        <motion.button :initial="{ translateX: '125%' }" :animate="isContactVisible && !isContactInView
            ? { x: 0 }
            : {}" @click="handleContact"
            class="lg:hidden fixed top-4 right-4 z-10 flex items-center gap-1 bg-blue-500 py-1 px-2 rounded-xl text-primary">
            <BiMailSend class="size-5" />
            <span class="text-xs font-medium">Contact Me</span>
        </motion.button>
        <div class="mx-auto px-8 max-w-999 py-12 md:py-24">
            <slot />
        </div>
    </div>
</template>