import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.168.0/testing/bdd.ts";
import SoundBoardButton from "@/islands/SoundBoardButton.tsx";
import { filterByClipName, filterByClipSource } from "@/islands/SoundBoard.tsx";

const mockSoundButtons: preact.JSX.Element[] = [
  <SoundBoardButton src="a/b/c" name="clipOne" key="a/b/c" />,
  <SoundBoardButton src="1/2/3" name="clipTwo" key="1/2/3" />,
  <SoundBoardButton
    src="a/mock/directory"
    name="clipThree"
    key="a/mock/directory"
  />,
  <SoundBoardButton
    src="my/mock/directory"
    name="clipFour"
    key="my/mock/directory"
  />,
];

describe("filterByClipSource", () => {
  it("can filter SoundBoardButtons by a single directory path", () => {
    const filteredDirectories = filterByClipSource(mockSoundButtons, ["1"]);

    assertEquals(filteredDirectories, [mockSoundButtons[1]]);
  });

  it("can filter SoundBoardButtons using multiple directory paths by matching the first directory then the second", () => {
    const filteredDirectories = filterByClipSource(mockSoundButtons, [
      "a",
      "mock",
    ]);

    assertEquals(filteredDirectories, [mockSoundButtons[2]]);
  });

  it("can filter SoundBoardButtons using multiple nested directories", () => {
    const filteredDirectories = filterByClipSource(mockSoundButtons, [
      "mock",
      "directory",
    ]);

    assertEquals(filteredDirectories, [
      mockSoundButtons[2],
      mockSoundButtons[3],
    ]);
  });

  it("returns no results when the top level directory does not exist", () => {
    const filteredDirectories = filterByClipSource(mockSoundButtons, [
      "random",
      "directory",
    ]);

    assertEquals(filteredDirectories, []);
  });

  it("returns all SoundBoardButtons when no directories are given", () => {
    const filteredDirectories = filterByClipSource(mockSoundButtons, []);

    assertEquals(filteredDirectories, mockSoundButtons);
  });
});

describe("filterByClipName", () => {
  it("can filter SoundBoardButtons by an exact match search query", () => {
    const filteredDirectories = filterByClipName(
      mockSoundButtons,
      "clipOne",
    );

    assertEquals(filteredDirectories, [mockSoundButtons[0]]);
  });

  it("can filter SoundBoardButtons by a fuzzy match search query", () => {
    const filteredDirectories = filterByClipName(mockSoundButtons, "clip");

    assertEquals(filteredDirectories, mockSoundButtons);
  });

  it("returns all SoundBoardButtons when no search query is given", () => {
    const filteredDirectories = filterByClipName(mockSoundButtons, "");

    assertEquals(filteredDirectories, mockSoundButtons);
  });
});
