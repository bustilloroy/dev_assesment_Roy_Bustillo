
/** hooks */
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

/** queries */
import { getPokemonByName } from "@/api/query/get-pokemon";

/** components */
import {
    Carousel,
    Image,
    Modal,
    Button,
} from "antd";
import PokemonAbilities from "./PokemonAbilities";
import PokemonBasicInfo from "./PokemonBasicInfo";
import PokemonMoves from "./PokemonMoves";
import PokemonTypes from "./PokemonTypes";

interface PokemonCardProps {
    name: string;
}

const carouselStyle: React.CSSProperties = {
    margin: 0,
    padding: "20px",
    height: "12rem",
    width: "100%",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "gray",
};

export default function PokemonCard(props: PokemonCardProps) {
    const { name } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data, isLoading, isSuccess } = useQuery({
        ...getPokemonByName(name),
        enabled: isModalOpen // trigger request when modal is open
    });
    const {
        abilities,
        height,
        sprites,
        weight,
        moves,
        types
    } = data?.data ?? {}

    return (
        <>
            <Button
                size="small"
                color="blue"
                variant="link"
                loading={isLoading}
                onClick={() => setIsModalOpen(true)}
            >
                Learn More
            </Button>

            <Modal
                title={name.toUpperCase()}
                centered={true}
                width={80 * 12.8}
                open={isModalOpen && isSuccess}
                onCancel={() => setIsModalOpen(false)}
                footer={(
                    <Button
                        size="small"
                        onClick={() => setIsModalOpen(false)}
                    >
                        Close
                    </Button>
                )}
            >
                <hr className="mb-3 text-gray-300" />

                <div className="mb-2">
                    <Carousel
                        arrows
                        className="p-10 rounded-md flex flex-start"
                        style={carouselStyle}
                        infinite={false}
                    >
                        {Object.entries(sprites ?? {}).map(item => (item[1] &&
                            <Image
                                loading="lazy"
                                className="rounded-md object-cover"
                                src={item[1]}
                                alt="broken image / link"
                            />
                        ))}
                    </Carousel>
                </div>


                <div className="grid grid-cols-2 gap-3">
                    <PokemonBasicInfo
                        name={name}
                        height={height ?? 0}
                        weight={weight ?? 0}
                    />
                    <PokemonTypes types={types} />
                    <PokemonAbilities abilities={abilities} />
                    <PokemonMoves moves={moves} />
                </div>

                <hr className="mb-3 text-gray-300" />
            </Modal>
        </>
    )
}