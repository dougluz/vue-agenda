<script setup lang="ts">
import { computed } from "vue";

type ContactAvatarProps = {
  contactName: string | undefined;
};

const props = defineProps<ContactAvatarProps>();

const getContactFirstLetter = computed(() => {
  if (props.contactName) {
    return props.contactName[0].toUpperCase();
  }
  return "?";
});
</script>

<template>
  <span class="avatar">{{ getContactFirstLetter }}</span>
</template>

<style scoped>
.avatar {
  @apply w-6 h-6 bg-salmon text-white rounded-full;
  padding: 0.188rem 0.313rem 0.125rem 0.375rem;
}
</style>
