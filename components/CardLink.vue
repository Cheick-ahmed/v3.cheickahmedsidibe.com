<script setup>

import { useAttrs } from 'vue'

defineOptions({
    inheritAttrs: false
})

const attrs = useAttrs()

</script>

<template>
    <div
        class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
    <NuxtLink v-bind="attrs">
        <span class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span class="relative z-10">
            <slot />
        </span>
    </NuxtLink>
</template>