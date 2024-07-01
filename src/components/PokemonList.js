import PokeCard from "./PokeCard";
import "../styles/PokeList.css";
import { Flex } from "@mantine/core";

function PokemonList({ pokemon }) {
	return (
		<Flex
			wrap="wrap"
			align="center"
			justify="space-between"
			className="poke-list">
			{pokemon.map((p, i) => (
				<PokeCard key={i} pokemon={p} />
			))}
		</Flex>
	);
}

export default PokemonList;
