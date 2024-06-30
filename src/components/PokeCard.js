import axios from 'axios';
import '../styles/PokeCard.css'
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/poke-load.json';

function PokeCard({pokemon}) {
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
            setID(res.data.id);
            setLoading(false);
            setType1(res.data.types[0].type.name);
            setType2(res.data.types[1].type.name);
        }).catch(function(thrown){
            if (axios.isCancel(thrown))
                console.log("First request canceled", thrown.message);
            else
                console.error();
        })
    }, [currentPokemon])

    return ( 
        <div key={pokemon.name} className="poke-card">
            <div className="poke-pic">
                {loading ? <Lottie options={defaultOptions} height={30} width={30} /> : <img src={sprite} className="poke-sprite" alt={pokemon.name}/>}
            </div>
            <div className="poke-desc">
                <h4>{id}</h4>
                <h3>{pokemon.name}</h3>
                <div className='type-container'>
                    <div className={"poke-type " + type1}>{type1}</div>
                    <div className={"poke-type " + type2}>{type2}</div>
                </div>
            </div>
        </div>
     );
}

export default PokeCard;