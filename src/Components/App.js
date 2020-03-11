import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import Form from "./Form/Form";
import PokemonList from "./PokemonList/PokemonList";
import axios from 'axios';

class App extends React.Component {

    state = {
        pokemons: []
    };

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon`)
            .then(res => {
                const pokemons = res.data.results;
                this.setState({pokemons:pokemons});
            })
    }

    render() {
        const {pokemons} = this.state;
        return (
            <div className="App">
                <div className="container">
                    <Header/>
                    <Form/>
                    <PokemonList pokemons={pokemons}/>
                </div>
            </div>
        );
    }
}

export default App;
