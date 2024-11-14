<script setup>
const props = defineProps({
  icon: Object,
  msg: String,
  href: String,
});
</script>

<template>
  <li v-if="msg" class="flex">
    <Nuxt-link
      :to="href"
      class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
    >
      <slot> </slot>
      <component
        :is="icon"
        class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
      />
      <span class="ml-4">
        {{ msg }}
      </span>
    </Nuxt-link>
  </li>

  <Nuxt-link v-else :to="href" class="group -m-1 p-1">
    <component
      :is="icon"
      class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
    />
  </Nuxt-link>
</template>
