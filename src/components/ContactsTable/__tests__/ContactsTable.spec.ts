import { describe, it, beforeAll, expect, vi } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import ContactsTable from "../ContactsTable.vue";
import type { Contact } from "@/types/contact";

describe("Contacts Table", () => {
  let wrapper: VueWrapper<any>;

  const contact: Contact = {
    name: "John Doe",
    email: "john@doe.com",
    phone: "1234567890",
  };

  beforeAll(() => {
    wrapper = mount(ContactsTable, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              contact: { contacts: [contact], getAllContacts: () => [contact] }, // start the counter at 20 instead of 0
            },
          }),
        ],
      },
    });
  });

  it("should match the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render the contact data", () => {
    expect(wrapper.text()).toContain(contact.name);
    expect(wrapper.find("tbody").text()).toContain(contact.email);
    expect(wrapper.find("tbody").text()).toContain(contact.phone);
  });
});
