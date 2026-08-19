import { createFileRoute } from '@tanstack/react-router'

/** hooks */
import { useSuspenseQuery } from '@tanstack/react-query';

/** queries */
import { getPokemonByName } from '@/api/query/get-pokemon'

/** components */
import PokemonCard from '@/features/pokemon/PokemonCard';

export const Route = createFileRoute('/pokemon/$name')({
    component: RouteComponent,
    loader: ({ context, params }) => context.queryClient.ensureQueryData(getPokemonByName(params.name))
})

function RouteComponent() {
    const { name } = Route.useParams();

    const { data } = useSuspenseQuery(getPokemonByName(name));
    return (
        <>
            {/* <PokemonCard {...data.data} /> */}
        </>
    )
}
