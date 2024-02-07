import { describe, expect, test } from "vitest";
import createVDOM from "../src/createVDOM";

describe("VDOM", () => {
  test("create VDOM", () => {
    const vdom = createVDOM("h1", { class: "container" }, "this is h1");
    const expectVdom = {
      type: "h1",
      props: { class: "container" },
      children: ["this is h1"],
    };

    expect(vdom).toStrictEqual(expectVdom);
  });
});
