import { expect, test } from "vitest";
import { capitalize } from "./strings.js";

test("capitalizes 'word' to 'Word'", () => {
  expect(capitalize("word")).toBe("Word");
});
