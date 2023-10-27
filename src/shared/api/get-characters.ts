import { makeRequest } from './make-request'
import { paths } from './consts'
import { CharactersResponse } from '../types'

export const getCharacters = (): Promise<CharactersResponse> => {
  return makeRequest<CharactersResponse>(paths.characters)
}
