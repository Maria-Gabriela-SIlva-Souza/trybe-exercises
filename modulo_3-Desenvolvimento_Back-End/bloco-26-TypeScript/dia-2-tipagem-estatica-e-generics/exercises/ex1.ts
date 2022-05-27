// Exercício 1

import Cor from "./ex1-Cor";
import Direcao from "./ex1-Direcao";
import Porta from "./ex1-Porta";

class Carro {
  marca: string;
  cor: Cor;
  portas: number;

  constructor(marca: string, cor: Cor, portas: number) {
    this.marca = marca;
    this.portas = portas;
    this.cor = cor;
  }

  honk(): void {
    console.log("Buzina !!!");
  }

  openTheDoor(portas: Porta): void {
    console.log(`Abrindo a porta ${portas}.`);
  }

  closeTheDoor(portas: Porta): void {
    console.log(`Fechando a porta ${portas}.`);
  }

  turnOn(): void {
    console.log("Carro ligado.");
  }

  turnOff(): void {
    console.log("Carro desligado.");
  }

  speedUp(): void {
    console.log("Acelerando o carro.");
  }

  speedDown(): void {
    console.log("Reduzindo velocidade do carro");
  }

  stop(): void {
    console.log("Parando o carro.");
  }

  turn(direcao: Direcao): void {
    console.log(`Virando para ${direcao}.`);
  }
}

export default Carro;