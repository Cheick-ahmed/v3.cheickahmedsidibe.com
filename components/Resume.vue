<script setup>
const props = defineProps({
    resume: Array
})

const isAccorLogo = (logo) => {
    return logo.icon && logo.icon === 'AccorLogo'
}
</script>

<template>
    <div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <BriefcaseIcon class="h-6 w-6 flex-none" />
            <span class="ml-3">Dernières expériences</span>
        </h2>
        <ol class="mt-6 space-y-4">
            <li v-for="(role, roleIndex) in resume" :key="roleIndex" class="flex gap-4">
                <div
                    class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <img v-if="role.logo && role.logo.src" :src="role.logo.src" class="h-7 w-7" alt="">
                    <template v-else>
                        <AccorLogo v-if="isAccorLogo(role.logo)" class="h-7 w-7" />
                    </template>
                </div>

                <dl class="flex flex-auto flex-wrap gap-x-2">
                    <dt class="sr-only">Company</dt>
                    <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {{ role.company }}
                    </dd>
                    <dt class="sr-only">Role</dt>
                    <dd class="text-xs text-zinc-500 dark:text-zinc-400">
                        {{ role.title }}
                    </dd>
                    <dt class="sr-only">Date</dt>
                    <dd class="ml-auto text-xs text-zinc-400 dark:text-zinc-500 space-x-1" :aria-label="`${role.start.label ??
                        role.start} until ${role.end.label ?? role.end}`">
                        <time :dateTime="role.start.dateTime ?? role.start">
                            {{ role.start.label ?? role.start }}
                        </time>
                        <span aria-hidden="true">—</span>
                        <time :dateTime="role.end.dateTime ?? role.end">
                            {{ role.end.label ?? role.end }}
                        </time>
                    </dd>
                </dl>
            </li>
        </ol>
        <AppButton href="#" variant="secondary" class="group mt-6 w-full inline-flex">
            CV
            <ArrowDownIcon
                class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </AppButton>
    </div>
</template>