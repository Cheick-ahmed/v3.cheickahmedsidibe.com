<script>
export default {

}
</script>

<template>
    <form action="/thank-you" class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <MailIcon class="h-6 w-6 flex-none" />
            <span class="ml-3">Stay up to date</span>
        </h2>
        <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Get notified when I publish something new, and unsubscribe at any time.
        </p>
        <div class="mt-6 flex">
            <input type="email" placeholder="Email address" aria-label="Email address" required
                class="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm" />
            <AppButton type="submit" class="ml-4 flex-none">
                Join
            </AppButton>
        </div>
    </form>
</template>