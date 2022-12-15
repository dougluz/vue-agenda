<template>
  <button class="primary-button">
    <slot> Salvar </slot>
  </button>
</template>

<style scoped>
.primary-button {
  @apply flex items-center bg-light-red text-white text-sm font-medium h-8 px-4 py-2 rounded-2xl;
}
</style>
