<script setup lang="ts">
import { computed } from "vue";
import EmptyListVue from "@/components/EmpytList/EmptyList.vue";
import { useContactStore } from "@/stores/useContactStore";

const contactStore = useContactStore();
const isListEmpty = computed(() => contactStore.isEmpty());
</script>

<template>
  <main>
    <EmptyListVue v-if="isListEmpty" />
  </main>
</template>
