<script setup>
import { computed, useAttrs } from 'vue'
import { twMerge } from 'tailwind-merge';

import { APP_BUTTON } from '../contants/AppButtonVariants'

const props = defineProps({
    href: String,
    variant: {
        type: String,
        default: 'primary'
    }
})

const variantStyles = {
    primary: APP_BUTTON.VARIANTS.PRIMARY,
    secondary: APP_BUTTON.VARIANTS.SECONDARY,
}

const attrs = useAttrs()

const buttonStyle = computed(() => {
    return twMerge(attrs['class'], variantStyles[props.variant], APP_BUTTON.DEFAULT)
})
</script>

<template>
    <NuxtLink v-if="href" :class="buttonStyle">
        <slot />
    </NuxtLink>
    <button v-else :class="buttonStyle">
        <slot />
    </button>
</template>