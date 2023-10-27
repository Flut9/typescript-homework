export type CharactersResponse = {
    info: CharactersInfoResponse,
    results: CharacterResponse[]
}

export type CharactersInfoResponse = {
    count: number,
    pages: number,
    next?: string,
    prev?: string
}

export type CharacterResponse = {
    id: number,
    name: string,
    status: CharacterStatusResponse,
    species: string,
    type: string,
    gender: CharacterGenderResponse,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: string
}

export type CharacterStatusResponse = "Alive" | "Dead" | "unknown"

export type CharacterGenderResponse = "Female" | "Male" | "Genderless" | "unknown"