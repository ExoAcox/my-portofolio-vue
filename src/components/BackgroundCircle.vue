<script setup lang="ts">
import { motion, useSpring } from 'motion-v';
import { onMounted } from 'vue';

interface Props {
    width: number;
    height: number;
    maxSize: number;
    background: string;
}

const props = defineProps<Props>();

const generateDuration = () => {
    return Math.floor(Math.random() * 10000) + 5000
}


const generateSize = () => {
    return Math.floor(Math.random() * props.maxSize) + (props.maxSize - (props.maxSize / 8))
}

const size = useSpring(generateSize(), { stiffness: 1, damping: 10 })

const generateRandom = (max: number) => {
    return Math.floor(Math.random() * (max + (Number(size.get()) / 2))) + (Number(size.get()) / 2)
}

const x = useSpring(generateRandom(props.width), { stiffness: 1, damping: 10 })
const y = useSpring(generateRandom(props.height), { stiffness: 1, damping: 10 })

onMounted(() => {
    x.set((generateRandom(props.width)))
    y.set((generateRandom(props.height)))
    size.set(generateSize())

    setInterval(() => {
        x.set((generateRandom(props.width)))
        y.set((generateRandom(props.height)))
    }, generateDuration())

    setInterval(() => {
        size.set(generateSize())
    }, generateDuration())
})

</script>

<template>
    <motion.div :class="`${background} absolute -translate-full`" :style="{ x, y, width: size, height: size }"
        :animate="{ rotate: 360 }" :transition="{ rotate: { duration: 100, repeat: Infinity, ease: 'linear' } }" />
</template>