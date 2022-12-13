import AddButton from "@/components/Buttons/AddButton.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import EmptyList from "../EmptyList.vue";

describe("Empty list tests", () => {
  it("should match the snapshot", () => {
    const wrapper = mount(EmptyList);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render the correct text", () => {
    const wrapper = mount(EmptyList);
    expect(wrapper.text()).toContain("Nenhum contato foi criado ainda.");
  });

  it("should show the button", () => {
    const wrapper = mount(EmptyList);
    const button = wrapper.findComponent(AddButton);
    expect(button.exists()).toBe(true);
  });
});
