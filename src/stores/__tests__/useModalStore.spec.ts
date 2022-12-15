import { createPinia, setActivePinia } from "pinia";
import { beforeAll, describe, expect, it } from "vitest";
import { useModalStore } from "../useModalStore";

describe("UseModalStore", () => {
  beforeAll(() => {
    setActivePinia(createPinia());
  });
  it("should update the modal state", () => {
    const { setModalStatus, getModalStatus } = useModalStore();

    setModalStatus("formModal", true);
    expect(getModalStatus("formModal")).toBe(true);
    setModalStatus("formModal", false);
    expect(getModalStatus("formModal")).toBe(false);
  });
});
