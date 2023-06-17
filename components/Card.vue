<script setup>
import { computed, useAttrs } from 'vue'
import { twMerge } from 'tailwind-merge';

const attrs = useAttrs()

const props = defineProps({
    as: {
        type: String,
        default: 'div'
    }
})

const style = computed(() => {
    return twMerge(attrs['class'], 'group relative flex flex-col items-start')
})
</script>

<template>
    <component :is="as" :class="style">
        <slot />
    </component>
</template>