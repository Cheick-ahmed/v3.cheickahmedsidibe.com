
<script setup>
const props = defineProps({
    href: String,
    title: String,
    description: String,
    event: String
})
</script>

<template>
    <Card as="article">
        <CardTitle as="h3" :href="href">
            {{ title }}
        </CardTitle>
        <CardEyebrow :decorate="!!event">{{ event }}</CardEyebrow>
        <CardDescription>{{ description }}</CardDescription>
    </Card>
</template>