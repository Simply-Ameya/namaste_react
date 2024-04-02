import { sum } from "../test/sum";

test("testing sum", () => {
  const res = sum(3, 4);

  expect(res).toBe(7);
});
