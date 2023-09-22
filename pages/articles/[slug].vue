<script setup>
import { ref } from 'vue'

const { path } = useRoute()
const router = useRouter()

const state = ref({
    title: '',
    description: '',
    date: ''
})

try {
    const { data } = await useAsyncData(`content${path}`, () => queryContent(`${path}`).findOne())

    const { title, description, date } = data.value

    state.value.title = title
    state.value.description = description
    state.value.date = date
} catch (e) {
    router.push('/')
}


useHead({
    title: state.title,
    meta: [
        { name: 'description', content: state.description }
    ],
})
</script>


<template>
    <ArticleLayout :meta="{ title: state.title, description: state.description, date: state.date }">
        <ContentDoc />
    </ArticleLayout>
</template>