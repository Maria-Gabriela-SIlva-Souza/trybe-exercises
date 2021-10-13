import React from "react";

class Termos extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return (  
      <label htmlFor="terms">
        <input
          id="terms"
          type="checkbox"
          name="terms"
          onChange={ handleChange }
          value={ value }
        />
        Concordo com termos e acordos
      </label>
    )
  }
}

export default Termos;