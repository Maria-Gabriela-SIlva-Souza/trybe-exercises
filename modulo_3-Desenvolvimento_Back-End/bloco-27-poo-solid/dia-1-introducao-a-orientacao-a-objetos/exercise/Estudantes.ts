import Pessoa from "./Pessoa";

export default class Estudante extends Pessoa {

  private _matricula: string;
  private _notaProva: number[] = Array();
  private _notaTrabalho: number[] = Array();

  constructor(nome: string, dataNascimento: Date) {
    super(nome, dataNascimento);
    this._matricula = this.numeroMatricula();
  }

  public get matricula(): string {
    return this._matricula;
  }
  public set matricula(value: string) {
    this._matricula = value;
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

  somaNotas(): number {
    const notas = [...this._notaProva, ...this._notaTrabalho];
    const total = notas.reduce((soma, i) => soma + i);
    return total;
  }

  mediaNotas(): number {
    const notas = this.somaNotas()
    const qntNotas = this._notaProva.length + this._notaTrabalho.length;
    return notas / qntNotas;
  }

  numeroMatricula(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}

// 27.1
// const estdante1 = new Estudante('1a2a3a', 'Maria', [4, 5, 6, 7], [10, 10])
// const estdante2 = new Estudante('1a2a3a4a', 'João', [4, 7, 7, 7], [6, 6])

// console.log(estdante1)
// console.log(estdante2)

// console.log(`A soma das notas de ${estdante1.nome} é: ${estdante1.somaNotas()}`)
// console.log(`A média das notas de ${estdante1.nome} é: ${estdante1.mediaNotas()}`)
