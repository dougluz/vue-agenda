<script setup lang="ts">
import { computed } from "vue";
import EmptyListVue from "@/components/EmpytList/EmptyList.vue";
import { useContactStore } from "@/stores/useContactStore";
import ContactsTable from "@/components/ContactsTable/ContactsTable.vue";
import DeleteConfirmModal from "@/components/Modal/DeleteConfirmModal.vue";
import CreateContactModal from "@/components/Modal/CreateContactModal.vue";

const contactStore = useContactStore();
const isListEmpty = computed(() => contactStore.isEmpty());
</script>

<template>
  <main>
    <EmptyListVue v-if="isListEmpty" />
    <ContactsTable v-else />
    <CreateContactModal />
    <DeleteConfirmModal />
  </main>
</template>
