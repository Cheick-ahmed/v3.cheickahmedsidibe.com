<script setup>
import GitHubIcon from '~/components/GitHubIcon.vue';
import LinkedinIcon from '~/components/LinkedinIcon.vue';
import InstagramIcon from '~/components/InstagramIcon.vue';
import MailIcon from '~/components/MailIcon.vue';
</script>

<template>
    <Container class="mt-16 sm:mt-32">
        <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div class="lg:pl-20">
                <div class="max-w-xs px-2.5 lg:max-w-none">
                    <img src="https://s3.eu-west-3.amazonaws.com/my.portfolio.images/images/IMG_1704.jpg" alt=""
                        sizes="(min-width: 1024px) 32rem, 20rem"
                        class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" />
                </div>
            </div>
            <div class="lg:order-first lg:row-span-2">
                <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Ahmed, un développeur front-end passionné basé à Paris.
                </h1>
                <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                    <p>
                        Je m'appelle Ahmed, un développeur Front-End passionné avec plus de 5 ans d'expérience. Spécialisé
                        en Vue/Nuxt, TypeScript, Tailwind et d'autres technologies front-end, j'offre des solutions
                        innovantes et performantes pour répondre aux défis techniques les plus complexes.
                    </p>
                    <p>
                        Ma polyvalence provient de collaborations diverses avec plusieurs entreprises tech, m'ayant permis
                        de travailler sur des projets variés : SPA, SSR, micro Front End, et PWA. Chaque projet m'offre
                        l'opportunité de parfaire mes compétences et d'appliquer les meilleures technologies front-end
                        disponibles.
                    </p>
                    <p>
                        Je suis également un fervent défenseur des bonnes pratiques de développement, notamment en matière
                        de tests unitaires et d'accessibilité. Je m'engage à garantir que toutes mes solutions soient non
                        seulement robustes et performantes, mais aussi accessibles à tous.
                    </p>
                    <p>
                        Enthousiaste à l'idée d'échanger sur les défis techniques ou vos projets, n'hésitez pas à me
                        contacter. Que vous cherchiez à développer de nouvelles fonctionnalités, à construire une nouvelle
                        application ou à surmonter un obstacle technique, je suis toujours prêt à aider et à partager ma
                        passion pour le développement!
                    </p>
                </div>
            </div>
            <div class="lg:pl-20">
                <ul role="list">
                    <SocialLink href="https://instagram.com/cheickahmed.sidibe" target="_blank"
                        aria-label="Follow on Instagram" :icon="InstagramIcon" msg="Suivez moi sur instagram"></SocialLink>
                    <SocialLink href="https://github.com/Cheick-ahmed" target="_blank" aria-label="Follow on Github"
                        :icon="GitHubIcon" msg="Suivez moi sur Github" class="mt-4" />
                    <SocialLink href="https://www.linkedin.com/in/scahmed/" target="_blank" aria-label="Follow on Linkedin"
                        :icon="LinkedinIcon" msg="Suivez moi sur Linkedin" class="mt-4" />
                    <SocialLink href="mailto:spencer@planetaria.tech" :icon="MailIcon"
                        class="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40" msg="pro.ahmed.sidibe@gmail.com">
                    </SocialLink>
                </ul>
            </div>
        </div>
    </Container>
</template>