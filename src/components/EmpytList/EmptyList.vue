<script setup lang="ts">
import { useModalStore } from "@/stores/useModalStore";
import AddButton from "../Buttons/AddButton.vue";
import EmptyBook from "../icons/EmptyBook.vue";

const { setModalStatus } = useModalStore();

const handleAddContact = () => {
  setModalStatus("formModal", true);
};
</script>

<template>
  <div class="empty-list-container">
    <EmptyBook />
    <p>Nenhum contato foi criado ainda.</p>
    <AddButton @click="handleAddContact" />
  </div>
</template>

<style lang="css" scoped>
.empty-list-container {
  @apply flex w-full flex-1 flex-col mt-24 gap-6 items-center justify-center text-center;
}
</style>
