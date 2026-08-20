export interface PokemonApiResponse {
    count: number;
    next: string | null;
    preivous: string | null;
    results: Pokemon[]
}

export interface Pokemon {
    name: string;
    url: string
}

export interface CapturedPokemonInfo {
    name: string;
    captured_date: string;
}

export interface PokemonInformation {
    id: number;
    name: string;
    abilities: PokemonAbilities[];
    height: number;
    weight: number;
    is_default: boolean;
    sprites: PokemonSprites;
    moves: PokemonMoves[];
    types: PokemonTypes[]
}

export interface PokemonSprites {
    back_default: string | null;
    front_default: string | null;
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
}

export interface PokemonAbilities {
    ability: {
        name: string;
        url: string;
    },
    is_hidden: boolean;
    slot: number
}

export interface PokemonMoves {
    move: {
        name: string;
        url: string
    }
}

export interface PokemonTypes {
    slot: number;
    type: {
        name: string;
        url: string
    }
}