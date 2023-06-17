<script setup>
import { ref, onMounted } from 'vue'

// declare a ref to hold the element reference
// the name must match template ref value
let myRef = ref(null)

let headerRef = ref(null)

onMounted(() => {
})
</script>

<template>
    <input ref="myRef"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

    <div class="top-0 z-10 pt-6" ref="headerRef">
        <Container>

        </Container>
    </div>
</template>