import { createPinia, setActivePinia } from "pinia";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { randFullName, randEmail, randPhoneNumber } from "@ngneat/falso";
import { useContactStore } from "../useContactStore";
import type { Contact } from "@/types/contact";

describe("useContactStore", () => {
  const contact = {
    name: randFullName(),
    email: randEmail(),
    phone: randPhoneNumber(),
  };

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("should start with an empty contact store", () => {
    const contactStore = useContactStore();

    expect(contactStore.isEmpty()).toBe(true);
    expect(contactStore.getAllContacts()).toEqual([]);
  });

  it("should add a contact", () => {
    const contactStore = useContactStore();

    contactStore.addContact(contact);

    expect(contactStore.isEmpty()).toBe(false);
    expect(contactStore.getAllContacts()).toEqual([contact]);
  });

  it("should remove a contact", () => {
    const contactStore = useContactStore();

    contactStore.addContact(contact);
    contactStore.removeContact(contact.email!);

    expect(contactStore.isEmpty()).toBe(true);
    expect(contactStore.getAllContacts()).toEqual([]);
  });

  it("should be able to add multiple contacts", () => {
    const contactStore = useContactStore();

    const contact2: Contact = {
      name: randFullName(),
      email: randEmail(),
      phone: randPhoneNumber(),
    };

    contactStore.addContact(contact);
    contactStore.addContact(contact2);

    expect(contactStore.isEmpty()).toBe(false);
    expect(contactStore.getAllContacts()).toEqual([contact, contact2]);
  });
  describe("when selecting a contact", () => {
    it("should set the selected contact", () => {
      const contactStore = useContactStore();

      contactStore.addContact(contact);
      contactStore.setSelectedContactEmail(contact.email!);

      expect(contactStore.getSelectedContactEmail()).toBe(contact.email);
    });

    it("should clear the selected contact", () => {
      const contactStore = useContactStore();

      contactStore.addContact(contact);
      contactStore.setSelectedContactEmail(contact.email!);
      contactStore.clearSelectedContactEmail();

      expect(contactStore.getSelectedContactEmail()).toBe("");
    });
  });
});
