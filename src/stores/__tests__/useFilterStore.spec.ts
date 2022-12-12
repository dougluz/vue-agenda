import { createPinia, setActivePinia } from "pinia";
import { describe, expect, beforeEach, it } from "vitest";
import { useFilterStore } from "../useFilterStore";

describe("Filter store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should set the filter", () => {
    const filter = useFilterStore();

    expect(filter.getFilter()).toBe("");

    filter.setFilter("test");
    expect(filter.getFilter()).toBe("test");
  });

  it("should reset the filter", () => {
    const filter = useFilterStore();

    filter.setFilter("test");
    expect(filter.getFilter()).toBe("test");

    filter.resetFilter();
    expect(filter.getFilter()).toBe("");
  });
});
