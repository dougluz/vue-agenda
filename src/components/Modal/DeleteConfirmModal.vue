<script setup lang="ts">
import { computed } from "vue";
import { useModalStore } from "@/stores/useModalStore";
import DefaultModal from "./DefaultModal.vue";
import { useContactStore } from "@/stores/useContactStore";
import PrimaryButton from "../Buttons/PrimaryButton.vue";
import FlatButton from "../Buttons/FlatButton.vue";

const { getModalStatus, setModalStatus } = useModalStore();
const { getSelectedContactEmail, removeContact } = useContactStore();

const isOpen = computed(() => getModalStatus("deleteModal"));

const handleClose = () => setModalStatus("deleteModal", false);

const selectedContactEmail = computed(() => getSelectedContactEmail());

const onConfirm = () => {
  removeContact(selectedContactEmail.value);
  handleClose();
};
</script>

<template>
  <DefaultModal
    title="Excluir contato"
    :isOpen="isOpen"
    :handleClose="handleClose"
  >
    <template #content>
      <div class="mt-2">
        <p class="text-sm text-gray-500">
          Tem certeza que deseja excluir o contato?
        </p>
      </div>
    </template>
    <template #actions>
      <FlatButton @click="handleClose">Cancelar</FlatButton>
      <PrimaryButton @click="onConfirm">Confirmar</PrimaryButton>
    </template>
  </DefaultModal>
</template>
