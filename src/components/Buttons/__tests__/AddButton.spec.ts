import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import AddButtonVue from "../AddButton.vue";

describe("AddButton", () => {
  describe("when rendering the default version", () => {
    it("should match the snapshot", () => {
      const wrapper = mount(AddButtonVue);
      expect(wrapper.html()).toMatchSnapshot();
    });

    it("should not contain the add-button-small class", () => {
      const wrapper = mount(AddButtonVue);
      expect(wrapper.classes()).not.toContain("add-button-small");
    });
  });

  describe("when rendering the small version", () => {
    it("should match the snapshot", () => {
      const wrapper = mount(AddButtonVue, {
        props: {
          small: true,
        },
      });
      expect(wrapper.html()).toMatchSnapshot();
    });

    it("should contain the add-button-small class", () => {
      const wrapper = mount(AddButtonVue, {
        props: {
          small: true,
        },
      });
      expect(wrapper.classes()).toContain("add-button-small");
    });
  });
});
