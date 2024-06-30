import React, { useState, useEffect } from "react";
import PokemonList from "./components/PokemonList";

import axios from "axios";
import Pagination from "./components/Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const CancelToken = axios.CancelToken;
    let call1 = CancelToken.source();
    axios.get(currentPageUrl, {
      cancelToken: call1.token
    }).then(res => {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemon(res.data.results);
    }).catch(function(thrown){
      if (axios.isCancel(thrown)){
          console.log("First request canceled", thrown.message);
      }else{
          console.error();
      }
    })

  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if(loading) return "loading..."

  return (
    <div className="main-container">
      <PokemonList pokemon={pokemon}/>
      <Pagination gotoNextPage={nextPageUrl ? gotoNextPage : null} gotoPrevPage={prevPageUrl ? gotoPrevPage : null} />
    </div>
  );
}

export default App;