
/** hooks */
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { capture, release } from "@/redux/slice/pokemon.slice";

/** components */
import { Button, message } from "antd";

/** types */
import type { CapturedPokemonInfo } from "@/types/pokemon";
import type { PokemonDispatch, PokemonStoreState } from "@/redux/store/pokemon.store";

export function CaptureButton(props: { pokemon: CapturedPokemonInfo }) {
    const { pokemon } = props;

    const [messageApi, contextHolder] = message.useMessage();

    const dispatch = useDispatch<PokemonDispatch>();
    const { myPokemon } = useSelector((state: PokemonStoreState) => state.myPokemon);
    const isCaptured = myPokemon.some((item) => item.name === pokemon.name)

    return isCaptured ? (
        <Button
            size="small"
            color="red"
            variant="solid"
            className="rounded-md bg-blue-500 px-4 py-2 text-white disabled:bg-gray-400"
            onClick={() => {
                messageApi.warning(`Pokemon: ${pokemon.name} is released!`, () => dispatch(release({ name: pokemon.name })))
            }}
        >
            {contextHolder}
            Release
        </Button>
    ) : (
        <Button
            size="small"
            color="green"
            variant="solid"
            disabled={isCaptured}
            onClick={() => {
                messageApi.success(`Pokemon: ${pokemon.name} is Captured!`, () => dispatch(capture(pokemon)))
            }}
            className="rounded-md bg-blue-500 px-4 py-2 text-white disabled:bg-gray-400"
        >
            {contextHolder}
            Capture this Pokémon
        </Button>
    );
}