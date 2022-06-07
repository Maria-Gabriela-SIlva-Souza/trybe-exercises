import Piece from './Piece';
import {BoardHouse, boardRows, isInList} from './typesAndFunctionAux';

// 3. Agora vamos à implementação do Peão:

export default class Pawn extends Piece {
  type = 'Peão';
  get availableMoves() {
      const column = this.position[0];
      const row = this.position[1];
      const rowIndex = boardRows.indexOf(row);
      if (rowIndex === 7)
          return [];

      const nextHouse: BoardHouse = [column, boardRows[rowIndex + 1]];
      if (isInList(nextHouse, this.board.occupiedHouses))
          return [];

      return [nextHouse];
  }
}

// 3.1 A classe Pawn (Peão) implementa o método que é abstrato na classe Piece, availableMoves. É uma implementação bem simples, apenas checando se o peão já está na linha 8 ou se existe alguma outra peça em sua frente.