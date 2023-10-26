import { charactersReducer } from '../characters-reducer'
import { ComposedCharactersAction } from '../characters-reducer/characters-reducer'
import { initialCharactersStore, CharactersStore } from './characters-store'

export type Store = {
  characters: CharactersStore
}

export type Action = ComposedCharactersAction

export const initialState: Store = {
  characters: initialCharactersStore,
}

export const mainReducer = ({ characters }: Store, action: Action): Store => ({
  characters: charactersReducer(characters, action),
})
