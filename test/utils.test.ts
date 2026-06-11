import { describe, expect, it } from "vitest";
import { formatPrice } from "../src/lib/utils";

describe("formatPrice", () => {
  it("should format price correctly", () => {
    expect(formatPrice(250)).toBe("250.00 GTQ");
  });

  it("should format string price correctly", () => {
    expect(formatPrice("250")).toBe("250.00 GTQ");
  });

  it("should format large prices with thousands separators", () => {
    // es-GT uses comma as thousands separator
    expect(formatPrice(1250.5)).toBe("1,250.50 GTQ");
  });

  it("should return 0.00 GTQ for invalid prices", () => {
    expect(formatPrice("abc")).toBe("0.00 GTQ");
  });
});
