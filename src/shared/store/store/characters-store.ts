import { CharacterResponse } from "../../types/Character"

export type CharactersStore = Record<number, CharacterResponse>

export const initialCharactersStore: CharactersStore = {}
