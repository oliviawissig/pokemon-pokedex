import { Badge } from "@mantine/core";

function TypeBadge({type}) {
    const type_dict = {
        water: "lightblue",
        fire: "indianred",
        grass: "lightgreen",
        bug: "darkseagreen",
        normal: "moccasin",
        poison: "plum",
        electric: "gold",
        ground: "burlywood",
        fairy: "lightpink",
        fighting: "sandybrown",
        psychic: "mediumpurple",
        rock: "silver",
        ghost: "lavender"
    }

	return (
        <Badge bg={type_dict[type]}>{type}</Badge>
	);
}

export default TypeBadge;
