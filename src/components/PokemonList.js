import PokeCard from "./PokeCard";
import "../styles/PokeList.css"

function PokemonList({pokemon}) {
    return (
        <div className="content">
            <div className="poke-list">
                {pokemon.map((p, i) => (
                    <PokeCard key={i} pokemon={p}/>
                ))}
            </div>
        </div> 
     );
}

export default PokemonList;