export default class Pessoa {
  constructor(private _nome: string, private _dataNascimento: Date) {
    this._dataNascimento = _dataNascimento;
    this._nome = _nome;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this.validateName(value)
    this._nome = value;
  }

  public get dataNascimento(): Date {
    return this._dataNascimento;
  }
  public set dataNascimento(value: Date) {
    this.validateBirthDate(value);
    this._dataNascimento = value;
  }

  private validateName(value: string): void {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if (Pessoa.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
  }
}
