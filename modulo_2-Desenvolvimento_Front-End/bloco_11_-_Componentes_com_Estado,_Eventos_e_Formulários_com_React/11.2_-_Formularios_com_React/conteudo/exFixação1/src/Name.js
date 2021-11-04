import React from 'react';


class Name extends React.Component {
  render() {
    const { value, handleChange } = this.props

    let error = undefined;
    if (value.length > 20) error = 'Texto grande demais'
    if (value.length < 2) {
      error = 'Texto pesqueno demais'
    } 

    return (
      <label>
        Nome:
        <input
          name='name'
          type='text'
          value={value}
          onChange={handleChange}
        />
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default Name