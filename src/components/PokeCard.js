import axios from "axios";
import "../styles/PokeCard.css";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/poke-load.json";
import "@mantine/core/styles.css";
import { Card, Image, Text, Group } from "@mantine/core";
import TypeBadge from "./TypeBadge.js";

function PokeCard({ pokemon }) {
	const [currentPokemon, setCurrentPokemon] = useState(pokemon.url);
	const [sprite, setSprite] = useState("");
	const [type1, setType1] = useState("");
	const [type2, setType2] = useState("");
	const [id, setID] = useState(0);
	const [loading, setLoading] = useState(true);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	useEffect(() => {
		setLoading(true);
		const CancelToken = axios.CancelToken;
		let call1 = CancelToken.source();

		axios
			.get(currentPokemon, {
				cancelToken: call1.token,
			})
			.then((res) => {
				setSprite(
					res.data.sprites.other["official-artwork"].front_default
				);
				setID(res.data.id);
				setType1(res.data.types[0].type.name);
                setLoading(false);
				setType2(res.data.types[1].type.name);
			})
			.catch(function (thrown) {
				if (axios.isCancel(thrown))
					console.log("First request canceled", thrown.message);
				else console.error();
			});
	}, [currentPokemon]);

	return (
		<Card
            key="key"
			shadow="sm"
			padding="lg"
			radius="md"
			withBorder
			className="poke-card">
			{loading ? (
				<Lottie options={defaultOptions} height={160} width={160} />
			) : (
				<>
					<Card.Section>
						{loading ? (
							<Lottie
								options={defaultOptions}
								height={160}
								width={160}
							/>
						) : (
							<Image
								src={sprite}
								height={160}
								alt={pokemon.name}
							/>
						)}
					</Card.Section>
					<Group mt="xs" mb="xs" justify="space-between">
                        <Text fw={500}>{pokemon.name}</Text>
						<Text size="sm" c="dimmed">
							#{id}
						</Text>
					</Group>
					<Group mt="xs" mb="xs">
						<TypeBadge type={type1} />
						{type2 && <TypeBadge type={type2} />}
					</Group>
					{/* <Button color="blue" fullWidth mt="md" radius="md">
				        Book classic tour now
			        </Button> */}
				</>
			)}
		</Card>
	);
}

export default PokeCard;
