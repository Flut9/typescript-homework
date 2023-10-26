import { makeRequest } from './make-request'
import { paths } from './consts'
import { CharactersResponse } from '../types'

export const getCharacters = async (): Promise<CharactersResponse> => {
  return await makeRequest<CharactersResponse>(paths.characters)
}
