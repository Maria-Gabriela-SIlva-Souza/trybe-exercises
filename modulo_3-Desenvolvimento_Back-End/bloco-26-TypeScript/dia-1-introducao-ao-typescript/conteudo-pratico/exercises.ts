//  recebe um nome e o imprime na tela com o texto "Olá Nome"

export function greeter(name: string) {
  return `Olá ${name}!`;
}

// mostrar na tela o nome da pessoa e sua idade

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

// adição de todos os números que estão dentro de um array.

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

// calcular a área de um triângulo

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

//  calcular a área de um quadrado

export function square(side: number): number {
  return side ** 2;
}

// calcular a área de um retângulo

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function losango(D: number, d: number): number {
  return (D * d) / 2;
}