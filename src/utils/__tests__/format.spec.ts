import { expect, describe, it } from "vitest";
import { formatPhoneNumber } from "./format";

describe("utils tests", () => {
  it("should format the number correctly", () => {
    const number = "47991238722";
    const expected = "(47) 9 9123-8722";
    const formattedNumber = formatPhoneNumber(number);

    expect(formattedNumber).toEqual(expected);
  });
});
