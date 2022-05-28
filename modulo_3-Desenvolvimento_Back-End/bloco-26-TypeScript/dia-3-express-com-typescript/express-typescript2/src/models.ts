import fs from 'fs/promises';
import Book from './book';

const {DATABASE_FILE = './src/books.json' } = process.env;

export const readBooks = async (): Promise<Book[]> => {
  const booksJSON = await fs.readFile(DATABASE_FILE, { encoding: 'utf-8' });
  const books = JSON.parse(booksJSON) as Book[];
  return books;
}

export const saveBooks = async (books: Book[]): Promise<void> => {
  const booksJSON = JSON.stringify(books);
  await fs.writeFile(DATABASE_FILE, booksJSON);
}

export const saveBook = async (book: Book): Promise<void> => {
  const books = await readBooks();
  books.push(book)
  saveBooks(books)
}