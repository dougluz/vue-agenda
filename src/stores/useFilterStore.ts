import { defineStore } from "pinia";
import { ref } from "vue";

export const useFilterStore = defineStore("filter", () => {
  const filter = ref("");

  const getFilter = () => filter.value;

  const setFilter = (value: string) => {
    filter.value = value;
  };

  const resetFilter = () => {
    filter.value = "";
  };

  return { filter, getFilter, setFilter, resetFilter };
});
