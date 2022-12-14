import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import PrimaryButton from "../PrimaryButton.vue";

describe("PrimaryButton", () => {
  describe("when rendering the default version", () => {
    it("should match the snapshot", () => {
      const wrapper = mount(PrimaryButton);

      expect(wrapper.html()).toMatchSnapshot();
    });

    it("should show the default text", () => {
      const wrapper = mount(PrimaryButton);

      expect(wrapper.text()).toBe("Salvar");
    });
  });
  describe("when passing a custom text in the slot", () => {
    it("should show the custom text", () => {
      const wrapper = mount(PrimaryButton, {
        slots: {
          default: "Custom text",
        },
      });

      expect(wrapper.text()).toBe("Custom text");
    });
  });
});
