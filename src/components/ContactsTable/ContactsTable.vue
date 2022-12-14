<script setup lang="ts">
import { computed } from "vue";
import { useContactStore } from "@/stores/useContactStore";
import ContactAvatar from "../ContactAvatar/ContactAvatar.vue";
import IcEdit from "../icons/IcEdit.vue";
import IcDelete from "../icons/IcDelete.vue";

const contactsStore = useContactStore();

const contacts = computed(() => contactsStore.getAllContacts());
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
          v-for="contact in contacts"
          :key="contact.id"
        >
          <td class="pl-2 py-4 w-10">
            <ContactAvatar :contactName="contact?.name" />
          </td>
          <td class="py-4">{{ contact?.name }}</td>
          <td class="py-4">{{ contact?.email }}</td>
          <td class="py-4">{{ contact?.phone }}</td>
          <td class="flex items-center justify-end gap-6 pr-2 py-4">
            <button><IcEdit /></button>
            <button><IcDelete /></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
