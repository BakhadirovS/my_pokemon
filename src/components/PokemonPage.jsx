import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AbilityList from './AbilityList';
import './PokemonPage.css';

const PokemonPage = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemonData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className='container'>
      {pokemonData ? (
        <div>
          <h2>{pokemonData.name}</h2>
          <div className='pokemon-info'>
            <img src={pokemonData.sprites.front_default} alt="Pokemon" />
            <div className='pokemon-chrs'>
              <div>
                <p>Weight: {pokemonData.weight} kg</p>
                <p>Height: {pokemonData.height} cm</p>
              </div>
              <div className='abilities'>
                <h3>Abilities:</h3>
                <AbilityList abilities={pokemonData.abilities} />
              </div>
            </div>
          </div>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonPage;

