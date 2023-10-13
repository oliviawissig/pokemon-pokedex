import axios from 'axios';
import '../styles/PokeCard.css'
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/poke-load.json';

function PokeCard({pokemon}) {
    const [currentPokemon, setCurrentPokemon] = useState(pokemon.url);
    const [sprite, setSprite] = useState("");
    const [type, setType] = useState("");
    const [loading, setLoading] = useState(true);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    useEffect(() => {
        setLoading(true);
        const CancelToken = axios.CancelToken;
        let call1 = CancelToken.source();

        axios.get(currentPokemon, {
            cancelToken : call1.token
        }).then(res => {
            setSprite(res.data.sprites.other["official-artwork"].front_default);
            setLoading(false);
            setType(res.data.types[0].type.name);
        }).catch(function(thrown){
            if (axios.isCancel(thrown))
                console.log("First request canceled", thrown.message);
            else
                console.error();
        })
    }, [currentPokemon])

    return ( 
        <div key={pokemon.name} className={"poke-card " + type}>
            <h3>{pokemon.name}</h3>
            <p>{type}</p>
            <div className="poke-pic">
                {loading ? <Lottie options={defaultOptions} height={30} width={30} /> : <img src={sprite} className="poke-sprite" alt={pokemon.name}/>}
            </div>
            <p></p>
        </div>
     );
}

export default PokeCard;