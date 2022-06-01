class Estudante {

  private _matricula: string;
  private _nome: string;
  private _notaProva: number[] = Array();
  private _notaTrabalho: number[] = Array();

  constructor( _matricula: string, _nome: string, _notaProva: number[], _notaTrabalho: number[]) {
    this._matricula = _matricula;
    this._nome = _nome;
    this.notaProva = _notaProva;
    this.notaTrabalho = _notaTrabalho;
  }

  public get matricula(): string {
    return this._matricula;
  }
  public set matricula(value: string) {
    this._matricula = value;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  public get notaProva(): number[] {
    return this._notaProva;
  }
  public set notaProva(value: number[]) {
    if(value.length !== 4) {
      throw new Error('Precisa passar 4 notas de prova')
    }
    this._notaProva = value;
  }

  public get notaTrabalho(): number[] {
    return this._notaTrabalho;
  }
  public set notaTrabalho(value: number[]) {
    if(value.length !== 2) {
      throw new Error('Precisa passar 2 notas de trabalho')
    }
    this._notaTrabalho = value;
  }
}

const estdante1 = new Estudante('1a2a3a', 'Maria', [4, 5, 6, 7], [10, 10])
const estdante2 = new Estudante('1a2a3a4a', 'João', [4, 7, 7, 7], [6, 6])

console.log(estdante1)
console.log(estdante2)