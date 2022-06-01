import uuid4 from 'uuid4';
import { Book, NewBook } from './book';
import { readBooks, saveBook, saveBooks } from './models';

export const createBook = async (data: NewBook): Promise<Book> => {
  const id = uuid4();
  const book: Book = { id, ...data };
  saveBook(book)
  return book;
}

export const getBook = async (id: string): Promise<Book | null> => {
  const books = await readBooks();
  const book = books.find((b) => b.id === id);
  return book || null;
}

export const getBooks = async (): Promise<Book[]> => {
  const books = await readBooks();
  return books;
}

export const updateBook = async (book: Book): Promise<Book | null> => {
  const book1 = await getBook(book.id);
  if(!book1) return null;

  const books = await readBooks();
  const newBooks = books.map((b) => (b.id === book.id ? book : b));
  saveBooks(newBooks);
  return book1;
}