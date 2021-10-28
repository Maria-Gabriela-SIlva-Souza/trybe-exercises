import React from "react";

class Email extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <label htmlFor="email">
        Email:
        <input
          id="email"
          name="email"
          type="email"
          onChange={ handleChange }
          value={ value }
        />
        { !value.length ? ' -email inválido- ' : ' -ok- '}
      </label>
    
    )
  }
}

export default Email;