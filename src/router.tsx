import { QueryClient } from '@tanstack/react-query'
import { createRouter } from '@tanstack/react-router'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'
import { routeTree } from './routeTree.gen'

export function getRouter() {
    const queryClient = new QueryClient()

    const router = createRouter({
        routeTree,
        basepath: '/pokemon-collection',
        context: { queryClient },
    })

    setupRouterSsrQueryIntegration({
        router,
        queryClient,
        hydrateOptions: {
            defaultOptions: {
                queries: {
                    gcTime: 5 * 60 * 1000,
                },
            },
        },
    })

    return router
}