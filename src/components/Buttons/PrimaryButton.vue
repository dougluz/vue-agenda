<template>
  <button class="bg-light-red h-8 pt-2 pb-2 pl-4 pr-4 rounded-2xl">
    <slot> Salvar </slot>
  </button>
</template>

<style scoped>
.primary-button {
  @apply bg-light-red text-white text-sm font-medium h-8 pt-2 pb-2 pl-4 pr-4 rounded-2xl;
}
</style>
