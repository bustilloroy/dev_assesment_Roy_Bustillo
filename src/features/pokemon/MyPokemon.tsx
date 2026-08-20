
/** hooks */
import { useSelector } from 'react-redux';

/** components */
import { Table, type TableProps } from 'antd';
import PokemonCard from './PokemonCard';

/** types */
import type { PokemonStoreState } from '@/redux/store/pokemon.store';
import type { CapturedPokemonInfo } from '@/types/pokemon';

export default function MyPokemon() {
    const { myPokemon } = useSelector((state: PokemonStoreState) => state.myPokemon);

    return (
        <Table
            columns={columns}
            dataSource={myPokemon}
            bordered
            rowKey={row => row.name}
            pagination={{
                size: 'small',
                showSizeChanger: true
            }}
        />
    )
}

const columns: TableProps<CapturedPokemonInfo>['columns'] = [
    {
        title: 'Pokemon Name',
        dataIndex: 'name',
    },
    {
        title: 'Captured Date',
        dataIndex: 'captured_date',
        render: (_, row) => row.captured_date.toString()
    },
    {
        title: 'Action',
        render: (_, row) => <PokemonCard name={row.name} />
    }
]