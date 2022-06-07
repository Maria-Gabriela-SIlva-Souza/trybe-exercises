import {BoardHouse, isInList} from './typesAndFunctionAux';

// 2. Agora, vamos definir a estrutura (a classe) de uma peça de xadrez genérica:

export default abstract class Piece {
  protected _position: BoardHouse;
  abstract type: string;

  constructor(position: BoardHouse, protected board: Board) {
      this._position = position;
  };

  get position() { return this._position; }
  abstract get availableMoves(): BoardHouse[];

  move(newPosition: BoardHouse) {
      console.log(
          `MOVENDO ${this.type} DA CASA ${this._position} PARA A CASA ${newPosition}`
      );
      if (!isInList(newPosition, this.availableMoves)) return false;
      this._position = newPosition;
      return true;
  }
}

// Observe que a classe Piece (Peça) é uma classe abstrata. Além disso, repare que o método availableMoves (obter movimentos disponíveis) é um método abstrato, pois cada tipo de peça se movimenta de uma forma diferente. OBS: availableMoves é um getter, mas a sintaxe de método abstrato pode ser utilizada com métodos normais também!