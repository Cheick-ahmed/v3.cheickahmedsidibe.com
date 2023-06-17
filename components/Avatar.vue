<script setup>
import { useAttrs, computed } from 'vue'
import { twMerge } from 'tailwind-merge';

const attrs = useAttrs()

const avatarImage = "https://s3.eu-west-3.amazonaws.com/my.portfolio.images/images/IMG_1704.jpg"

const props = defineProps({
    large: {
        type: Boolean,
        default: false
    }
})

const style = computed(() => twMerge('pointer-events-auto', attrs['class']))
</script>

<template>
    <NuxtLink to="/" aria-label="Home" :class="style" v-bind="attrs">
        <img :src="avatarImage" alt="" async :sizes="large ? '4rem' : '2.25rem'"
            :class="['rounded-full bg-zinc-100 object-cover dark:bg-zinc-800', large ? 'h-16 w-16' : 'h-9 w-9']" priority />
    </NuxtLink>
</template>