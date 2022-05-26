class Cachorro {
  nome: string;
  raca: string;
  cor: string;
  idade: number;

  constructor(nome: string, raca: string, cor: string, idade: number) {
    this.nome = nome;
    this.raca = raca;
    this.cor = cor;
    this.idade = idade;
  }

  latido(): void {
    console.log("Au Au");
  }
}

class Casa {
  tipo: string;
  endereco: string;
  cor: string;
  numero: number;

  constructor(tipo: string, endereco: string, cor: string, numero: number) {
    this.tipo = tipo;
    this.endereco = endereco;
    this.cor = cor;
    this.numero = numero;
  }

  frase(): void {
    console.log(`Eu moro em um ${this.tipo} de cor ${this.cor}, no endereço ${this.endereco}, ${this.numero}`);
  }
}

class Voo {
  tipo: string;
  endPartida: string;
  endChegada: string;
  numero: number;

  constructor(tipo: string, endPartida: string, endChegada: string, numero: number) {
    this.tipo = tipo;
    this.endPartida = endPartida;
    this.endChegada = endChegada;
    this.numero = numero;
  }

  fraseVoo(): void {
    console.log(`Saindo o voo ${this.tipo} número ${this.numero} para ${this.endChegada}, em 10 minutos`);
  }
}