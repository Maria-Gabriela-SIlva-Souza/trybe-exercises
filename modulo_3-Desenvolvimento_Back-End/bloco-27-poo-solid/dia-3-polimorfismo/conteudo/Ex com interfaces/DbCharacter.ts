// Utilize a estrutura a seguir nos exercícios dessa seção:
// Character define os atributos básicos de um personagem de um videogame de luta, com o nome do personagem (name) e de seu movimento especial (specialMove):
// DbCharacter estende os atributos da classe Character para incluir aqueles existentes no banco de dados.

export interface Character {
  name: string;
  specialMove: string;
}

export interface DbCharacter extends Character {
  id: number;
}

export const db: DbCharacter[] = [];