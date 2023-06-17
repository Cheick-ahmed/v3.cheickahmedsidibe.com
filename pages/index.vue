<script setup>
import GitHubIcon from '~/components/GitHubIcon.vue';
import LinkedinIcon from '~/components/LinkedinIcon.vue';
import InstagramIcon from '~/components/InstagramIcon.vue';

import resume from '../data/resume.json'
import articles from '../data/articles.json'

articles.length = 3
resume.length = 4
</script>

<template>
  <Container class="mt-9">
    <div class="max-w-2xl">
      <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Développeur Front-End Expérimenté, Spécialiste en Vue/Nuxt.
      </h1>
      <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        Avec plus de cinq ans d'expérience en développement front-end, je suis dédié à transformer les défis techniques en
        opportunités d'innovation. Mon expertise en Vue/Nuxt et TypeScript, combinée à une rigoureuse approche de tests
        dans tous mes projets, me permet de développer des solutions web robustes et fiables.
      </p>
      <div class="mt-6 flex gap-6">
        <SocialLink href="https://instagram.com/cheickahmed.sidibe" target="_blank" aria-label="Follow on Instagram"
          :icon="InstagramIcon" />
        <SocialLink href="https://github.com/Cheick-ahmed" target="_blank" aria-label="Follow on Github"
          :icon="GitHubIcon" />
        <SocialLink href="https://www.linkedin.com/in/scahmed/" target="_blank" aria-label="Follow on Linkedin"
          :icon="LinkedinIcon" />
      </div>
    </div>
  </Container>

<Container class="mt-24 md:mt-28">
  <div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
    <div class="flex flex-col gap-16">
      <Article v-for="article in articles" :key="article.slug" :post="article" />
    </div>
    <div class="space-y-10 lg:pl-16 xl:pl-24">
      <Resume :resume="resume" />
      </div>
    </div>
  </Container>

  <!-- <SimpleLayout title="Writing on software design, company building, and the aerospace industry."
            intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.">
            <div class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
              <div class="flex max-w-3xl flex-col space-y-16">
                <Article v-for="post in articles" :key="post.slug" :post="post" />
              </div>
            </div>
          </SimpleLayout> -->
</template>