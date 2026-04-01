<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import BackgroundCircle from './BackgroundCircle.vue';


const width = ref(window.innerWidth)
const height = ref(window.innerHeight)
const maxSize = computed(() => width.value > height.value ? height.value : width.value)

onMounted(() => {
    window.addEventListener("resize", () => {
        width.value = window.innerWidth
        height.value = window.innerHeight
    })
})
</script>

<template>
    <div className="fixed inset-0">
        <BackgroundCircle :width="width" :height="height" :maxSize="((maxSize) / 10) * 9" background="bg-gray-400/15" />
        <BackgroundCircle :width="width" :height="height" :maxSize="((maxSize) / 10) * 8" background="bg-red-100/7" />
        <BackgroundCircle :width="width" :height="height" :maxSize="((maxSize) / 10) * 7" background="bg-blue-200/7" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
    </div>
</template>