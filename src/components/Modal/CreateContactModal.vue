<script setup lang="ts">
import { computed, reactive } from "vue";
import { useModalStore } from "@/stores/useModalStore";
import DefaultModal from "./DefaultModal.vue";
import { useContactStore } from "@/stores/useContactStore";
import FlatButton from "../Buttons/FlatButton.vue";
import PrimaryButton from "../Buttons/PrimaryButton.vue";

const contact = reactive({
  name: "",
  email: "",
  phone: "",
});

const shouldDisableSubmit = computed(() => {
  return !contact.name && !contact.email && !contact.phone;
});

const { getModalStatus, setModalStatus } = useModalStore();
const { getSelectedContactEmail, addContact } = useContactStore();

const selectedContact = computed(() => getSelectedContactEmail());

const isOpen = computed(() => getModalStatus("formModal"));

const getModalTitle = computed(() =>
  selectedContact.value ? "Editar contato" : "Criar Novo contato"
);

const handleClose = () => setModalStatus("formModal", false);

const handleAdd = () => {
  addContact(contact);
  handleClose();
};
</script>

<template>
  <DefaultModal
    :title="getModalTitle"
    :isOpen="isOpen"
    :handleClose="handleClose"
  >
    <template #content>
      <form>
        <label for="name" class="block text-sm font-medium"> Nome </label>
        <input
          type="text"
          v-model="contact.name"
          name="name"
          id="name"
          class="input w-full"
        />
        <label for="email" class="block text-sm font-medium"> E-mail </label>
        <input
          type="email"
          v-model="contact.email"
          name="email"
          id="email"
          class="input w-full"
        />
        <label for="phone" class="block text-sm font-medium"> Telefone </label>
        <input
          type="tel"
          v-model="contact.phone"
          name="phone"
          id="phone"
          class="input"
        />
      </form>
    </template>
    <template #actions>
      <FlatButton @click="handleClose">Cancelar</FlatButton>
      <PrimaryButton @click="handleAdd" :disabled="shouldDisableSubmit"
        >Salvar</PrimaryButton
      >
    </template>
  </DefaultModal>
</template>

<style scoped>
.input {
  @apply block h-8 p-2 shadow-sm sm:text-sm border-very-light-grey border rounded-[4px] focus:ring-light-red focus:border-light-red;
}

.input + label {
  @apply mt-2;
}
</style>
