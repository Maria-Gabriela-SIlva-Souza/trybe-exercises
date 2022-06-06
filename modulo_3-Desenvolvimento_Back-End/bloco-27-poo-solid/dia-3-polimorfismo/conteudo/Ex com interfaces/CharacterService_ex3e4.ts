// import LocalDbModel from './LocalDbModel_ex2'; 
import IModel from './IModel_ex1';
import { Character } from './DbCharacter';

export default class CharacterService {
  // constructor(readonly model: LocalDbModel) { }
  constructor(readonly model: IModel) { }

  async create(character: Character) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter });
  }

  async getAll() {
    const allCharacter = await this.model.getAll();
    return ({ status: 200, data: allCharacter });
  }

  /* Implementação dos outros métodos */
}