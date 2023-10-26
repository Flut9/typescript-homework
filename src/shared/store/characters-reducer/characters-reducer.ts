import { CharacterResponse } from "../../types/Character"
import { CharactersStore } from "../store/characters-store"

type CharactersActionType = "SET_CHARACTERS"

type CharactersAction<Type extends CharactersActionType, Payload> = {
  type: Type,
  payload: Payload
}

type SetCharactersAction = CharactersAction<"SET_CHARACTERS", {
  characters: CharacterResponse[]
}>

export type ComposedCharactersAction = SetCharactersAction

export const charactersReducer = (state: CharactersStore, action: ComposedCharactersAction) => {
  switch (action.type) {
    case "SET_CHARACTERS":
      const { characters } = action.payload

      return characters.reduce((acc: CharactersStore, character: CharacterResponse): CharactersStore => {
        acc[character.id] = character

        return acc
      }, {})
    default:
      return state
  }
}
