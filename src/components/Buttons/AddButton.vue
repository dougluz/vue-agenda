<script setup lang="ts">
import IcPlus from "../icons/IcPlus.vue";

type PrimaryButtonProps = {
  small?: boolean;
};

const props = withDefaults(defineProps<PrimaryButtonProps>(), {
  small: false,
});
</script>

<template>
  <button class="add-button-base" :class="{ 'add-button-small': props.small }">
    <IcPlus /> <span>Criar contato</span>
  </button>
</template>

<style scoped>
.add-button-base {
  @apply flex items-center gap-2 justify-between bg-light-yellowish-green text-light-red font-medium text-sm rounded-[20px];
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16),
    0 0 0 0.5px rgba(0, 0, 0, 0.08), inset 0 0 0 0.5px rgba(0, 0, 0, 0.08),
    0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
  padding: 0.75rem 1.375rem 0.75rem 1rem;
}

.add-button-small {
  @apply h-8;
}

.add-button-small span {
  @apply hidden md:inline-block;
}
</style>
