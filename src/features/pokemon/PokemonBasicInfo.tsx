
/** components */
import { Typography } from "antd";
const { Title, Paragraph, Text } = Typography

/** types */
import type { PokemonInformation } from "@/types/pokemon";

export default function PokemonBasicInfo(props: Pick<PokemonInformation, 'name' | "height" | "weight">) {
    const { height, name, weight } = props;

    return (
        <Paragraph>
            <Title level={4} className="text-start">
                Basic Information
            </Title>
            <div className="grid grid-cols-2 gap-y-2 text-start border border-gray-200 px-2 py-4 rounded-md">
                <Text strong>
                    Name: {name.toUpperCase()}
                </Text>
                <Text strong>
                    Height: {height}
                </Text>
                <Text strong>
                    Weight: {weight}
                </Text>
                <Text strong>
                    Name: {name}
                </Text>
            </div>
        </Paragraph>
    )
}
