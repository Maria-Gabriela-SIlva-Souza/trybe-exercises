import React from 'react';


class Aprendizado extends React.Component {
  render() {
    const { value, handleChange } = this.props

    let error = undefined;
    if (value === '') error = 'Selecione uma opção'

    return (
      <label>
        Sobre React:
        <select
          name='aprendizado'
          value={value}
          onChange={handleChange}
        >
          <option value=''></option>
          <option value='aprendendo'>Aprendendo</option>
          <option value='entendi'>Entendi</option>
          <option value='perdida'>To perdida</option>
        </select>
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default Aprendizado