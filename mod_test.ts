import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import { findNumber } from "./mod.ts";

Deno.test("findNumber works for simple array", () => {
  const A = [1, 3, 5];
  const cases = [
    [0, -1],
    [1, 0],
    [2, -2],
    [3, 1],
    [4, -3],
    [5, 2],
    [6, -4],
  ];
  cases.forEach(([n, i]) => {
    assertEquals(findNumber(A, n), i);
  });
});
