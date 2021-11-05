import './App.css';
import { Component } from 'react'
import DadosPessoais from './DadosPessoais';
import DadosEmprego from './DadosEmprego';

class Form extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			email: '',
			cpf: '',
			cidade: '',
			estado: '',
			residencia: '',
			resumo: '',
			cargo: '',
			descricao: ''
		}

		this.handleChange = this.handleChange.bind(this)

	}

	handleChange({ target }) {
		const { name } = target
		const value = target.type === 'checkbox' ? target.checket : target.value

		this.setState({
			[name]: value
		})
	}

	render() {
		return (
			<form>
				<DadosPessoais
					handleChange={this.handleChange}
					value={this.state}
				/>
				<DadosEmprego
					handleChange={this.handleChange}
					value={this.state}
				/>
			</form>
		)
	}
}

export default Form;
