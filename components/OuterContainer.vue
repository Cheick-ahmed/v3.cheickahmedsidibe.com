<script setup>
import { ref } from 'vue';

let outerContainerRef = ref(null);
</script>


<template>
    <div class="sm:px-8" ref="outerContainerRef">
        <div class="mx-auto max-w-7xl lg:px-8">
            <slot />
        </div>
    </div>
</template>
  
