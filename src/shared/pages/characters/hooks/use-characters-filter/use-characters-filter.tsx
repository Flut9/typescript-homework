import { useMemo } from 'react'

import { Character } from "../../../../types"

export const useCharactersFilter = (
  characters: Character[],
  filterText: string
): Character[] => {
  return useMemo(() => {
    if (!filterText) {
      return characters
    }

    return characters.filter(({ name }) =>
      name.toLowerCase().includes(filterText.toLowerCase()),
    )
  }, [characters, filterText])
}
