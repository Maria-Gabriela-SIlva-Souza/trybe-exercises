import { Component } from 'react'

class DadosEmprego extends Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <fieldset>
        <h3>Dados Emprego Anterior</h3>
        <div>
          <legend>Resumo do currículo:</legend>
          <textarea
            maxLength='1000'
            required
            name='resumo'
            onChange={handleChange}
            value={value.resumo}
          />
        </div>
        <div>
          <legend>Cargo:</legend>
          <textarea
            maxLength='40'
            required
            name='cargo'
            onChange={handleChange}
            value={value.cargo}
          />
        </div>
        <div>
          <legend>Descrição do cargo:</legend>
          <textarea
            maxLength='500'
            required
            name='descricao'
            onChange={handleChange}
            value={value.descricao}
          />
        </div>
      </fieldset>
    )
  }
}

export default DadosEmprego;