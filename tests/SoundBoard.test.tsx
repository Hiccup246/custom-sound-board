import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { afterEach, beforeEach, describe, it } from "https://deno.land/std@0.168.0/testing/bdd.ts";

   

    it("returns an empty array when a directory with no nested directories is given", () => {    
        assertEquals([], []);
    });