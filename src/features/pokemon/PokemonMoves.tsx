
/** components */
import { Typography, Table, type TableProps } from "antd";
const { Title, Paragraph, Link } = Typography

/** types */
import type { PokemonMoves } from "@/types/pokemon";

interface PokemonMovesProps {
    moves?: PokemonMoves[] | undefined
}

export default function PokemonMoves(props: PokemonMovesProps) {
    const { moves } = props;

    return (
        <Paragraph>
            <Title level={4} className="text-start">
                Movement/s
            </Title>

            <Table
                size="small"
                bordered
                columns={columns}
                dataSource={moves}
                rowKey={row => row.move.url}
                pagination={false}
                virtual // render on what on screen only
                scroll={{ y: 150 }}
            />
        </Paragraph>
    )
}

const columns: TableProps<PokemonMoves>['columns'] = [
    {
        title: 'Ability',
        dataIndex: 'ability.name',
        render: (_, row) => row.move.name
    },
    {
        title: 'Action',
        render: (_, row) => <Link href={row.move.url} target="_blank">Learn More</Link>
    }
]