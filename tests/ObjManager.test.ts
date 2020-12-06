import { makeWith } from "src";

describe("Normal system", () => {
  it("map", () => {
    const obj = { abc: "abc", def: "def", ghi: "ghi" };
    const testValue = 123;
    const result = makeWith(obj)
      .map((_) => testValue)
      .getObj();
    Object.entries(result).forEach(([key, value]) => {
      expect(obj).toHaveProperty(key);
      expect(value).toEqual(testValue);
    });
  });
});
