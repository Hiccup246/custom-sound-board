import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

Deno.test("text test", () => {
    const text = "hello"
    assertEquals(text, "hello");
});