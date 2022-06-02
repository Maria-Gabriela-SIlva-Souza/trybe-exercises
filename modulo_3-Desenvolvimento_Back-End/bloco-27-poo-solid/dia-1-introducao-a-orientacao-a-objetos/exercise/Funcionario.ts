interface Funcionario {
  registro: number;
  salario: number;
  dataAdmissão: Date;

  gerarRegistro(): string; 
}

export default class Disciplina {

  constructor(private _name: string) { }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this.validateName(this._name)
    this._name = value;
  }

  private validateName(value: string): void {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }
}