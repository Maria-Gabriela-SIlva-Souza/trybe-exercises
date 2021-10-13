import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div>
        {pokemons.map((pok) => <Pokemon key={pok.id} pokemon={pok} />)}
      </div>
    )
  }
}

export default Pokedex;