import { createPinia, setActivePinia } from "pinia";
import { describe, expect, beforeEach, it } from "vitest";
import { useFilterStore } from "../useFilterStore";

describe("Filter store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("when no filter is set", () => {
    it("should return an empty string", () => {
      const filterStore = useFilterStore();

      expect(filterStore.getFilter()).toBe("");
    });

    it("should set the filter", () => {
      const filterStore = useFilterStore();

      expect(filterStore.getFilter()).toBe("");

      filterStore.setFilter("test");
      expect(filterStore.getFilter()).toBe("test");
    });
  });

  describe("when the filter is not empty", () => {
    it("should return the filter", () => {
      const filterStore = useFilterStore();

      filterStore.setFilter("test");
      expect(filterStore.getFilter()).toBe("test");
    });

    it("should reset the filter", () => {
      const filterStore = useFilterStore();

      filterStore.setFilter("test");
      expect(filterStore.getFilter()).toBe("test");

      filterStore.resetFilter();
      expect(filterStore.getFilter()).toBe("");
    });

    it("should check if the filter is set", () => {
      const filter = useFilterStore();

      expect(filter.hasFilter()).toBe(false);

      filter.setFilter("test");
      expect(filter.hasFilter()).toBe(true);
    });
  });
});
