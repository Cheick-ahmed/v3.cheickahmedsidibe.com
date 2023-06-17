<script setup>
import {
    Popover,
    PopoverButton,
    PopoverPanel,
    TransitionRoot,
    PopoverOverlay
} from '@headlessui/vue'

import { Transition } from 'vue'
</script>

<template>
    <Popover>
        <PopoverButton
            class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
            Menu
            <ChevronDownIcon
                class="ml-3 h-auto w-3 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
        </PopoverButton>
        <TransitionRoot>
            <Transition enter="duration-150 ease-out" enterFrom="opacity-0" enterTo="opacity-100"
                leave="duration-150 ease-in" leaveFrom="opacity-100" leaveTo="opacity-0">
                <PopoverOverlay class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
            </Transition>
            <Transition enter="duration-150 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
                leave="duration-150 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <PopoverPanel focus
                    class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800">
                    <div class="flex flex-row-reverse items-center justify-between">
                        <PopoverButton aria-label="Close menu" class="-m-1 p-1">
                            <CloseIcon class="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                        </PopoverButton>
                        <h2 class="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                            Navigation
                        </h2>
                    </div>
                    <nav class="mt-6">
                        <ul
                            class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                            <MobileNavItem href="about">
                                A propos
                            </MobileNavItem>
                            <MobileNavItem href="resume">
                                Expériences
                            </MobileNavItem>
                            <MobileNavItem href="projects">
                                Projets
                            </MobileNavItem>
                        </ul>
                    </nav>
                </PopoverPanel>
            </Transition>
        </TransitionRoot>
    </Popover>
</template>