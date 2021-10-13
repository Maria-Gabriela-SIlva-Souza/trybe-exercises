import React from "react";

class Name extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <label htmlFor="name">
      Nome:
      <input
        id="name"
        name="name"
        type="text"
        onChange={ handleChange }
        value={ value }
      />
      { !value.length ? ' -nome inválido- ' : ' -ok- '}
    </label>
    )
  }
}

export default Name;