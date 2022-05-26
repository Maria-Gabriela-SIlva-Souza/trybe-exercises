// Crie uma interface cujo objeto represente um Automóvel.

interface Automovel {
  cor: string;
  marca: string;
  ano: number;
  portas: number;
  engrenagens: number;
  ligar: () => void;
  desligar: () => void;
}


// Crie uma interface cujo objeto represente um Felino.

interface Felino {
  cor: string;
  raça: string;
  andar: () => void;
  caçar: () => void;
  comer: () => void;
  dormir: () => void;
}


// Crie uma interface cujo objeto represente uma Aeronave.

interface Aeronave {
  modelo: string;
  marca: string;
  ano: number;
  ligar: () => void;
  desligar: () => void;
}