import { defineStore } from "pinia";
import { reactive } from "vue";

type ModalKinds = "formModal" | "deleteModal";

export const useModalStore = defineStore("useModalStore", () => {
  const modal = reactive({
    formModal: false,
    deleteModal: false,
  });

  const setModalStatus = (modalName: ModalKinds, status: boolean) => {
    modal[modalName] = status;
  };

  const getModalStatus = (modalName: ModalKinds) => modal[modalName];

  return { modal, setModalStatus, getModalStatus };
});
