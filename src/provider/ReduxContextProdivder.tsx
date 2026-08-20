
/** components */
import { Provider } from 'react-redux';

import { pokemonStore } from '@/redux/store/pokemon.store';

export default function MyPokemonStore({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={pokemonStore}>
            {children}
        </Provider>
    )
}