import React from 'react';
import './PokemonList.scss';

function PokemonList(props) {
    return (
        <div className="card">
            <div className="card-body">
                {
                    props.pokemons.map((pokemon, index) => {
                        return (<span key={index} className="badge badge-secondary mr-1">{pokemon.name}</span>)

                    })
                }
            </div>
        </div>
    );
}

export default PokemonList;