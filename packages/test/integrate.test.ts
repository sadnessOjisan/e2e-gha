import { expect, test } from "vitest";

test("echo q=1", async () => {
  const res = await fetch(`${process.env.ORIGIN}?q=1`);
  const data = await res.json();
  expect(data).toEqual({ q: "1" });
});

test("echo q=2", async () => {
  const res = await fetch(`${process.env.ORIGIN}?q=2`);
  const data = await res.json();
  expect(data).toEqual({ q: "2" });
});
