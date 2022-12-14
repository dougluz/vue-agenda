import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ContactAvatar from "../ContactAvatar.vue";

describe("ContactAvatar", () => {
  describe("when receiving a contact with a name", () => {
    it("should match the snapshot", () => {
      const wrapper = mount(ContactAvatar, {
        props: {
          contactName: "John Doe",
        },
      });
      expect(wrapper.html()).toMatchSnapshot();
    });
    it("should show the first letter of the name", () => {
      const wrapper = mount(ContactAvatar, {
        props: {
          contactName: "John Doe",
        },
      });
      expect(wrapper.text()).toBe("J");
    });
  });
  describe("when receiving a contact without a name", () => {
    it("should match the snapshot", () => {
      const wrapper = mount(ContactAvatar);
      expect(wrapper.html()).toMatchSnapshot();
    });

    it("should show the ? as replacement to the first letter", () => {
      const wrapper = mount(ContactAvatar);
      expect(wrapper.text()).toBe("?");
    });
  });
});
