import { QueryClient } from '@tanstack/react-query'
import { createRouter, createHashHistory } from '@tanstack/react-router'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'
import { routeTree } from './routeTree.gen'

const hashHistory = createHashHistory();
export function getRouter() {
    const queryClient = new QueryClient()

    const router = createRouter({
        routeTree,
        basepath: '/dev_assesment_Roy_Bustillo',
        context: { queryClient },
        history: hashHistory
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