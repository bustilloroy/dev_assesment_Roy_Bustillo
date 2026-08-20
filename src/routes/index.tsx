import { createFileRoute } from '@tanstack/react-router'

/** hooks */
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query'

/** queries */
import { getPokemon } from '../api/query/get-pokemon'

/** components */
import { Table, Tabs, type TableProps } from 'antd';
import PokemonCard from '@/features/pokemon/PokemonCard';
import MyPokemon from '@/features/pokemon/MyPokemon';
import MyPokemonStore from '@/provider/ReduxContextProdivder';

/** types */
import { type Pokemon } from '@/types/pokemon';

export const Route = createFileRoute('/')({
    component: Index,
    // loader: ({ context }) => context.queryClient.ensureQueryData(getPokemon())
})

type Pagination = Parameters<typeof getPokemon>[0];

function Index() {
    const [pagination, setPagination] = useState<Pagination>({
        limit: 10,
        offset: 1,
    });
    const { limit, offset } = pagination ?? {};

    const { data, isLoading } = useQuery(getPokemon({ ...pagination }));

    return (
        <div className="p-2">
            <h3 className='my-5'>Pokemon List</h3>

            <MyPokemonStore>
                <Tabs
                    type='card'
                    items={[
                        {
                            key: 'pokemon-list',
                            label: 'Pokemon List',
                            children: (
                                <Table
                                    loading={isLoading}
                                    columns={columns}
                                    dataSource={data?.data.results}
                                    bordered
                                    rowKey={row => row.url}
                                    pagination={{
                                        size: 'small',
                                        total: data?.data.count,
                                        current: offset,
                                        onChange: (page) => setPagination(prevState => ({ ...prevState, offset: page })),
                                        pageSize: limit,
                                        onShowSizeChange: (_, size) => setPagination(prevState => ({ ...prevState, limit: size })),
                                    }}
                                />
                            )
                        },
                        {
                            key: 'captured-pokemon',
                            label: 'My Pokemon',
                            children: <MyPokemon />
                        }
                    ]}
                />
            </MyPokemonStore>
        </div>
    )
}

const columns: TableProps<Pokemon>['columns'] = [
    {
        title: 'Pokemon Name',
        dataIndex: 'name',
    },
    {
        title: 'Action',
        render: (_, row) => (
            <PokemonCard name={row.name} />
            // <Link
            //     to={`/pokemon/$name`}
            //     params={{
            //         name: row.name
            //     }}
            // >
            //     Learn More
            // </Link>
        )
    }
]