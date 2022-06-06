import Character from "./Character_ex1";

export default class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
    console.log(`Hi, I'm ${this._name}. I'm talk to you - (LongRangeCharacter)`);
  }

  specialMove(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
    console.log(`My movement is ${this._specialMoveName} - (LongRangeCharacter)`);
  }
}