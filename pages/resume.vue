<script setup>
const accor = {
    "title": "Accor",
    "role": "Développeur Front-End",
    "missions": [
        {
            "title": "Développement du couloir de réservation",
            "description": "Travail sur le développement du couloir de réservation du site all.accor.com en utilisant Vue.js et Nuxt.js. Mise en œuvre de l'accessibilité, rédaction de tests unitaires et respect des bonnes pratiques de codage en TypeScript.",
            "subtitle": "Développement Front-End"
        },
        {
            "title": "Optimisation des performances et de l'accessibilité",
            "description": "Contribution à l'optimisation des performances et de l'accessibilité du site à fort trafic, en mettant en place des optimisations techniques et en garantissant une expérience utilisateur fluide.",
            "subtitle": "Performance et Accessibilité"
        },
        {
            "title": "Intégration de nouvelles fonctionnalités",
            "description": "Développement de diverses fonctionnalités pour améliorer les fonctionnalités du site, en collaborant avec l'équipe de développement et en assurant une intégration de haute qualité.",
            "subtitle": "Fonctionnalités"
        },
        {
            "title": "Amélioration du référencement",
            "description": "Mise en place de stratégies d'amélioration du référencement (SEO) pour augmenter la visibilité du site dans les moteurs de recherche et attirer davantage de trafic organique.",
            "subtitle": "SEO"
        },
        {
            "title": "Maintenance et résolution de problèmes",
            "description": "Maintenance régulière du site, identification et résolution des problèmes techniques, afin d'assurer la stabilité et la performance du site.",
            "subtitle": "Maintenance et Résolution de problèmes"
        }
    ]
}

const Nexity = {
    "title": "Nexity",
    "role": "Développeur Front-End",
    "missions": [
        {
            "title": "Design System",
            "description": "Développement de composants Vue.js organisés de manière atomique pour une gestion efficace du code.",
            "subtitle": "Librairies"
        },
        {
            "title": "Optimisation des performances",
            "description": "Optimisation de la performance des pages en utilisant des techniques de caching et de chargement asynchrone des ressources, pour assurer une expérience utilisateur fluide.",
            "subtitle": "Performance"
        },
        {
            "title": "Amélioration de l'accessibilité",
            "description": "Mise en œuvre d'améliorations d'accessibilité conformes aux standards WCAG, pour rendre le site plus accessible et inclusif pour tous les utilisateurs.",
            "subtitle": "Accessibilité"
        },
        {
            "title": "Refonte de l'interface utilisateur",
            "description": "Participation à la refonte de l'interface utilisateur en collaboration avec l'équipe de design, en suivant les principes de l'expérience utilisateur (UX) et de l'interface utilisateur (UI).",
            "subtitle": "UI/UX"
        },
        {
            "title": "Optimisation du référencement",
            "description": "Mise en place de techniques d'optimisation du référencement (SEO) pour améliorer la visibilité du site sur les moteurs de recherche et augmenter son trafic organique.",
            "subtitle": "SEO"
        }
    ]
}

const TPC = {
    "title": "TPC",
    "role": "Lead Développeur Front-End",
    "missions": [
        {
            "title": "Choix des technologies et intégration des maquettes graphiques",
            "description": "En tant que Lead Développeur Front-End, j'ai été responsable du choix des technologies adaptées au projet et de l'intégration précise des maquettes graphiques pour assurer une correspondance parfaite entre le design et le développement.",
            "subtitle": "Technologies et Intégration"
        },
        {
            "title": "Développement du site en SSR avec Nuxt",
            "description": "J'ai développé le site en utilisant Nuxt.js en mode SSR (Server-Side Rendering) pour améliorer les performances et l'expérience utilisateur en assurant un rendu initial rapide des pages.",
            "subtitle": "SSR avec Nuxt"
        },
        {
            "title": "Mise en place d'un design system avec Storybook",
            "description": "J'ai créé un design system et l'ai implémenté dans le projet en utilisant Storybook, permettant ainsi une gestion centralisée et une réutilisation efficace des composants.",
            "subtitle": "Design System avec Storybook"
        },
        {
            "title": "Gestion des contraintes d'accessibilité",
            "description": "J'ai pris en compte les contraintes d'accessibilité tout au long du développement pour m'assurer que le site est utilisable par tous les utilisateurs, en respectant les normes WCAG et en mettant en place des pratiques d'accessibilité optimales.",
            "subtitle": "Accessibilité"
        },
        {
            "title": "Mise en œuvre d'une solution multilingue",
            "description": "J'ai mis en place une solution de traduction pour permettre au site d'être disponible en plusieurs langues, offrant ainsi une expérience utilisateur adaptée aux besoins des utilisateurs internationaux.",
            "subtitle": "Multilingue"
        }
    ]
}

const Gridky = {
    "title": "Gridky",
    "role": "Développeur Front-End",
    "missions": [
        {
            "title": "Développement d'interfaces BtoC",
            "description": "J'ai participé au développement d'interfaces destinées au grand public, en créant des expériences utilisateur conviviales et intuitives pour assurer une interaction optimale avec les utilisateurs finaux.",
            "subtitle": "Interfaces BtoC"
        },
        {
            "title": "Création d'un espace dédié aux professionnels de l’immobilier",
            "description": "J'ai développé un espace dédié aux professionnels de l'immobilier, offrant des fonctionnalités spécifiques pour répondre à leurs besoins professionnels et faciliter leurs interactions avec la plateforme.",
            "subtitle": "Espace Professionnels de l'immobilier"
        },
        {
            "title": "Développement d'un logiciel SaaS",
            "description": "J'ai participé au développement d'un logiciel SaaS (Software as a Service) en créant des fonctionnalités robustes et évolutives, permettant aux utilisateurs d'accéder aux services en ligne de manière sécurisée et efficace.",
            "subtitle": "Logiciel SaaS"
        }
    ]
}

const items = [accor, Nexity, TPC, Gridky]
</script>

<template>
    <SimpleLayout title="De Code en Code : Mon Parcours de Développeur"
        intro="Chaque entreprise, chaque mission a été une opportunité d'aquérir une gamme de compétences précieuses. Explorez cette section pour en savoir plus sur mon parcours et les projets qui ont façonné ma carrière.">
        <div class="space-y-20">
            <WorkSection :title="item.title" v-for="item in items">
                <WorkItem v-for="(mission, missionIndex) in item.missions" href="#" :title="mission.title"
                    :description="mission.description" :event="missionIndex === 0 ? item.role : ''" />
            </WorkSection>
        </div>
    </SimpleLayout>
</template>