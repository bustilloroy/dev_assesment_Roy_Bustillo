
/** components */
import { Typography, Table, type TableProps } from "antd";
const { Title, Paragraph, Link } = Typography

/** types */
import type { PokemonTypes } from "@/types/pokemon";

interface PokemonTypesProps {
    types?: PokemonTypes[] | undefined
}

export default function PokemonTypes(props: PokemonTypesProps) {
    const { types } = props;

    return (
        <Paragraph>
            <Title level={4} className="text-start">
                Type/s
            </Title>

            <Table
                size="small"
                bordered
                columns={columns}
                dataSource={types}
                rowKey={row => row.type.url}
                pagination={false}
                virtual
                scroll={{ y: 150 }}
            />
        </Paragraph>
    )
}

const columns: TableProps<PokemonTypes>['columns'] = [
    {
        title: 'Ability',
        dataIndex: 'ability.name',
        render: (_, row) => row.type.name
    },
    {
        title: 'Action',
        render: (_, row) => <Link href={row.type.url} target="_blank">Learn More</Link>
    }
]