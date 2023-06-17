<script setup lant="ts">
import { PopoverButton } from '@headlessui/vue'

const props = defineProps({
    href: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <li>
        <PopoverButton as="a" :href="href" class="block py-2">
            <slot />
        </PopoverButton>
    </li>
</template>