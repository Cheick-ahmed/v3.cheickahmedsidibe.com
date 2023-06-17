<script setup>
import { ref } from 'vue';

let innerContainerRef = ref(null);
</script>


<template>
    <div class="relative px-4 sm:px-8 lg:px-12 " ref="innerContainerRef">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
            <slot />
        </div>
    </div>
</template>
  
