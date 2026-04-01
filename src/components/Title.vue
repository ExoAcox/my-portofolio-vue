<script setup lang="ts">
interface Props {
    permanent?: boolean
}

defineProps<Props>()


</script>


<template>
    <div class="sticky top-0 py-4 backdrop-blur w-full z-3 max-w-dwh" :class="permanent ? 'block' : 'block lg:hidden'">
        <label class="text-primary font-semibold text-base lg:text-lg">
            <slot />
        </label>
    </div>
</template>