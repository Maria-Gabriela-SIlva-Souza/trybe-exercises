export interface NewBook {
  name: string;
  authors: string[];
  price: number
}

export interface Book extends NewBook {
  id: string;
}

export default Book;

// Expero que todo Book tenha as infos todas acima, por não ter o MySQL, preciamos declarar a existencia da string em separado