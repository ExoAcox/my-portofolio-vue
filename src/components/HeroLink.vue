<script setup lang="ts">

interface Props {
    isActive: boolean;
    onClick: () => void;
}

defineProps<Props>()

</script>


<template>
    <div @click="onClick" class="flex relative group items-center gap-3 hover:text-primary cursor-pointer"
        :class="{ 'text-primary': isActive }">
        <div class="h-0.25 w-10 group-hover:bg-primary group-hover:w-15 duration-200"
            :class="isActive ? 'bg-primary w-15' : 'bg-secondary'" />
        <span>
            <slot />
        </span>
    </div>
</template>