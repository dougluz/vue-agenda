<template>
  <button class="flat-button">
    <slot> Cancelar </slot>
  </button>
</template>

<style scoped>
.flat-button {
  @apply text-sm font-medium text-light-red rounded;
  padding: 0.75rem 1.375rem 0.75rem 1rem;
}
</style>
