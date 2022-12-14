<script setup lang="ts">
import { computed } from "vue";
import UbookLogo from "@/components/icons/UbookLogo.vue";
import { useContactStore } from "@/stores/useContactStore";
import SearchInput from "../SearchInput/SearchInput.vue";
import AddButton from "../Buttons/AddButton.vue";

const contactStore = useContactStore();
const isListEmpty = computed(() => contactStore.isEmpty());
</script>

<template>
  <header class="w-full h-16">
    <div class="w-full p-4 flex items-center justify-between">
      <UbookLogo class="hidden lg:inline-flex h-8 w-37" alt="ubook-logo" />
      <div class="flex w-full items-center justify-end gap-6">
        <AddButton small v-if="!isListEmpty" />
        <SearchInput />
      </div>
    </div>
  </header>
</template>
