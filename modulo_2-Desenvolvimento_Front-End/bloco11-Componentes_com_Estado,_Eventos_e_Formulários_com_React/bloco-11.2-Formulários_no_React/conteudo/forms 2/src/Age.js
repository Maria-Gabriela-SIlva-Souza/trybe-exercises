import React from "react";

class Age extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <label htmlFor="age">
        Idade:
        <select
          id="age"
          name="age"
          onChange={ handleChange }
          value={ value }
        >
          <option value="">Selecione</option>
          <option value="adult">Maior que 18</option>
          <option value="underage">Menor que 18</option>
        </select>
        { !value.length ? ' -selecione a idade- ' : ' -ok- '}
      </label>
    )
  }
}

export default Age;