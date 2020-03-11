import React from 'react';
import './PokemonList.scss';

function PokemonList() {
    return (
        <div className="card">
            <div className="card-body">
                <span className="badge badge-secondary mr-1">Pikachu</span>
                <span className="badge badge-secondary mr-1">Hufflepuff</span>
                <span className="badge badge-secondary mr-1">Butterfree</span>
                <span className="badge badge-secondary mr-1">Blastoid</span>
            </div>
        </div>
    );
}

export default PokemonList;