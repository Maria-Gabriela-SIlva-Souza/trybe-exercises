import Piece from './Piece';
import Pawn from './Pawn';
import Root from './Root';
import {isInList} from './typesAndFunctionAux';

// 5. Por último, mas não menos importante, temos o tabuleiro, já com duas peças de exemplo:

export default class Board {
  pieces: Piece[] = [];

  constructor() {
      this.addPiece(new Pawn(['C', '2'], this));
      this.addPiece(new Root(['F', '1'], this));
  }

  private addPiece(piece: Piece) {
      if (isInList(piece.position, this.occupiedHouses))
          return;
      this.pieces.push(piece);
  }
  get occupiedHouses() {
      return this.pieces.map((piece) => piece.position);
  }

}