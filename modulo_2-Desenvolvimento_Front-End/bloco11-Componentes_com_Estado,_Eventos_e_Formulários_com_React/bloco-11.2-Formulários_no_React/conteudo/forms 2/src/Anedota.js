import React from "react";

class Anedota extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return (  
      <label htmlFor="anecdote">
        Anedota:
        <textarea
          id="anecdote"
          name="anecdote"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    )
  }
}

export default Anedota;