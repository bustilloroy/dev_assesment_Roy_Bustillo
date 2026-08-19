import { queryOptions } from "@tanstack/react-query";
import { interceptor } from "../interceptor";

/** types */
import { type AxiosResponse, AxiosError } from "axios";
import type { PokemonApiResponse, PokemonInformation } from "@/types/pokemon";

type QueryParams = {
    limit?: number;
    offset?: number;
}

export const getPokemon = (params: QueryParams = {}) => {
    const { limit, offset } = params;

    const queryParams: Partial<QueryParams> = {};

    if (limit) queryParams.limit = limit;
    if (offset) queryParams.offset = offset;

    return queryOptions<AxiosResponse<PokemonApiResponse>, AxiosError>({
        queryKey: ['pokemon', queryParams],
        queryFn: () => interceptor.get(`/pokemon`, { params: queryParams })
    })
}

export const getPokemonByName = (name: string) => {
    return queryOptions<AxiosResponse<PokemonInformation>, AxiosError>({
        queryKey: ['pokemon', { name }],
        queryFn: () => interceptor.get(`/pokemon/${name}`)
    })
}