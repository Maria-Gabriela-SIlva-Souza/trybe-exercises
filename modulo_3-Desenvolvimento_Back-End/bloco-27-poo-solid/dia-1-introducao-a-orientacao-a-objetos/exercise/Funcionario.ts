import Pessoa from "./Pessoa";
import Disciplina from './Disciplina';
import Funcionario from "./IFuncionario";

export default class Professor extends Pessoa implements Funcionario {  
  
  private _disciplina: Disciplina;
  private _registro: string;
  private _salario: number;
  private _dataAdmissão: Date;

  constructor(nomeProfessor: string, dataDeNascimento: Date, salario: number, disciplina: Disciplina) {
    super(nomeProfessor, dataDeNascimento);

    this._disciplina = disciplina;
    this._salario = salario;
    this._registro = this.gerarRegistro()
    this._dataAdmissão = new Date();
  }

  public get disciplina(): Disciplina {
    return this._disciplina;
  }
  public set disciplina(value: Disciplina) {
    this._disciplina = value;
  }

  public get registro(): string {
    return this._registro;
  }
  public set registro(value: string) {
    this.validarRegistro(value);
    this._registro = value;
  }

  public get salario(): number {
    return this._salario;
  }
  public set salario(value: number) {
    this.validarSalario(value)
    this._salario = value;
  }

  public get dataAdmissão(): Date {
    return this._dataAdmissão;
  }
  public set dataAdmissão(value: Date) {
    this.validarAdmissao(value);
    this._dataAdmissão = value;
  }

  gerarRegistro(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRO${randomStr}`;
  }

  validarRegistro(value: string) {
    if(value.length < 16) {
      throw new Error('O registro deve conter no mínimo 16 caracteres')
    }
  }

  validarSalario(value: number) {
    if(value < 0) {
      throw new Error('O salário deve ser positivo')
    }
  }

  validarAdmissao (value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');
  }
}