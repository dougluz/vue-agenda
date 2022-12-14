import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import FlatButton from "../FlatButton.vue";

describe("FlatButton", () => {
  describe("when rendering the default version", () => {
    it("should match the snapshot", () => {
      const wrapper = mount(FlatButton);

      expect(wrapper.html()).toMatchSnapshot();
    });

    it("should show the default text", () => {
      const wrapper = mount(FlatButton);

      expect(wrapper.text()).toBe("Cancelar");
    });
  });
  describe("when passing a custom text in the slot", () => {
    it("should show the custom text", () => {
      const wrapper = mount(FlatButton, {
        slots: {
          default: "Custom text",
        },
      });

      expect(wrapper.text()).toBe("Custom text");
    });
  });
});
