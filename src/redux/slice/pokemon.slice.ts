import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/** types */
import type { CapturedPokemonInfo } from "@/types/pokemon";

interface CapturedPokemon {
    myPokemon: CapturedPokemonInfo[];
}

const STORAGE_KEY = "captured-pokemon";
function getCapturedPokemon(): CapturedPokemon {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);

        if (!stored) {
            return { myPokemon: [] };
        }

        const parsedCollection: CapturedPokemonInfo[] = JSON.parse(stored);
        const myPokemons: CapturedPokemon = { myPokemon: parsedCollection }

        return myPokemons
    } catch {
        return { myPokemon: [] };
    }
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: getCapturedPokemon,
    reducers: {
        capture: (state, action: PayloadAction<CapturedPokemonInfo>) => {
            const alreadyCaptured = state.myPokemon.some(item => item.name === action.payload.name);

            if (alreadyCaptured) return;

            state.myPokemon.push(action.payload);

            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.myPokemon));
        },
        release: (state, action: PayloadAction<{ name: string }>) => {
            state.myPokemon = state.myPokemon.filter(item => item.name !== action.payload.name);

            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.myPokemon));
        }
    }
});

export const { capture, release } = pokemonSlice.actions;
export default pokemonSlice.reducer;