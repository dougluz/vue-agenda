<template>
  <button class="flat-button">
    <slot> Cancelar </slot>
  </button>
</template>

<style scoped>
.flat-button {
  @apply flex items-center h-8 px-4 py-2 text-sm font-medium text-light-red rounded-2xl;
  padding: 0.75rem 1.375rem 0.75rem 1rem;
}
</style>
