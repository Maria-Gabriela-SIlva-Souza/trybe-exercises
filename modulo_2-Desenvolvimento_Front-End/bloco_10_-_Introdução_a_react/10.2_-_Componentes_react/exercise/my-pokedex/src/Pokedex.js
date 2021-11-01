import React from 'react';
import Poke from './Poke';
import pokemons from './data';

class Pokedex extends React.Component {
  render() {
    return ( 
      <div className="pokedex">
        {pokemons.map(pokemons => <Poke key={pokemons.id} pokemon={pokemons} />)}
      </div>
    )
  }
}

export default Pokedex;