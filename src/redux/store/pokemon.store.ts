import { configureStore } from '@reduxjs/toolkit';
import pokemonSlice from '../slice/pokemon.slice'

export const pokemonStore = configureStore({
    reducer: {
        myPokemon: pokemonSlice,
    }
});

export type PokemonStoreState = ReturnType<typeof pokemonStore.getState>;
export type PokemonDispatch = typeof pokemonStore.dispatch;