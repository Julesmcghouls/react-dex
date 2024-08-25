import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './components/PokemonList';

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      setPokemonData(response.data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Pokédex</h1>
      <PokemonList pokemon={pokemonData} />
    </div>
  );
}

export default App;
