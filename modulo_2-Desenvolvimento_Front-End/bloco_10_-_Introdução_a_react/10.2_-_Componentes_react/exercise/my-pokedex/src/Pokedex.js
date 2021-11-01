import React from 'react';
import Pokemon from './Pokemon';


class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return ( 
      <div className="pokedex">
        {pokemons.map(pokemons => <Pokemon key={pokemons.id} pokemon={pokemons} />)}
      </div>
    )
  }
}

export default Pokedex;