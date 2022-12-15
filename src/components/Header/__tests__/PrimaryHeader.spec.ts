import UbookLogo from "@/components/icons/UbookLogo.vue";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import PrimaryHeader from "../PrimaryHeader.vue";
import { createPinia, setActivePinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";
import AddButton from "@/components/Buttons/AddButton.vue";

describe("Primary Header", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("when there is no contacts", () => {
    it("should match the snapshot", () => {
      const wrapper = mount(PrimaryHeader);

      expect(wrapper.html()).toMatchSnapshot();
    });

    it("should contain the Ubook logo", () => {
      const wrapper = mount(PrimaryHeader);

      const logo = wrapper.findComponent(UbookLogo);

      expect(logo.exists()).toBe(true);
    });

    it("shoul not contain the AddButton", () => {
      const wrapper = mount(PrimaryHeader);

      const addButton = wrapper.findComponent(AddButton);

      expect(addButton.exists()).toBe(false);
    });
  });

  describe("when there is contacts", () => {
    it("should match the snapshot", () => {
      const wrapper = mount(PrimaryHeader, {
        global: {
          plugins: [
            createTestingPinia({
              createSpy: vi.fn,
              initialState: {
                contact: { contacts: [{ name: "John Doe" }] },
              },
            }),
          ],
        },
      });

      expect(wrapper.html()).toMatchSnapshot();
    });

    it("should contain the AddButton", () => {
      const wrapper = mount(PrimaryHeader, {
        global: {
          plugins: [
            createTestingPinia({
              createSpy: vi.fn,
              initialState: {
                contact: { contacts: [{ name: "John Doe" }] },
              },
            }),
          ],
        },
      });

      const addButton = wrapper.findComponent(AddButton);

      expect(addButton.exists()).toBe(true);
    });
  });
});
