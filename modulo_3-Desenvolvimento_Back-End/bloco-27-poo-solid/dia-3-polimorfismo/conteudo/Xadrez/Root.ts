import Piece from './Piece';
import {BoardHouse, isInList, boardColumns, boardRows} from './typesAndFunctionAux';

// 4. Já a torre pode se movimentar bem mais que isso, e precisa de uma lógica muito mais complexa para checar os movimentos disponíveis:

export default class Root extends Piece {
  type = "Torre";
  get availableMoves() {
      const column = this.position[0];
      const columnIndex = boardColumns.indexOf(column);

      const row = this.position[1];
      const rowIndex = boardRows.indexOf(row);

      let availableHouses: BoardHouse[] = [];

      // Adiciona todas as casas abaixo
      for (let i = rowIndex - 1; i >= 0; i--) {
          const house: BoardHouse = [boardColumns[columnIndex], boardRows[i]];
          if (isInList(house, this.board.occupiedHouses)) break;
          availableHouses.push(house);
      }

      // Adiciona todas as casas acima
      for (let i = rowIndex + 1; i < 8; i++) {
          const house: BoardHouse = [boardColumns[columnIndex], boardRows[i]];
          if (isInList(house, this.board.occupiedHouses)) break;
          if (isInList(house, availableHouses)) continue;
          availableHouses.push(house);
      }

      // Adiciona todas as casas na direita
      for (let i = columnIndex + 1; i < 8; i++) {
          const house: BoardHouse = [boardColumns[i], boardRows[rowIndex]];
          if (isInList(house, this.board.occupiedHouses)) break;
          if (isInList(house, availableHouses)) continue;
          availableHouses.push(house);
      }

      // Adiciona todas as casas na esquerda
      for (let i = columnIndex - 1; i >= 0; i--) {
          const house: BoardHouse = [boardColumns[i], boardRows[rowIndex]];
          if (isInList(house, this.board.occupiedHouses)) break;
          if (isInList(house, availableHouses)) continue;
          availableHouses.push(house);
      }

      return availableHouses;
  }
}

// 4.1 Há a checagem de todas as casas na esquerda e na direita, acima e abaixo, de forma a saber para quais a torre pode ir.
