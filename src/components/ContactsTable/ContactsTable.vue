<script setup lang="ts">
import { useContactStore } from "@/stores/useContactStore";
import ContactAvatar from "../ContactAvatar/ContactAvatar.vue";
import IcEdit from "../icons/IcEdit.vue";
import IcDelete from "../icons/IcDelete.vue";
import { useModalStore } from "@/stores/useModalStore";

const contactsStore = useContactStore();
const modalStore = useModalStore();

const handleDelete = (email: string) => {
  contactsStore.setSelectedContactEmail(email);
  modalStore.setModalStatus("deleteModal", true);
};

// write a function to format a phone number in the format (xx) xxxxx-xxxx
const formatPhoneNumber = (phoneNumber: string) => {
  const phone = phoneNumber.replace(/\D/g, "");
  const phoneLength = phone.length;

  if (phoneLength < 11) {
    return phone.replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");
  }

  return phone.replace(/(\d{2})(\d{1})(\d{4,5})(\d{4})/, "($1) $2 $3-$4");
};
</script>

<template>
  <div class="p-4 w-full">
    <table class="w-full">
      <thead
        class="w-full bg-white p-4 h-10 text-blue-grey border border-light-blue-grey text-left"
      >
        <tr>
          <th class="w-4"></th>
          <th>Contato</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th class="w-4"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="h-10 bg-white px-2 py-4 hover:bg-very-light-pink"
          v-for="contact in contactsStore.contacts"
          :key="contact.email"
        >
          <td class="pl-2 py-4 w-10">
            <ContactAvatar :contactName="contact?.name" />
          </td>
          <td class="py-4">{{ contact?.name }}</td>
          <td class="py-4">{{ contact?.email }}</td>
          <td class="py-4">{{ formatPhoneNumber(contact?.phone) }}</td>
          <td class="flex items-center justify-end gap-6 pr-2 py-4">
            <button><IcEdit /></button>
            <button @click="handleDelete(contact.email!)"><IcDelete /></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
