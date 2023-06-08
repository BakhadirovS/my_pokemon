import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Poke.css";

const Poke = ({ url }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setPokemonData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div className="poke">
      {pokemonData && (
        <>
          <img className="poke-image" src={pokemonData.sprites.front_default} alt="Pokemon" />
          <div className="poke-footer">
            <span className="number">Pokedex Number: {pokemonData.id}</span>
            <span className="name">Pokemon Name: {pokemonData.name}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Poke;

