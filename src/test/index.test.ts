import { vi, describe, it, expect } from "vitest";

const mockExit = vi.spyOn(process, "exit").mockImplementation((number) => {
  throw new Error("process.exit: " + number);
});

describe("Action", () => {
  it("should exit 0", async () => {
    await expect(import("../index")).rejects.toThrow();
    expect(mockExit).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(0);
  });
});
