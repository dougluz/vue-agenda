import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import type { Contact } from "@/types/contact";

export const useContactStore = defineStore("contact", () => {
  const contacts = useStorage<Contact[]>("contacts", []);

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

  return { contacts, getAllContacts, addContact, removeContact, isEmpty };
});
