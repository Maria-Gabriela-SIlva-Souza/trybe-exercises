import React from 'react';
import Poke from './Poke';


class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return ( 
      <div className="pokedex">
        {pokemons.map(pokemons => <Poke key={pokemons.id} pokemon={pokemons} />)}
      </div>
    )
  }
}

export default Pokedex;