<script setup>
import { formatDate } from '~/utils/formatDate';

const props = defineProps({
    post: Object
})
</script>

<template>
    <article class="md:grid md:grid-cols-4 md:items-baseline">
        <Card class="md:col-span-3">
            <CardTitle :href="`/articles/${post.slug}`">
                {{ post.title }}
            </CardTitle>
            <CardEyebrow as="time" :dateTime="post.date" class="md:hidden" decorate>
                {{ formatDate(post.date) }}
            </CardEyebrow>
            <CardDescription>{{ post.description }}</CardDescription>
            <CardCta>Read article</CardCta>
        </Card>
        <CardEyebrow as="time" dateTime={post.date} class="mt-1 hidden md:block">
            {{ formatDate(post.date) }}
        </CardEyebrow>
    </article>
</template>