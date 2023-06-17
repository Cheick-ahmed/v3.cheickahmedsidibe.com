<script setup>
const props = defineProps({
    as: {
        type: String,
        default: 'h2'
    },
    href: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <component :is="as" class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        <CardLink v-if="href" :href="href">
            <slot />
        </CardLink>

        <slot v-else />
    </component>
</template>