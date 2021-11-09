import { Component } from 'react'

const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']

class DadosPessoais extends Component {
  render() {
    const { value, handleChange } = this.props

    return (
      <fieldset>
        <h3>Dados Pessoais</h3>
        <div>
          Nome:
          <input
            type='name'
            name='name'
            maxLength="40"
            required
            onChange={handleChange}
            value={value.name}
          />
        </div>
        <br />
        <div>
          Email:
          <input
            type='email'
            name='email'
            maxLength="50"
            required
            onChange={handleChange}
            value={value.email}
          />
        </div>
        <br />
        <div>
          CPF:
          <input
            type='number'
            name='cpf'
            maxLength="11"
            required
            onChange={handleChange}
            value={value.cpf}
          />
        </div>
        <br />
        <div>
          Cidade:
          <input
            type='text'
            name='cidade'
            maxLength="28"
            required
            onChange={handleChange}
            value={value.cidade}
          />
        </div>
        <br />
        <div>
          Estado:
          <select name='estado'>
            <option>Selecione</option>
            {
              estados.map((estado, index) => (
                <option
                  key={index}
                  value={estado}
                  onChange={handleChange}
                >
                  {estado}
                </option>
              ))
            }
          </select>
        </div>
        <br />
        <div>
          <legend>Tipo de Residência:</legend>
          <label htmlFor="casa">
            <input
              type="radio"
              id="casa"
              name="residencia"
              onChange={handleChange}
            />
            Casa
          </label>
          <label htmlFor="ap">
            <input
              type="radio"
              id="ap"
              name="residencia"
              onChange={handleChange}
            />
            Apartamento
          </label>
        </div>
      </fieldset>
    )
  }
}

export default DadosPessoais;