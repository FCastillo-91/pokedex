import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import Form from "./Form/Form";
import PokemonList from "./PokemonList/PokemonList";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Header/>
                <Form/>
                <PokemonList/>
            </div>
        </div>
    );
}

export default App;
