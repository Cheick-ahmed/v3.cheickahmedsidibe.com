<script setup>
const { path } = useRoute()

const { data } = await useAsyncData(`content${path}`, () => queryContent(`${path}`).findOne())

const { title, description, date } = data.value

useHead({
    title: title,
    meta: [
        { name: 'description', content: description }
    ],
})
</script>


<template>
    <ArticleLayout :meta="{ title, description, date }">
        <ContentDoc />
    </ArticleLayout>
</template>