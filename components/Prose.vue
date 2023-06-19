<script setup>
import { twMerge } from 'tailwind-merge';
</script>

<template>
    <div :class="twMerge('prose dark:prose-invert', $attrs['class'])" v-bind="$attrs">
        <slot />
    </div>
</template>