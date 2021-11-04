import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return ( 
      <div className="pokedex">
        {pokemons.map(pokemons => <Pokemon key={pokemons.id} pokemon={pokemons} />)}
      </div>
    )
  }
}

export default Pokedex;