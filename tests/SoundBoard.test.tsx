import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.168.0/testing/bdd.ts";
import SoundBoardButton from "@/islands/SoundBoardButton.tsx"
import { filterByDirectories, filterBySearchQuery } from "@/islands/SoundBoard.tsx"

const mockSoundButtons:preact.JSX.Element[] = [
    (<SoundBoardButton src="a/b/c" name="clipOne" key="a/b/c"/>),
    (<SoundBoardButton src="1/2/3" name="clipTwo" key="1/2/3"/>),
    (<SoundBoardButton src="a/mock/directory" name="clipThree" key="a/mock/directory"/>),
    (<SoundBoardButton src="my/mock/directory" name="clipFour" key="my/mock/directory"/>)
]

describe("filterByDirectories", () => {
    it("allows SoundBoardButtons to be filtered by a single directory path", () => {
        const filteredDirectories = filterByDirectories(mockSoundButtons, ["1"])

        assertEquals(filteredDirectories, [mockSoundButtons[1]])
    })

    it("allows SoundBoardButtons to be filtered by multiple directory paths", () => {
        const filteredDirectories = filterByDirectories(mockSoundButtons, ["a", "mock"])

        assertEquals(filteredDirectories, [mockSoundButtons[2]])
    })

    it("does not allow SoundBoardButtons to be filtered by nested directories", () => {
        const filteredDirectories = filterByDirectories(mockSoundButtons, ["mock", "directory"])

        assertEquals(filteredDirectories, [mockSoundButtons[2], mockSoundButtons[3]])
    })

    it("returns no results when the top level directory does not exist", () => {
        const filteredDirectories = filterByDirectories(mockSoundButtons, ["random", "directory"])

        assertEquals(filteredDirectories, [])
    })

    it("returns all SoundBoardButtons when no directories are given", () => {
        const filteredDirectories = filterByDirectories(mockSoundButtons, [])

        assertEquals(filteredDirectories, mockSoundButtons)
    })
})

describe("filterBySearchQuery", () => {
    it("allows SoundBoardButtons to be filtered by an exact match search query", () => {
        const filteredDirectories = filterBySearchQuery(mockSoundButtons, "clipOne")

        assertEquals(filteredDirectories, [mockSoundButtons[0]])
    })

    it("allows SoundBoardButtons to be filtered by a fuzzy match search query", () => {
        const filteredDirectories = filterBySearchQuery(mockSoundButtons, "clip")

        assertEquals(filteredDirectories, mockSoundButtons)
    })

    it("returns all SoundBoardButtons when no search query is given", () => {
        const filteredDirectories = filterBySearchQuery(mockSoundButtons, "")

        assertEquals(filteredDirectories, mockSoundButtons)
    })
})