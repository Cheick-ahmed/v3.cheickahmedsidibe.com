<script setup>
import projects from '../data/projects.json'

let intro = "Au fil des ans, j'ai travaillé sur de nombreux petits projets, mais ce sont ceux dont je suis le plus fier. Beaucoup d'entre eux sont open-source, donc si vous voyez quelque chose qui suscite votre intérêt, consultez le code et contribuez si vous avez des idées pour l'améliorer."

useHead({
    title: 'Projets - Ahmed SIDIBE',
    meta: [
        { name: 'description', content: "Projets sur lesquels j'ai travaillé, témoignant de ma quête d'innovation." }
    ],
})
</script>

<template>
    <SimpleLayout title="Projets sur lesquels j'ai travaillé, témoignant de ma quête d'innovation." :intro="intro">
        <ul role="list" class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            <Card as="li" v-for="project in projects" :key="project.name">
                <div
                    class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>

                </div>
                <h2 class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    <CardLink :href="project.link.href">{{ project.name }}</CardLink>
                </h2>
                <CardDescription>{{ project.description }}</CardDescription>
                <p
                    class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                    <LinkIcon class="h-6 w-6 flex-none" />
                    <span class="ml-2">{{ project.link.label }}</span>
                </p>
            </Card>
        </ul>
    </SimpleLayout>
</template>