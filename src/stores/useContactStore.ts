import { ref } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import type { Contact } from "@/types/contact";

export const useContactStore = defineStore("contact", () => {
  const contacts = useStorage<Contact[]>("contacts", []);
  const selectedContactEmail = ref("");

  const getAllContacts = () => contacts.value;

  const addContact = (contact: Contact) => {
    contacts.value.push(contact);
  };

  const removeContact = (email: string) => {
    contacts.value = contacts.value.filter(
      (contact) => contact.email !== email
    );
  };

  const isEmpty = () => contacts.value.length === 0;

  const setSelectedContactEmail = (email: string) =>
    (selectedContactEmail.value = email);

  const clearSelectedContactEmail = () => (selectedContactEmail.value = "");

  const getSelectedContactEmail = () => selectedContactEmail.value;

  return {
    contacts,
    getAllContacts,
    addContact,
    removeContact,
    isEmpty,
    setSelectedContactEmail,
    clearSelectedContactEmail,
    getSelectedContactEmail,
  };
});
