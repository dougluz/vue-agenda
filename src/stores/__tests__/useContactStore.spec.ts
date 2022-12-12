import { createPinia, setActivePinia } from "pinia";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  randFullName,
  randEmail,
  randUuid,
  randPhoneNumber,
} from "@ngneat/falso";
import { useContactStore } from "../useContactStore";
import type { Contact } from "@/types/contact";

describe("useContactStore", () => {
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

    const contact: Contact = {
      id: randUuid(),
      name: randFullName(),
      email: randEmail(),
      phone: randPhoneNumber(),
    };

    contactStore.addContact(contact);

    expect(contactStore.isEmpty()).toBe(false);
    expect(contactStore.getAllContacts()).toEqual([contact]);
  });

  it("should remove a contact", () => {
    const contactStore = useContactStore();

    const contact: Contact = {
      id: randUuid(),
      name: randFullName(),
      email: randEmail(),
      phone: randPhoneNumber(),
    };

    contactStore.addContact(contact);
    contactStore.removeContact(contact.id);

    expect(contactStore.isEmpty()).toBe(true);
    expect(contactStore.getAllContacts()).toEqual([]);
  });

  it("should be able to add multiple contacts", () => {
    const contactStore = useContactStore();

    const contact1: Contact = {
      id: randUuid(),
      name: randFullName(),
      email: randEmail(),
      phone: randPhoneNumber(),
    };

    const contact2: Contact = {
      id: randUuid(),
      name: randFullName(),
      email: randEmail(),
      phone: randPhoneNumber(),
    };

    contactStore.addContact(contact1);
    contactStore.addContact(contact2);

    expect(contactStore.isEmpty()).toBe(false);
    expect(contactStore.getAllContacts()).toEqual([contact1, contact2]);
  });
});
