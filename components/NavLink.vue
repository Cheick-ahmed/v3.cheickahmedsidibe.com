<script setup>
const props = defineProps({
    href: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <NuxtLink :to="href" className="transition hover:text-teal-500 dark:hover:text-teal-400">
        <slot />
    </NuxtLink>
</template>