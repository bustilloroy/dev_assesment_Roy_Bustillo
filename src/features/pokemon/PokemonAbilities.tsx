
/** components */
import { Typography, Table, type TableProps } from "antd";
const { Title, Paragraph, Link } = Typography

/** types */
import type { PokemonAbilities } from "@/types/pokemon";

interface PokemonAbilitiesProps {
    abilities?: PokemonAbilities[] | undefined
}

export default function PokemonAbilities(props: PokemonAbilitiesProps) {
    const { abilities } = props;

    return (
        <Paragraph>
            <Title level={4} className="text-start">
                Abilities
            </Title>

            <Table
                size="small"
                bordered
                columns={columns}
                dataSource={abilities}
                rowKey={row => row.ability.url}
                pagination={false}
                virtual
                scroll={{ y: 200 }}
            />
        </Paragraph>
    )
}

const columns: TableProps<PokemonAbilities>['columns'] = [
    {
        title: 'Ability',
        dataIndex: 'ability.name',
        render: (_, row) => row.ability.name
    },
    {
        title: 'Action',
        render: (_, row) => <Link href={row.ability.url} target="_blank">Learn More</Link>
    }
]