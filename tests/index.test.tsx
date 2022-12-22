import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import {
  afterEach,
  beforeEach,
  describe,
  it,
} from "https://deno.land/std@0.168.0/testing/bdd.ts";
import { soundClipDirectories, soundClipPaths } from "@/routes/index.tsx";

describe("soundClipDirectories", () => {
  beforeEach(async () => {
    await Deno.mkdir("dir1");
  });

  afterEach(async () => {
    await Deno.remove("dir1", { recursive: true });
  });

  it("returns an empty array when the directory is empty", async () => {
    const directories: string[] = await soundClipDirectories("./dir1");

    assertEquals(directories, []);
  });

  it("returns the names of all top level directories when the directory has multiple", async () => {
    await Deno.mkdir("dir1/dir2");
    await Deno.mkdir("dir1/dir3");

    const directories: string[] = await soundClipDirectories("./dir1");

    assertEquals(directories, ["dir2", "dir3"]);
  });

  it("does not return the names of non-directories when the directory has one", async () => {
    await Deno.writeTextFile("./dir1/example1.mp3", "");
    await Deno.mkdir("dir1/dir2");

    const directories: string[] = await soundClipDirectories("./dir1");

    assertEquals(directories, ["dir2"]);
  });

  it("returns the names of all nested directories when the directory has multiple", async () => {
    await Deno.mkdir("dir1/dir2");
    await Deno.mkdir("dir1/dir2/dir3");
    await Deno.mkdir("dir1/dir2/dir3/dir4");
    await Deno.mkdir("dir1/dir2/dir3/dir4/dir5");

    const directories: string[] = await soundClipDirectories("./dir1");

    assertEquals(directories, ["dir2", "dir3", "dir4", "dir5"]);
  });
});

describe("soundClipPaths", () => {
  beforeEach(async () => {
    await Deno.mkdir("dir1");
  });

  afterEach(async () => {
    await Deno.remove("dir1", { recursive: true });
  });

  it("returns an empty array when an empty directory is given", async () => {
    const soundClips: SoundClip[] = await soundClipPaths("./dir1");

    assertEquals(soundClips, []);
  });

  it("returns the name and src of all top level mp3 files when the directory contains multiple", async () => {
    await Deno.writeTextFile("dir1/exampleOne.mp3", "");
    await Deno.writeTextFile("dir1/exampleTwo.mp3", "");

    const soundClips: SoundClip[] = await soundClipPaths("./dir1");

    assertEquals(soundClips, [{ src: "./exampleOne.mp3", name: "exampleOne" }, {
      src: "./exampleTwo.mp3",
      name: "exampleTwo",
    }]);
  });

  it("does not return non-mp3 files when the directory has one", async () => {
    await Deno.writeTextFile("dir1/exampleOne.txt", "");

    const soundClips: SoundClip[] = await soundClipPaths("./dir1");

    assertEquals(soundClips, []);
  });

  it("does not return the name of directories when the directory has one", async () => {
    await Deno.writeTextFile("dir1/exampleOne.mp3", "");
    await Deno.mkdir("dir1/dir2");

    const soundClips: SoundClip[] = await soundClipPaths("./dir1");

    assertEquals(soundClips, [{ src: "./exampleOne.mp3", name: "exampleOne" }]);
  });

  it("returns the names and src of all nested mp3 files when the directory has multiple", async () => {
    await Deno.mkdir("dir1/dir2");
    await Deno.writeTextFile("dir1/dir2/exampleOne.mp3", "");
    await Deno.mkdir("dir1/dir2/dir3");
    await Deno.writeTextFile("dir1/dir2/dir3/exampleTwo.mp3", "");
    await Deno.mkdir("dir1/dir2/dir3/dir4");
    await Deno.writeTextFile("dir1/dir2/dir3/dir4/exampleThree.mp3", "");
    await Deno.mkdir("dir1/dir2/dir3/dir4/dir5");

    const soundClips: SoundClip[] = await soundClipPaths("./dir1");

    assertEquals(soundClips, [
      { src: "./dir2/dir3/dir4/exampleThree.mp3", name: "exampleThree" },
      { src: "./dir2/dir3/exampleTwo.mp3", name: "exampleTwo" },
      { src: "./dir2/exampleOne.mp3", name: "exampleOne" },
    ]);
  });
});
