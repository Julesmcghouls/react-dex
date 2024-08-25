import React from 'react';
import { Link } from 'react-router-dom';
import PokemonCard from './PokemonCard';

function PokemonList({ pokemon }) {
    return (
        <div>
            {pokemon.map((poke, index) => (
                <div key={index} className='col-md-4 mb-4'>
                    <Link to={`/pokemon/${poke.name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <PokemonCard pokemon={poke} url={poke.url} />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default PokemonList;